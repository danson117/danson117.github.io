# Handover log

兩部電腦共用。檔在 **GitHub** 倉根目錄（`danson117/danson117.github.io/HANDOVER.md`），唔係本機獨有，亦唔喺 Supabase。屋企／公司都要 `git pull` 先睇到最新。

**做任何嘢之前**先讀呢頁。另一部機有新紀錄而呢部未跟上 → 先對齊再做。

**每一次改動之後**（同一輪）寫重點：日期、邊部電腦、做咗乜、喺邊（GitHub／Supabase／Vercel），然後 commit + push。隨時可能換機繼續，另一部機要知做過乜。

Live 網站＝Vercel；資料＝Supabase；GitHub HTML＝後備備份（唔使追齊 Pages）。唔 force-push。唔寫 `hx_test`。唔寫職員訓練明細。電腦身份只喺本機 `C:\Cursor_Work\MACHINE.md`。

## 2026-09-28 公司電腦

- **HX 以外唔使密碼。** 有網址就可以睇同改：Alpha／Karson、行李清單、成長記錄、乘數表、中作4、小五六作文、特快公屋。寫入走 Edge `PUT /team-board/shared`，白名單先至改到 `__hx_shared__/<docId>` 一格；唔帶 Status／Manual／UAL／CT／Mandatory 刪除。
- **HX 以內仍要 Unlock：** Course List、Briefing & Read & Sign、Training One View。
- **頁／版本：** `hx-shared-sync.js?v=1.4`、`hx-rules` v5.9、`hx.html` v13.1、`travel_list`／`weight`／乘數表／中作4／小五六作文／efas v1.2、Alpha v3.4、Karson v2.0。源碼 `HX/supabase-edge/team-board/index.ts`。
- **Edge 未部署：** 呢部機冇 Supabase access token。生產 `PUT /shared` 而家仍 401（舊閘）。頁面已改走公開路徑；舊 Edge 未更新前，已 Unlock 嘅瀏覽器會暫時退回密碼寫入。要 `supabase functions deploy team-board --project-ref kcoszufshvvpxikpzlue --no-verify-jwt` 先至真正唔使密碼。
- GitHub 後備 + push → Vercel 重建頁面。唔開 Chrome。

## 2026-09-28 公司電腦

- **Sync all 剩餘家庭／根頁共用紀錄**（公司電腦；先 `git pull` fast-forward `94b993c`→`615f915`，冇用舊檔覆蓋）。
- 沿用 `HX/hx-shared-sync.js` + Edge `team-board` reserved key `__hx_shared__/<docId>`。**冇**清 Training One View Status／Manual／UAL／CT／Mandatory。冇寫 `hx_test`。
- **新 doc ids：** `travel-list`、`weight-records`、`math-mistakes`、`zhongzuo4`、`p56-essay`、`efas2026-hsc`。
- **已有（唔動）：** `course-catalog`、`alpha-learn`、`karson-learn`、`briefing-read-sign`（及 record）。
- **頁／版本：** `travel_list` v1.1、`weight` v1.1、`乘數表`／`乘數表TEST` v1.1、`中作4` v1.1、`小五六作文範例` v1.1、`efas2026-hsc-remaining-flats` v1.1、`物品清單` v1.7（顯示用／無編輯器，清單仍喺 HTML；靠 Vercel 部署對齊）、`hx-rules` v5.8、`hx.html` v13.0。
- **仍唔上雲：** 閃卡錄音（大檔）；純 UI（字體／暗色／篩選面板）；DICT／作文21手法／Present_vs_Past／efas shortlist 等硬編碼顯示頁（HTML＝來源）。
- GitHub 後備 + push → Vercel `danson117-github-io` 重建。寫入仍要各裝置 HX Unlock 一次。

## 2026-09-27 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV B1 + fresh-first：** Edge `team-board` **v7** — GET `?lite=1`（Status／Manual＋ingest meta，唔帶 CT／OMT／UAL blob／log）；`?ingest=1`（只拉檔）；開頁等 lite+ingest 確認先顯示（Loading latest…；唔用未確認舊 local 當板）。Poll 仍 **5s**（唔做 B2）。源碼備份 `HX/supabase-edge/team-board/index.ts`。TOV **v12.7**、hub **v12.9**、`hx-rules` **v5.7** 紅字。GitHub 後備；Live Vercel／Supabase Edge。唔開 Chrome。

## 2026-09-27 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md` 已寫）

- **Supabase `kcoszufshvvpxikpzlue`（hx-test，org plan Free）：** migration `enable_rls_hx_site_gate_and_lmx_sql_buf` — `hx_private.hx_site_gate` + `hx_private._lmx_sql_buf` **ENABLE RLS only**，**零** anon/authenticated policy（同其他 hx_private；service_role／Edge only）。Advisor 而家 INFO＝RLS enabled no policy（預期）。
- **Edge 高階核對：** `team-board` GET 200；`/gate/public` 200（hasAdmin／hasEdit）；`POST /pin/status` 200。RLS 開咗唔影響 Edge（用 service_role）。
- **Edge secrets（名 only）：** Function 碼用 `SUPABASE_URL`、`SUPABASE_SERVICE_ROLE_KEY`（平台注入）。閘密碼／PIN hash 喺 DB RPC，唔係額外 Edge secret 名。Dashboard Secrets 頁要 login 睇；Chrome 已開 Functions／Backups。
- **Backups：** org＝**Free** → **無** automatic daily backups；**無** PITR。Pro 先有 daily（約 $25/mo）＋ PITR add-on（約 $100/mo／7 日，要確認 Pricing）。**未買／未 upgrade。**
- **Branching：** Free 唔包；branch list 空；**未開** mandatory preview-DB workflow。
- **Vercel：** 已刪 sandbox `temporary-agile-bromine-pulix9o`（無 custom domain、env=0、1 次 anonymous deploy）。剩 `danson117-github-io`＋`life-os`。Observability／付費 add-on **未買**。
- **Skills：** `npx skills add supabase/agent-skills` 已裝（agent 側）；repo 加 `.gitignore` 擋 `.agents/`／`skills-lock.json`。
- **E2E 速度（量度）：** Edge `team-board` GET ≈ **1.5 MB**／次（~0.8–1.0s）；TOV `SYNC_POLL_MS=5000`。解構：`ctFiles` ≈1.23M chars、`log` ≈188k、`status` ≈47k、`ual` ≈30k。LMX weekly 每週 `rows` jsonb ≈6.5 KB×8 週（已夠細，唔使改 format）。**下一步（要用戶 OK）：** poll 唔帶大檔 blob／lazy CT files／加長 poll；唔自動改 Edge。
- GitHub：呢條 handover＋`.gitignore`。唔開新 Chrome（Dashboard 核對用過）。

## 2026-09-27 本機（未有 MACHINE.md）

- Supabase project `kcoszufshvvpxikpzlue`（hx-test）：DROP unused leftover **`public.hx_test`**（migration `drop_public_hx_test`；先前 4 行測試資料＋ always-true RLS policies）。Workspace／Edge 無 runtime 引用（只規則／HANDOVER 寫「唔寫入」）。真正資料仍喺 **`hx_private`**（唔動）。Security Advisor：已無 `public.hx_test`／其 always-true policy；餘下 INFO＝`hx_private`／`life_os`「RLS enabled no policy」（預期，service_role／RPC）；另 `hx_site_gate`／`_lmx_sql_buf` RLS off（未改）。GitHub：呢條 handover。

## 2026-09-27 本機（未有 MACHINE.md）

- VHHH Line MX Weekly Auth **v1.7**：Difference history **REMOVED**＝灰、**DUE**＝淺紅（row＋badge＋legend）；ADDED／STATUS／ISSUE 不變。Hub `hx.html` **v12.8** `?v=1.7`。GitHub 後備。唔開 Chrome。

## 2026-09-27 本機（未有 MACHINE.md）

- VHHH Line MX Weekly Auth **v1.6**：Difference history Change 細分 **DUE**／**STATUS**／**ISSUE**（取代泛用 CHANGED；多欄同時改時優先 STATUS→DUE→ISSUE）；seed v3＋`SEED_VER=3`；Current report Search＋欄頭 sort 一齊上。Hub `hx.html` **v12.7** `?v=1.6`。GitHub 後備。唔開 Chrome。

## 2026-09-27 本機（未有 MACHINE.md）

- VHHH Line MX Weekly Auth **v1.5**：Current report **Search bar**（全欄 live filter；Difference history 共用）＋ **欄頭 sort**（asc／desc toggle；Issue／Due 按日期；HX Staff # 數字；Status／文字 case-insensitive）。Hub `hx.html` **v12.6** `?v=1.5`。GitHub 後備。唔開 Chrome。

## 2026-09-27 本機（未有 MACHINE.md）

- VHHH Line MX Weekly Auth **v1.4**：baseline＝**06 Aug 2026**；Current＝**Sep 24 vs Sep 17**（實數據 **+2 / −0**，221 vs 219 rows；Cheng Ka Yan MTA0200＋MTA0211）；Difference history seed v2 週差（Aug 13／20／27／Sep 3／10／24；Sep 17 無差唔入 history）；`localStorage` key `:v2` 強制 reload。Status **無 CG/PAX badge**。Canonical 週 snapshot → Supabase project `kcoszufshvvpxikpzlue` schema **`hx_private.vhhh_line_mx_weekly`**（8 週 report_date）＋ **`hx_private.vhhh_line_mx_meta`**（baseline／current／history JSON）；GitHub 後備 `HX/vhhh-line-mx-*.json`；browser 只係 history／reference cache。Hub `hx.html` **v12.5** `?v=1.4`。唔開 Chrome。冇寫 `hx_test`。

## 2026-09-27 本機（未有 MACHINE.md）

- 刪除 superseded standalone：`HX/hkg-vhhh-weekly-auth-2026-09-10.html` — **本機／origin/main 已不存在**；`hx.html`／links／HANDOVER 無殘留引用。正式頁＝`vhhh-line-mx-weekly-auth.html`。唔開 Chrome。

## 2026-09-27 本機（未有 MACHINE.md）

- VHHH Line MX Weekly Auth **v1.3**：Current report Status **唔再顯示 CG/PAX badge**（只 AUTHORIZED／QUALIFIED 等）；HX Staff #＋AMOS 欄不變。種子 `vhhh-line-mx-history-seed.json`（chat paste 06–27 Aug＋03 Sep；Downloads PDF 10／17／24 Sep）；history 空／Clear 後／Reset 且空時 load 入 localStorage。Hub `hx.html` **v12.4** `?v=1.3`。GitHub 後備；Live Vercel。唔開 Chrome。

## 2026-09-27 本機（未有 MACHINE.md）

- VHHH Line MX Weekly Auth **v1.2**：baseline 改 **06 Aug 2026**（228 rows / 38 people，`vhhh-line-mx-baseline.json`）；Current report 欄＝**HX Staff #**＋AMOS 原序（Emp ID…Status），唔再獨立 HAECO name／CG/PAX／Dept 欄（badge 可喺 cell）；**Doc date → PDF Date**；**Import weekly chain**（多日期 paste）。本機只得 Aug-6 paste，Aug-13／20／27／Sep-3 週差未種子。MP12798＝OCG **CG** 373556。Hub `hx.html` **v12.3** `?v=1.2`。GitHub 後備；Live Vercel。唔開 Chrome。

## 2026-09-27 本機（未有 MACHINE.md）

- VHHH Line MX Weekly Auth **v1.1**：差異歷史常留（`localStorage`）；**Doc date** 欄（MM.DD.YYYY，如 09.17.2026）；較新文件排上；同日重 compare 會覆寫該日 batch。MP12798＝OCG **CG**（373556 KE RENTI）。Hub `hx.html` **v12.2**。GitHub 後備；Live Vercel。

## 2026-09-27 本機（未有 MACHINE.md）

- **VHHH Line MX Weekly Auth** 新頁：`vhhh-line-mx-weekly-auth.html` **v1.0** + `vhhh-line-mx-baseline.json`（10 Sep 2026 Line MX 219 rows）。Paste 純文字 → diff vs reference（localStorage；預設 baseline）、removed/added/changed highlight、due ≤30d / overdue。Hanger list 唔顯示。Hub `hx.html` **v12.1** 側欄新 link `#vhhh-lmx-auth`。GitHub 後備；Live Vercel。

## 2026-09-27 本機（未有 MACHINE.md）

- BRS：Close 只收埋 editor、保留 draft（含未確認）；只有 Delete 先刪。綠掣改名 **Add**（原 Confirm Add）。BRS **v3.1**、TOV **v12.6**（skip draft）、`hx-rules` **v5.6**、`hx.html` **v12.0**。GitHub 後備。

## 2026-09-27 本機（未有 MACHINE.md）

- BRS Admin：Add link 改淺綠底＋深綠字；Close 改明顯灰色底＋白字。BRS **v3.0**、`hx.html` **v11.9**。GitHub 後備。

## 2026-09-27 本機（未有 MACHINE.md）

- BRS editor 按鈕：Delete｜Close｜Confirm Add（左→右）；顏色／handler 不變。BRS **v2.9**、`hx.html` **v11.8**、`hx-rules` **v5.5**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Training One View：刪底部長說明（`.why`）；ingest／Status／sync 邏輯不變。TOV **v12.5**、`hx.html` **v11.7**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- BRS item number：自動號＝已確認列表同年月最大 suffix + 1（BF／RS 共用）；欄可改；Add item 擋重複。BRS **v2.8**、`hx-rules` **v5.4**、`hx.html` **v11.6**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Course List 獨立於 CSV ingest：CT／Mandatory／UAL 唔刪／唔取代 Course List；code-only 用存檔名；code／名唔夾 → 頁內 dialog 揀（唔靜默覆寫）。TOV **v12.4**、Course List **v1.7**、`hx-rules` **v5.3**、`hx.html` **v11.5**。GitHub 後備。冇清 Status／PIN。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Staff # / Group 建議：Operator → Aircraft → Engine（種內 A→Z）；Section／人名另組。TOV **v12.3**、BRS **v2.7**、`hx.html` **v11.4**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Training One View：三個 ingest 卡列闊還原 100%（撤 `66.666%`）；`repeat(3, 1fr)` 不變；Add course 仍全闊喺三卡下。TOV **v12.2**、`hx.html` **v11.3**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- BRS／TOV Staff # / Group：Operator 建議顯示短碼＋全名（由 AUTH_PACK module title）；Name List section 準確碼／prefix（LGA1 vs LGA）。BRS item number：New 只 preview；綠色 Add item 確認先入 `issued`；未確認 draft 唔上摘要／TOV。People 標籤 Staff # / Group；清走 236051／KE sample。BRS **v2.6**、TOV **v12.1**、`hx-rules` **v5.2**、`hx.html` **v11.2**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Training One View layout：三個 ingest 卡（UAL／CT／Mandatory）列闊改為內容區約 2/3（右留空）；**Add course** 銅棕 admin-block 移到三卡正下方、全闊。TOV **v11.9**、`hx.html` **v10.99**。GitHub 後備。冇改 ingest／Status／PIN。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Admin 銅棕／沙色擴到全 HX admin 區：BRS 「Edit existing」改直向摘要行＋按鈕分色（Delete 紅）；Training One View ingest／Add course 加 `.admin-block`；hub Permissions 面板同色；`hx-rules` 紅字改為全站 admin。BRS **v2.4**、TOV **v11.8**、`hx-rules` **v5.0**、`hx.html` **v10.98**。GitHub 後備。冇改 PIN／item number／Name List。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Admin section 色：BRS `#brs-admin`／`.admin-block` 改銅棕／沙色（`#6b3e26`／`#f6efe6`／`#c4a484`），同 HAECO teal 同狀態紅綠橙分開。Briefing & Read & Sign **v2.3**、`hx-rules` **v4.9**、`hx.html` **v10.97**。GitHub 後備。冇改 TOV 主表／PIN／Name List。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- 更正 `63e7020`：D0→KE 只係 placeholder／hint 例子（`236051 or KE`）；唔再預填 Requested by／開 BRS item 唔 force Publisher=KE（返 Briefing／Read & Sign；Requested by 空）。KE sample Requested by 返 `350885`。TOV **v11.7**、BRS **v2.2**、record **v1.5**、`hx.html` **v10.96**。GitHub 後備。冇改 Name List／PIN。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- HX UI defaults：staff # placeholder／Requested by 預設 `236051`；printable record Publisher（Airline）預設 `KE`（開 BRS item 時都係 KE）。Training One View **v11.6**、Briefing & Read & Sign **v2.1**、record **v1.4**、`hx.html` **v10.95**。GitHub 後備。冇改 Name List／PIN。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Briefing & Read & Sign **v2.1**：item number 自動申請。Briefing＝`BF`＋年月＋兩位（例 `BF20260901`）；Read & Sign＝`RS`＋同格式。`issued` 計數喺共用 doc；刪咗唔重用；畫面唔俾改號。改 Type 會出新 prefix 號。Training One View **v11.6** 顯示 code。`hx.html` **v10.95**、`hx-rules` **v4.8**。GitHub 後備。冇改 PIN／Edge schema。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Training One View **v11.5**：開頁慢因 `init` 喺 `await syncIngestWithRemote()`（Edge）完之前先加 `hx-ready`，而 `html:not(.hx-ready) body{visibility:hidden}` 會藏成 3–4 秒；而家先 `paint()` 本地再 sync。Briefing & Read & Sign **v2.0**：People 加 Auth group（同 TOV Add course 嘅 D0 類）＋ Name List 即時 suggest；Admin 仍係單一 **New**＋表單 Type；Materials 拖放／揀檔／加 link。`hx.html` **v10.94**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Briefing & Read & Sign **v1.9**：Admin 只留一個 **New**（預設 Read & Sign；表單 Type 揀 Briefing／Read & Sign）；Materials 唔再先揀 Kind——拖放檔／連結、揀檔、或加 link，kind 由副檔名／URL 偵測；嵌入檔約 900 KB 上限。頁內 dialog 取代 browser confirm／alert；PIN vault 可搜 staff #／name。Training One View **v11.4**（BRS Status locked 用頁內 dialog）。`hx.html` **v10.93**。GitHub 後備。冇改 PIN／Edge／規則紅字。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Briefing & Read & Sign **v1.7**：頁面改成 Training One View 風格摘要（一行一項＋ done/assigned；撳開 detail）。Admin 區塊喺頂（只 edit unlock 入 DOM）：create／edit／delete＋PIN vault。Training One View **v11.3**：未完成 Briefing／Read & Sign 行可直接 Sign／Seen（同一 Edge PIN）；Status 仍只 Complete／Not started。`hx.html` **v10.91**、`hx-rules` **v4.7**。GitHub 後備。冇加用戶取消嘅額外 TOV 功能。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Training One View **v11.2**：Briefing／Read & Sign Status 改純文字 badge（**Complete**／**Not started**，跟 BRS ack；無 In Progress、無下拉）。欄序改為 Status → Reference → Remark。UAL／CT／Mandatory／Manual 仍用可改 Status 下拉。`hx.html` **v10.90**、`hx-rules` **v4.6**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Briefing & Read & Sign **合併**：hub 只留 `#brs`（`briefing-read-sign.html` **v1.5**）。板面＋dashboard＋printable record（iframe `ke-read-sign-record.html` **v1.3**）同一頁。`#ke-rs` alias → `#brs`。獨立檔同 `?item=` 仍可用。
- Dashboard：Briefings not complete、Read & Sign not complete、Outstanding people（只未做完 Name List 人＋item）、Items complete；全齊＝綠。PIN eye／default hint／6 位 auto-confirm／Confirm 標籤保留。
- `hx.html` **v10.89**、`hx-rules` **v4.5**（紅字）、`links` **v2.8**、README。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Briefing & Read & Sign **v1.4**：PIN 對話加 eye（Show／Hide PIN）、未設自訂時顯示 default＝staff # 提示、滿 6 位即核對／改 PIN 兩邊一致即存；按鈕改 **Confirm**。`hx-shared-sync.js` **v1.2** 加 `pinStatus`。Edge `team-board` **v6** 加公開 `/pin/status`（只回 set／unset）。Training One View Status 規則同 hash 存放未改。`hx.html` **v10.88**、`?v=1.4`。GitHub 後備；Supabase Edge 已部署。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Briefing & Read & Sign **v1.3**：MATERIALS 列長 URL／檔名唔再蓋住 Open／Remove（`.who` `min-width:0` + `overflow-wrap:anywhere`；按鈕 `flex-shrink:0`）。PIN／簽名行為未改。`hx.html` **v10.87**、`?v=1.3`。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Briefing / Read & Sign **簽名規則 + 每人員工 6 位 PIN**：Training One View **v11.1** 對 Briefing／Read & Sign 行 disable Status（唔寫 Status）；Material 彈窗唔再 Seen／Sign，提示去 Briefing & Read & Sign 頁。BRS 頁 **v1.2** 用 PIN 先 ack；首次預設＝staff #，之後強制改新 PIN；Admin vault 只 set／still-default + Remove／reset（唔顯示 PIN／hash）。
- Supabase project `kcoszufshvvpxikpzlue`：表 `hx_private.brs_staff_pin`（salted hash）；RPC `hx_brs_pin_*`（service_role only）；Edge `team-board` **v5** 加 `/pin/check` `/pin/set` `/pin/admin-list` `/pin/admin-reset`。冇清 Training One View Status／Manual／UAL／CT／Mandatory。冇寫 `hx_test`。冇刪 `hx-test` project。
- `hx.html` **v10.86**、`hx-rules` **v4.4**（紅字）、`hx-shared-sync.js` **v1.1**。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- Training One View **v11.0**：修 Reference 欄標題一字一行（`col-ref` 未設 width + `overflow-wrap: anywhere`）。欄寬 8%、header/cell nowrap；`hx.html` **v10.85**、`?v=11.0`。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- HX 畫面主色改為 HAECO：深青綠 `#015260`、青綠 `#00778b`、亮青綠 `#00a8ad`。狀態紅／綠／橙保留。`hx.html` **v10.75**。各 HX 頁 version +0.1（Training One View **v10.9**、規矩 **v4.3**）。
- Briefing & Read & Sign Record **v1.2**：短欄排同一行，Page 靠右，頁尾先有 END OF REPORT，再有 LM OCG authorised electronic version of HAECO 聲明（唔使額外簽名；資料已核對，係部門 official record）。直版列印 4 頁、橫版 7 頁，一版對一頁。
- GitHub 後備。冇改 Supabase 資料結構。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- 新區 **Briefing & Read & Sign** `HX/briefing-read-sign.html` **v1.0**（`hx.html` **#brs**）。可附多份 Word／Excel／PDF／連結，揀 Name List 嘅人，Seen 或 Sign。全部完成變綠；未齊＝outstanding。
- 紀錄頁改名 **Briefing & Read & Sign Record** `HX/ke-read-sign-record.html` **v1.1**（`#ke-rs`）。由項目開紀錄會帶嗰份人同狀態。KE notice 樣本仍可喺冇 item 時用。
- Training One View **v10.8**：來源加 Briefing & Read & Sign。未完成嘅人出現做 outstanding。Course 右邊 **Reference / Material** 可開材料並 Seen／Sign。
- 共用：locked Edge `team-board` reserved key `__hx_shared__/briefing-read-sign`。冇清 Training One View 嘅 Status／Manual／UAL／CT／Mandatory。`hx.html` **v9.75**、`links` **v2.6**、`hx-rules` **v4.2**（紅字）。GitHub 後備。

## 2026-09-26 本機（未有 `C:\Cursor_Work\MACHINE.md`）

- 新頁 **KE Read & Sign record** `HX/ke-read-sign-record.html` **v1.0**。版面跟 OPS002R3（Distribution／Requested by／Reference no／Selection criteria／Run at／Print at，以及 Doc ID／Subject／Publisher／Publisher reference／Effective date，簽收表 Section、Staff no、Name、Status、Date signed）。可填、可貼上產生、可清、可下載 CSV、Print／PDF。預設直版，可轉橫版。色同 logo 取自 haeco.com（`#00778b`／`#00a8ad`／`#3d3935`）。
- 入口：`hx.html` **v9.65**（`#ke-rs`）、`links.html` **v2.5**、`HX/README.md`。
- 紀錄留喺呢個 browser，並用現有 locked Edge `team-board` reserved key `__hx_shared__/ke-read-sign`（要 HX Unlock 先寫到）。冇改 Training One View。GitHub HTML＝後備。冇 Supabase 新表。
- 另一部機 `git pull` 後開 `hx.html`，refresh。呢部機冇 `MACHINE.md`，未標公司／屋企。

## 2026-09-26 公司電腦

- **共用紀錄跨裝置同步已實作**（唔再只留 browser）：
  - Helper：`HX/hx-shared-sync.js`
  - 存放：Supabase project `kcoszufshvvpxikpzlue`、Edge `team-board`（`hx_private`）reserved status key `__hx_shared__/<docId>`（remark JSON）。**冇**清走 Training One View 嘅 Status／Manual／UAL／CT／Mandatory。
  - Doc：`course-catalog`、`alpha-learn`、`karson-learn`
  - 讀：公開 GET。寫：HX Unlock 密碼 header（同閘；各裝置至少 Unlock 一次）。空裝置唔會洗伺服器；本機有貨而伺服器空會上傳一次。
  - 頁／版本：`course-catalog` v1.5、`Alpha_Learn` v3.3、`Karson_Learn` v1.9、`training-team-board` v10.7（忽略 shared meta key）、`hx.html` v9.55、`hx-rules` v4.1（標成已實作）。
  - 未同步：閃卡錄音等大檔可留本機；純 UI（字體／暗色／上次開邊頁）留本機。家庭其他頁（travel_list、乘數表等）未納入今次。未能新建獨立 Edge path／表（無 Supabase management CLI）；用現有 Edge reserved key。
- 本機 Git 原本落後 GitHub `main` 9 個 commit（`8b33ac6` → `8847dbf`）。已 fast-forward pull。冇用舊本機 HTML 覆蓋 GitHub。
- Training One View 即時狀態唔在 `HX/team-board-actions.json`（該檔仍係空殼）。已寫入 Supabase project `kcoszufshvvpxikpzlue`、locked Edge `team-board`（`hx_private`）。Vercel 頁讀呢條 Edge。
  - 由呢部 Chrome 嘅 `file://` 板寫入：Status 11 項（其中 Completed 8 科）、Manual 1 項。UAL／CT／Mandatory 冇清走。
  - 另一部機唔好用舊 `file://` 或空 JSON 覆蓋。要對內容讀 Supabase。
- 核對過：Vercel 同 Pages 靜態頁版本曾對齊（其後 Pages 可落後）。Life OS 在 Vercel + Supabase `life_os`。呢部公司電腦冇 Life OS clone／`life.db`。
- **HX 規矩** v4.1（主題目錄；共用同步標已實作）。`hx.html` v9.55。
- 呢部機角色：公司電腦（只在本機 `MACHINE.md`）。
