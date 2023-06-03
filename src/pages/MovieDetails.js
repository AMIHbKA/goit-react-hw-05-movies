import { useRef, Suspense, useState, useEffect } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import {
  IMAGES_URL,
  getMovieDetails,
  abortController,
} from '../services/api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledLink, BackLink } from 'components/UI/GlobalStyles/Links';
import { List, Title } from './MovieDetails.styled';
import { Container } from 'components/UI/GlobalStyles/Container.styled';
import { SkeletonDetails } from 'components/Skeleton/SkeletonDetails';
import PropTypes from 'prop-types';
import { getDynamicColors } from 'services/utilities';
import { theme } from 'components/UI/Themes/theme';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setLoading(true);
        const response = await getMovieDetails(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMovie();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  useEffect(() => {
    if (!Object.keys(movieDetails).length) return;

    const { backdrop_path } = movieDetails;
    const backdrop = backdrop_path
      ? `${IMAGES_URL}/w500${backdrop_path}`
      : 'none';

    if (backdrop === 'none') return;
    getDynamicColors(backdrop);
    console.log('backdrop useeffect');
  }, [movieDetails]);

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>&#10232; Back</BackLink>
      {isLoading && <SkeletonDetails />}
      {!isLoading && Object.keys(movieDetails).length > 0 && (
        <MovieCard movie={movieDetails} />
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
          {!isLoading && <Outlet />}
        </Container>
      </Suspense>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieId: PropTypes.number,
};
