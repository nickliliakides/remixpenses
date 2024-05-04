import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-RZOM75KA.js";
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ExpensesUpdatePage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/__app/expenses/$id.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};
var id_default = ExpensesUpdatePage;
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/__app/expenses/$id-W7ZDKG4O.js.map
