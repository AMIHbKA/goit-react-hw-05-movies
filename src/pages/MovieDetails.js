import { useRef, Suspense, useState, useEffect } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import * as API from '../services/api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledLink, BackLink } from 'components/UI/GlobalStyles/Links';
import { List, Title } from './MovieDetails.styled';
import { Container } from 'components/UI/GlobalStyles/Container.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movieDetails, setMovieDetails] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const getMovieDetails = async () => {
      try {
        const response = await API.getMovieDetails(movieId);

        setMovieDetails(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setIsLoading(false);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>&#10232; Back</BackLink>

      {Object.keys(movieDetails).length > 0 ? (
        <MovieCard movie={movieDetails} />
      ) : (
        <div>Loading movie details...</div>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Title>Additional information</Title>
          <List>
            <li>
              <StyledLink to="cast">Cast</StyledLink>
            </li>
            <li>
              <StyledLink to="reviews">Reviews</StyledLink>
            </li>
          </List>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default MovieDetails;
