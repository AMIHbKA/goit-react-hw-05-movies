import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../services/api/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    console.log('query', query);
    if (!query) {
      console.log('Empty Query');
      return;
    }
  });
  const onHandleSubmit = query => {
    console.log('submit in form');
    const newSearch = query.searchMovie;
    if (newSearch === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ query: newSearch });
    }
  };

  const renderItems = movies.length > 0;
  return (
    <>
      <SearchForm onSubmit={onHandleSubmit} />
      {renderItems && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
