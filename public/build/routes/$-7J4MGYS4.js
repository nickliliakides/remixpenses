import {
  useCatch
} from "/build/_shared/chunk-WSLGPWUI.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/$.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CatchBoundary = () => {
  var _a;
  const caughtResponse = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Error, { title: caughtResponse.statusText, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: ((_a = caughtResponse.data) == null ? void 0 : _a.message) || "Something went wrong. Please try again later." }, void 0, false, {
      fileName: "app/routes/$.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      "Back to ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: "Safety" }, void 0, false, {
        fileName: "app/routes/$.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      "."
    ] }, void 0, true, {
      fileName: "app/routes/$.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
export {
  CatchBoundary
};
//# sourceMappingURL=/build/routes/$-7J4MGYS4.js.map
