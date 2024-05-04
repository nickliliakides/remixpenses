import {
  FaExclamationCircle
} from "/build/_shared/chunk-RDTVJ3NU.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "/build/_shared/chunk-WSLGPWUI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/styles/shared.css
var shared_default = "/build/_assets/shared-GGRRQU2L.css";

// app/components/util/Error.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Error({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaExclamationCircle, {}, void 0, false, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: title }, void 0, false, {
      fileName: "app/components/util/Error.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    children
  ] }, void 0, true, {
    fileName: "app/components/util/Error.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Error_default = Error;

// app/root.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var Document = ({ title, children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap", rel: "stylesheet" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 21,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/root.jsx",
  lineNumber: 12,
  columnNumber: 3
}, this);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 33,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
var CatchBoundary = () => {
  const caughtResponse = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Error_default, { title: caughtResponse.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", {}, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", children: "Safety" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 45,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 43,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
};
var ErrorBoundary = () => {
};
function links() {
  return [{ rel: "stylesheet", href: shared_default }];
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-S4BUEBV5.js.map
