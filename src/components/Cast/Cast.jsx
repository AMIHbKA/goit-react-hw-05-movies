import { useParams } from 'react-router-dom';
import * as API from 'services/api/api';
import { useState, useEffect } from 'react';
import defaultProfileWoman from '../../images/placeholders//Blank_woman.svg';
import defaultProfileMan from '../../images/placeholders/Blank_man.svg';
import defaultProfileNoGender from '../../images/placeholders/Blank_noGender.svg';
import { CastListStyled } from './Cast.styled';

const defaultImage = gender => {
  if (gender === 1) {
    return defaultProfileWoman;
  } else if (gender === 2) {
    return defaultProfileMan;
  }
  return defaultProfileNoGender;
};

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
    <CastListStyled>
      {movieCast?.map(({ name, character, profile_path, id, gender }) => {
        const imageSrc = profile_path
          ? `${API.IMAGES_URL}w185/${profile_path}`
          : defaultImage(gender);
        const imageAlt = profile_path ? `${name} profile` : 'No image';

        return (
          <li key={id}>
            <img src={imageSrc} alt={imageAlt} />
            <div className="actor-card">
              <p className="actor-name">{name}</p>
              <p className="character-name">{character}</p>
            </div>
          </li>
        );
      })}
    </CastListStyled>
  );
};
