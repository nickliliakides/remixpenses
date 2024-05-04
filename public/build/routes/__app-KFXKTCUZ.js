import {
  Logo_default
} from "/build/_shared/chunk-TOQPFVB3.js";
import {
  require_auth
} from "/build/_shared/chunk-CE64HNUM.js";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  useLoaderData
} from "/build/_shared/chunk-WSLGPWUI.js";
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
  const userId = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/expenses", end: true, children: "Manage Expenses" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/expenses/analysis", children: "Analyze Expenses" }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/ExpensesHeader.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: !userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth", className: "cta", children: "Login" }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 27,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", id: "logout-form", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 31,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/ExpensesHeader.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/ExpensesHeader.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var ExpensesHeader_default = ExpensesHeader;

// app/routes/__app.jsx
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var ExpensesAppLayout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExpensesHeader_default, {}, void 0, false, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__app.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__app.jsx",
    lineNumber: 9,
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
//# sourceMappingURL=/build/routes/__app-KFXKTCUZ.js.map
