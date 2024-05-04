import {
  Logo_default
} from "/build/_shared/chunk-ENCMDRIK.js";
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

// app/routes/__marketing.jsx
var import_react2 = __toESM(require_react());

// app/styles/marketing.css
var marketing_default = "/build/_assets/marketing-RVXOO7W5.css";

// app/components/navigation/MainHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MainHeader() {
  const userId = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { id: "main-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo_default, {}, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/pricing", children: "Pricing" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/expenses", children: "Expenses" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 19,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: !userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth", className: "cta", children: "Login" }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 27,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", id: "logout-form", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "cta-alt", children: "Logout" }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 31,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/routes/__marketing.jsx
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var MarketingLayout = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MainHeader_default, {}, void 0, false, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/__marketing.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/__marketing.jsx",
    lineNumber: 9,
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
//# sourceMappingURL=/build/routes/__marketing-EHJM673S.js.map
