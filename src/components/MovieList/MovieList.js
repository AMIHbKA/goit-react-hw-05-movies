import { Link, useLocation } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';
import { IMAGES_URL } from 'services/api/api';
import defaultPoster from '../../images/placeholders/poster-placeholder.jpg';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListStyled>
      {movies?.map(({ id, title, poster_path }) => {
        console.log(poster_path);
        const imageSrc = poster_path
          ? `${IMAGES_URL}w185${poster_path}`
          : defaultPoster;
        const imageAlt = poster_path ? `${title} poster` : 'No poster';

        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={imageSrc} alt={imageAlt} />
              <p className="movie-name">{title}</p>
            </Link>
          </li>
        );
      })}
    </MovieListStyled>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
