import {
  ExpenseForm_default,
  Modal_default,
  require_validation
} from "/build/_shared/chunk-GX2TROY6.js";
import {
  require_expenses
} from "/build/_shared/chunk-PQTATYW2.js";
import {
  useNavigate
} from "/build/_shared/chunk-T6PJC2MH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/__app/expenses/$id.jsx
var import_expenses = __toESM(require_expenses());
var import_validation = __toESM(require_validation());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ExpensesUpdatePage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var id_default = ExpensesUpdatePage;
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/__app/expenses/$id-54QVU2FQ.js.map