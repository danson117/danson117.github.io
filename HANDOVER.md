# Handover log

兩部電腦共用。改 GitHub、Supabase、Vercel，或者會影響另一部機嘅本機資料之前，先讀呢頁。另一部機有新紀錄而呢部機未跟上，就先對齊，再做下一步。

每做完一項涉及本機、Supabase 或 Vercel 嘅更新，同一輪在下面加一筆，然後 commit + push 呢個檔（同埋有改動嘅規矩頁）。唔好 force-push。唔好寫入 Supabase 公開表 `hx_test`。唔好用舊本機檔覆蓋 GitHub。

電腦身份唔寫入呢個倉。每部機自己睇 `C:\Cursor_Work\MACHINE.md`（唔 commit）。日誌每一筆要寫明係邊部電腦。

職員訓練明細在 Supabase locked schema，唔寫入呢個公開倉。

## 2026-09-26 公司電腦

- 本機 Git 原本落後 GitHub `main` 9 個 commit（`8b33ac6` → `8847dbf`）。已 fast-forward pull。冇用舊本機 HTML 覆蓋 GitHub。
- Training One View 即時狀態唔在 `HX/team-board-actions.json`（該檔仍係空殼）。已寫入 Supabase project `kcoszufshvvpxikpzlue`、locked Edge `team-board`（`hx_private`）。Vercel 同 GitHub Pages 嘅 v10.6 頁都讀呢條 Edge。
  - 由呢部 Chrome 嘅 `file://` 板寫入：Status 11 項（其中 Completed 8 科）、Manual 1 項。UAL email、CT CSV、Mandatory 87 行冇清走。
  - 另一部機唔好再從舊 `file://` 或空嘅 `team-board-actions.json` 覆蓋呢批 Status／Manual。要對內容，讀 Supabase，唔好靠估。
- 核對過：Vercel `danson117-github-io` 同 GitHub Pages 而家同一套靜態頁（HX v9.52、規矩 v3.60、Training One View v10.6、Alpha_Learn v3.2、Karson_Learn v1.8）。Life OS 網站在 Vercel；資料在 Supabase `life_os`。呢部公司電腦冇 Life OS 本機 clone，亦冇 `life.db`。
- Alpha_Learn、Karson_Learn 嘅練習進度在各自 browser，唔在 Supabase。Course List 行同樣只在 browser（原有規矩）。
- 加咗呢份交接日誌，同 HX 規矩 v3.61。呢部機角色：公司電腦（只在本機 `MACHINE.md`）。
