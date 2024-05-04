import {
  Logo_default
} from "/build/_shared/chunk-V2PXWXRQ.js";
import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-2U5RWPTM.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__app.jsx
var import_react2 = __toESM(require_react());

// app/styles/expenses.css
var expenses_default = "/build/_assets/expenses-I2WWZSEC.css";

// app/components/navigation/ExpensesHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExpensesHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/expenses", end: true, children: "Manage Expenses" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "cta", children: "Logout" }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/__app.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ExpensesAppLayout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExpensesHeader_default, {}, void 0, false, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var app_default = ExpensesAppLayout;
var links = () => {
  return [{ rel: "stylesheet", href: expenses_default }];
};
export {
  app_default as default,
  links
};
//# sourceMappingURL=/build/routes/__app-VZCLWNRY.js.map
