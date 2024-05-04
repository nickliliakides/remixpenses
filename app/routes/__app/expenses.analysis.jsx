import { json } from '@remix-run/node';
import { Link, useCatch, useLoaderData } from '@remix-run/react';
import Chart from '~/components/expenses/Chart';
import ExpenseStatistics from '~/components/expenses/ExpenseStatistics';
import Error from '~/components/util/Error';
import { requireUserSession } from '~/data/auth.server';
import { getExpenses } from '~/data/expenses.server';

const ExpensesAnalysisPage = () => {
  const expenses = useLoaderData();

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
};

export default ExpensesAnalysisPage;

export const loader = async ({ request }) => {
  const userId = await requireUserSession(request);
  const expenses = await getExpenses(userId);
  if (!expenses || expenses.length === 0)
    throw json(
      {
        message: 'Could not load expenses for analysis.',
      },
      {
        status: 404,
        statusText: 'Expenses not found.',
      },
    );
  return expenses;
};

export const CatchBoundary = () => {
  const caughtResponse = useCatch();
  return (
    <main>
      <Error title={caughtResponse.statusText}>
        <p>{caughtResponse.data?.message || "Something went wrong, couldn't load expenses."}</p>
        {caughtResponse.data?.message && (
          <p>
            Start <Link to="/expenses/add">adding some</Link> today.
          </p>
        )}
      </Error>
    </main>
  );
};
