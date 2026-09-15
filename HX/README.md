# HX

工作檔放呢度。家庭頁喺 `main` 根目錄。

**總入口（揀主題）：** [hx.html](hx.html)

各頁仍可單獨打開：

- [Authorization Training Management Process](authorization-training-process.html)
- [EASA / HKAR / CX / HAECO Documentation Hierarchy](easa-cx-hk-document-hierarchy.html)
- [LM audit / visitor schedule](lm-audit-schedule.html)

## 加新 HX HTML

1. 把新 `.html` 放呢個 `HX/` folder（唔好放 repo 根目錄）。
2. 打開 `hx.html`，喺 `TOPICS` 加一行，例如：

```js
{ id: "new-id", file: "new-page.html", title: "顯示名", blurb: "一句" }
```

3. 細改 version：`hx.html` 右下角 +0.1。
