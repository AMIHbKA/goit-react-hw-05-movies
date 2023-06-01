import { IMAGES_URL } from 'services/api/api';
import { MovieWrapper, MovieDetailsContainer } from './MovieCardStyled';
import defaultPoster from '../../images/placeholders/poster-placeholder.jpg';
import { YouTubePlayer } from 'components/YouTubePlayer/YouTubePlayer';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { useParams } from 'react-router-dom';

export const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  // const [watchTrailer, setWatchTrailer] = useState(false)
  const { movieId } = useParams();
  const onShowModal = () => {
    setShowModal(state => !state);
  };
  console.log("MovieCard movieId", movieId)
  // useEffect(() => {
  //   if (!showModal) {
  //     return;
  //   }

  //   const getTrailer = async () => {
  //     try {

  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }

  // })

  const { genres, title, vote_average, poster_path, overview, backdrop_path } =
    movie;
  const imageSrc = poster_path
    ? `${IMAGES_URL}/w300${poster_path}`
    : defaultPoster;
  const imageAlt = poster_path ? `${title} poster` : 'No poster';
  const backdrop = backdrop_path
    ? `${IMAGES_URL}/w500${backdrop_path}`
    : 'none';

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
              <YouTubePlayer videoId="BdJKm16Co6M" width={640} height={360} />
            </Modal>,
            document.body
          )}
      </MovieDetailsContainer>
    </MovieWrapper>
  );
};
