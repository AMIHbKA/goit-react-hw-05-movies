import { useRef, Suspense, useState, useEffect } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import * as API from '../services/api/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { StyledLink } from 'components/UI/GlobalStyles/Links';

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
      <Link to={backLinkLocationRef.current}>Back to Page</Link>
      <div>Movie Details</div>
      {Object.keys(movieDetails).length > 0 ? (
        <MovieCard movie={movieDetails} />
      ) : (
        <div>Loading movie details...</div>
      )}
      <h2>Additional information</h2>
      <ul>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
