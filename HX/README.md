# HX

工作檔放呢度。家庭頁喺 `main` 根目錄。

**總入口（揀主題）：** [hx.html](hx.html)

各頁仍可單獨打開：

- [HX file index / Master links](links.html)
- [Authorization Process Flow](authorization-process-flow.html)
- [Authorization Training Management Process](authorization-training-process.html)
- [EASA / HKAR / CX / HAECO Documentation Hierarchy](easa-cx-hk-document-hierarchy.html)
- [LM audit / visitor schedule](lm-audit-schedule.html)
- [All-source Training (UAL / CT / Mandatory / Manual)](hx.html#team-board) — [standalone page](training-team-board.html)
- [Course List (Name / Code / Type / Interval)](hx.html#courses) — [standalone page](course-catalog.html)
- [OCG Name List (Crew List / Name List / Full List)](ocg-pax-mechanics-list.html)
- [零碎筆記 / Scratch notes](scratch-notes.html)（畫面唔顯示 記下／日期時間／caption；時間喺頁內 hidden `#scratch-ledger`，問先答）
- [HX 規矩（跨機）](hx-rules.html)（紅字＝呢部機新加；另一部機對齊用）

## Working rules

- After every local HX / repo update that should live on GitHub, **commit and `git push` immediately** (same turn). Do not leave work only on this PC. If several versions were never pushed, **push the latest** (one commit of current state is enough — do not invent one commit per missed version). Do not push secrets (`.env`, passwords, credentials). Do not force-push. Do not skip hooks unless the user asked.
- 每次本機更新（應上 GitHub 嘅 HX／倉資料）**即刻 commit + push**，唔好只留喺呢部機。之前漏咗就 **push 而家最新**（一次 commit 夠）。唔 push 秘密；唔 force；唔 skip hooks（除非用戶叫）。
- After an HX update, **do not open a new browser / Chrome**. Tell the user the **page version number(s)** in the chat. The user will **manually refresh** the tab they already have.
- **English-only pages:** `hx.html#links` / `#flow` / `#training` / `#audit` / `#team-board` / `#courses` / `#ocg-pax` and those HTML files must be English UI. Staff Chinese names stay. Not this rule: `#docs` / `#tooling` / `#fth-rewrite` / `#scratch` / `#rules`.
- 改完 HX **唔好開新 browser / Chrome**。喺對話講 **version 號** 就得；用戶自己 refresh 已開嘅 tab。
- **Ingest reject (no silent skip):** If the designed parser cannot recognize a row or cannot complete a required step, **popup and reject the entire file**. Do not skip unknown rows and still update. User must fix the source (or the parser / `CODE_RE`) first. Examples: unknown staff (UAL), unknown course code, missing usual columns, unreadable file.
- 認唔到或做唔到必要步驟 → 彈窗、整份檔 REJECT、唔寫入。唔好跳過認唔到嘅行仲 UPDATE。UAL OCG Functional Area only：LM OCG AV / LM OCG PAX AF / LM OCG AF / LM OCG Management。**145 & OCG Planning = PLANNING**，唔係 OCG。真正 OCG 人唔喺 Name List → 彈窗；橙色 Override 確認後只入 Name List。唔識 course code／檔壞／0 個 OCG 行 → 硬 reject。UAL 回覆串：最上封最新，要 `From:` 下一行 `Sent:` 先切開（唔好單憑 From:），忽略舊 trail。人名彈窗 2–6 可 Override；檔壞／唔識 code（7）硬 reject。CT／Mandatory 全 LM export：Transit／非 OCG 唔當 reject（板面之後 filter）；認唔到 staff # 或冇 course code 先 reject 整份。

## 規則改咗要全 HX 跟

Name list / PAX / CG / 角色 / staff # 有新規則，唔好只改一頁。要一齊對：

- `hx.html` 側欄名、blurb、`?v=`
- `ocg-pax-mechanics-list.html`（Crew List 係 PAX 來源）
- `training-team-board.html`（UAL CBT + CT Reminder + Mandatory；`PAX` 跟 Crew List；Team 1–4 / Other 用 Name List）
- `course-catalog.html`（Course List：Name / Code / Type / Interval；course 冇 Expiry；board Mandatory 空白 Course Name 跟 Code 對呢頁）
- 呢份 README / `links.html` 用詞

而家規則：staff # 6 位；CHIU = 303173；**OCG = CG + PAX**（總數 / All，唔係第三類）；人只係 **CG** 或 **PAX**；PAX = Crew List（包 FLS / RF）；CG = Name List 唔喺 Crew List；例外 **236051 CHAN SIU CHUNG** 係 PAX 但唔喺 Crew List（唔好自己加去出街 Crew List）；Certifiers = Licensed / Assistant Licensed Engineer / Controller / Duty in Charge（包 Deputy DIC、OCG PAX/CARGO/UPS DIC）；Mechanics 包 Supervisor；Office = Manager / Assistant Manager / support / liaison / project officer / operations officer（唔包 Controller、唔包 DIC）。Counter / filter：**OCG | CG | PAX**。欄名 **CG/PAX**，值只係 CG 或 PAX。改 version **唔清**已載入嘅 UAL / CT / Mandatory / Course List。

新資訊先對 HTML。預設只改背底（group／Remark／邏輯 PAX）；已出街嘅 Team／Shift／姓名唔好自己改，等下次正式更新。有 Team／Shift／session／名單出入要先講。

## 加新 HX HTML

1. 把新 `.html` 放呢個 `HX/` folder（唔好放 repo 根目錄）。
2. 打開 `hx.html`，喺 `TOPICS` 加一行，例如：

```js
{ id: "new-id", file: "new-page.html", title: "顯示名", blurb: "一句" }
```

3. 細改 version：`hx.html` 右下角 +0.1。
4. xlsx / docx 連結一律用 Office 網上檢視，唔好貼 github.io 直接檔案（會 download）。格式：`Open online (view): [filename] — browser view, no download`，href 用 `https://view.officeapps.live.com/op/view.aspx?src=` + URL-encoded github.io 檔案位址。
