import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-EEVWDVNZ.js";
import {
  useNavigate
} from "/build/_shared/chunk-VA4HTJ7X.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// empty-module:~/data/expenses.server
var require_expenses = __commonJS({
  "empty-module:~/data/expenses.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/__app/expenses/add.jsx
var import_react = __toESM(require_react());
var import_expenses = __toESM(require_expenses());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ExpensesAddPage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/expenses/add.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
var add_default = ExpensesAddPage;
export {
  add_default as default
};
//# sourceMappingURL=/build/routes/__app/expenses/add-DND77DHZ.js.map
