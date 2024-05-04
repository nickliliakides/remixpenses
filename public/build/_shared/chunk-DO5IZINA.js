import {
  Link,
  useActionData,
  useSubmit
} from "/build/_shared/chunk-LX4ZSHW7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/expenses/ExpenseForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10);
  const validationErrors = useActionData();
  const submit = useSubmit();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "form", id: "expense-form", onSubmit: submitHandler, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true, maxLength: 30 }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 21,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "amount", name: "amount", min: "0", step: "0.01", required: true }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 22,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", id: "date", name: "date", max: today, required: true }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: error }, error, false, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Save Expense" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseForm.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseForm.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var ExpenseForm_default = ExpenseForm;

// app/components/util/Modal.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Modal({ children, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "dialog",
    {
      className: "modal",
      open: true,
      onClick: (event) => event.stopPropagation(),
      children
    },
    void 0,
    false,
    {
      fileName: "app/components/util/Modal.jsx",
      lineNumber: 4,
      columnNumber: 7
    },
    this
  ) }, void 0, false, {
    fileName: "app/components/util/Modal.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
var Modal_default = Modal;

export {
  ExpenseForm_default,
  Modal_default
};
//# sourceMappingURL=/build/_shared/chunk-DO5IZINA.js.map