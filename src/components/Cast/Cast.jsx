import { useParams } from 'react-router-dom';
import * as API from 'services/api/api';
import { useState, useEffect } from 'react';

export const Cast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const response = await API.getMovieCredits(movieId);
        setMovieCast(response.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovieCast();
  }, [movieId]);

  return (
    <ul>
      {movieCast?.map(({ name, character, profile_path }) => {
        return (
          <li>
            <img
              src={`${API.IMAGES_URL}w45/${profile_path}`}
              alt={`${name} profile`}
            />
            <p>
              Character: <span>{character}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
};
