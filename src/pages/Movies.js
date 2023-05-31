import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SkeletonStyle } from 'components/Skeleton/Skeleton.styled';
import { SkeletonCard } from 'components/Skeleton/SkeletonCard';
import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../services/api/api';
import { NoSearchResults } from './MovieDetails.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) {
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
  if (isLoading) {
    return (
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        <SkeletonStyle>
          <SkeletonCard cards={5} />
        </SkeletonStyle>
      </Container>
    );
  } else {
    return (
      <Container>
        <SearchForm onSubmit={onHandleSubmit} />
        {renderItems ? (
          <MovieList movies={movies} />
        ) : (
          <NoSearchResults className="no-cast">
            No results from the search "{searchParams.get('query')}"
          </NoSearchResults>
        )}
      </Container>
    );
  }
};

export default Movies;
