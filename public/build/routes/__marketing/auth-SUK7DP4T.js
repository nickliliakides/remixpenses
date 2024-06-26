import {
  require_validation
} from "/build/_shared/chunk-ORVPAIGU.js";
import {
  require_auth
} from "/build/_shared/chunk-CE64HNUM.js";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams
} from "/build/_shared/chunk-WSLGPWUI.js";
import {
  FaLock,
  FaUserPlus
} from "/build/_shared/chunk-RDTVJ3NU.js";
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
  const validationErrors = useActionData();
  const authMode = searchParams.get("mode") || "login";
  const isLoginMode = authMode === "login";
  const submitBtnCaption = isLoginMode ? "Login" : "Register";
  const toggleBtnCaption = isLoginMode ? "Create new user" : "Log in existing user";
  const isSubmitting = navigation.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "form", id: "auth-form", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "icon-img", children: isLoginMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaLock, {}, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 48
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FaUserPlus, {}, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 61
    }, this) }, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", children: "Email Address" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", children: "Password" }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", id: "password", name: "password", minLength: 7 }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    validationErrors && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: Object.values(validationErrors).map((error) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: error }, error, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-actions", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { disabled: isSubmitting, children: isSubmitting ? "Authenticating..." : submitBtnCaption }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: isLoginMode ? "?mode=signup" : "?mode=login", children: toggleBtnCaption }, void 0, false, {
        fileName: "app/components/auth/AuthForm.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/auth/AuthForm.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/auth/AuthForm.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var AuthForm_default = AuthForm;

// app/routes/__marketing/auth.jsx
var import_auth = __toESM(require_auth());
var import_validation = __toESM(require_validation());

// app/styles/auth.css
var auth_default = "/build/_assets/auth-NVLDMSJW.css";

// app/routes/__marketing/auth.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var AuthPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AuthForm_default, {}, void 0, false, {
    fileName: "app/routes/__marketing/auth.jsx",
    lineNumber: 7,
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
//# sourceMappingURL=/build/routes/__marketing/auth-SUK7DP4T.js.map
