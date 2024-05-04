import {
  Outlet
} from "/build/_shared/chunk-MTVX2FZQ.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/expenses.jsx
var import_react2 = __toESM(require_react());

// app/components/expenses/ExpenseListItem.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExpenseListItem({ title, amount }) {
  function deleteExpenseItemHandler() {
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "expense-amount", children: [
        "$",
        amount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tbd", children: "Edit" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ExpensesList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    ExpenseListItem_default,
    {
      id: expense.id,
      title: expense.title,
      amount: expense.amount
    },
    void 0,
    false,
    {
      fileName: "app/components/expenses/ExpensesList.jsx",
      lineNumber: 9,
      columnNumber: 11
    },
    this
  ) }, expense.id, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var ExpensesList_default = ExpensesList;

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/routes/expenses.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var ExpensesLayout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/expenses.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExpensesList_default, {}, void 0, false, {
      fileName: "app/routes/expenses.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/expenses.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var expenses_default2 = ExpensesLayout;
function links() {
  return [{ rel: "stylesheet", href: expenses_default }];
}
export {
  expenses_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/expenses-TJMIT2JC.js.map
