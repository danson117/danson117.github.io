import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-hx-board-password, x-hx-sync-key, x-hx-staff, content-type",
  "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS",
};

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

function adminClient() {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
}

async function sha256Hex(text: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function hashPassword(pw: string, salt: string) {
  return sha256Hex(String(salt || "") + "\n" + String(pw || ""));
}

function padStaff(v: unknown) {
  const d = String(v || "").replace(/\D/g, "");
  if (!d) return "";
  return d.length < 6 ? d.padStart(6, "0") : d.slice(-6);
}

function randomSalt() {
  const b = new Uint8Array(16);
  crypto.getRandomValues(b);
  return [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function normalizeAccountRole(r: unknown) {
  const s = String(r || "").toLowerCase();
  if (s === "me" || s === "admin" || s === "dm" || s === "public") return s;
  if (s === "staff") return "public"; // migrate old Staff → Public
  if (s === "dm/dic" || s === "dic") return "dm";
  return "public";
}

function normalizeRolePages(raw: unknown) {
  const src = raw && typeof raw === "object" ? raw as Record<string, unknown> : {};
  const publicPages = Array.isArray(src.public)
    ? src.public.map(String)
    : (Array.isArray(src.staff) ? src.staff.map(String) : []);
  return {
    admin: Array.isArray(src.admin) ? src.admin.map(String) : [],
    dm: Array.isArray(src.dm) ? src.dm.map(String) : [],
    public: publicPages,
  };
}

function allActions() {
  return [
    "team-board-status",
    "team-board-manual",
    "team-board-ingest",
    "brs-admin",
    "brs-pin-reset",
    "grant-access",
  ];
}

function actionsForRole(role: string, listed: unknown) {
  if (role === "me") return allActions();
  if (Array.isArray(listed) && listed.length) {
    return listed.map(String).filter((id) => allActions().indexOf(id) >= 0);
  }
  if (role === "admin") {
    return ["team-board-status", "team-board-manual", "team-board-ingest", "brs-admin", "brs-pin-reset"];
  }
  if (role === "dm") return ["team-board-status", "brs-admin"];
  return [];
}

function listAccounts(cfg: Record<string, unknown>) {
  return Array.isArray((cfg as any).accounts) ? ((cfg as any).accounts as any[]) : [];
}

function findAccount(cfg: Record<string, unknown>, staff: string) {
  const s = padStaff(staff);
  if (!s) return null;
  return listAccounts(cfg).find((a) => padStaff(a && a.staff) === s) || null;
}

function stripAuth(cfg: Record<string, unknown> | null) {
  const out = { ...(cfg || {}) } as Record<string, unknown>;
  const rawAuth = (cfg && cfg.auth && typeof cfg.auth === "object") ? cfg.auth as Record<string, any> : {};
  out.auth = {
    hasAdmin: !!(rawAuth.admin && rawAuth.admin.hash),
    hasEdit: !!(rawAuth.edit && rawAuth.edit.hash),
  };
  const accounts = listAccounts(cfg || {});
  out.accounts = accounts.map((a) => ({
    staff: padStaff(a && a.staff),
    role: normalizeAccountRole(a && a.role),
    pages: Array.isArray(a && a.pages) ? a.pages.map(String) : [],
    actions: Array.isArray(a && a.actions) ? a.actions.map(String) : [],
    mustChange: !!(a && a.mustChange),
    hasPassword: !!(a && a.hash),
    customPages: !!(a && a.customPages),
  })).filter((a) => a.staff);
  out.hasMe = accounts.some((a) => normalizeAccountRole(a && a.role) === "me" && a && a.hash);
  if (cfg && (cfg as any).rolePages && typeof (cfg as any).rolePages === "object") {
    out.rolePages = normalizeRolePages((cfg as any).rolePages);
  }
  if (Array.isArray((cfg as any)?.pageOrder)) {
    out.pageOrder = ((cfg as any).pageOrder as unknown[]).map(String);
  }
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
  const auth = (cfg.auth && typeof cfg.auth === "object") ? cfg.auth as Record<string, any> : {};
  if (auth.admin && auth.admin.salt && auth.admin.hash) {
    if ((await hashPassword(pw, String(auth.admin.salt))) === String(auth.admin.hash)) return "admin";
  }
  if (auth.edit && auth.edit.salt && auth.edit.hash) {
    if ((await hashPassword(pw, String(auth.edit.salt))) === String(auth.edit.hash)) return "edit";
  }
  return null;
}

async function verifyAccountPassword(account: any, pw: string) {
  if (!account || !pw) return false;
  if (account.salt && account.hash) {
    return (await hashPassword(pw, String(account.salt))) === String(account.hash);
  }
  const staff = padStaff(account.staff);
  return /^\d{6}$/.test(pw) && pw === staff;
}

async function resolveSession(cfg: Record<string, unknown>, staffRaw: string, pw: string, legacyKey: string) {
  const staff = padStaff(staffRaw);
  if (staff && pw) {
    const acc = findAccount(cfg, staff);
    if (acc && await verifyAccountPassword(acc, pw)) {
      const role = normalizeAccountRole(acc.role);
      return {
        kind: "account" as const,
        staff,
        role,
        pages: Array.isArray(acc.pages) ? acc.pages.map(String) : [],
        actions: actionsForRole(role, acc.actions),
        mustChange: !!acc.mustChange || !(acc.hash) || pw === staff,
      };
    }
    if (!listAccounts(cfg).some((a) => normalizeAccountRole(a && a.role) === "me" && a && a.hash)) {
      if ((await roleFromPassword(pw, cfg)) === "admin") {
        return {
          kind: "bootstrap-me" as const,
          staff,
          role: "me",
          pages: [] as string[],
          actions: allActions(),
          mustChange: true,
        };
      }
    }
  }
  if (pw && !staff) {
    const r = await roleFromPassword(pw, cfg);
    if (r) {
      return {
        kind: "legacy" as const,
        staff: "",
        role: r === "admin" ? "admin" : "edit",
        pages: [] as string[],
        actions: r === "admin" ? allActions() : [],
        mustChange: false,
      };
    }
  }
  if (legacyKey) {
    const auth = (cfg.auth && typeof cfg.auth === "object") ? cfg.auth as Record<string, any> : {};
    const expected = String(auth.legacyKeySha256 || "");
    if (expected && (await sha256Hex(legacyKey)) === expected) {
      return {
        kind: "legacy" as const,
        staff: "",
        role: "admin",
        pages: [] as string[],
        actions: allActions(),
        mustChange: false,
      };
    }
  }
  return null;
}

function sessionCanWrite(session: any) {
  if (!session || session.mustChange) return false;
  if (session.role === "me" || session.role === "admin" || session.role === "edit") return true;
  return (session.actions || []).some((a: string) =>
    a === "team-board-status" || a === "team-board-manual" || a === "team-board-ingest" ||
    a === "brs-admin" || a === "brs-pin-reset" || a === "grant-access"
  );
}

function sessionCanAdmin(session: any) {
  if (!session || session.mustChange) return false;
  if (session.role === "me") return true;
  if (session.role === "admin" && session.kind === "legacy") return true;
  return (session.actions || []).indexOf("grant-access") >= 0;
}

function sessionHasAction(session: any, action: string) {
  if (!session || session.mustChange) return false;
  if (session.role === "me") return true;
  if (session.role === "admin" && session.kind === "legacy") return true;
  return (session.actions || []).indexOf(action) >= 0;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const admin = adminClient();
  const url = new URL(req.url);
  const path = url.pathname;
  const pw = req.headers.get("x-hx-board-password") || "";
  const legacy = req.headers.get("x-hx-sync-key") || "";
  const staffHdr = padStaff(req.headers.get("x-hx-staff") || "");
  let cfg: Record<string, unknown> = {};
  try {
    cfg = await loadGate(admin);
  } catch (e) {
    return json(500, { error: String((e as Error).message || e) });
  }
  const session = await resolveSession(cfg, staffHdr, pw, legacy);
  const canWrite = sessionCanWrite(session);
  const canAdmin = sessionCanAdmin(session);

  if ((path.endsWith("/gate") || path.endsWith("/gate/public")) && req.method === "GET") {
    return json(200, stripAuth(cfg));
  }

  if (path.endsWith("/gate/login") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const tryStaff = padStaff(body && body.staff);
    const tryPw = String((body && body.password) || "");
    if (!tryStaff) return json(400, { error: "staff required", role: "view" });
    if (!tryPw) return json(400, { error: "password required", role: "view" });
    const s = await resolveSession(cfg, tryStaff, tryPw, "");
    if (!s || (s.kind === "legacy" && !s.staff)) {
      return json(401, { error: "unauthorized", role: "view", hint: "If you forgot your password, ask Owner to reset it." });
    }
    // Public (old Staff) does not use hub login — open the site as a visitor.
    if (s.role === "public") {
      return json(403, {
        error: "Public users do not log in. Open the site without signing in.",
        role: "view",
      });
    }
    let loginPages = s.pages || [];
    const acc = findAccount(cfg, s.staff);
    if (s.role !== "me" && !(acc && (acc as any).customPages)) {
      const rp = normalizeRolePages((cfg as any).rolePages);
      if (Array.isArray((rp as any)[s.role])) loginPages = (rp as any)[s.role].map(String);
    }
    return json(200, {
      role: s.role, staff: s.staff, pages: loginPages, actions: s.actions,
      mustChange: s.mustChange, kind: s.kind, gate: stripAuth(cfg),
    });
  }

  if (path.endsWith("/gate/set-password") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const tryStaff = padStaff(body && body.staff);
    const currentPw = String((body && body.currentPassword) || "");
    const newPw = String((body && body.newPassword) || "").replace(/\D/g, "");
    if (!tryStaff) return json(400, { error: "staff required" });
    if (!/^\d{6}$/.test(newPw)) return json(400, { error: "password must be 6 digits" });
    if (newPw === tryStaff) return json(400, { error: "password must differ from staff #" });
    const s = await resolveSession(cfg, tryStaff, currentPw, "");
    if (!s || s.staff !== tryStaff) {
      return json(401, { error: "unauthorized", hint: "If you forgot your password, ask Owner to reset it." });
    }
    const salt = randomSalt();
    const hash = await hashPassword(newPw, salt);
    const accounts = listAccounts(cfg).slice();
    const idx = accounts.findIndex((a) => padStaff(a && a.staff) === tryStaff);
    const role = s.role === "me" || s.kind === "bootstrap-me" ? "me" : normalizeAccountRole(s.role);
    const pages = Array.isArray(body.pages) ? body.pages.map(String) : (s.pages || []);
    const actions = actionsForRole(role, Array.isArray(body.actions) ? body.actions : s.actions);
    const row = {
      staff: tryStaff, role,
      pages: role === "me" ? [] : pages,
      actions: role === "me" ? allActions() : actions,
      salt, hash, mustChange: false,
    };
    if (idx >= 0) accounts[idx] = { ...accounts[idx], ...row };
    else accounts.push(row);
    const next = { ...cfg, accounts };
    try { await saveGate(admin, next); } catch (e) {
      return json(500, { error: String((e as Error).message || e) });
    }
    return json(200, {
      ok: true, role: row.role, staff: tryStaff, pages: row.pages, actions: row.actions,
      mustChange: false, gate: stripAuth(next),
    });
  }

  if (path.endsWith("/gate/unlock") && req.method === "POST") {
    const body = await req.json().catch(() => ({}));
    const tryPw = String((body && (body as any).password) || pw || "");
    const tryStaff = padStaff((body && (body as any).staff) || staffHdr || "");
    if (!tryPw) return json(400, { error: "password required" });
    if (tryStaff) {
      const s = await resolveSession(cfg, tryStaff, tryPw, "");
      if (!s) return json(401, { error: "unauthorized", role: "view" });
      return json(200, {
        role: s.role, staff: s.staff, pages: s.pages, actions: s.actions,
        mustChange: s.mustChange, kind: s.kind, gate: stripAuth(cfg),
      });
    }
    const r = await roleFromPassword(tryPw, cfg);
    if (!r) return json(401, { error: "unauthorized", role: "view" });
    return json(200, {
      role: r, staff: "", pages: [], actions: r === "admin" ? allActions() : [],
      mustChange: false, kind: "legacy", gate: stripAuth(cfg),
    });
  }

  if (path.endsWith("/gate/bootstrap") && req.method === "POST") {
    const auth = (cfg.auth && typeof cfg.auth === "object") ? cfg.auth as Record<string, any> : {};
    if (auth.admin && auth.admin.hash) return json(409, { error: "already set" });
    const body = await req.json().catch(() => ({}));
    const tryPw = String((body && (body as any).password) || "");
    if (tryPw.length < 4) return json(400, { error: "password too short" });
    const salt = randomSalt();
    const hash = await hashPassword(tryPw, salt);
    const next = {
      ...cfg,
      auth: { ...auth, admin: { salt, hash }, edit: auth.edit && auth.edit.hash ? auth.edit : { salt, hash } },
    };
    try { await saveGate(admin, next); } catch (e) {
      return json(500, { error: String((e as Error).message || e) });
    }
    return json(200, { role: "admin", gate: stripAuth(next) });
  }

  if (path.endsWith("/gate/accounts") && req.method === "PUT") {
    if (!canAdmin && !(session && session.role === "me" && !session.mustChange)) {
      return json(401, { error: "unauthorized" });
    }
    const body = await req.json().catch(() => ({})) as any;
    const incoming = Array.isArray(body.accounts) ? body.accounts : null;
    if (!incoming) return json(400, { error: "accounts required" });
    const prevByStaff = new Map(listAccounts(cfg).map((a) => [padStaff(a && a.staff), a]));
    const nextAccounts: any[] = [];
    for (const raw of incoming) {
      const staff = padStaff(raw && raw.staff);
      if (!staff) continue;
      const role = normalizeAccountRole(raw && raw.role);
      const pages = Array.isArray(raw && raw.pages) ? raw.pages.map(String) : [];
      const actions = actionsForRole(role, raw && raw.actions);
      const prev = prevByStaff.get(staff);
      let salt = prev && prev.salt;
      let hash = prev && prev.hash;
      let mustChange = prev ? !!prev.mustChange : true;
      if (raw && raw.resetPassword || !hash) {
        salt = randomSalt();
        hash = await hashPassword(staff, salt);
        mustChange = true;
      }
      nextAccounts.push({
        staff, role,
        pages: role === "me" ? [] : pages,
        actions: role === "me" ? allActions() : actions,
        salt, hash, mustChange,
        customPages: role === "me" ? false : !!(raw && raw.customPages),
      });
    }
    const next: Record<string, unknown> = { ...cfg, accounts: nextAccounts };
    if (body.rolePages && typeof body.rolePages === "object") {
      next.rolePages = normalizeRolePages(body.rolePages);
    }
    if (Array.isArray(body.publicPages)) next.publicPages = body.publicPages;
    if (Array.isArray(body.editActions)) next.editActions = body.editActions;
    if (Array.isArray(body.pageOrder)) next.pageOrder = body.pageOrder.map(String);
    try {
      const saved = await saveGate(admin, next);
      return json(200, stripAuth((saved && typeof saved === "object") ? saved as any : next));
    } catch (e) {
      return json(500, { error: String((e as Error).message || e) });
    }
  }

  if (path.endsWith("/gate") && req.method === "PUT") {
    if (!canAdmin && !(session && session.role === "me" && !session.mustChange)) {
      return json(401, { error: "unauthorized" });
    }
    const body = await req.json().catch(() => ({})) as any;
    const auth = (cfg.auth && typeof cfg.auth === "object") ? { ...(cfg.auth as Record<string, any>) } : {};
    const next: Record<string, unknown> = {
      ...cfg,
      publicPages: Array.isArray(body.publicPages) ? body.publicPages : cfg.publicPages,
      editActions: Array.isArray(body.editActions) ? body.editActions : cfg.editActions,
      auth,
    };
    if (Array.isArray(body.pageOrder)) next.pageOrder = body.pageOrder.map(String);
    try {
      const saved = await saveGate(admin, next);
      return json(200, stripAuth((saved && typeof saved === "object") ? saved as any : next));
    } catch (e) {
      return json(500, { error: String((e as Error).message || e) });
    }
  }

  if (path.endsWith("/pin/check") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const { data, error } = await admin.rpc("hx_brs_pin_verify", {
      p_staff: padStaff(body && body.staff),
      p_pin: String((body && body.pin) || "").replace(/\D/g, ""),
    });
    if (error) return json(500, { error: error.message });
    const ok = !!(data && (data as any).ok);
    return json(200, { ok, mustChange: ok ? !!(data && (data as any).mustChange) : false });
  }
  if (path.endsWith("/pin/status") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const staff = padStaff(body && body.staff);
    if (!staff) return json(400, { error: "staff required" });
    const { data, error } = await admin.rpc("hx_brs_pin_list_set");
    if (error) return json(500, { error: error.message });
    const setList = Array.isArray(data) ? data.map((x: unknown) => padStaff(x)).filter(Boolean) : [];
    return json(200, { set: setList.indexOf(staff) >= 0 });
  }
  if (path.endsWith("/pin/set") && req.method === "POST") {
    const body = await req.json().catch(() => ({})) as any;
    const { data, error } = await admin.rpc("hx_brs_pin_set", {
      p_staff: padStaff(body && body.staff),
      p_current: String((body && body.currentPin) || "").replace(/\D/g, ""),
      p_new: String((body && body.newPin) || "").replace(/\D/g, ""),
    });
    if (error) return json(500, { error: error.message });
    if (!data || !(data as any).ok) {
      const err = String((data && (data as any).error) || "failed");
      return json(err === "wrong PIN" ? 401 : 400, { ok: false, error: err });
    }
    return json(200, { ok: true });
  }
  if (path.endsWith("/pin/admin-list") && req.method === "GET") {
    if (!sessionHasAction(session, "brs-pin-reset") && !canAdmin) return json(401, { error: "unauthorized" });
    const { data, error } = await admin.rpc("hx_brs_pin_list_set");
    if (error) return json(500, { error: error.message });
    return json(200, { set: Array.isArray(data) ? data.map((x: unknown) => String(x || "")).filter(Boolean) : [] });
  }
  if (path.endsWith("/pin/admin-reset") && req.method === "POST") {
    if (!sessionHasAction(session, "brs-pin-reset") && !canAdmin) return json(401, { error: "unauthorized" });
    const body = await req.json().catch(() => ({})) as any;
    const { data, error } = await admin.rpc("hx_brs_pin_reset", { p_staff: padStaff(body && body.staff) });
    if (error) return json(500, { error: error.message });
    if (!data || !(data as any).ok) {
      return json(400, { ok: false, error: String((data && (data as any).error) || "failed") });
    }
    return json(200, { ok: true });
  }

  if (req.method === "GET" && !path.includes("/gate") && !path.includes("/pin/")) {
    const { data, error } = await admin.rpc("hx_team_board_get");
    if (error) return json(500, { error: error.message });
    const full = (data && typeof data === "object") ? data as Record<string, any> : { status: {}, manual: [] };
    const mode = String(url.searchParams.get("mode") || "").toLowerCase();
    const lite = url.searchParams.get("lite") === "1" || mode === "lite" || mode === "poll";
    const ingestOnly = url.searchParams.get("ingest") === "1" || mode === "ingest";
    if (lite || ingestOnly) {
      const ual = full.ual && typeof full.ual === "object" ? full.ual : null;
      const ct = Array.isArray(full.ctFiles) ? full.ctFiles : [];
      const omt = Array.isArray(full.omtFiles) ? full.omtFiles : [];
      if (ingestOnly) {
        return json(200, { _ingest: true, v: full.v, updated: full.updated || "", ual: full.ual ?? null, ctFiles: ct, omtFiles: omt });
      }
      return json(200, {
        _lite: true, v: full.v, updated: full.updated || "",
        status: full.status && typeof full.status === "object" ? full.status : {},
        manual: Array.isArray(full.manual) ? full.manual : [],
        ual: ual ? { uploadedAt: String(ual.uploadedAt || ""), textLen: String(ual.text || "").length } : null,
        ctFiles: ct.map((f: any) => ({
          name: String(f && f.name || ""), kind: String(f && f.kind || ""), uploadedAt: String(f && f.uploadedAt || ""),
          rowCount: Array.isArray(f && f.rows) ? f.rows.length : (Number(f && f.rowCount) || 0),
        })),
        omtFiles: omt.map((f: any) => ({
          name: String(f && f.name || ""), uploadedAt: String(f && f.uploadedAt || ""),
          rowCount: Array.isArray(f && f.rows) ? f.rows.length : (Number(f && f.rowCount) || 0),
        })),
      });
    }
    return json(200, full);
  }

  if (path.endsWith("/shared") && req.method === "PUT") {
    const body = await req.json().catch(() => ({})) as any;
    const PUBLIC = new Set(["alpha-learn", "karson-learn", "travel-list", "weight-records", "math-mistakes", "zhongzuo4", "p56-essay", "efas2026-hsc"]);
    const docId = String(body.docId || "").trim();
    if (!PUBLIC.has(docId)) return json(403, { error: "doc not public" });
    if (!body.doc || typeof body.doc !== "object" || Array.isArray(body.doc)) return json(400, { error: "doc required" });
    const remark = JSON.stringify(body.doc);
    if (remark.length > 1_500_000) return json(413, { error: "too large" });
    const { data: current, error: getErr } = await admin.rpc("hx_team_board_get");
    if (getErr) return json(500, { error: getErr.message });
    const full = (current && typeof current === "object") ? current as Record<string, any> : {};
    const key = "__hx_shared__/" + docId;
    const existing = full.status && full.status[key];
    const baseV = existing ? Math.max(0, parseInt(existing.v, 10) || 0) : 0;
    const updated = new Date().toISOString();
    const payload = {
      v: 1, updated,
      status: { [key]: { status: "Not Started", remark, done: "", v: baseV, baseV, updated } },
      manual: [], _statusDeleted: [], _manualDeleted: [],
      log: Array.isArray(full.log) ? full.log : [],
    };
    const { data, error } = await admin.rpc("hx_team_board_put", { p: payload });
    if (error) return json(500, { error: error.message });
    if (data && typeof data === "object" && (data as any).conflict) return json(409, data);
    return json(200, data);
  }

  if (req.method === "PUT" && !path.includes("/gate") && !path.includes("/pin/") && !path.endsWith("/shared")) {
    if (!canWrite) return json(401, { error: "unauthorized" });
    const payload = await req.json();
    const { data, error } = await admin.rpc("hx_team_board_put", { p: payload });
    if (error) return json(500, { error: error.message });
    if (data && typeof data === "object" && (data as any).conflict) return json(409, data);
    return json(200, data);
  }

  return json(405, { error: "method" });
});
