import { prisma } from './database.server';

export const getExpenses = async (userId) => {
  try {
    const expenses = await prisma.expense.findMany({ where: { userId }, orderBy: { date: 'desc' } });
    return expenses;
  } catch (error) {
    throw new Error('Failed to retrieve expenses.');
  }
};

export const getExpense = async (id) => {
  try {
    const expense = await prisma.expense.findFirst({ where: { id } });
    return expense;
  } catch (error) {
    throw new Error('Failed to get expense.');
  }
};

export const addExpense = async (expense, userId) => {
  try {
    return await prisma.expense.create({
      data: {
        title: expense.title,
        amount: +expense.amount,
        date: new Date(expense.date),
        User: { connect: { id: userId } },
      },
    });
  } catch (error) {
    throw new Error('Failed to add expense.');
  }
};

export const updateExpense = async (id, expense) => {
  try {
    await prisma.expense.update({
      where: { id },
      data: {
        title: expense.title,
        amount: +expense.amount,
        date: new Date(expense.date),
      },
    });
  } catch (error) {
    throw new Error('Failed to update expense.');
  }
};

export const deleteExpense = async (id) => {
  try {
    await prisma.expense.delete({ where: { id } });
  } catch (error) {
    throw new Error('Failed to delete expense.');
  }
};
