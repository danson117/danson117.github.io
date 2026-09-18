# HX

工作檔放呢度。家庭頁喺 `main` 根目錄。

**總入口（揀主題）：** [hx.html](hx.html)

各頁仍可單獨打開：

- [HX file index / Master links](links.html)
- [Authorization Process Flow](authorization-process-flow.html)
- [Authorization Training Management Process](authorization-training-process.html)
- [EASA / HKAR / CX / HAECO Documentation Hierarchy](easa-cx-hk-document-hierarchy.html)
- [LM audit / visitor schedule](lm-audit-schedule.html)
- [LM Daily CT Reminder (overdue)](lm-daily-ct-reminder.html)
- [UAL CBT Training](ual-cbt-training.html)
- [OCG PAX Mechanics Name List](ocg-pax-mechanics-list.html)

## 加新 HX HTML

1. 把新 `.html` 放呢個 `HX/` folder（唔好放 repo 根目錄）。
2. 打開 `hx.html`，喺 `TOPICS` 加一行，例如：

```js
{ id: "new-id", file: "new-page.html", title: "顯示名", blurb: "一句" }
```

3. 細改 version：`hx.html` 右下角 +0.1。
4. xlsx / docx 連結一律用 Office 網上檢視，唔好貼 github.io 直接檔案（會 download）。格式：`Open online (view): [filename] — browser view, no download`，href 用 `https://view.officeapps.live.com/op/view.aspx?src=` + URL-encoded github.io 檔案位址。
