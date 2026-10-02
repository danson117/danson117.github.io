# Handover log

兩部電腦共用。檔在 **GitHub** 倉根目錄（`danson117/danson117.github.io/HANDOVER.md`），唔係本機獨有，亦唔喺 Supabase。屋企／公司都要 `git pull` 先睇到最新。

**做任何嘢之前**先讀呢頁。另一部機有新紀錄而呢部未跟上 → 先對齊再做。

**每一次改動之後**（同一輪）寫重點：日期、邊部電腦、做咗乜、喺邊（GitHub／Supabase／Vercel），然後 commit + push。隨時可能換機繼續，另一部機要知做過乜。

Live 網站＝Vercel；資料＝Supabase；GitHub HTML＝後備備份（唔使追齊 Pages）。唔 force-push。唔寫 `hx_test`。唔寫職員訓練明細。電腦身份只喺本機 `C:\Cursor_Work\MACHINE.md`。

## 2026-10-03 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion → TOV Manual：** 工具列加 **Include near expiry**（年數 ≥1）同 **Add to TOV**。跟而家 Group／Role 嘅 Outstanding（可連紅／黃就嚟到期）寫入 Training One View Manual；冇完成日 → due＝一星期前；有完成日 → 完成日＋Expiry 年數。同一 staff＋course 已有 Manual 就 skip。要 hub edit／Manual 寫權。頁 **v2.0**、`hx-rules` **v10.49**、hub page-version **v18.7**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-03 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Future section codes 併入 OCG Name List：** 舊 hub `#sections` 唔再係獨立側欄頁。LT family 表只得 Name List 嘅 **Future sections** tab。開 `#sections` 會去 `#ocg-pax` 並打開該 tab。`section-codes.html` 轉去同一 tab。Name List **v3.17**、`section-codes` **v1.3**（轉頁）、links **v3.1**、`hx-rules` **v10.48**、hub page-version **v18.6**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-03 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Auth / Lic CSV 更新（Name List only 出街）：** 由 Downloads 搬入較新 `Auth_Records_Dept.csv`／`Lic_Records_Dept.csv`（2026-10-02）；Auth 同步覆寫 `QA_Auth_Full_Detailed_List.csv`。重新 pack：出街表只 Name List（OCG）同事；其餘留 `stage`。Auth 出街約 116 人／6300 行；Lic 出街約 131 人／1767 行。Section／Team 仍跟 Name List。Auth **v2.12**、Lic **v2.1**、hub page-version **v18.5**；`authorization-list-data.js?v=7`、`lic-records-data.js?v=3`。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-03 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion Match columns 紅提示：** 平常表頭（Staff no. 同 Course code，而且 Department 已對到）掣保持原樣。欄位對唔到、必要欄缺、或者只係由唔平常表頭估到，Match columns 用狀態紅外框，直到確認三個唔同嘅必要欄。偵測做唔完而對話彈出，掣維持紅色。人數、Outstanding、Years 0、Export、表頭讀法不變。頁 **v1.9**、`hx-rules` **v10.47**、hub page-version **v18.4**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion 掣下面人數：** Group／Role／Status 每粒掣個字下面有人數，跟其他已選條件同 Expiry 年數。Status 揀 Completed 時，CS／Mechanic 只計未過期 Completed。Outstanding＝過期＋名冊未喺檔。統計句縮短，唔再重複 Group／Role／Status 總數，放喺掣下面；仍然寫檔名、課程碼、移除數、Never in file、年數、近期紅／黃、Skipped。頁 **v1.8**、`hx-rules` **v10.46**、hub page-version **v18.3**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion Outstanding 包括未做過：** Outstanding 唔止過期。Name List（包括 SHOWS LMP）入面，保留課程喺允許 department 冇出現過嘅人，都係 Outstanding，完成日空白。PAX／CG 跟名冊；PAX section 限制照舊；CG 冇額外 section。檔入面已有嘅唔重複。唔喺名冊仍然 Skipped。狀態行寫 Never in file。Export 仍然一張表、跟而家顯示嘅行。表頭讀法不變。同上面一齊出街：頁 **v1.8**、`hx-rules` **v10.46**、hub page-version **v18.3**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion 工具列 Expiry：** 標籤改做 **Expiry:**，同 Status: 同一樣式（唔再係啡色 Years）。右邊仍然只係數字，預設 2，冇開關。0 冇到期；大於 0 先按年數變 Outstanding。表頭讀法、Group、Export 不變。頁 **v1.5**、`hx-rules` **v10.43**、hub page-version **v18.0**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion Years 決定到期：** 拆走 Expiry 開關。Years 一直可以改，預設 2。打 0 冇到期，Completed 維持 Completed。大於 0 先按年數變 Outstanding（到期日當日仍 Completed，90 日內變色）。表頭讀法不變。Group 仍然 All／PAX／CG。Export 仍然一張表、跟而家個 Group。頁 **v1.4**、`hx-rules` **v10.42**、hub page-version **v17.9**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion 表頭同 Expiry 開關：** 有啲 xlsx 用命名空間前綴，而且格冇欄位字母，讀到空白所以話 no header row。而家讀到 Staff no.／Course code／Course title／Status／end_date（包括 Hierarchy - Completion Date）／Department，日期序號當完成日。LM - CXG Transit＝PAX、LM - OCG＝CG；其他 department 唔當 CG。Status 實字 Complete 當 Completed。Expiry 關住唔可以改 Years，Status 跟檔。開住預設 2 年；打 0 冇到期、Completed 維持 Completed。Export 仍然一張表、跟而家個 Group。頁 **v1.3**、`hx-rules` **v10.41**、hub page-version **v17.8**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion All／PAX／CG：** 只留 department LM CXG transit（掣 PAX）同 LM OCG（掣 CG）。其他 department 移除。課程碼只留行數最多嗰一個。PAX 再只留 Name List section LTC1／2／3／4／6／X 同 LTW1–4。Status 只留 Completed。完成日新到舊。All＝兩組合埋。HX 嘅 OCG＝PAX＋CG，同下載檔叫法唔同。唔送 AI、唔寫 Supabase。頁 **v1.2**、`hx-rules` **v10.40**、hub page-version **v17.7**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion 欄名／CSV：** 同一頁接受 xlsx 同 CSV。平常表頭照舊。欄名變咗或調位，瀏覽器自己對（常見欄名，然後格內容）。都唔肯定先彈 Match columns，選擇只記呢個瀏覽器。唔送 AI、唔寫 Supabase。頁 **v1.1**、`hx-rules` **v10.39**、hub page-version **v17.6**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Course completion 獨立頁：** 成個 Course completion xlsx 由 Training One View 抽出，自己一頁 `HX/course-completion.html`（hub `#course-completion`）。行為不變（Name List 包括 SHOWS LMP、Section 跟名冊、Department 唔用、Role／Status／Expiry／Years、排序、Export／Copy／Download）。匯出檔名 `course-completion-YYYY-MM-DD.xlsx`。唔送 AI、唔寫 Supabase、唔改板。TOV 上載區唔再有呢張卡。頁 **v1.0**、TOV **v15.28**、`hx-rules` **v10.38**、links **v3.0**、hub page-version **v17.5**。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **篩選下拉只列出有得揀嘅選項：** OCG Name List 刪走重複 CG/PAX 下拉，只留 OCG／CG／PAX 掣。Full List 嘅 Team／Home／Match，同 Authorization List、License Records 嘅 Section／Operator／Category／Aircraft／Authority，只顯示其他而家篩選下真係有嘅值（例 PAX 唔出 LGA1）。All 保留；揀咗嘅值消失就返 All。Name List **v3.16**、Auth **v2.11**、Lic **v2.0**、`hx-rules` **v10.37**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-02 公司電腦

- **236051 改做 CG：** CHAN SIU CHUNG 由 PAX 改做 CG。唔喺 Crew List，section 仍然 LGDX，冇加去 Crew List。Name List **v3.15**、`ocg-pax-data.js?v=10`、`hx-rules` **v10.36**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。本機 Chrome 開 Name List。唔寫訓練明細。

## 2026-10-02 公司電腦

- **Name List 加入同移走：** `382755` 新入職，LTC3、Team 3，跟同隊 licence technician（PAX、Crew List、16-Jan-26）。移走 `169153`、`170465`。`382200`、`313495` 連 Full List 黃行一併移走。已存訓練列唔刪。Name List **v3.14**、`ocg-pax-data.js?v=9`、`hx-rules` **v10.35**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。本機 Chrome 開 Name List。唔寫訓練明細。

## 2026-10-02 公司電腦

- **Name List 編號 section：** 正式用 LTC1／LTC2／LTC3／LTC4／LTC6／LTCX 同 LTW1–LTW4 取代呢批人嘅舊 Home／Current（LTA、LGEX、LTDX）。對到名冊 **117**。姓名／職位／班／入職日／Revenue 冇衝突。Team 只補原本空白 **4** 人（LTW）。`290990` 舊 Current 係 LTGC，而家 LTC4。`382755` 唔喺 Name List，冇加。`169153`、`170465` 唔喺呢份檔，仍係 LTA1／LTA3。紀錄行 `382200`、`313495` 唔改。Name List **v3.13**、`ocg-pax-data.js?v=8`、`hx-rules` **v10.34**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。本機 Chrome 開 Name List。唔寫訓練明細。

## 2026-10-02 公司電腦

- **Name List Remark 清走：** `236051` CHAN SIU CHUNG 唔再有 Remark **Move to OFFICE & PAX**。人仍係 Name List PAX，section 唔改。Name List **v3.12**、`ocg-pax-data.js?v=7`、`hx-rules` **v10.33**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-02 公司電腦

- **收工：** Course completion Expiry 已在 `main` `ed76788`（TOV **v15.27**、`hx-rules` **v10.32**、hub page-version 仍 **v17.4**）。冇新 HX 改動要 push。家庭頁 Git 顯示 modified，只係換行，內容同 HEAD 一樣，冇 commit。唔開 Chrome。

## 2026-10-02 公司電腦

- **TOV Course completion Expiry：** 完成表加英文掣 **Expiry** 同 **Years**（預設 2，可改，最少 1）。關住跟檔 Status、唔加近期色。開住：Due＝完成日 + N 年；過期（剩餘 &lt; 0）Status 變 Outstanding 並用逾期紅；剩餘 ≤30 紅、&gt;30 且 ≤90 黃，Status 仍 Completed；到期日當日仍有效。冇完成日唔當過期。本來 Outstanding 唔加呢個色。Export／Copy／Download 跟有效 Status 同畫面色。唔改訓練資料。TOV **v15.27**、`hx-rules` **v10.32**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。本機 Chrome 開 file URL 核對 Expiry。唔寫職員明細。

## 2026-10-02 公司電腦

- **TOV Course completion 表頭排序：** 七個欄頭可撳（再撳反向）。空白格排最後。Export XLSX、Copy layout、Download 跟而家次序。唔改訓練資料。TOV **v15.26**、`hx-rules` **v10.31**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-02 公司電腦

- **TOV course chips Unselect all，同 completion 表 Role／匯出：** Detail course chips 旁英文 **Unselect all**，一次收起而家全部 course；之後逐粒 chip 加或收。只係今次畫面，refresh 恢復，唔寫 Supabase。Course completion xlsx 加 Role **All**／**CS**（Name List Certifier，唔用 LTW）／**Mechanic**，同 Status 一齊篩。Export XLSX（`TOV-completion-YYYY-MM-DD.xlsx`）、Copy layout、Download 跟而家篩選；Staff #／Name 全文。唔改訓練資料。TOV **v15.25**、`hx-rules` **v10.30**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 公司電腦

- **刪 Manual T.EE0686 全部紀錄：** 課程名 SWISS INTERNATIONAL AIRLINES Docs & Proc Training。Manual 行 **34** 同 status **10** 已從 Supabase `hx_private.team_board_actions` 移除（`hx_team_board_put` snapshot `board_revisions`）。其他 Manual 1141 行保留（1175 → 1141）。Course List 唔刪。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-10-02 公司電腦

- **TOV Course completion xlsx：** 上載區拖入 `.xlsx`，瀏覽器自己對全部 Name List（包括 Remark SHOWS LMP）出表。Section 跟 Name List；檔嘅 Department 唔用。唔喺 Name List 的行只計 Skipped。唔送 AI、唔寫 Supabase、唔改板。TOV **v15.24**、`hx-rules` **v10.29**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-10-02 公司電腦

- **TOV Manual T.EE0155（EY Authorization · OCG Name List）只加 Outstanding：** 課程名 Etihad Airways Documentation and Procedures Training（Course List 已有，行上記住完整課程名）。只加未完成 **2** 人（CG 2／PAX 0，due `2026-09-25`，冇 Completed status）。唔加已完成嘅 60 人。其他 Manual 行數不變（1173 → 1175，新增 2）。Supabase `hx_private.team_board_actions`（`hx_team_board_put` 會 snapshot `board_revisions`）。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-10-02 公司電腦

- **身份可以重疊（暫時唔拆單一角色）：** OCG Name List 嘅 Crew List＝Mechanics。Authorization List 有紀錄＝Certifiers／CS／Engineers。同一人可以兩個都係。EY 課程 T.EE0771 嘅 **62** 人全部有授權，所以全部係 Certifiers／CS／Engineers；其中 Crew List **19**（全部 LTW）同時係 Mechanics，其餘 **43** 只有授權身份。課程人數冇改。唔改 HTML。唔開 Chrome。

## 2026-10-02 公司電腦

- **更正 T.EE0771 角色：** 62 人唔係 Mechanics。Name List role：Certifiers **61**（Licensed Engineer 49，其餘 DIC／Controller）、Office **1**、Mechanics **0**。TOV Role 掣跟 section（LTW＝Certifiers **19**；其他 section **43** 會標 Mechanics），唔等於職位。課程人數冇改。唔改 HTML。唔開 Chrome。

## 2026-10-02 公司電腦

- **TOV Manual T.EE0771（EY Authorization · OCG Name List）：** 課程名 Etihad Airways Electronic Aircraft Technical Log (eTechLog8) Training（Course List 已有）。Name List 現有 EY 授權 **62**（CG 42／PAX 20），未過期。Name List role：Certifiers **61**、Office **1**、Mechanics **0**。Completed **61**（CG 41／PAX 20，done＝2026-10-02、due＝2028-10-02，先過 90 日 outstanding 規則）。Outstanding **1**（CG 1／PAX 0，due `2026-09-25`）。粘貼 65 個 unique；3 個唔喺 Name List、1 個喺 Name List 但冇 EY 授權，唔入。其他 Manual 行數不變（1111）。Supabase `hx_private.team_board_actions`（`hx_team_board_put` 會 snapshot `board_revisions`）。唔改 HTML。唔開 Chrome。唔寫職員明細。本機冇 `HX-outstanding-by-course.xlsx`。

## 2026-10-02 公司電腦

- **Team 數字唔再當 PAX：** Name List 唔再用 Team 格判 PAX。CG 可以有 Team No.，仍然係 CG。PAX 跟 roster group，或者人喺 Crew List。已填之前停低嘅 CG Team No. **36** 人（空白先填；冇加入 Crew List；section 冇改；Auth_050 冇改）。Name List **v3.11**、`ocg-pax-data.js?v=6`、`hx-rules` **v10.28**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。

## 2026-10-02 公司電腦

- **Authorization List Eng Gnd Run 同 Team No.：** 貼上 EY 資格嘅 Auth_050 Add: Eng Gnd Run 同而家授權行一樣，冇改授權 pack。Team No. 只填 Crew List 原本空白、已經係 PAX 嘅 **19** 人（Authorization List 同 Crew List 一齊見）。CG **36** 人唔寫 Team（有 Team 數字會當 PAX）。唔喺 Name List 嘅 `156811`、`216136`、`258203` 唔加、唔上表。Name List **v3.10**、`ocg-pax-data.js?v=5`、`hx-rules` **v10.27**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-02 公司電腦

- **Authorization List 同一 Staff # 只顯示一行：** 工具列掣 **One per Staff #**。開住時，而家篩選同排序入面每個 Staff # 只留第一行；再撳或 Clear filters 恢復。Copy／XLSX 跟畫面。Auth **v2.10**、`hx-rules` **v10.26**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。唔改授權資料。

## 2026-10-02 公司電腦

- **OCG 紀錄、唔再計人：** `382200`、`313495` Remark **01OCT will transfer to CXG**。只留 Full List 黃行。唔入 OCG／CG／PAX／role 人數，唔上 Crew List、Name List。訓練／Authorization／License／BRS 名冊唔計。已存訓練列唔刪。Name List **v3.9**、`ocg-pax-data.js?v=4`、TOV **v15.23**、Auth **v2.9**、Lic **v1.9**、BRS **v4.9**、`hx-rules` **v10.25**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-02 公司電腦

- **產生 XLSX 基本要求：** 之後所有產生嘅 xlsx 都要表頭 AutoFilter（只包數據表，空行下面註解唔入）同欄闊跟內容（約 12–48）。已用喺共用 `hx-xlsx.js`（Authorization List **v2.8**、License Records **v1.8**）同 TOV 自己嘅寫入。TOV **v15.22**、`hx-rules` **v10.24**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。唔改訓練資料。

## 2026-10-02 公司電腦

- **TOV Details Export XLSX：** 畫面係 Details 時，匯出一行一個人一科（跟課程表欄；唔輸出 Sign／Remove／Material）。Filter 加 Layout＝Details 同 Course rows。檔名 `TOV-details-YYYY-MM-DD.xlsx`。Table 仍然一行一個人。唔改訓練資料。TOV **v15.21**、`hx-rules` **v10.23**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-02 公司電腦

- **TOV Export XLSX 最底寫 course title：** filter 下面再空一行，列出結果入面每個 Course code 對應嘅 Course title（Course List；冇先用該行課程名；收起嘅 course 一併列）。唔改訓練資料。TOV **v15.20**、`hx-rules` **v10.22**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-02 公司電腦

- **TOV Export XLSX 最底寫 filter：** 數據行下面空一行，再寫今次條件（Search、Sources、Section、Team、Role、Show completed、Courses shown、Courses hidden；有揀中 board 格先加 Board item；最後 People）。唔改訓練資料。TOV **v15.19**、`hx-rules` **v10.21**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Export XLSX：** Outstanding 工具列加英文掣 **Export XLSX**。下載而家篩選後嘅表（一行一個人；欄跟畫面；UAL／Show completed 跟開住先出）。唔改訓練資料。TOV **v15.18**、`hx-rules` **v10.20**；hub page-version 仍 **v17.4**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Manual T.B275 只限有 Authorization 嘅 Certifier：** Name List Certifiers 有任何 Authorization 嘅 **110** 人全部已 Completed。可見 Outstanding **0**。之前可見嘅 12 人（Certifiers 6／1／7、Other 5／0／5）冇 Authorization，已從 `payload.manual` 收起；還原位＝`payload.status` 鍵 `__hx_shared__/manual-hold-tb275-no-auth`。Mechanics hold `__hx_shared__/manual-hold-tb275`（200／87／287）同 Completed **173** 保留。`board_revisions` manual id 28。Excel `C:\Cursor_Work\HX-outstanding-by-course.xlsx`（唔入 Git）T.B275 outstanding 改 0。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Outstanding course 暫時收起：** Detail 標題旁每個符合而家 filter 嘅 outstanding course 一個掣。預設全顯示；撳一下今次開頁收起該 course（淨係得嗰科嘅人離開列表；due／remaining 跟仲顯示嘅科）。唔寫 Save as default，refresh 恢復。Table 同 Details 都跟。TOV **v15.17**、`hx-rules` **v10.19**；hub page-version 仍 **v17.4**。GitHub 後備 → Vercel。唔開 Chrome。唔改訓練資料。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Manual T.C659（OCG Mechanics）：** 課程名 Basic Refuelling Procedures（catalog 無另一個名）。Mechanics **340**（CG 244／PAX 96）。Completed **164**（CG 110／PAX 54，done＝2026-10-01）。Outstanding **176**（CG 134／PAX 42，due `2026-09-25`），全部 Mechanics。Certifiers 同唔喺 Name List 唔入。其他 Manual 保留（T.X432 名仍係 SWISS LHG Ramp Safety Training；LM00157／T.EA03 Outstanding 0；T.EE0544 Outstanding 23；T.EE0686 Outstanding 24；T.X432 Outstanding 269）。`board_revisions` 已 snapshot manual／status。Excel `C:\Cursor_Work\HX-outstanding-by-course.xlsx`（唔入 Git）加咗 T.C659 Outstanding，並保留 T.EE0544／T.EE0686／T.X432／T.B275。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Completed 區放低：** Completed 名單（標題、Show、筆數、提示、表）移到 outstanding board／detail **下面**。預設仍 Last 7 days。TOV **v15.16**、`hx-rules` **v10.18**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。
- **T.B275 Mechanics outstanding 收起：** 可見 Outstanding 只留 Certifiers **6／1／7** 同 Other **5／0／5**（CG／PAX／OCG；合計 **12**）。Mechanics outstanding **200／87／287** 唔再喺 `payload.manual`；還原位＝`hx_private.team_board_actions.payload.status` 鍵 `__hx_shared__/manual-hold-tb275` 嘅 `rows`（下一輪 TOV save 唔會清，因為頁面唔打包 `__hx_shared__/`，而 `hx_team_board_put` 合併 status 唔會丟未知鍵）。Completed **173** 留喺 manual。課程名寫入可見行。`board_revisions` 已 snapshot manual／status（status 經 `board_strip_shared`，archive 唔喺 revision）。Excel `C:\Cursor_Work\HX-outstanding-by-course.xlsx`（唔入 Git）去掉 Mechanics 行，Held 表留人數。唔寫職員明細。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Outstanding 對齊＋角色分拆：** Live Manual／status 確認喺 `hx_private.team_board_actions`（Edge `team-board` lite），五個 cname 同 Completed stamp 已喺呢個 payload；TOV refresh 就見。LM00157／T.EA03 Outstanding **0**（Completions 保留）。Outstanding 報告只留 **T.EE0544／T.EE0686／T.X432**，按 Name List roleOf 分 Certifiers／Mechanics：T.EE0544 Certifiers **15／8／23**；T.EE0686 Certifiers **16／8／24**；T.X432 Mechanics **243／26／269**（CG／PAX／OCG；due `2026-09-25`）。Excel 本機 `C:\Cursor_Work\HX-outstanding-by-course.xlsx`（唔入 Git）。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Manual T.B275（全 OCG Name List）：** OCG **472**；Completed **173**；Outstanding **299**（due `2026-09-25`）。粘貼完成名單 292 個 unique；其中 119 唔喺 Name List 唔加。Completed done＝2026-09-30、due＝2028-09-30。Supabase `hx_private.team_board_actions`（+ `board_revisions`）。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Manual 課程名＋T.EA03／T.EE0686 完成批次：** Manual cname 更正為 LM00157＝SWISS AMOSeTL WBT for External Provider；T.EA03＝Swiss Air Line Station Administration and Procedures Training；T.EE0544＝SWISS B777 ETOPS Training；T.EE0686＝SWISS INTERNATIONAL AIRLINES Docs & Proc Training；T.X432＝**SWISS LHG Ramp Safety Training**。T.EA03／T.EE0686 按粘貼名單標 Completed（done＝2026-10-01；Name List only）。完成後 Outstanding：T.EA03 **0／0／0**；T.EE0686 **16／8／24**；T.EE0544 **15／8／23**；LM00157 **0／0／0**；T.X432 **243／26／269**（CG／PAX／OCG）。Course List 只喺 browser localStorage，今次只改 Supabase Manual cname。`board_revisions` 已 snapshot。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-09-30 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Manual T.X432（Mechanics）：** Course List 已有名 **SWISS Ramp Safety Training**（用返，唔另發明）。Mechanics **340**；Completed **71**；Outstanding **269**（due `2026-09-25`）。109 完成名單入面非 Mechanic／唔喺 Name List 唔入呢科。Supabase `hx_private.team_board_actions`（+ `board_revisions`）。唔改 HTML。唔開 Chrome。唔寫職員明細。

## 2026-10-01 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Manual AUTH LX：** 開咗四個 Manual 課程畀 AUTH operator LX（Name List 24 人）：**LM00157** Completed 24／Outstanding 0；**T.EA03** Completed 0／Outstanding 24（完成名單 10 人全部唔喺 LX）；**T.EE0544** Completed 1／Outstanding 23（完成名單 11 人入面 10 人唔喺 LX）；**T.EE0686** Completed 0／Outstanding 24（完成名單 10 人全部唔喺 LX）。完成行 done＝2026-09-30、due＝2028-09-30；outstanding due＝2026-09-25。Supabase `hx_private.team_board_actions`（+ `board_revisions`）。唔改 HTML。唔開 Chrome。

## 2026-09-30 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **OCG Name List：** `288531` YAM YIM CHIU Remark **SHOWS LMP**；Name List／Full List 該行黃底。唔改 CG／section。Name List **v3.8**、`ocg-pax-data.js?v=3`、`hx-rules` **v10.17**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **收工：** OCG Name List UA V number 已在 `main` `fe23f78`（Name List **v3.7**、`hx-rules` **v10.16**、hub page-version 仍 **v17.4**）。冇新 HX 改動要 push。`HX/team-board-actions.json` 本機仍係 2026-09-22，同 GitHub 一樣；Training One View 板面今次冇改，共用資料以 Supabase 為準。家庭頁 Git 顯示 modified，內容同 HEAD 一樣，冇 commit。本機 `OCG_V_Number.xlsx` 唔入 GitHub。唔開 Chrome。

## 2026-09-30 公司電腦

- **OCG Name List UA 欄改顯示 V number：** Crew List／Full List 有 V number 的 34 人，UA 格由旗 `UA` 改為該 V number。3 人來源寫明冇 V number，格仍係 `UA`。唔改 Team／Shift／姓名／section。OCG Name List **v3.7**、`ocg-pax-data.js?v=2`、`hx-rules` **v10.16**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。唔寫職員明細。

## 2026-09-30 公司電腦

- **TOV Search 多詞 OR：** Search 用 `;` 分開；任一詞符合就顯示（例 `E195;T241`）。空段忽略；建議跟最後一段。TOV **v15.15**、`hx-rules` **v10.15**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **TOV Section OCG：** Outstanding／Team 板／Completed 只顯示 Name List（CG＋PAX）。唔喺名冊唔上表。TOV **v15.14**、`hx-rules` **v10.14**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **TOV Copy layout／Download：** Table 出圖時 Staff # 同 Name 拉到全文一行，畫面欄闊不變。TOV **v15.13**、`hx-rules` **v10.13**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **TOV 人課程表 Course 右移一格：** Cards／Details popup 欄序由 Course｜BRS REF. NO.｜Name 改為 **BRS REF. NO.｜Course｜Name**（其餘欄不變）。唔改格值／色／欄義。TOV **v15.12**、`hx-rules` **v10.12**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **LM00183 Outstanding 對齊圖上 STAFF NO：** Manual `LM00183` outstanding 改為圖上 **54** 人（due 仍 `2026-10-02`）；已 Completed **4** 人保留。舊 outstanding 唔再喺圖上嘅 **25** 行已刪。BRS `BRS20260902` people 同步 **58**（54＋4）。唔寫職員明細。唔改 HTML。Supabase `hx_private`。唔開 Chrome。

## 2026-09-30 公司電腦

- **TOV BRS 行 Course／BRS REF. NO.／Due：** 人課程表加欄 **BRS REF. NO.**（BRS 號）。**Course** 顯示同名課程碼（例 eTechLog → LM00183），唔再把 BRS 號放喺 Course。Due day／Remaining 抄該人同名課程到期日；搵唔到先用 BRS 自己嘅 due。冇同名課程就 Course 仍顯示 BRS 號。唔改 BRS 存檔。TOV **v15.11**、`hx-rules` **v10.11**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。

## 2026-09-30 公司電腦

- **Course List 欄闊跟內容：** 每欄闊到格內全文一行睇得晒（Name／Description 唔截斷）；字少嘅欄（Code／Issued By／Type／Interval）收到內容同表頭。總闊超過畫面就表內橫向捲。Course List **v1.8**、`hx-rules` **v10.10**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。

## 2026-09-30 公司電腦

- **EK Authorization Competency Matrix：** 新頁 `HX/ek-authorization-competency-matrix.html` **v1.0**。底表能力項加 Source／Mandatory by，GOM 只係另名嘅併入 EK GOM name，GOM 先有嘅要求另開 EK add 行（DG、SMS、safety reporting、recurrent programme、training records）。FOD 留喺原行。`links.html` 有連結。未入 hub。GitHub 後備。本機 Chrome 開 file URL。

## 2026-09-30 公司電腦

- **CT Synchronize now 修：**/v15.9 collapse 後本機只剩較新檔、伺服器仍可有 11+12；`uploadedAt` max 相同 → 舊 plan 唔 push，但 raw 檔名 meta 仍標未 sync，掣似無反應。而家 sync／dirty 用 slot meta；伺服器同槽重複尾數 → Synchronize now 會 PUT。fetch 失敗出 Save failed。TOV **v15.10**、`hx-rules` **v10.9**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **CT Reminder 尾數唔當新檔：** `.csv` 前 ` 11`／` 12`／`(12)` 等 download 計數忽略；同一 logical 名＋kind（overdue／due-soon）同一槽；最新＝`uploadedAt`。已存 11+12 收成較新嗰份。TOV **v15.9**、`hx-rules` **v10.8**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **TOV Detail due／remaining 欄闊＋表頭：** Due-day 兩欄同 **128px**（表頭 `Overdue or will` / `expire due day`）；remaining 兩欄同 **104px**（表頭 `Overdue remaining`／`Coming due remaining`，唔再 52px 斷字）。唔併 Coming due remaining 入 overdue due-day。TOV **v15.8**、`hx-rules` **v10.7**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **TOV Completed by 欄：** Completed 名單（legend 下）喺日期後加 **Completed by**。新設 Status＝Completed 時寫 hub 登入 staff #＋名（Owner 無 # 顯示 Owner - Siu Chung）；舊行冇 actor 留空唔補。BRS＝簽收人。TOV **v15.7**、`hx-rules` **v10.6**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-30 公司電腦

- **TOV Completed 名單（預設 7 日）：** Training One View legend 下面加獨立 **Completed** 區；預設 **Last 7 days**，下拉可揀 30／90／year／All stored。跟 Section／Sources／Search／Team。背底永久保留唔刪。Detail「Show completed (≤30 days)」仍舊。TOV **v15.6**、`hx-rules` **v10.5**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Board 5-version history：** 每個同步源（`ual`／`ct`／`omt`／`status`／`manual`／`brs`）喺 Supabase `hx_private.board_revisions` 保留最多 5 版；第 6 版刪該源最舊。一行＝一個 source 一次接受咗嘅 payload snapshot（欄：`id`、`source_key`、`version_time`、`saved_at`、`payload`）。Live 仍喺 `hx_private.team_board_actions`。只喺較新寫入先 snapshot；拒收舊本機／開頁唔寫 history。Upload 比 data 時間（UAL／CT／OMT＝`uploadedAt`；Status＝`updated`；BRS＝doc `updated`）；本機舊→載入伺服器；撈唔到唔當 local 贏。TOV **v15.5**、BRS **v4.8**、`hx-rules` **v10.4**；hub `?v=`（page-version 仍 **v17.4**）。Edge 未 redeploy（revision 喺 RPC）。GitHub 後備。唔開 Chrome。

## 2026-09-29 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV sync 比 uploadedAt，唔比邊部機先開：** 開頁唔准喺未同 Edge 對完 data 時間之前 push（修 migratePersisted 競態蓋新公司檔）。UAL／CT／Mandatory 各自 `uploadedAt` 較新贏；本機舊→載入伺服器；本機新→先保留再 push；相同時間唔 clobber。綠 ✓ 只喺同贏咗嘅伺服器一樣；discard 舊本機 → 卡內「Loaded newer server copy.」。Edge 撈唔到唔當 local 贏。`hx_private.team_board_actions` 冇 history／revision——今日公司 ingest 若已被舊本機蓋過，而家盤上仍係 Sep 28 UAL／CT＋Sep 26 OMT，**唔能還原**（唔發明資料）。Edge `/gate/public` 200。Overdue remaining 欄 min 維持 **52px**（grow／scroll 保留）。TOV **v15.4**、`hx-rules` **v10.3**；hub `?v=`（page-version 仍 **v17.4**）。GitHub 後備。唔開 Chrome。

## 2026-09-29 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS duplicate Ref. No. while typing：** Create／edit 打字即警告 **That number is already used.**；block Create／唔存重複；自動號跳過已用；撞號 draft 清號唔覆寫已確認。BRS **v4.7**、`hx-rules` **v10.2**；hub `?v=` cache-bust（page-version 仍 **v17.4**）。GitHub 後備。唔開 Chrome。

## 2026-09-29 公司電腦

- **VHHH Line MX 刪 3 行 DEMO：** Current report 表頂 3 行 dummy SAMPLE／DEMO（overdue 紅／≤14 橙／≤30 黃樣本）已移除；唔再出現。三檔到期色同 legend／tags 保留。Auth **v2.4**、hub **v17.4**（`?v=2.4`）、規矩 **v10.1**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **VHHH Line MX paste → COMPARE + UNDO：** 貼新 report 後只留兩個掣——**COMPARE**（原 compare／按 report date 存 history／backfill）同 **UNDO ACTION**（localStorage undo log；只可以 undo 當日本地曆同一日嘅 COMPARE；超過一日拒絕；一掣一步由新到舊）。舊掣（import chain／set ref／reset baseline／clear paste／clear history）已從 UI 移除。Auth **v2.3**、hub **v17.3**（`?v=2.3`）、規矩 **v10.0**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **VHHH Line MX 規矩紅字補齊：** Current report 喺 Difference history 上面；到期色 overdue 紅／≤14 橙／≤30 黃；Current 表頂 3 行 SAMPLE／DEMO（唔入 history）。Auth 仍 **v2.2**、hub **v17.2**（`?v=2.2`）、規矩 **v9.9**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **VHHH Line MX 刪副標／disclaimer：** 刪頁頂 Kalitta 副標題同 FOR REFERENCE ONLY disclaimer；保留標題同 paste／表。Current 喺 Difference 上面；到期色三檔＋頂部 3 行 DEMO。Auth **v2.2**、hub **v17.1**（`?v=2.2`）、規矩 **v9.8**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **VHHH Line MX 到期色：** Current report Due Date 三檔——OVERDUE 紅、≤14 日橙、&gt;14 且 ≤30 日黃。頁頂 3 行 DEMO（唔入 history）。Auth **v2.0**、hub **v17.0**（`?v=2.0`）、規矩 **v9.7**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **VHHH Line MX Weekly Auth · Current 上移 + 到期色：** Current report（含 toolbar／表／Removed block）改喺 Difference history 上面；legend／stats 仍喺兩者之上。到期色 overdue 紅／≤14 橙／≤30 黃；Current 表頂 3 行 dummy sample（唔入 history）。Auth **v2.1**、hub **v17.0**（`?v=2.1`）、規矩 **v9.7**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **Authorization List Airline 揀碼：** Airline 欄打至少一個字就列出符合嘅 operator code／航空公司名（contains）；揀一行填入 code 同全名。鍵盤 ↑↓／Enter／Esc；點外面關。冇符合先顯示 Not on this list。唔過濾表。List **v2.6**、hub **v16.8**（`?v=2.6`）、規矩 **v9.5**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **Authorization List Operators 表：** Airline lookup 下面加 Operators 表——每個 operator code 一行（code + module-title 航空公司名，含只喺 stage 嘅 HX-NP／UA-BM）；唔跟職員過濾表。保留 Airline suggestion picker。List **v2.7**、hub **v16.9**（`?v=2.7`）、規矩 **v9.6**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **TOV Detail 表頭：** Overdue／Coming due 長標題拆兩行，唔再疊去隔離欄。到期日同 remaining 欄加闊到第一行放得落；數字格仍一行。TOV **v15.2**、hub **v16.7**（`?v=15.2`）、規矩 **v9.4**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **Authorization List Airline 欄：** 打 operator code 顯示航空公司全名（來自 auth module 標題，含只喺 stage、唔上 Name List 表嘅 code）。圖上 66 個 code 資料檔都有；可見表缺 HX-NP、UA-BM（人唔喺 Name List）。List **v2.5**、hub **v16.6**（`?v=2.5`）、規矩 **v9.3**。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 公司電腦

- **Accounts Copy from 頁面剔：** Edit pages／Pages 彈窗加 **Copy from**（其他帳戶 · role）。揀一個抄有效頁面剔（自訂／role 矩陣／Owner＝全頁）；抄完可逐項改剔再 **Save pages**。目標 Owner 時 checkbox 鎖住、copy 唔減權限。hub **v16.5**、`hx-rules` **v9.2**。GitHub 後備 → Vercel。唔開 Chrome。

- **Setting Accounts 可改：** 「3. Accounts」點帳戶＝載入 Staff #／role 去下面改（唔即刻彈頁面）。**Update account** 儲存 Staff #（可改號碼）同 role；**Edit pages** 先開頁面清單；新 Staff # 仍係 **Add account**。最後仍要 Setting **Save** 寫伺服器。hub **v16.4**、`hx-rules` **v9.1**。GitHub 後備 → Vercel。唔開 Chrome。

- **VHHH Line MX Weekly Auth · 按 report date 比較／補漏：** Compare／Import 以 PDF／report 日期排序（唔係 upload 時間）；「最新」＝已存最新日期、「上一個」＝次新日期。補入中間一週會插入日期槽，重算該週 vs 上一日、以及下一較新週 vs 補入週（例：先 10 再 24 → 24 vs 10；後補 17 → live 變 24 vs 17；history 批次掛喺較新文件日期）。同日後 upload 覆蓋該日。舊週 history（09.03／09.10 等）保留。週 archive 存 browser `localStorage` weeks＋snapshots／seed 預設。Auth **v1.9**、hub **v16.3**（`?v=1.9`）。GitHub 後備 → Vercel。唔開 Chrome。

- **Uploaded 日期時間顯示：** CT／Mandatory／UAL 檔列表同 ingest 狀態嘅 `formatUploadedAt` 由 `DD-MM-YY HH:MM` 改為 `DD-MM-YYYY HH:MM`（本地時間；標籤仍係 Uploaded）。唔改 course due 日期格式。TOV **v15.1**、hub **v16.2**（`?v=15.1`）。GitHub 後備 → Vercel。唔開 Chrome。

## 2026-09-29 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Detail 欄 grow／scroll + sync：** Overdue remaining min **52px**（原 104 一半）；Coming due remaining 仍 104。闊窗 `width:100%` 按比例拉；窄窗唔縮欄、橫向 scroll。Owner `me` 可寫 Edge；冇 GH token 唔當 Save failed。Sync 失敗根因：Edge 曾 500／WORKER_ERROR（壞 bootstrap／placeholder）；而家 `/gate/public`＋lite **200**（Edge **v22**，`verify_jwt` 關）。**SYN ALL：** 伺服器已有完整板（UAL＋CT×2＋OMT×1＋manual＋status）；agent 無密碼唔 PUT、唔發明資料。TOV **v15.0**、`hx-rules` **v9.0**；hub `?v=` cache-bust（page-version 仍 **v16.1**）。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Save failed 文案 + Edge sync：** Dialog 標題 **Save failed**；正文 **Could not reach the server. This upload is saved in this browser only.**；紅字 **WARNING: The information on this page is not accurate yet.**（`is`／information，唔用 numbers／are）。原因：頁面 PUT Supabase Edge `team-board`；`catch`＝fetch 丟錯（CORS／WORKER_ERROR）。Live 曾被 placeholder／壞 bootstrap 蓋成 500；而家 `/gate/public` 同 lite GET **200**，OPTIONS 200，PUT 無 auth＝401。TOV **v14.9**（文案已喺盤）。唔開 Chrome。
## 2026-09-29 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS 去掉重複 PIN Reset：** Briefing and R&S `#brs-admin` 入面嘅 `#pin-vault`／PIN Reset 已刪；只留 hub **Setting** 第 4 段 PIN Reset。Staff Sign／Seen PIN 對話框、Unsign、create／edit／materials 保留。BRS **v4.6**、`hx-rules` **v8.9**；hub `?v=` cache-bust（page-version 仍 **v16.1**）。GitHub 後備。唔開 Chrome。

## 2026-09-29 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS Sign ↔ TOV Completed：** Supabase `hx_private` only。Manual **LM00183**→**BRS20260902**：before Signed 0/73 → after **4 signed / 69 outstanding**（對齊 TOV Completed 4 / outstanding 69）。Manual **T.EE0639**→**BRS20260903**：before Signed 0/78 → after **71 signed / 7 outstanding**（對齊 TOV Completed 71 / outstanding 7）。用 Completed `done` 做 `ackAt`；只寫 BRS ack signed；**manual 未刪**（仍 73／78 行）。唔改 HTML。唔開 Chrome。

- **Edge team-board 再修好：** 有人又部署咗 placeholder（`PLACEHOLDER_WILL_FAIL`，`/gate/public` 500）。已用完整 gate／pin／board 源再覆蓋（**v19**，`verify_jwt` 關）。`/gate/public` 200。GitHub 源 `HX/supabase-edge/team-board/index.ts` 已係正確版。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Setting：** Hub 頂欄 **Grant access** 改名 **Setting**。TOV 工具列 **Log** 搬入 Setting 第 5 段（開住 Training One View 先 Undo）。Manage 仍係 TOV 舊 browser-only access levels。Hub **v16.1**、TOV **v14.9**、`hx-rules` **v8.8**。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Hub role Staff → Public（欄頭／id）+ Edge 修復：** Grant「2. Role pages」第三欄可見標籤 **Public**（唔再 Staff）；Accounts 下拉／帳戶列表／頂欄 role 名同一規則；role id `public`；讀舊 `staff` 當 public；Save 寫 `public`。唔改 Staff #／staff name／PIN。BRS 可見標籤 **BRS Ref. No.**（存檔 `code`／編號規則不變；TOV 欄頭仍 Course code）。Public 簽收 4–6 位密碼／PIN Reset Password set／Not set 保留。誤部署 Edge placeholder 已用完整 `team-board` 源覆蓋（**v16**，`verify_jwt` 關；`/gate/public` 200）。hub **v16.0**、BRS **v4.5**、`hx-rules` **v8.7**、TOV **v14.8**（含並行 sync 文案微調）。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV sync feedback + Team 頭 + Completed 規矩：** Push-failed dialog 加紅字 `WARNING: Until sync succeeds, the numbers on this page are not accurate.`（保留 browser-saved 句）。進行中卡右下 icon＝橙 ×（唔用 …）。揀中 Team／Other 表頭亮青綠 `#00a8ad`、暫時唔用紅外框；未揀 `#015260`。Completed：畫面約 30 日；背底永久（已只係隱藏，冇刪）。TOV **v14.7**、hub **v15.9**、`hx-rules` **v8.5**。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS 標籤：BRS Number／Course name：** Create／edit／list／Admin 可見標籤 Item number→**BRS Number**、Title→**Course name**（存檔 `code`／`title` 同編號規則不變）。TOV 欄頭仍 **Course code**。Due Date YYYY-MM-DD（`c576864`）保留。BRS **v4.3**、`hx-rules` **v8.3**；hub cache-bust `?v=`（hub page-version 仍 **v15.7**）。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS Due Date 跟 TOV + Add link 在上：** Create／edit Due Date 同 TOV Add course（placeholder **YYYY-MM-DD**、打數字自動連字號、可空；存仍 YYYY-MM-DD；唔 native date）。Add link 仍喺 Materials 上面。BRS **v4.2**、`hx-rules` **v8.2**；hub cache-bust `?v=`（hub page-version 仍 **v15.7**）。唔改 TOV。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS editor · Add link 在上：** Create／edit 材料區 **Add a link**／**Add link** 移到 **Materials** 列表上面（行為不變、唔 drop 檔）。BRS **v4.1**、`hx-rules` **v8.1**；hub cache-bust `?v=` 對齊（hub page-version 仍 **v15.7**）。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV filter 紅框 + Manual Detail 三欄：** 非預設 narrowing filter（Search／Sources／Section／Team·Other／role／Show completed）紅外框；掣 **Save as default**／**Restore original**（廠預設：Search 空、Sources All、Section OCG、all teams、role All、Show completed off）。有效預設存 browser `localStorage`（登入後 `hx:team-board:filter-default:<staff#>`；冇 staff 用無後綴 key）。唔經新 Edge／唔寫 `hx_test`。Manual outstanding 行而家填 Course code＋due＋remaining（以前 remain 唔係 ≤30「hot」就留空）。TOV **v14.5**、hub **v15.7**、`hx-rules` **v8.0**。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Grant access 頁面拖曳次序：** Public view 同 Role pages 共用一個 `pageOrder`（拖曳即兩邊同步；Save 寫入 gate）。側欄跟已存次序。Hub **v15.6**、`hx-rules` **v7.9**。Edge `team-board` **v13** 已部署（`verify_jwt` 關；含 `pageOrder`；曾誤部署 placeholder 已即刻用完整源覆蓋）。`/gate/public` 200。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Edge team-board 修好：** 誤部署空／placeholder 導致 `/gate/public`／`/gate/login` WORKER_ERROR 500。已用完整 gate／pin／board 源再部署（v11，`verify_jwt` 關）。`/gate/login` Owner 帳戶驗證 OK。GitHub `HX/supabase-edge/team-board/index.ts` 對齊已部署版。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS from manuals：** 由 Manual courses **LM00183**、**T.EE0639** 各建一個已確認 BRS（`BRS20260902`／`BRS20260903`）；人手／title 跟 manual；未 Seen／Signed；**manual 未刪**。Supabase `hx_private`（`__hx_shared__/briefing-read-sign`）。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Detail 欄＋三卡 sync：** 表頭 **Section (Crew)**；格 `LTA1 (1E)`（只顯示）。Course code **186px**（+33%）；remaining 兩欄＝due-day **104px**。UAL／CT／Mandatory 同步入三張上載卡（淡青綠灰卡面；未同步橙＋右下綠／橙 icon）；刪大 banner。TOV **v14.4**、hub **v15.5**、`hx-rules` **v7.8**。保留 Grant access 本機改動一齊上。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Grant access 版面：** 分開 Public view、Role pages 表（Admin／DM/DIC／Staff × 頁面）、Accounts（加人之後先彈頁面）、PIN Reset。Hub **v15.4**、`hx-rules` **v7.7**。Edge `team-board` 會一併存 `rolePages`。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Owner 可見名：** 角色 `me` 畫面顯示 **Owner - Siu Chung**（頂欄、Grant 下拉）。Hub **v15.3**、`hx-rules` **v7.6**。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **PIN Reset 入 Admin + 四 role 登入：** Briefing and R&S **PIN Reset** 搬入 `#brs-admin` 管理版面（唔再獨立右上）。Hub 四 role：Me／Admin／DM/DIC／Staff；Log in＝Staff #＋6 位密碼（似 BRS PIN）；Grant access 授 staff #／頁／動作。帳戶 hash 喺 gate JSON（Edge `team-board` `/gate/login` `/gate/set-password` `/gate/accounts`；CORS `x-hx-staff`）。BRS **v4.0**、TOV **v14.3**、hub **v15.2**、`hx-rules` **v7.5**。GitHub 後備。**Edge 未部署**：呢部機冇 Supabase access token（`supabase login`／`SUPABASE_ACCESS_TOKEN`）；源碼已 commit，要喺有 token 嘅機 `supabase functions deploy team-board --project-ref kcoszufshvvpxikpzlue --no-verify-jwt`。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Hub 登入：** Edge `team-board` 已部署（`verify_jwt` 關，同之前）。Me 帳戶密碼已按用戶要求重設，唔使再強制改密碼。`/gate/login` 可用。GitHub 源碼之前已 push。唔寫密碼。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Detail 欄寬鎖定：** Detail 表 `table-layout: fixed`＋固定 px col 寬（跟 UAL 可見時緊密佈局）。UAL 四欄只一齊 show／唔 render；隱藏時其他欄唔拉闊。可留右空或橫向 scroll。保留空格灰底 `blank`。TOV **v14.2**、hub **v15.1**、`hx-rules` **v7.4** 紅字。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV Detail 空 course／due 格灰底：** Course code／Overdue due day／remaining／Coming due courses／day／remaining 空值 → class `blank`（`#e4e4e4`）。有值保持原色。唔灰 Staff #／Name／Team／Section + Crew／UA Employee #。Cards 同等空格同一規則。TOV **v14.1**、hub **v15.0**、`hx-rules` **v7.3** 紅字。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Materials 標籤（檔 vs 資料夾）：** URL／path 有副檔名 → 解碼檔名；冇副檔名／folder → 可見字 **Material Folder**。TOV 材料彈窗 + BRS detail／材料列表。TOV **v14.0**、BRS **v3.9**、hub **v14.9**、`hx-rules` **v7.2** 紅字。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS Save vs Save Draft：** 未確認 draft 有改動 → **Save Draft**；已確認 item 再開 edit 有改動 → **Save**（同一 persist）。兩者都配 Close without saving；冇改動只 Close。BRS **v3.8**、hub **v14.8**、`hx-rules` **v7.1** 紅字。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **PIN Reset 右上 + Unsign：** PIN Reset 留喺 BRS 頁內容區右上。Admin Staff # / Group 清 Seen／Signed 掣改名 **Unsign**（唔改其他 Clear；Remove 不變）。BRS **v3.7**、hub **v14.7**、`hx-rules` **v7.0** 紅字。GitHub 後備。唔開 Chrome。
- **同 push · TOV Detail 欄：** Overdue courses 表頭改 **Course code**；UA Employee #／Coming due 三欄同 UAL 來源一齊顯示／隱藏。TOV **v13.9**。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **PIN Reset 位置：** Briefing and R&S 頁內容區右上（edit unlock；唔喺 create／edit 下面；唔加 hub 頂欄）。行為不變（Refresh／search／reset；唔顯示 PIN／hash）。BRS **v3.6**、hub **v14.6**、`hx-rules` **v6.9** 紅字。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Sign with PIN：** 對話只可用 Cancel 或 × 關閉（點外面／Escape／數字鍵唔關）。錯 PIN 先顯示要搵 OCG Office reset。唔加 Forgot password。TOV **v13.8**、Briefing and R&S **v3.5**、hub **v14.5**、`hx-rules` **v6.8**。GitHub 後備。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS editor 修訂：** Title／Due Date 同行對齊；Due Date 改文字欄 YYYYMMDD（內部仍存 YYYY-MM-DD）；打字唔再自動 scroll。材料顯示解碼檔名（Admin／detail；TOV 本來已係）。Drag 重排 materials 修復。關閉掣：有改動＝Save Draft＋Close without saving；冇改動＝Close（刪 Draft and Close）。BRS **v3.4**、hub **v14.4**、`hx-rules` **v6.7** 紅字。GitHub 後備；Live Vercel。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **VHHH Line MX Weekly Auth · Due Date badge：** Difference history Change 標籤 DUE→**Due Date**；行／badge／legend 由紅粉改藍（`#1d4e89`／`#e7f0fa`），唔當 overdue。比較數據唔改。頁 **v1.8**、hub **v14.3**、`hx-rules` **v6.6** 紅字。GitHub 後備；Live Vercel。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **BRS materials + Due Date：** 材料紅字「After you finish reading, remember to Sign.」；材料 1. 2. 3.…＋分隔；Admin 可 drag 改次序並 save。Create／edit 加可空 Due Date（`dueDate`）→ TOV due day 欄。Add course 標籤改 Due Date（原 Expire date）。BRS **v3.3**、TOV **v13.7**、hub **v14.2**、`hx-rules` **v6.5**。GitHub 後備；Live Vercel。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **Briefing and R&S：** 可見名改 Briefing and R&S。Item number 固定 `BRS`＋年月＋兩位（例 BRS20260901）；舊 BF／RS 讀入後存成 BRS。Admin：Create New BRS／Create BRS／Draft and Close／Delete BRS；Materials 只 Add link；唔再 People 標題；PIN Reset；刪三段說明 intro。BRS **v3.2**、record **v1.6**、TOV **v13.6**、hub **v14.1**、`hx-rules` **v6.4** 紅字。GitHub 後備；Live Vercel。唔開 Chrome。

## 2026-09-28 屋企（Desktop-Yanson · `C:\Cursor_Work\MACHINE.md`）

- **TOV 同步 banner：** 頁頂常駐提示。綠 Synchronized＝UAL／CT Reminder／Mandatory 同 Supabase 一樣；橙 Not synchronized（紅＝失敗）＝只喺呢個 browser。本機上傳時間較新時唔再被舊伺服器檔蓋過；可按 Synchronize now（要 Unlock）。關頁未同步會再問。TOV **v13.5**、hub **v14.0**、`hx-rules` **v6.3** 紅字。GitHub 後備；Live Vercel。冇改 Supabase 資料。唔開 Chrome。

## 2026-09-28 公司電腦

- **刪 hub `#fth-rewrite`：** 卡片「KE FTH self-audit rewrite」已刪；頁 `HX/ke-fth-self-audit-rewrite.html` 一併刪；`links` 列、`hx-rules`／README／rules 例外提及已清。hub v13.9、`hx-rules` v6.2、`links` v2.9。

## 2026-09-28 公司電腦

- **UA Employee # 欄：** Detail 表只喺有揀 UAL 來源（含 All）時顯示；冇揀 UAL 就隱藏表頭同儲存格。Cards 本來冇呢欄。TOV v13.4、hub v13.8。

## 2026-09-28 公司電腦

- **材料彈窗檔名：** Briefing／Read & Sign 材料列表可見文字改為原檔名（`fileName`／`name` 等；URL 則抽 path 檔名），唔顯示完整 URL，亦唔用「Material Link」。href 仍開真實連結。TOV v13.2、hub v13.6。

## 2026-09-28 公司電腦

- **材料彈窗連結標籤：** Briefing／Read & Sign 材料列表，link 類型可見文字改為「Material Link」，唔再顯示完整 URL；href 仍開真實連結。TOV v13.1、hub v13.5。

## 2026-09-28 公司電腦

- **Completed 保留 30 日：** Completed 預設隱藏；Detail 有 Show／Hide completed (≤30 days)。超過 30 日唔再顯示。Outstanding 人數唔計。TOV v13.1、hub v13.5、`hx-rules` v6.1。

## 2026-09-28 公司電腦

- **Training One View 材料彈窗：** 刪咗「Open Briefing & Read & Sign」同「Open record」。材料連結同 Close 留低。TOV v13.0、hub v13.4。

## 2026-09-28 公司電腦

- **Copy layout：** 標題有 Staff # 時，複製圖唔再把編號同姓名畫疊，職員編號保持 6 位數字。Training One View v12.9、hub v13.3。唔寫職員明細。

## 2026-09-28 公司電腦

- **完成日規則：** 俾 Completion Date → 新 Due 預設 +2 年（講明 +X 年就用 X）。剩餘 ≤30 日或已過期 = 紅；>30 且 ≤90 = 黃；多過 90 日由 Outstanding 移除。Manual 剩餘 ≤90 日唔因為 Completed 收起。`hx-rules` v6.0、hub v13.2、Training One View v12.8。
- **已套用：** LM00183 四個已有完成日的人，Due 改為完成日 +2 年（2028），繼續 Completed、不在 Outstanding。T.EE0639 的 Due 原本已是 +2 年；剩餘 ≤30 日的留在名單，多過 90 日的維持 Completed。CT／OMT 冇改。唔寫職員明細。

## 2026-09-28 公司電腦

- **T.EE0639 Manual 補 5 行：** Downloads `EE0639.xlsx` 有、截圖 Excel 冇嘅 5 個職員，加 Manual 行＋Completed；Due＝完成日+2年；Remark `EK Audit Check`。截圖多出嘅 2024 完成紀錄 ignore（+2年已過期）。EE0639 Manual 73→78；全 Manual 147→152。仍未完成 3 人（Due 2026-10-02）。CT／OMT 冇改。唔寫職員明細。

## 2026-09-28 公司電腦

- **T.EE0639 已過新到期日：** 完成日 + 2 年若已到（4 人，Due 2026-04-17），狀態由 Completed 改回 Not Started，Remark 仍 `EK Audit Check`，Due 冇改。Outstanding 會再顯示。未到到期日嘅 Completed 保持收起。Manual 行數冇改。CT／OMT 冇改。唔寫職員明細。

## 2026-09-28 公司電腦

- **Manual remark：** LM00183（73）同 T.EE0639（73）嘅 Remark 全部改為 `EK Audit Check`。已有 Completed 同完成日保留（74）。Manual 仍 147。CT／OMT 冇改。唔寫職員明細。

## 2026-09-28 公司電腦

- **T.EE0639 Manual：** 用 `C:\Cursor_Work\T_EE0639_Completions.xlsx` 的 Completion Date 更新已在板上的 Manual 行。狀態 Completed；新 Due = 完成日 + 2 年。73 行入面更新 70；3 行唔喺檔案，Due 仍 2026-10-02、未改狀態。檔案有 11 個職員唔喺 Manual 名單，冇加新行。Manual 仍 147。CT 478+3625、OMT 87 冇改。唔寫職員明細。

## 2026-09-28 公司電腦

- **LM00183 係 Manual 行，唔係 CT。** 先前完成日寫咗 `staff|LM00183|ct`，所以搜尋呢科仍然 Not Started、Outstanding 仍係 73。已改寫 `staff|LM00183|manual` = Completed（同一 4 個職員、同一完成日），並刪走錯誤嘅 ct 鍵。Manual 仍 147 行；CT 478+3625、OMT 87 冇改。刷新後呢科未完成人數應為 69。唔寫職員明細。

## 2026-09-28 公司電腦

- **TOV 完成日：** OSD 圖入面 course `LM00183`（EK Emirates eTechLog Training）寫入 Supabase status，4 個對應職員編號設為 Completed，並用圖上 Completion Date。Course List 加咗呢一科（而家 182 行）。**冇**改 UAL／CT／Mandatory／manual 行數（CT 478+3625、OMT 87、manual 147）。唔寫 `hx_test`。唔寫職員明細。
- 呢科原本唔喺各人未完成清單。Status 已存；之後 CT 檔出現同一職員＋`LM00183` 就會當完成，唔會再當未做。GitHub 只加呢條 handover。唔開 Chrome。

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
