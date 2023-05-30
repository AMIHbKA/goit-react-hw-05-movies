import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/UI/GlobalStyles/Links';
import { Header } from './Layout.styled';
import { Container } from 'components/UI/GlobalStyles/Container.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};
