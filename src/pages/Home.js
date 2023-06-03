import { MovieList } from 'components/MovieList/MovieList';
import { SkeletonStyle } from 'components/Skeleton/Skeleton.styled';
import { SkeletonCard } from 'components/Skeleton/SkeletonCard';
import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { useState, useEffect } from 'react';
import * as API from '../services/api/api';
import PropTypes from 'prop-types';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getTrends = async () => {
      try {
        setLoading(true);
        const response = await API.getTrendingMovies();
        setMovies(response.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTrends();

    return () => {
      API.abortController.abort();
    };
  }, []);

  const renderItems = movies.length > 0;
  if (isLoading) {
    return (
      <Container>
        <SkeletonStyle>
          <SkeletonCard cards={20} />
        </SkeletonStyle>
      </Container>
    );
  } else {
    return (
      <Container>{renderItems && <MovieList movies={movies} />}</Container>
    );
  }
};

Home.propTypes = {
  movies: PropTypes.array,
};

export default Home;
