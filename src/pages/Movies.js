import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SkeletonStyle } from 'components/Skeleton/Skeleton.styled';
import { SkeletonCard } from 'components/Skeleton/SkeletonCard';
import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../services/api/api';
import { NoSearchResults } from './MovieDetails.styled';
import PropTypes from 'prop-types';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      setMovies([]);
      return;
    }

    const getMovieBySearch = async () => {
      try {
        setLoading(true);
        const response = await API.searchMovies(query);
        setMovies(response.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovieBySearch();

    return () => {
      API.abortController.abort();
    };
  }, [query]);

  const renderItems = movies.length > 0;
  const search = searchParams.get('query');

  return (
    <Container>
      <SearchForm query={query} setSearchParams={setSearchParams} />
      {isLoading && (
        <SkeletonStyle>
          <SkeletonCard cards={5} />
        </SkeletonStyle>
      )}

      {!renderItems && search !== null && (
        <NoSearchResults className="no-cast">
          No results from the search "{search}"
        </NoSearchResults>
      )}
      {!isLoading && <MovieList movies={movies} />}
    </Container>
  );
};

Movies.propTypes = {
  movies: PropTypes.array,
};

export default Movies;
