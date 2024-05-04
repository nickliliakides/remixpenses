import {
  ExpenseForm_default,
  Modal_default
} from "/build/_shared/chunk-XMR3F7MV.js";
import {
  useNavigate
} from "/build/_shared/chunk-PITW4BKO.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/expenses/$id.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ExpensesUpdatePage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { onClose: closeHandler, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExpenseForm_default, {}, void 0, false, {
    fileName: "app/routes/expenses/$id.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/expenses/$id.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};
var id_default = ExpensesUpdatePage;
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/expenses/$id-NAGXXFI6.js.map
