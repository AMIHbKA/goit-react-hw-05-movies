import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './UI/GlobalStyles/GlobalStyles';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SkeletonTheme } from 'react-loading-skeleton';

//ленивая загрузка и прерывание запросов

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
          </Route>
        </Routes>
      </SkeletonTheme>
    </>
  );
};
