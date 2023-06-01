import { IMAGES_URL } from 'services/api/api';
import { MovieWrapper, MovieDetailsContainer } from './MovieCardStyled';
import defaultPoster from '../../images/placeholders/poster-placeholder.jpg';
import { YouTubePlayer } from 'components/YouTubePlayer/YouTubePlayer';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(state => !state);
  };


  const { genres, title, vote_average, poster_path, overview, backdrop_path } =
    movie;
  
  const imageSrc = poster_path
    ? `${IMAGES_URL}/w300${poster_path}`
    : defaultPoster;
  const imageAlt = poster_path ? `${title} poster` : 'No poster';
  const backdrop = backdrop_path
    ? `${IMAGES_URL}/w500${backdrop_path}`
    : '#fff';
  
  console.log('backdrop', backdrop);
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
          <h3 className="overview-title">Overview</h3>
          <p className="overview-text">{overview}</p>
        </div>
        <button type="button" onClick={onShowModal}>Watch Trailer</button>
        {showModal &&
          createPortal(
            <Modal onActive={onShowModal} backdrop={backdrop}>
              <YouTubePlayer videoId="BdJKm16Co6M" />
            </Modal>,
            document.body
          )}
      </MovieDetailsContainer>
    </MovieWrapper>
  );
};
