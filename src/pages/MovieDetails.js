import { useRef, Suspense, useState, useEffect } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import * as API from '../services/api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledLink, BackLink } from 'components/UI/GlobalStyles/Links';
import { List } from './MovieDetails.styled';

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
      <div>Movie Details</div>
      {Object.keys(movieDetails).length > 0 ? (
        <MovieCard movie={movieDetails} />
      ) : (
        <div>Loading movie details...</div>
      )}
      <h2>Additional information</h2>
      <List>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
