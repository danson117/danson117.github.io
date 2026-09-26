# Handover log

兩部電腦共用。檔在 **GitHub** 倉根目錄（`danson117/danson117.github.io/HANDOVER.md`），唔係本機獨有，亦唔喺 Supabase。屋企／公司都要 `git pull` 先睇到最新。

**做任何嘢之前**先讀呢頁。另一部機有新紀錄而呢部未跟上 → 先對齊再做。

**每一次改動之後**（同一輪）寫重點：日期、邊部電腦、做咗乜、喺邊（GitHub／Supabase／Vercel），然後 commit + push。隨時可能換機繼續，另一部機要知做過乜。

Live 網站＝Vercel；資料＝Supabase；GitHub HTML＝後備備份（唔使追齊 Pages）。唔 force-push。唔寫 `hx_test`。唔寫職員訓練明細。電腦身份只喺本機 `C:\Cursor_Work\MACHINE.md`。

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
