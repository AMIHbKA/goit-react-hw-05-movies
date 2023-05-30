import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import * as API from '../services/api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const response = await API.getTrendingMovies();
        setMovies(response.results);
      } catch (error) {}
    };
    console.log('useEffect in Home');
    getTrends();
  }, []);

  const renderItems = movies.length > 0;

  return <>{renderItems && <MovieList movies={movies} />}</>;
};

export default Home;
