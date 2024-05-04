import { Link } from '@remix-run/react';

function Logo() {
  return (
    <Link id="logo" to="/">
      <img src="images/logo_transparent.png" alt="logo" height={72} />
    </Link>
  );
}

export default Logo;
