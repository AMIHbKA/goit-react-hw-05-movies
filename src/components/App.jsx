import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './UI/GlobalStyles/GlobalStyles';
import { SkeletonTheme } from 'react-loading-skeleton';
import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './UI/Themes/theme';
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const Cast = lazy(() =>
  import('./Cast/Cast').then(module => {
    return {
      ...module,
      default: module.Cast,
    };
  })
);

const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => {
    return {
      ...module,
      default: module.Reviews,
    };
  })
);

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <SkeletonTheme
          baseColor={theme.colors.mainColor}
          highlightColor="#b4afb0"
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </SkeletonTheme>
      </ThemeProvider>
    </>
  );
};
