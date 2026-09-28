import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-hx-board-password, x-hx-sync-key, content-type",
  "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS",
};

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

function adminClient() {
  const url = Deno.env.get("SUPABASE_URL")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  return createClient(url, service, { auth: { persistSession: false } });
}

async function sha256Hex(text: string) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hashPassword(pw: string, salt: string) {
  return sha256Hex(String(salt || "") + "\n" + String(pw || ""));
}

function stripAuth(cfg: Record<string, unknown> | null) {
  const out = { ...(cfg || {}) } as Record<string, unknown>;
  const rawAuth = (cfg && cfg.auth && typeof cfg.auth === "object")
    ? cfg.auth as Record<string, any>
    : {};
  out.auth = {
    hasAdmin: !!(rawAuth.admin && rawAuth.admin.hash),
    hasEdit: !!(rawAuth.edit && rawAuth.edit.hash),
  };
  return out;
}

async function loadGate(admin: ReturnType<typeof adminClient>) {
  const { data, error } = await admin.rpc("hx_site_gate_get");
  if (error) throw new Error(error.message);
  return (data && typeof data === "object") ? data as Record<string, unknown> : {};
}

async function saveGate(admin: ReturnType<typeof adminClient>, cfg: unknown) {
  const { data, error } = await admin.rpc("hx_site_gate_put", { p: cfg });
  if (error) throw new Error(error.message);
  return data;
}

async function roleFromPassword(pw: string, cfg: Record<string, unknown>) {
  const auth = (cfg.auth && typeof cfg.auth === "object")
    ? cfg.auth as Record<string, any>
    : {};
  if (auth.admin && auth.admin.salt && auth.admin.hash) {
    const got = await hashPassword(pw, String(auth.admin.salt));
    if (got === String(auth.admin.hash)) return "admin";
  }
  if (auth.edit && auth.edit.salt && auth.edit.hash) {
    const got = await hashPassword(pw, String(auth.edit.salt));
    if (got === String(auth.edit.hash)) return "edit";
  }
  return null;
}

async function legacyOk(key: string, cfg: Record<string, unknown>) {
  const auth = (cfg.auth && typeof cfg.auth === "object")
    ? cfg.auth as Record<string, any>
    : {};
  const expected = String(auth.legacyKeySha256 || "");
  if (!key || !expected) return false;
  return (await sha256Hex(key)) === expected;
}

function randomSalt() {
  const b = new Uint8Array(16);
  crypto.getRandomValues(b);
  return [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function padStaff(v: unknown) {
  const d = String(v || "").replace(/\D/g, "");
  if (!d) return "";
  return d.length < 6 ? d.padStart(6, "0") : d.slice(-6);
}

/** Poll payload: status/manual + ingest meta only (no file blobs / log). */
function toLiteBoard(data: Record<string, any> | null) {
  const src = data && typeof data === "object" ? data : {};
  const ual = src.ual && typeof src.ual === "object" ? src.ual : null;
  const ct = Array.isArray(src.ctFiles) ? src.ctFiles : [];
  const omt = Array.isArray(src.omtFiles) ? src.omtFiles : [];
  return {
    _lite: true,
    v: src.v,
    updated: src.updated || "",
    status: src.status && typeof src.status === "object" ? src.status : {},
    manual: Array.isArray(src.manual) ? src.manual : [],
    ual: ual
      ? {
        uploadedAt: String(ual.uploadedAt || ""),
        textLen: String(ual.text || "").length,
      }
      : null,
    ctFiles: ct.map((f: any) => ({
      name: String(f && f.name || ""),
      kind: String(f && f.kind || ""),
      uploadedAt: String(f && f.uploadedAt || ""),
      rowCount: Array.isArray(f && f.rows) ? f.rows.length : (Number(f && f.rowCount) || 0),
    })),
    omtFiles: omt.map((f: any) => ({
      name: String(f && f.name || ""),
      uploadedAt: String(f && f.uploadedAt || ""),
      rowCount: Array.isArray(f && f.rows) ? f.rows.length : (Number(f && f.rowCount) || 0),
    })),
  };
}

/** Full ingest blobs only (UAL text + CT/OMT file rows). */
function toIngestBoard(data: Record<string, any> | null) {
  const src = data && typeof data === "object" ? data : {};
  return {
    _ingest: true,
    v: src.v,
    updated: src.updated || "",
    ual: src.ual ?? null,
    ctFiles: Array.isArray(src.ctFiles) ? src.ctFiles : [],
    omtFiles: Array.isArray(src.omtFiles) ? src.omtFiles : [],
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });

  const admin = adminClient();
  const url = new URL(req.url);
  const path = url.pathname;
  const pw = req.headers.get("x-hx-board-password") || "";
  const legacy = req.headers.get("x-hx-sync-key") || "";

  let cfg: Record<string, unknown> = {};
  try {
    cfg = await loadGate(admin);
  } catch (e) {
    return json(500, { error: String((e as Error).message || e) });
  }

  const roleFromPw = pw ? await roleFromPassword(pw, cfg) : null;
  const isLegacy = legacy ? await legacyOk(legacy, cfg) : false;
  const role = roleFromPw || (isLegacy ? "admin" : null);
  const canWrite = role === "edit" || role === "admin";
  const canAdmin = role === "admin";

  if ((path.endsWith("/gate") || path.endsWith("/gate/public")) && req.method === "GET") {
    return json(200, stripAuth(cfg));
  }

  if (path.endsWith("/gate/unlock") && req.method === "POST") {
    const body = await req.json().catch(() => ({}));
    const tryPw = String((body && (body as any).password) || pw || "");
    if (!tryPw) return json(400, { error: "password required" });
    const r = await roleFromPassword(tryPw, cfg);
    if (!r) return json(401, { error: "unauthorized", role: "view" });
    return json(200, { role: r, gate: stripAuth(cfg) });
  }

  if (path.endsWith("/gate/bootstrap") && req.method === "POST") {
    const auth = (cfg.auth && typeof cfg.auth === "object")
      ? cfg.auth as Record<string, any>
      : {};
    if (auth.admin && auth.admin.hash) return json(409, { error: "already set" });
    const body = await req.json().catch(() => ({}));
    const tryPw = String((body && (body as any).password) || "");
    if (tryPw.length < 4) return json(400, { error: "password too short" });
    const salt = randomSalt();
    const hash = await hashPassword(tryPw, salt);
    const next = {
      ...cfg,
      auth: {
        ...auth,
        admin: { salt, hash },
        edit: auth.edit && auth.edit.hash ? auth.edit : { salt, hash },
      },
    };
    try {
      await saveGate(admin, next);
    } catch (e) {
      return json(500, { error: String((e as Error).message || e) });
    }
    return json(200, { role: "admin", gate: stripAuth(next) });
  }

  if (path.endsWith("/gate") && req.method === "PUT") {
    if (!canAdmin) return json(401, { error: "unauthorized" });
    const body = await req.json().catch(() => ({})) as any;
    const auth = (cfg.auth && typeof cfg.auth === "object")
      ? { ...(cfg.auth as Record<string, any>) }
      : {};
    const next: Record<string, unknown> = {
      ...cfg,
      publicPages: Array.isArray(body.publicPages) ? body.publicPages : cfg.publicPages,
      editActions: Array.isArray(body.editActions) ? body.editActions : cfg.editActions,
      auth,
    };
    try {
      const saved = await saveGate(admin, next);
      return json(200, stripAuth((saved && typeof saved === "object") ? saved as any : next));
    } catch (e) {
      return json(500, { error: String((e as Error).message || e) });
    }
  }

  if (path.endsWith("/pin/check") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const staff = padStaff(body && body.staff);
    const pin = String((body && body.pin) || "").replace(/\D/g, "");
    const { data, error } = await admin.rpc("hx_brs_pin_verify", {
      p_staff: staff,
      p_pin: pin,
    });
    if (error) return json(500, { error: error.message });
    const ok = !!(data && (data as any).ok);
    const mustChange = !!(data && (data as any).mustChange);
    return json(200, { ok, mustChange: ok ? mustChange : false });
  }

  if (path.endsWith("/pin/status") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const staff = padStaff(body && body.staff);
    if (!staff) return json(400, { error: "staff required" });
    const { data, error } = await admin.rpc("hx_brs_pin_list_set");
    if (error) return json(500, { error: error.message });
    const setList = Array.isArray(data)
      ? data.map((x: unknown) => padStaff(x)).filter(Boolean)
      : [];
    return json(200, { set: setList.indexOf(staff) >= 0 });
  }

  if (path.endsWith("/pin/set") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const staff = padStaff(body && body.staff);
    const currentPin = String((body && body.currentPin) || "").replace(/\D/g, "");
    const newPin = String((body && body.newPin) || "").replace(/\D/g, "");
    const { data, error } = await admin.rpc("hx_brs_pin_set", {
      p_staff: staff,
      p_current: currentPin,
      p_new: newPin,
    });
    if (error) return json(500, { error: error.message });
    if (!data || !(data as any).ok) {
      const err = String((data && (data as any).error) || "failed");
      const status = err === "wrong PIN" ? 401 : 400;
      return json(status, { ok: false, error: err });
    }
    return json(200, { ok: true });
  }

  if (path.endsWith("/pin/admin-list") && req.method === "GET") {
    if (!canAdmin) return json(401, { error: "unauthorized" });
    const { data, error } = await admin.rpc("hx_brs_pin_list_set");
    if (error) return json(500, { error: error.message });
    const set = Array.isArray(data) ? data.map((x: unknown) => String(x || "")).filter(Boolean) : [];
    return json(200, { set });
  }

  if (path.endsWith("/pin/admin-reset") && req.method === "POST") {
    if (!canAdmin) return json(401, { error: "unauthorized" });
    const body = await req.json().catch(() => ({})) as any;
    const staff = padStaff(body && body.staff);
    const { data, error } = await admin.rpc("hx_brs_pin_reset", { p_staff: staff });
    if (error) return json(500, { error: error.message });
    if (!data || !(data as any).ok) {
      return json(400, { ok: false, error: String((data && (data as any).error) || "failed") });
    }
    return json(200, { ok: true });
  }

  if (path.endsWith("/import-chunk") && req.method === "PUT") {
    if (!canWrite) return json(401, { error: "unauthorized" });
    const body = await req.json();
    const { data, error } = await admin.rpc("life_os_import_chunk", {
      p_i: Number(body.i),
      p_b: String(body.b || ""),
    });
    if (error) return json(500, { error: error.message });
    return json(200, data);
  }
  if (path.endsWith("/import-finalize") && req.method === "POST") {
    if (!canWrite) return json(401, { error: "unauthorized" });
    const { data, error } = await admin.rpc("life_os_import_finalize");
    if (error) return json(500, { error: error.message });
    return json(200, data);
  }

  if (req.method === "GET" && !path.includes("/gate") && !path.includes("/pin/")) {
    const { data, error } = await admin.rpc("hx_team_board_get");
    if (error) return json(500, { error: error.message });
    const full = (data && typeof data === "object")
      ? data as Record<string, any>
      : { status: {}, manual: [] };
    const mode = String(url.searchParams.get("mode") || "").toLowerCase();
    const lite = url.searchParams.get("lite") === "1" || mode === "lite" || mode === "poll";
    const ingestOnly = url.searchParams.get("ingest") === "1" || mode === "ingest";
    if (lite) return json(200, toLiteBoard(full));
    if (ingestOnly) return json(200, toIngestBoard(full));
    return json(200, full);
  }

  // Family / root pages: URL is enough to read and edit. HX board writes stay behind the password.
  const PUBLIC_SHARED_DOCS = new Set([
    "alpha-learn",
    "karson-learn",
    "travel-list",
    "weight-records",
    "math-mistakes",
    "zhongzuo4",
    "p56-essay",
    "efas2026-hsc",
  ]);
  if (path.endsWith("/shared") && req.method === "PUT") {
    const body = await req.json().catch(() => ({})) as any;
    const docId = String(body.docId || "").trim();
    if (!PUBLIC_SHARED_DOCS.has(docId)) return json(403, { error: "doc not public" });
    if (!body.doc || typeof body.doc !== "object" || Array.isArray(body.doc)) {
      return json(400, { error: "doc required" });
    }
    const remark = JSON.stringify(body.doc);
    if (remark.length > 1_500_000) return json(413, { error: "too large" });
    const { data: current, error: getErr } = await admin.rpc("hx_team_board_get");
    if (getErr) return json(500, { error: getErr.message });
    const full = (current && typeof current === "object")
      ? current as Record<string, any>
      : {};
    const key = "__hx_shared__/" + docId;
    const existing = full.status && full.status[key];
    const baseV = existing ? Math.max(0, parseInt(existing.v, 10) || 0) : 0;
    const updated = new Date().toISOString();
    const rec = {
      status: "Not Started",
      remark,
      done: "",
      v: baseV,
      baseV,
      updated,
    };
    const payload = {
      v: 1,
      updated,
      status: { [key]: rec },
      manual: [],
      _statusDeleted: [],
      _manualDeleted: [],
      log: Array.isArray(full.log) ? full.log : [],
    };
    const { data, error } = await admin.rpc("hx_team_board_put", { p: payload });
    if (error) return json(500, { error: error.message });
    if (data && typeof data === "object" && (data as any).conflict) {
      return json(409, data);
    }
    return json(200, data);
  }

  if (req.method === "PUT" && !path.includes("/gate") && !path.includes("/pin/") && !path.endsWith("/shared")) {
    if (!canWrite) return json(401, { error: "unauthorized" });
    const payload = await req.json();
    const { data, error } = await admin.rpc("hx_team_board_put", { p: payload });
    if (error) return json(500, { error: error.message });
    if (data && typeof data === "object" && (data as any).conflict) {
      return json(409, data);
    }
    return json(200, data);
  }

  return json(405, { error: "method" });
});
