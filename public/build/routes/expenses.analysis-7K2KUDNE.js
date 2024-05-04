import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/expenses.analysis.jsx
var import_react2 = __toESM(require_react());

// app/components/expenses/ChartBar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";
  if (maxValue > 0) {
    barFillHeight = Math.round(value / maxValue * 100) + "%";
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chart-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chart-bar--inner", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "chart-bar--fill",
        style: { height: barFillHeight }
      },
      void 0,
      false,
      {
        fileName: "app/components/expenses/ChartBar.jsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chart-bar--label", children: label }, void 0, false, {
      fileName: "app/components/expenses/ChartBar.jsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ChartBar.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var ChartBar_default = ChartBar;

// app/components/expenses/Chart.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Chart({ expenses }) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];
  for (const expense of expenses) {
    const expenseMonth = new Date(expense.date).getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Monthly Expenses" }, void 0, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ol", { className: "chart", children: chartDataPoints.map((dataPoint) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      ChartBar_default,
      {
        value: dataPoint.value,
        maxValue: totalMaximum,
        label: dataPoint.label
      },
      dataPoint.label,
      false,
      {
        fileName: "app/components/expenses/Chart.jsx",
        lineNumber: 32,
        columnNumber: 11
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/expenses/Chart.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/Chart.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
var Chart_default = Chart;

// app/components/expenses/ExpenseStatistics.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function calculateSummaryStatistics(expenses) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;
  return { minAmount, maxAmount, sum, mean };
}
function ExpenseStatistics({ expenses }) {
  const { minAmount, maxAmount, sum, mean } = (0, import_react.useMemo)(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: "Summary Statistics" }, void 0, false, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dl", { id: "expense-statistics", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: "Total" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 24,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          sum.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: "Average" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          mean.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: " Min. Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          minAmount.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dt", { children: "Max. Amount" }, void 0, false, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("dd", { children: [
          "$",
          maxAmount.toFixed(2)
        ] }, void 0, true, {
          fileName: "app/components/expenses/ExpenseStatistics.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/expenses/ExpenseStatistics.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/expenses/ExpenseStatistics.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/expenses/ExpenseStatistics.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
var ExpenseStatistics_default = ExpenseStatistics;

// app/routes/expenses.analysis.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var MOCK_EXPENSES = [
  {
    id: "e1",
    title: "First expense",
    amount: 7.99,
    date: new Date().toISOString()
  },
  {
    id: "e2",
    title: "Second expense",
    amount: 15.29,
    date: new Date().toISOString()
  }
];
var ExpensesAnalysisPage = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Chart_default, { expense: MOCK_EXPENSES }, void 0, false, {
      fileName: "app/routes/expenses.analysis.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ExpenseStatistics_default, { expense: MOCK_EXPENSES }, void 0, false, {
      fileName: "app/routes/expenses.analysis.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/expenses.analysis.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};
var expenses_analysis_default = ExpensesAnalysisPage;
export {
  expenses_analysis_default as default
};
//# sourceMappingURL=/build/routes/expenses.analysis-7K2KUDNE.js.map
