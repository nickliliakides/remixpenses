import {
  FaLock,
  FaUserPlus
} from "/build/_shared/chunk-RDTVJ3NU.js";
import {
  Form,
  Link,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-TAD65HRK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/components/auth/AuthForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();
  const authMode = searchParams.get("mode") || "login";
  const isLoginMode = authMode === "login";
  const submitBtnCaption = isLoginMode ? "Login" : "Register";
  const toggleBtnCaption = isLoginMode ? "Create new user" : "Log in existing user";
  const isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-img", children: isLoginMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaLock, {}, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 16,
      columnNumber: 48
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaUserPlus, {}, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 16,
      columnNumber: 61
    }, this) }, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabed: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: isLoginMode ? "?mode=signup" : "?mode=login", children: toggleBtnCaption }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 15,
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
    lineNumber: 5,
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
//# sourceMappingURL=/build/routes/__marketing/auth-ULZY3KT3.js.map
