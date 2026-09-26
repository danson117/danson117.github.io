# Handover log

兩部電腦共用。檔在 **GitHub** 倉根目錄（`danson117/danson117.github.io/HANDOVER.md`），唔係本機獨有，亦唔喺 Supabase。屋企／公司都要 `git pull` 先睇到最新。

**做任何嘢之前**先讀呢頁。另一部機有新紀錄而呢部未跟上 → 先對齊再做。

**每一次改動之後**（同一輪）寫重點：日期、邊部電腦、做咗乜、喺邊（GitHub／Supabase／Vercel），然後 commit + push。隨時可能換機繼續，另一部機要知做過乜。

Live 網站＝Vercel；資料＝Supabase；GitHub HTML＝後備備份（唔使追齊 Pages）。唔 force-push。唔寫 `hx_test`。唔寫職員訓練明細。電腦身份只喺本機 `C:\Cursor_Work\MACHINE.md`。

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
