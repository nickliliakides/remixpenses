import {
  Form,
  Link,
  useActionData,
  useMatches,
  useNavigation,
  useParams
} from "/build/_shared/chunk-WSLGPWUI.js";
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
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const params = useParams();
  const matches = useMatches();
  console.log("\u{1F680} ~ file: ExpenseForm.jsx:10 ~ ExpenseForm ~ matches:", matches);
  const expenses = matches.find((match) => match.id === "routes/__app/expenses").data;
  const expense = expenses.find((expense2) => expense2.id === params.id);
  if (params.id && !expense) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Expense not found!" }, void 0, false, {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 14,
      columnNumber: 12
    }, this);
  }
  const defaultValues = {
    title: (expense == null ? void 0 : expense.title) || "",
    amount: (expense == null ? void 0 : expense.amount) || "",
    date: (expense == null ? void 0 : expense.date) || ""
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Form,
    {
      method: expense ? "patch" : "post",
      className: "form",
      id: "expense-form",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "title", children: "Expense Title" }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "title", name: "title", required: true, maxLength: 30, defaultValue: defaultValues.title }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "amount", children: "Amount" }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "amount", name: "amount", min: "0", step: "0.01", required: true, defaultValue: defaultValues.amount }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "date", children: "Date" }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 50,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", id: "date", name: "date", max: today, required: true, defaultValue: defaultValues.date.slice(0, 10) || "" }, void 0, false, {
              fileName: "app/components/expenses/ExpenseForm.jsx",
              lineNumber: 51,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 44,
          columnNumber: 7
        }, this),
        validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: error }, error, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 57,
          columnNumber: 13
        }, this)) }, void 0, false, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 55,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Saving..." : "Save Expense" }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "..", children: "Cancel" }, void 0, false, {
            fileName: "app/components/expenses/ExpenseForm.jsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseForm.jsx",
          lineNumber: 61,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/expenses/ExpenseForm.jsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
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
//# sourceMappingURL=/build/_shared/chunk-WNRBROR7.js.map
