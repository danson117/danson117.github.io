# Handover log

兩部電腦共用。檔在 **GitHub** 倉根目錄（`danson117/danson117.github.io/HANDOVER.md`），唔係本機獨有，亦唔喺 Supabase。屋企／公司都要 `git pull` 先睇到最新。

**做任何嘢之前**先讀呢頁。另一部機有新紀錄而呢部未跟上 → 先對齊再做。

**每一次改動之後**（同一輪）寫重點：日期、邊部電腦、做咗乜、喺邊（GitHub／Supabase／Vercel），然後 commit + push。隨時可能換機繼續，另一部機要知做過乜。

Live 網站＝Vercel；資料＝Supabase；GitHub HTML＝後備備份（唔使追齊 Pages）。唔 force-push。唔寫 `hx_test`。唔寫職員訓練明細。電腦身份只喺本機 `C:\Cursor_Work\MACHINE.md`。

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
