import { useParams } from 'react-router-dom';
import * as API from 'services/api/api';
import { useState, useEffect } from 'react';
import defaultProfileWoman from '../../images/placeholders//Blank_woman.svg';
import defaultProfileMan from '../../images/placeholders/Blank_man.svg';
import defaultProfileNoGender from '../../images/placeholders/Blank_noGender.svg';
import { CastListStyled } from './Cast.styled';
import { SkeletonCast } from 'components/Skeleton/SkeletonCast';
import PropTypes from 'prop-types';

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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setLoading(true);
        const response = await API.getMovieCredits(movieId);
        setMovieCast(response.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getMovieCast();

    return () => {
      API.abortController.abort();
    };
  }, [movieId]);

  return (
    <CastListStyled>
      {isLoading && <SkeletonCast cards={4} />}
      {!isLoading && movieCast.length === 0 ? (
        <p className="no-cast">
          We don't have information about casting for this movie{' '}
        </p>
      ) : (
        movieCast.map(({ name, character, profile_path, id, gender }) => {
          const imageSrc = profile_path
            ? `${API.IMAGES_URL}w185/${profile_path}`
            : defaultImage(gender);
          const imageAlt = profile_path ? `${name} profile` : 'No image';

          return (
            <li className="cast-item" key={id}>
              <img className="avatar" src={imageSrc} alt={imageAlt} />
              <div className="actor-card">
                <p className="actor-name">{name}</p>
                <p className="character-name">{character}</p>
              </div>
            </li>
          );
        })
      )}
    </CastListStyled>
  );
};

Cast.propTypes = {
  movieCast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      id: PropTypes.number.isRequired,
      gender: PropTypes.number,
    })
  ),
};
