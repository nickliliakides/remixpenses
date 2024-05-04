import {
  Link,
  NavLink,
  Outlet
} from "/build/_shared/chunk-G67Z7VJI.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/__marketing.jsx
var import_react3 = __toESM(require_react());

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/components/util/Logo.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "RemixExpenses" }, void 0, false, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Logo_default = Logo;

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function MainHeader() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo_default, {}, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/pricing", children: "Pricing" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: "/expenses", children: "Expenses" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/auth", className: "cta", children: "Login" }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 23,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/routes/__marketing.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var MarketingLayout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainHeader_default, {}, void 0, false, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__marketing.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};
var marketing_default2 = MarketingLayout;
var links = () => {
  return [{ rel: "stylesheet", href: marketing_default }];
};
export {
  marketing_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/__marketing-X2BLUAH4.js.map
