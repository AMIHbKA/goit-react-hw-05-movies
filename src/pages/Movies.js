import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../services/api/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) {
      return;
    }

    const getMovieBySearch = async () => {
      try {
        const response = await API.searchMovies(query);
        setMovies(response.results);
      } catch (error) {}
    };

    getMovieBySearch();
  }, [searchParams]);

  const onHandleSubmit = query => {
    const newSearch = query.searchMovie;
    if (newSearch === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ query: newSearch });
    }
  };

  const renderItems = movies.length > 0;
  return (
    <Container>
      <SearchForm onSubmit={onHandleSubmit} />
      {renderItems && <MovieList movies={movies} />}
    </Container>
  );
};

export default Movies;
