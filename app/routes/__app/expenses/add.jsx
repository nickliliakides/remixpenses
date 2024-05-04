import React from 'react';
import { useNavigate } from '@remix-run/react';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';
import { addExpense } from '~/data/expenses.server';
import { redirect } from '@remix-run/node';
import { validateExpenseInput } from '~/data/validation.server';
import { requireUserSession } from '~/data/auth.server';

const ExpensesAddPage = () => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate('..');
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export const action = async ({ request }) => {
  const userId = await requireUserSession(request);
  const formData = await request.formData();
  const expense = Object.fromEntries(formData);

  try {
    validateExpenseInput(expense);
  } catch (error) {
    return error;
  }

  await addExpense(expense, userId);
  return redirect('/expenses');
};

export default ExpensesAddPage;
