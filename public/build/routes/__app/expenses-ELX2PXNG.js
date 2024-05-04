import {
  require_expenses
} from "/build/_shared/chunk-PQTATYW2.js";
import {
  require_auth
} from "/build/_shared/chunk-CE64HNUM.js";
import {
  Link,
  Outlet,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-WSLGPWUI.js";
import {
  FaDownload,
  FaPlus
} from "/build/_shared/chunk-RDTVJ3NU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/expenses/ExpenseListItem.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExpenseListItem({ id, title, amount }) {
  const fetcher = useFetcher();
  function deleteExpenseItemHandler() {
    const proceed = confirm("Are you sure you want to delete this item?");
    if (!proceed)
      return;
    fetcher.submit(null, { method: "delete", action: `/expenses/${id}` });
  }
  if (fetcher.state !== "idle") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "expense-item locked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Deleting..." }, void 0, false, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "expense-item", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "expense-title", children: title }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "expense-amount", children: [
        "\xA3",
        amount.toFixed(2)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("menu", { className: "expense-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: deleteExpenseItemHandler, children: "Delete" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: id, children: "Edit" }, void 0, false, {
        fileName: "app/components/expenses/ExpenseListItem.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseListItem.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseListItem.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var ExpenseListItem_default = ExpenseListItem;

// app/components/expenses/ExpensesList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function ExpensesList() {
  const expenses = useLoaderData();
  console.log("\u{1F680} ~ file: ExpensesList.jsx:7 ~ ExpensesList ~ expenses:", expenses);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { id: "expenses-list", children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExpenseListItem_default, { id: expense.id, title: expense.title, amount: expense.amount }, void 0, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 12,
    columnNumber: 11
  }, this) }, expense.id, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this)) }, void 0, false, {
    fileName: "app/components/expenses/ExpensesList.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var ExpensesList_default = ExpensesList;

// app/routes/__app/expenses.jsx
var import_auth = __toESM(require_auth());
var import_expenses = __toESM(require_expenses());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var ExpensesLayout = () => {
  const expenses = useLoaderData();
  const hasExpenses = expenses && expenses.length > 0;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__app/expenses.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "expenses-actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "add", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaPlus, {}, void 0, false, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 17,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Add expense" }, void 0, false, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 18,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "/expenses/raw", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FaDownload, {}, void 0, false, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 21,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Load Raw Data" }, void 0, false, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 22,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 20,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      hasExpenses ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExpensesList_default, {}, void 0, false, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 26,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { id: "no-expenses", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "No expenses found" }, void 0, false, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
          "Start ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "add", children: "adding some" }, void 0, false, {
            fileName: "app/routes/__app/expenses.jsx",
            lineNumber: 31,
            columnNumber: 21
          }, this),
          " today."
        ] }, void 0, true, {
          fileName: "app/routes/__app/expenses.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/__app/expenses.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/__app/expenses.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app/expenses.jsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
};
var expenses_default = ExpensesLayout;
export {
  expenses_default as default
};
//# sourceMappingURL=/build/routes/__app/expenses-ELX2PXNG.js.map
