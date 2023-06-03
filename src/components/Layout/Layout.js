import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from 'components/UI/GlobalStyles/Links';
import { Header } from './Layout.styled';
import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { Loader } from 'components/Loader/Loader';

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
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </ul>
        </Container>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
