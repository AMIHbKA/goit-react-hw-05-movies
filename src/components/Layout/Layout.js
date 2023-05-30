import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/UI/GlobalStyles/Links';

export const Layout = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
