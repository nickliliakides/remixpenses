import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { deleteExpense, updateExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';
// import { getExpense } from "~/data/expenses.server";

const ExpensesUpdatePage = () => {
  const navigate = useNavigate();
  // const expense = useLoaderData();

  const closeHandler = () => {
    navigate('..');
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpensesUpdatePage;

export const action = async ({ params, request }) => {
  const expenseId = params.id;
  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
      validateExpenseInput(expenseData);
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
  } else {
    await deleteExpense(expenseId);
  }

  return redirect('/expenses');
};

export const meta = ({ params, location, data, parentsData }) => {
  // console.log('🚀 ~ file: $id.jsx:47 ~ meta ~ data:', data);
  // console.log('🚀 ~ file: $id.jsx:47 ~ meta ~ location:', location);
  // console.log('🚀 ~ file: $id.jsx:47 ~ meta ~ params:', params);
  // console.log('🚀 ~ file: $id.jsx:47 ~ meta ~ parentsData:', parentsData);
  const expense = parentsData['routes/__app/expenses'].find((expense) => expense.id === params.id);
  return {
    title: expense.title,
    description: 'Update expense.',
  };
};
