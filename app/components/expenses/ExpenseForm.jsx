import { Form, Link, useActionData, useMatches, useNavigation, useParams } from '@remix-run/react';

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-05-10
  const validationErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== 'idle';
  const params = useParams();
  const matches = useMatches();
  console.log('🚀 ~ file: ExpenseForm.jsx:10 ~ ExpenseForm ~ matches:', matches);
  const expenses = matches.find((match) => match.id === 'routes/__app/expenses').data;
  const expense = expenses.find((expense) => expense.id === params.id);
  if (params.id && !expense) {
    return <p>Expense not found!</p>;
  }

  const defaultValues = {
    title: expense?.title || '',
    amount: expense?.amount || '',
    date: expense?.date || '',
  };
  // const submit = useSubmit();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   submit(e.target, {
  //     // action: '/expenses/add',
  //     method: 'post'
  //   });
  // };

  return (
    <Form
      method={expense ? 'patch' : 'post'}
      className="form"
      id="expense-form"
      //  onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValues.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" name="amount" min="0" step="0.01" required defaultValue={defaultValues.amount} />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required defaultValue={defaultValues.date.slice(0, 10) || ''} />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? 'Saving...' : 'Save Expense'}</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
