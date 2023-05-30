import { Link, useLocation } from 'react-router-dom';
import { MovieListStyled } from './MovieList.styled';
import { IMAGES_URL } from 'services/api/api';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(movies);
  return (
    <MovieListStyled>
      {movies?.map(({ id, title, poster_path }) => {
        const imageSrc = `${IMAGES_URL}w185/${poster_path}`;
        const imageAlt = `${title} poster`;

        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={imageSrc} alt={imageAlt} />
              {title}
            </Link>
          </li>
        );
      })}
    </MovieListStyled>
  );
};
