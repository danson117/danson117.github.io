/* Tiny OOXML .xlsx writer (no CDN). Zip store + sheet XML. Sync build so
   <a download> stays inside the click user-gesture (iframe-safe). */
(function (root) {
  "use strict";
  var CRC_TABLE = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      for (var k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      t[n] = c >>> 0;
    }
    return t;
  })();
  function crc32(u8) {
    var c = 0xffffffff;
    for (var i = 0; i < u8.length; i++) c = CRC_TABLE[(c ^ u8[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  }
  function u8(s) {
    return new TextEncoder().encode(s);
  }
  function concat(parts) {
    var n = 0, i, j, out, p;
    for (i = 0; i < parts.length; i++) n += parts[i].length;
    out = new Uint8Array(n);
    j = 0;
    for (i = 0; i < parts.length; i++) { p = parts[i]; out.set(p, j); j += p.length; }
    return out;
  }
  function u16le(n) {
    return new Uint8Array([n & 0xff, (n >>> 8) & 0xff]);
  }
  function u32le(n) {
    return new Uint8Array([n & 0xff, (n >>> 8) & 0xff, (n >>> 16) & 0xff, (n >>> 24) & 0xff]);
  }
  function xmlEsc(s) {
    return String(s == null ? "" : s)
      .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function colName(i) {
    var s = "";
    i += 1;
    while (i > 0) {
      var m = (i - 1) % 26;
      s = String.fromCharCode(65 + m) + s;
      i = (i - 1) / 26 | 0;
    }
    return s;
  }
  function sheetXml(rows) {
    var parts = [
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>',
      '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>'
    ];
    for (var r = 0; r < rows.length; r++) {
      var row = rows[r] || [];
      parts.push('<row r="' + (r + 1) + '">');
      for (var c = 0; c < row.length; c++) {
        var ref = colName(c) + (r + 1);
        var text = xmlEsc(row[c]);
        /* Excel 32767-char cell cap — keep accuracy for staff # / dates; trim only extreme module text. */
        if (text.length > 32767) text = text.slice(0, 32767);
        parts.push('<c r="' + ref + '" t="inlineStr"><is><t xml:space="preserve">' + text + "</t></is></c>");
      }
      parts.push("</row>");
    }
    parts.push("</sheetData></worksheet>");
    return parts.join("");
  }
  /* Store-only ZIP (method 0). No CompressionStream — that was async and could stall
     or drop the click user-gesture so <a download> is ignored with no error. */
  function zipStore(files) {
    var locals = [];
    var centrals = [];
    var offset = 0;
    for (var i = 0; i < files.length; i++) {
      var name = u8(files[i].name);
      var data = files[i].data;
      var method = 0;
      var payload = data;
      var crc = crc32(data);
      var local = concat([
        u32le(0x04034b50),
        u16le(20),
        u16le(0),
        u16le(method),
        u16le(0),
        u16le(0),
        u32le(crc),
        u32le(payload.length),
        u32le(data.length),
        u16le(name.length),
        u16le(0),
        name,
        payload
      ]);
      var central = concat([
        u32le(0x02014b50),
        u16le(20),
        u16le(20),
        u16le(0),
        u16le(method),
        u16le(0),
        u16le(0),
        u32le(crc),
        u32le(payload.length),
        u32le(data.length),
        u16le(name.length),
        u16le(0),
        u16le(0),
        u16le(0),
        u16le(0),
        u32le(0),
        u32le(offset),
        name
      ]);
      locals.push(local);
      centrals.push(central);
      offset += local.length;
    }
    var centralBlob = concat(centrals);
    var end = concat([
      u32le(0x06054b50),
      u16le(0),
      u16le(0),
      u16le(files.length),
      u16le(files.length),
      u32le(centralBlob.length),
      u32le(offset),
      u16le(0)
    ]);
    return concat(locals.concat([centralBlob, end]));
  }
  function buildSync(rows, sheetName) {
    sheetName = sheetName || "Sheet1";
    var safeName = String(sheetName).replace(/[\\/*?:\[\]]/g, "_").slice(0, 31) || "Sheet1";
    var contentTypes =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>' +
      '<Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>' +
      "</Types>";
    var rootRels =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>' +
      "</Relationships>";
    var workbook =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ' +
      'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' +
      "<sheets><sheet name=\"" + xmlEsc(safeName) + "\" sheetId=\"1\" r:id=\"rId1\"/></sheets></workbook>";
    var wbRels =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>' +
      "</Relationships>";
    var bytes = zipStore([
      { name: "[Content_Types].xml", data: u8(contentTypes) },
      { name: "_rels/.rels", data: u8(rootRels) },
      { name: "xl/workbook.xml", data: u8(workbook) },
      { name: "xl/_rels/workbook.xml.rels", data: u8(wbRels) },
      { name: "xl/worksheets/sheet1.xml", data: u8(sheetXml(rows)) }
    ]);
    return new Blob([bytes], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
  }
  function build(rows, sheetName) {
    return Promise.resolve(buildSync(rows, sheetName));
  }
  function download(blob, filename) {
    if (!blob) throw new Error("empty file");
    var a = document.createElement("a");
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = filename || "export.xlsx";
    a.rel = "noopener";
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 2500);
  }
  /* Ask the hub (top frame) to save — works if iframe download is restricted. */
  function downloadViaParent(blob, filename) {
    if (!blob || !window.parent || window.parent === window) return false;
    try {
      blob.arrayBuffer().then(function (buf) {
        window.parent.postMessage({
          type: "hx-download",
          filename: filename || "export.xlsx",
          mime: blob.type || "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          buffer: buf
        }, "*");
      });
      return true;
    } catch (_) {
      return false;
    }
  }
  root.HxXlsx = {
    build: build,
    buildSync: buildSync,
    download: download,
    downloadViaParent: downloadViaParent
  };
})(typeof window !== "undefined" ? window : globalThis);
