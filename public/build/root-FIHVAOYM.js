import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-PITW4BKO.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/styles/shared.css
var shared_default = "/build/_assets/shared-GGRRQU2L.css";

// app/components/util/Logo.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Logo() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { id: "logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", children: "RemixExpenses" }, void 0, false, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/util/Logo.jsx",
    lineNumber: 3,
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
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { id: "main-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 10,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/pricing", children: "Pricing" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/expenses", children: "Expenses" }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/navigation/MainHeader.jsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { id: "cta-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/auth", className: "cta", children: "Login" }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 23,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/navigation/MainHeader.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/navigation/MainHeader.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var MainHeader_default = MainHeader;

// app/root.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MainHeader_default, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-FIHVAOYM.js.map
