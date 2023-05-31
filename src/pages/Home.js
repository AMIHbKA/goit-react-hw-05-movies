import { MovieList } from 'components/MovieList/MovieList';
import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { useState, useEffect } from 'react';
import * as API from '../services/api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const response = await API.getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrends();
  }, []);

  const renderItems = movies.length > 0;

  return <Container>{renderItems && <MovieList movies={movies} />}</Container>;
};

export default Home;
