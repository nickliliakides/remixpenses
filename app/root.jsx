import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useMatches } from '@remix-run/react';
import sharedStyles from '~/styles/shared.css';
import Error from './components/util/Error';

export const meta = () => ({
  charset: 'utf-8',
  title: 'Remix Expenses',
  viewport: 'width=device-width,initial-scale=1',
});

const Document = ({ title, children }) => {
  const matches = useMatches();
  const disableJS = matches.some((match) => match.handle?.disableJS);

  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {!disableJS && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export const CatchBoundary = () => {
  const caughtResponse = useCatch();
  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>{caughtResponse.data?.message || 'Something went wrong. Please try again later.'}</p>
          <p>
            Back to <Link to="/">Safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
};

export const ErrorBoundary = ({ error }) => {
  return (
    <Document title="Error occurred">
      <main>
        <Error title="Error occurred">
          <p>{error.message || 'Something went wrong. Please try again later.'}</p>
          <p>
            Back to <Link to="/">Safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
};

export const links = () => {
  return [{ rel: 'stylesheet', href: sharedStyles }, {}];
};
