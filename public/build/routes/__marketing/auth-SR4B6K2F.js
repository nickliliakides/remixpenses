import {
  FaLock
} from "/build/_shared/chunk-HEXRPWEV.js";
import {
  Link,
  useSearchParams
} from "/build/_shared/chunk-VA4HTJ7X.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__marketing/auth.jsx
var import_react2 = __toESM(require_react());

// app/components/auth/AuthForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaLock, {}, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Login" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "?mode=", children: "Log in with existing user" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/styles/auth.css
var auth_default = "/build/_assets/auth-7ZCCMTFI.css";

// app/routes/__marketing/auth.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var AuthPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthForm_default, {}, void 0, false, {
    fileName: "app/routes/__marketing/auth.jsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
};
var auth_default2 = AuthPage;
function links() {
  return [{ rel: "stylesheet", href: auth_default }];
}
export {
  auth_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/__marketing/auth-SR4B6K2F.js.map
