import React from 'react';
import { Outlet } from '@remix-run/react';
import marketingStyles from '~/styles/marketing.css';
import MainHeader from '~/components/navigation/MainHeader';
import { getUserFromSession } from '~/data/auth.server';

const MarketingLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MarketingLayout;

export const loader = ({ request }) => {
  return getUserFromSession(request);
};

export const links = () => {
  return [{ rel: 'stylesheet', href: marketingStyles }];
};

export function headers() {
  return {
    'Cache-Control': 'max-age=3600', //60 mins
  };
}
