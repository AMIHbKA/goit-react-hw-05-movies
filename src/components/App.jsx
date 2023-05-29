import Home from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './UI/GlobalStyles/GlobalStyles';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import * as API from '../services/api/api';

export const App = () => {
  API.getMovieReviews(550);
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
