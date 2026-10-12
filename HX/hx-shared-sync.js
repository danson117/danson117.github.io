/* Shared device sync via locked Edge team-board (hx_private).
 * Docs live in reserved status keys __hx_shared__/<docId> (remark JSON).
 * Does not wipe Training One View status/manual/ual/ct/omt.
 * Read: public GET.
 * HX docs: write needs x-hx-board-password.
 * Family / root docs in PUBLIC_DOCS: write needs no password (URL is enough).
 */
(function (global) {
  "use strict";

  var EDGE_URL =
    "https://kcoszufshvvpxikpzlue.supabase.co/functions/v1/team-board";
  var META_PREFIX = "__hx_shared__/";
  var PUBLIC_DOCS = {
    "alpha-learn": 1,
    "karson-learn": 1,
    "travel-list": 1,
    "weight-records": 1,
    "math-mistakes": 1,
    "zhongzuo4": 1,
    "p56-essay": 1,
    "efas2026-hsc": 1,
  };
  var GATE_PW_KEY = "hx:hub:gate-pw";
  var GATE_ROLE_KEY = "hx:hub:gate-role";
  var GATE_STAFF_KEY = "hx:hub:gate-staff";

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

  function getStaff() {
    var d = String(lsGet(GATE_STAFF_KEY) || "").replace(/\D/g, "");
    if (!d) return "";
    return d.length < 6 ? d.padStart(6, "0") : d.slice(-6);
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

  function setStaff(staff) {
    staff = String(staff || "").replace(/\D/g, "");
    if (!staff) {
      try {
        localStorage.removeItem(GATE_STAFF_KEY);
      } catch (e) {}
      return;
    }
    if (staff.length < 6) staff = staff.padStart(6, "0");
    else staff = staff.slice(-6);
    lsSet(GATE_STAFF_KEY, staff);
  }

  function authHeaders(extra) {
    var h = Object.assign({}, extra || {});
    var pw = getPassword();
    if (pw) h["x-hx-board-password"] = pw;
    var staff = getStaff();
    if (staff && staff !== "000000") h["x-hx-staff"] = staff;
    return h;
  }

  async function fetchBoard() {
    var res = await fetch(EDGE_URL, { cache: "no-store", headers: authHeaders() });
    if (!res.ok) throw new Error("shared-sync GET " + res.status);
    return res.json();
  }

  var seenDocToken = {};
  var liveFns = {};
  var liveTimer = 0;
  var liveBusy = false;

  async function fetchStamp() {
    var res = await fetch(EDGE_URL + "?stamp=1", { cache: "no-store", headers: authHeaders() });
    if (!res.ok) throw new Error("stamp " + res.status);
    var data = await res.json();
    if (!data || !data.stamp || typeof data.stamp !== "object" || Array.isArray(data.stamp)) {
      var err = new Error("no-stamp");
      err.code = "no-stamp";
      throw err;
    }
    return data.stamp;
  }

  function docTokenFromStamp(stamp, docId) {
    if (!stamp || typeof stamp !== "object") return "";
    var docs = stamp.docs && typeof stamp.docs === "object" ? stamp.docs : {};
    if (Object.prototype.hasOwnProperty.call(docs, docId)) return String(docs[docId] || "");
    if (docId === "briefing-read-sign") return String(stamp.brs || "");
    return "";
  }

  function armLiveTimer() {
    if (liveTimer || typeof window === "undefined") return;
    liveTimer = window.setInterval(runLiveFns, 5000);
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") runLiveFns();
    });
    window.addEventListener("online", runLiveFns);
    window.addEventListener("pageshow", runLiveFns);
  }

  async function runLiveFns() {
    if (typeof document !== "undefined" && document.visibilityState === "hidden") return;
    if (liveBusy) return;
    var ids = Object.keys(liveFns);
    if (!ids.length) return;
    liveBusy = true;
    try {
      var stamp;
      try {
        stamp = await fetchStamp();
      } catch (e) {
        return;
      }
      for (var i = 0; i < ids.length; i++) {
        var id = ids[i];
        var token = docTokenFromStamp(stamp, id);
        if (seenDocToken[id] != null && seenDocToken[id] === token) continue;
        try { await liveFns[id](); } catch (e2) {}
      }
    } finally {
      liveBusy = false;
    }
  }

  async function rememberDocStamp(docId) {
    try {
      var stamp = await fetchStamp();
      seenDocToken[docId] = docTokenFromStamp(stamp, docId);
    } catch (e) {}
  }

  function watch(docId, fn) {
    if (!docId || typeof fn !== "function") return;
    liveFns[String(docId)] = fn;
    armLiveTimer();
  }

  function readRec(rec) {
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

  function readDocFromBoard(board, docId) {
    if (!board || !board.status) return null;
    return readRec(board.status[metaKey(docId)]);
  }

  async function pullDoc(docId) {
    var res = await fetch(EDGE_URL + "?doc=" + encodeURIComponent(docId), {
      cache: "no-store",
      headers: authHeaders(),
    });
    if (!res.ok) throw new Error("shared-sync GET " + res.status);
    var data = await res.json();
    if (data && Object.prototype.hasOwnProperty.call(data, "rec") && !data.status) return readRec(data.rec);
    return readDocFromBoard(data, docId);
  }

  async function pullDocIfChanged(docId) {
    var stamp = await fetchStamp();
    var token = docTokenFromStamp(stamp, docId);
    if (seenDocToken[docId] != null && seenDocToken[docId] === token) {
      return { unchanged: true, doc: null, token: token };
    }
    var wrap = await pullDoc(docId);
    seenDocToken[docId] = token;
    if (wrap) wrap.token = token;
    return wrap;
  }

  function isPublicDoc(docId) {
    return !!PUBLIC_DOCS[String(docId || "").trim()];
  }

  async function pushDoc(docId, docObj) {
    var payloadDoc = Object.assign({}, docObj || {});
    if (!payloadDoc.updated) payloadDoc.updated = new Date().toISOString();
    if (!payloadDoc.v) payloadDoc.v = 1;
    // Compare server data time before upload. Failed fetch ≠ local wins.
    try {
      var remoteWrap = await pullDoc(docId);
      if (remoteWrap && remoteWrap.doc) {
        var localAt = parseDocAt(payloadDoc.updated);
        var remoteAt = Math.max(
          parseDocAt(remoteWrap.doc.updated),
          parseDocAt(remoteWrap.updated)
        );
        if (remoteAt > localAt) {
          var eOld = new Error("stale-local");
          eOld.code = "stale-local";
          eOld.payload = null;
          eOld.remote = remoteWrap;
          throw eOld;
        }
      }
    } catch (ePre) {
      if (ePre && ePre.code === "stale-local") throw ePre;
      var eFetch = new Error("offline");
      eFetch.code = "offline";
      eFetch.cause = ePre;
      throw eFetch;
    }
    if (isPublicDoc(docId)) {
      var pubRes = await fetch(EDGE_URL + "/shared", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ docId: String(docId || "").trim(), doc: payloadDoc }),
      });
      var pubData = await pubRes.json().catch(function () { return {}; });
      if (pubRes.status === 409 || (pubData && pubData.conflict)) {
        var e409p = new Error("conflict");
        e409p.code = "conflict";
        e409p.payload = pubData.payload || null;
        throw e409p;
      }
      // Old Edge (no /shared) returns 401/405. Fall back only if this browser already unlocked HX.
      if (pubRes.status !== 401 && pubRes.status !== 405) {
        if (!pubRes.ok) throw new Error("shared-sync PUT " + pubRes.status);
        await rememberDocStamp(docId);
        return readDocFromBoard(pubData.payload || (await fetchBoard()), docId);
      }
      if (!getPassword()) throw new Error("shared-sync PUT " + pubRes.status);
    }
    var pw = getPassword();
    if (!pw) {
      var err = new Error("need-password");
      err.code = "need-password";
      throw err;
    }
    var board = await fetchBoard();
    var existing = board.status && board.status[metaKey(docId)];
    var baseV = existing ? Math.max(0, parseInt(existing.v, 10) || 0) : 0;
    var remark = JSON.stringify(payloadDoc);
    if (remark.length > 1400000) {
      var eBig = new Error("too-large");
      eBig.code = "too-large";
      throw eBig;
    }
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
    await rememberDocStamp(docId);
    return readDocFromBoard(data.payload || (await fetchBoard()), docId);
  }

  function docHasContent(doc) {
    if (!doc || typeof doc !== "object") return false;
    if (doc.keys && typeof doc.keys === "object" && Object.keys(doc.keys).length)
      return true;
    if (Array.isArray(doc.rows) && doc.rows.length) return true;
    if (doc.flashcardDb && Array.isArray(doc.flashcardDb.records) && doc.flashcardDb.records.length)
      return true;
    if (doc.weeks && typeof doc.weeks === "object" && Object.keys(doc.weeks).length)
      return true;
    if (Array.isArray(doc.history) && doc.history.length) return true;
    if (doc.pack && typeof doc.pack === "object" && Array.isArray(doc.pack.r) && doc.pack.r.length)
      return true;
    if (doc.view && Array.isArray(doc.view.rows) && doc.view.rows.length) return true;
    if (doc.payload != null) return true;
    return false;
  }

  function parseDocAt(iso) {
    var t = Date.parse(String(iso || "").trim());
    return Number.isFinite(t) ? t : 0;
  }

  /**
   * Compare data time (doc.updated) before upload.
   * Local newer → may upload. Local older → apply server. Equal → no clobber upload.
   * Failed fetch ≠ local wins. Empty second device must not wipe server.
   */
  async function syncDoc(docId, opts) {
    opts = opts || {};
    var getLocal = opts.getLocal;
    var applyRemote = opts.applyRemote;
    var localEmpty = opts.localEmpty;
    var onStatus = opts.onStatus || function () {};

    onStatus("syncing");
    var local = await Promise.resolve(getLocal());
    var localHasEarly = !localEmpty(local);
    var localAtEarly = parseDocAt(local && local.updated);
    var token = null;
    try {
      var stamp = await fetchStamp();
      token = docTokenFromStamp(stamp, docId);
      var tokenAt = parseDocAt(token);
      if (seenDocToken[docId] != null && seenDocToken[docId] === token && (opts.poll || !(localHasEarly && localAtEarly > tokenAt))) {
        onStatus("unchanged");
        return { ok: true, reason: "unchanged" };
      }
    } catch (eStamp) {
      if (!(eStamp && eStamp.code === "no-stamp")) {
        onStatus("offline");
        return { ok: false, reason: "offline", error: eStamp };
      }
    }
    var remoteWrap = null;
    try {
      remoteWrap = await pullDoc(docId);
      if (token != null) seenDocToken[docId] = token;
    } catch (e) {
      onStatus("offline");
      return { ok: false, reason: "offline", error: e };
    }
    var remote = remoteWrap && remoteWrap.doc;
    if (opts.poll) {
      if (docHasContent(remote)) {
        await Promise.resolve(applyRemote(remote));
        onStatus("synced");
        return { ok: true, reason: "pulled", remote: remote, v: remoteWrap.v };
      }
      onStatus("empty");
      return { ok: true, reason: "empty" };
    }
    var localHas = !localEmpty(local);
    var remoteHas = docHasContent(remote);
    var localAt = parseDocAt(local && local.updated);
    var remoteAt = Math.max(
      parseDocAt(remote && remote.updated),
      parseDocAt(remoteWrap && remoteWrap.updated)
    );

    if (!remoteHas && localHas) {
      if (!isPublicDoc(docId) && !getPassword()) {
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

    if (remoteHas && localHas) {
      if (localAt > remoteAt) {
        if (!isPublicDoc(docId) && !getPassword()) {
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
      if (remoteAt > localAt) {
        await Promise.resolve(applyRemote(remote));
        onStatus("synced");
        return { ok: true, reason: "pulled", remote: remote, v: remoteWrap.v };
      }
      // Equal timestamps: do not clobber either way.
      onStatus("synced");
      return { ok: true, reason: "equal", remote: remote, v: remoteWrap.v };
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

  async function pinStatus(staff) {
    var res = await fetch(EDGE_URL + "/pin/status", {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ staff: padStaffPin(staff) }),
    });
    var data = await res.json().catch(function () { return {}; });
    if (!res.ok) throw new Error((data && data.error) || ("pin-status " + res.status));
    return { set: !!(data && data.set) };
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

  function mountFamilyUsage() {
    if (typeof document === "undefined" || typeof location === "undefined") return;
    var path = String(location.pathname || "").replace(/\\/g, "/");
    if (/\/HX\//i.test(path)) return;
    if (document.getElementById("sb-plan") || document.getElementById("fam-sb-usage")) return;
    var bar = document.createElement("a");
    bar.id = "fam-sb-usage";
    bar.target = "_blank";
    bar.rel = "noopener";
    bar.href = "https://supabase.com/dashboard/org/buqbydyobfihnnfpxirb/usage";
    bar.style.cssText = "position:fixed;left:8px;bottom:8px;z-index:9998;font:11px/1.35 sans-serif;color:#243044;background:#fff;border:1px solid #c5d0da;border-radius:8px;padding:4px 8px;text-decoration:none;max-width:72vw;box-shadow:0 1px 4px rgba(0,0,0,.08);";
    bar.textContent = "Supabase …";
    function pct(used, limit) {
      if (used == null || !limit) return "—";
      var p = (Number(used) / Number(limit)) * 100;
      if (!isFinite(p)) return "—";
      return (p < 10 ? p.toFixed(1) : String(Math.round(p))) + "%";
    }
    function paint(data) {
      var limits = (data && data.limits) || {};
      var plan = data && data.plan ? String(data.plan) : "—";
      var eg = data && data.egressBytes != null ? pct(data.egressBytes, limits.egressBytes) : "—";
      bar.textContent = "Plan " + plan +
        " · DB " + pct(data && data.databaseBytes, limits.databaseBytes) +
        " · Files " + pct(data && data.fileBytes, limits.fileBytes) +
        " · Egress " + eg;
      if (data && data.usagePage) bar.href = String(data.usagePage);
    }
    function load() {
      fetch(EDGE_URL + "?usage=1", { cache: "no-store" }).then(function (res) {
        if (!res.ok) return null;
        return res.json();
      }).then(function (data) {
        if (data) paint(data);
      }).catch(function () {});
    }
    function attach() {
      if (!document.body || document.getElementById("fam-sb-usage")) return;
      document.body.appendChild(bar);
      load();
      window.setInterval(load, 15 * 60 * 1000);
    }
    if (document.body) attach();
    else document.addEventListener("DOMContentLoaded", attach);
  }

  global.HxSharedSync = {
    EDGE_URL: EDGE_URL,
    META_PREFIX: META_PREFIX,
    isMetaKey: isMetaKey,
    metaKey: metaKey,
    getPassword: getPassword,
    setPassword: setPassword,
    setStaff: setStaff,
    getStaff: getStaff,
    promptPassword: promptPassword,
    fetchBoard: fetchBoard,
    fetchStamp: fetchStamp,
    pullDoc: pullDoc,
    pullDocIfChanged: pullDocIfChanged,
    watch: watch,
    pushDoc: pushDoc,
    syncDoc: syncDoc,
    docHasContent: docHasContent,
    schedule: schedule,
    padStaffPin: padStaffPin,
    pinStatus: pinStatus,
    pinCheck: pinCheck,
    pinSet: pinSet,
    pinAdminList: pinAdminList,
    pinAdminReset: pinAdminReset,
  };
  mountFamilyUsage();
})(typeof window !== "undefined" ? window : globalThis);
