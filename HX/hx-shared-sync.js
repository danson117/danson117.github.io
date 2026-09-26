/* Shared device sync via locked Edge team-board (hx_private).
 * Docs live in reserved status keys __hx_shared__/<docId> (remark JSON).
 * Does not wipe Training One View status/manual/ual/ct/omt.
 * Read: public GET. Write: x-hx-board-password (HX Unlock / same-origin gate-pw).
 */
(function (global) {
  "use strict";

  var EDGE_URL =
    "https://kcoszufshvvpxikpzlue.supabase.co/functions/v1/team-board";
  var META_PREFIX = "__hx_shared__/";
  var GATE_PW_KEY = "hx:hub:gate-pw";
  var GATE_ROLE_KEY = "hx:hub:gate-role";

  function metaKey(docId) {
    return META_PREFIX + String(docId || "").trim();
  }

  function isMetaKey(k) {
    return String(k || "").indexOf(META_PREFIX) === 0;
  }

  function lsGet(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  }

  function getPassword() {
    return String(lsGet(GATE_PW_KEY) || "").trim();
  }

  function setPassword(pw) {
    pw = String(pw || "").trim();
    if (!pw) {
      try {
        localStorage.removeItem(GATE_PW_KEY);
      } catch (e) {}
      return;
    }
    lsSet(GATE_PW_KEY, pw);
  }

  function authHeaders(extra) {
    var h = Object.assign({}, extra || {});
    var pw = getPassword();
    if (pw) h["x-hx-board-password"] = pw;
    return h;
  }

  async function fetchBoard() {
    var res = await fetch(EDGE_URL, { cache: "no-store", headers: authHeaders() });
    if (!res.ok) throw new Error("shared-sync GET " + res.status);
    return res.json();
  }

  function readDocFromBoard(board, docId) {
    if (!board || !board.status) return null;
    var rec = board.status[metaKey(docId)];
    if (!rec || rec.remark == null || rec.remark === "") return null;
    try {
      var parsed = JSON.parse(String(rec.remark));
      if (!parsed || typeof parsed !== "object") return null;
      return {
        doc: parsed,
        v: Math.max(0, parseInt(rec.v, 10) || 0),
        updated: String(parsed.updated || rec.updated || ""),
      };
    } catch (e) {
      return null;
    }
  }

  async function pullDoc(docId) {
    var board = await fetchBoard();
    return readDocFromBoard(board, docId);
  }

  async function pushDoc(docId, docObj) {
    var pw = getPassword();
    if (!pw) {
      var err = new Error("need-password");
      err.code = "need-password";
      throw err;
    }
    var board = await fetchBoard();
    var existing = board.status && board.status[metaKey(docId)];
    var baseV = existing ? Math.max(0, parseInt(existing.v, 10) || 0) : 0;
    var payloadDoc = Object.assign({}, docObj || {});
    if (!payloadDoc.updated) payloadDoc.updated = new Date().toISOString();
    if (!payloadDoc.v) payloadDoc.v = 1;
    var remark = JSON.stringify(payloadDoc);
    var body = {
      v: 1,
      status: {},
      manual: [],
      _statusDeleted: [],
      _manualDeleted: [],
      log: [],
    };
    body.status[metaKey(docId)] = {
      status: "Not Started",
      remark: remark,
      done: "",
      v: baseV,
      baseV: baseV,
      updated: payloadDoc.updated,
    };
    var res = await fetch(EDGE_URL, {
      method: "PUT",
      headers: authHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify(body),
    });
    var data = await res.json().catch(function () {
      return {};
    });
    if (res.status === 401 || res.status === 403) {
      var e401 = new Error("unauthorized");
      e401.code = "unauthorized";
      throw e401;
    }
    if (res.status === 409 || (data && data.conflict)) {
      var e409 = new Error("conflict");
      e409.code = "conflict";
      e409.payload = data.payload || null;
      throw e409;
    }
    if (!res.ok) throw new Error("shared-sync PUT " + res.status);
    return readDocFromBoard(data.payload || (await fetchBoard()), docId);
  }

  function docHasContent(doc) {
    if (!doc || typeof doc !== "object") return false;
    if (doc.keys && typeof doc.keys === "object" && Object.keys(doc.keys).length)
      return true;
    if (Array.isArray(doc.rows) && doc.rows.length) return true;
    if (doc.flashcardDb && Array.isArray(doc.flashcardDb.records) && doc.flashcardDb.records.length)
      return true;
    if (doc.payload != null) return true;
    return false;
  }

  /**
   * First load: if server empty and local has data → upload once.
   * Else if server has data → apply server (server wins thereafter).
   * Empty second device must not wipe server.
   */
  async function syncDoc(docId, opts) {
    opts = opts || {};
    var getLocal = opts.getLocal;
    var applyRemote = opts.applyRemote;
    var localEmpty = opts.localEmpty;
    var onStatus = opts.onStatus || function () {};

    onStatus("syncing");
    var local = await Promise.resolve(getLocal());
    var remoteWrap = null;
    try {
      remoteWrap = await pullDoc(docId);
    } catch (e) {
      onStatus("offline");
      return { ok: false, reason: "offline", error: e };
    }
    var remote = remoteWrap && remoteWrap.doc;
    var localHas = !localEmpty(local);
    var remoteHas = docHasContent(remote);

    if (!remoteHas && localHas) {
      if (!getPassword()) {
        onStatus("need-password");
        return { ok: false, reason: "need-password", local: local };
      }
      try {
        await pushDoc(docId, local);
        onStatus("uploaded");
        return { ok: true, reason: "uploaded" };
      } catch (e) {
        onStatus(e.code || "error");
        return { ok: false, reason: e.code || "error", error: e };
      }
    }

    if (remoteHas) {
      await Promise.resolve(applyRemote(remote));
      onStatus("synced");
      return { ok: true, reason: "pulled", remote: remote, v: remoteWrap.v };
    }

    onStatus("empty");
    return { ok: true, reason: "empty" };
  }

  function schedule(fn, ms) {
    var t = null;
    return function () {
      if (t) clearTimeout(t);
      t = setTimeout(function () {
        t = null;
        fn();
      }, ms || 1200);
    };
  }

  async function promptPassword(message) {
    var pw = global.prompt(
      message ||
        "Enter the HX Unlock password once so this device can sync shared progress to Supabase.",
      ""
    );
    if (pw == null) return false;
    pw = String(pw).trim();
    if (!pw) return false;
    setPassword(pw);
    lsSet(GATE_ROLE_KEY, lsGet(GATE_ROLE_KEY) || "edit");
    return true;
  }

  function padStaffPin(v) {
    var d = String(v || "").replace(/\D/g, "");
    if (!d) return "";
    return d.length < 6 ? d.padStart(6, "0") : d.slice(-6);
  }

  async function pinCheck(staff, pin) {
    var res = await fetch(EDGE_URL + "/pin/check", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ staff: padStaffPin(staff), pin: String(pin || "").replace(/\D/g, "") }),
    });
    var data = await res.json().catch(function () { return {}; });
    if (!res.ok) throw new Error((data && data.error) || ("pin-check " + res.status));
    return { ok: !!(data && data.ok), mustChange: !!(data && data.mustChange) };
  }

  async function pinSet(staff, currentPin, newPin) {
    var res = await fetch(EDGE_URL + "/pin/set", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        staff: padStaffPin(staff),
        currentPin: String(currentPin || "").replace(/\D/g, ""),
        newPin: String(newPin || "").replace(/\D/g, ""),
      }),
    });
    var data = await res.json().catch(function () { return {}; });
    if (!res.ok || !(data && data.ok)) {
      var err = new Error((data && data.error) || "pin-set failed");
      err.code = (data && data.error) || "failed";
      throw err;
    }
    return { ok: true };
  }

  async function pinAdminList() {
    var res = await fetch(EDGE_URL + "/pin/admin-list", {
      cache: "no-store",
      headers: authHeaders(),
    });
    var data = await res.json().catch(function () { return {}; });
    if (res.status === 401 || res.status === 403) {
      var e401 = new Error("unauthorized");
      e401.code = "unauthorized";
      throw e401;
    }
    if (!res.ok) throw new Error((data && data.error) || ("pin-admin-list " + res.status));
    return { set: Array.isArray(data && data.set) ? data.set.map(String) : [] };
  }

  async function pinAdminReset(staff) {
    var res = await fetch(EDGE_URL + "/pin/admin-reset", {
      method: "POST",
      cache: "no-store",
      headers: authHeaders({ "Content-Type": "application/json" }),
      body: JSON.stringify({ staff: padStaffPin(staff) }),
    });
    var data = await res.json().catch(function () { return {}; });
    if (res.status === 401 || res.status === 403) {
      var e401 = new Error("unauthorized");
      e401.code = "unauthorized";
      throw e401;
    }
    if (!res.ok || !(data && data.ok)) {
      var err = new Error((data && data.error) || "pin-reset failed");
      err.code = (data && data.error) || "failed";
      throw err;
    }
    return { ok: true };
  }

  global.HxSharedSync = {
    EDGE_URL: EDGE_URL,
    META_PREFIX: META_PREFIX,
    isMetaKey: isMetaKey,
    metaKey: metaKey,
    getPassword: getPassword,
    setPassword: setPassword,
    promptPassword: promptPassword,
    fetchBoard: fetchBoard,
    pullDoc: pullDoc,
    pushDoc: pushDoc,
    syncDoc: syncDoc,
    docHasContent: docHasContent,
    schedule: schedule,
    padStaffPin: padStaffPin,
    pinCheck: pinCheck,
    pinSet: pinSet,
    pinAdminList: pinAdminList,
    pinAdminReset: pinAdminReset,
  };
})(typeof window !== "undefined" ? window : globalThis);
