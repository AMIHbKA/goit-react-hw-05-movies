import { IMAGES_URL } from 'services/api/api';
import { MovieWrapper, MovieDetailsContainer } from './MovieCardStyled';
import defaultPoster from '../../images/placeholders/poster-placeholder.jpg';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TrailerContainer } from 'components/TrailerContainer/TrailerContainer';
import { getMovieTrailer } from '../../services/api/api';
import {
  getContrastColor,
  getDominantColorFromImage,
} from 'services/utilities';
import { theme } from 'components/UI/Themes/theme';

export const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);
  const { movieId } = useParams();

  const onShowModal = () => {
    setShowModal(s => !s);
  };

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getTrailer = async () => {
      try {
        const response = await getMovieTrailer(movieId);
        setMovieTrailers(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrailer();
  }, [movieId]);

  useEffect(() => {
    if (!movieTrailers.length) return;
    const officialTrailer = movieTrailers.find(({ name }) =>
      name.toLowerCase().includes('official')
    );
    const firstOfficialTrailerKey = officialTrailer
      ? officialTrailer.key
      : null;
    setTrailerKey(firstOfficialTrailerKey);
  }, [movieTrailers]);

  const { genres, title, vote_average, poster_path, overview, backdrop_path } =
    movie;
  const imageSrc = poster_path
    ? `${IMAGES_URL}/w300${poster_path}`
    : defaultPoster;
  const imageAlt = poster_path ? `${title} poster` : 'No poster';
  const backdrop = backdrop_path
    ? `${IMAGES_URL}/w500${backdrop_path}`
    : 'none';

  return (
    <MovieWrapper $backdrop={backdrop}>
      <MovieDetailsContainer>
        <img
          className="poster"
          src={imageSrc}
          alt={imageAlt}
          width="300"
          height="450"
        />
        <div className="movie-info">
          <h2 className="title">{title}</h2>
          <p className="scores">
            User scores: <span>{(vote_average * 10).toFixed(0)}%</span>
          </p>
          {genres.length && (
            <p className="genres ">
              <span>Genres:</span> {genres.map(({ name }) => name).join(', ')}
            </p>
          )}
          {trailerKey && (
            <button className="watch" type="button" onClick={onShowModal}>
              Watch Trailer
            </button>
          )}
          <h3 className="overview-title">Overview</h3>
          <p className="overview-text">{overview}</p>
        </div>

        {showModal && (
          <TrailerContainer
            isShow={onShowModal}
            backdrop={backdrop}
            video={trailerKey}
          />
        )}
      </MovieDetailsContainer>
    </MovieWrapper>
  );
};
