import { redirect } from '@remix-run/node';
import { Link, useCatch } from '@remix-run/react';
import Error from '~/components/util/Error';

export const loader = ({ params }) => {
  if (params['*'] === 'exp') {
    return redirect('/expenses');
  }

  return null;
};

export const CatchBoundary = () => {
  const caughtResponse = useCatch();
  return (
    <Error title={caughtResponse.statusText}>
      <p>{caughtResponse.data?.message || 'Something went wrong. Please try again later.'}</p>
      <p>
        Back to <Link to="/">Safety</Link>.
      </p>
    </Error>
  );
};
