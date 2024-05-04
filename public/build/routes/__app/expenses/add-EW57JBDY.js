import {
  require_expenses
} from "/build/_shared/chunk-PQTATYW2.js";
import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-RZOM75KA.js";
import {
  useNavigate
} from "/build/_shared/chunk-T6PJC2MH.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/data/validation.server
var require_validation = __commonJS({
  "empty-module:~/data/validation.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/__app/expenses/add.jsx
var import_react = __toESM(require_react());
var import_expenses = __toESM(require_expenses());
var import_validation = __toESM(require_validation());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ExpensesAddPage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 17,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};
var add_default = ExpensesAddPage;
export {
  add_default as default
};
//# sourceMappingURL=/build/routes/__app/expenses/add-EW57JBDY.js.map
