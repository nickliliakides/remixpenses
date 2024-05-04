import React from "react";
import { Outlet } from "@remix-run/react";
import expenseStyles from "~/styles/expenses.css";
import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import { getUserFromSession } from "~/data/auth.server";

const ExpensesAppLayout = () => {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
};

export default ExpensesAppLayout;

export const loader = ({ request }) => {
  return getUserFromSession(request);
};

export const links = () => {
  return [{ rel: "stylesheet", href: expenseStyles }];
};
