import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './UI/GlobalStyles/GlobalStyles';
import { SkeletonTheme } from 'react-loading-skeleton';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const Cast = lazy(() =>
  import('./Cast/Cast').then(module => {
    console.log(module);
    return {
      ...module,
      default: module.Cast,
    };
  })
);

const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => {
    console.log(module);
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
      <SkeletonTheme baseColor="#c5c5c5" highlightColor="#b4afb0">
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
    </>
  );
};
