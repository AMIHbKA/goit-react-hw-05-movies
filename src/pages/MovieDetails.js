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
import {
  getContrastColor,
  getDominantColorFromImage,
} from 'services/utilities';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [contrastColor, setContrastColor] = useState('');
  const [mainColor, setmainColor] = useState('');

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
      ? `${IMAGES_URL}w185${backdrop_path}`
      : 'none';

    if (backdrop === 'none') return;

    const getColors = async () => {
      const mainColor = await getDominantColorFromImage(backdrop);
      const contrastColor = getContrastColor(mainColor);
      setContrastColor(contrastColor);
      setmainColor(mainColor);
    };

    getColors();
  }, [movieDetails]);

  return (
    <>
      {isLoading && <SkeletonDetails />}
      {!isLoading && (
        <BackLink
          to={backLinkLocationRef.current}
          $primary={mainColor}
          $secondary={contrastColor}
        >
          &#10232; Back
        </BackLink>
      )}
      {Object.keys(movieDetails).length > 0 && (
        <MovieCard
          movie={movieDetails}
          $primary={mainColor}
          $secondary={contrastColor}
        />
      )}

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  movieId: PropTypes.number,
};
