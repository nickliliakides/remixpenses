import {
  Error_default
} from "/build/_shared/chunk-ZOWSKJB6.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useMatches
} from "/build/_shared/chunk-WSLGPWUI.js";
import "/build/_shared/chunk-RDTVJ3NU.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/styles/shared.css
var shared_default = "/build/_assets/shared-C3ZI2LV5.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  charset: "utf-8",
  title: "Remix Expenses",
  viewport: "width=device-width,initial-scale=1"
});
var Document = ({ title, children }) => {
  const matches = useMatches();
  const disableJS = matches.some((match) => {
    var _a;
    return (_a = match.handle) == null ? void 0 : _a.disableJS;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: title }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 18,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", { href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap", rel: "stylesheet" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var CatchBoundary = () => {
  var _a;
  const caughtResponse = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: caughtResponse.statusText, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error_default, { title: caughtResponse.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again later." }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 49,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Safety" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 51,
        columnNumber: 21
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 50,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 48,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
};
var ErrorBoundary = ({ error }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: "Error occurred", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error_default, { title: "Error occurred", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error.message || "Something went wrong. Please try again later." }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 64,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Safety" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 21
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 65,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 63,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
};
var links = () => {
  return [{ rel: "stylesheet", href: shared_default }, {}];
};
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-K3VR7ZRE.js.map
