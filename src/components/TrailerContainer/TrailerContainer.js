import PropTypes from 'prop-types';
import { YouTubePlayer } from 'components/YouTubePlayer/YouTubePlayer';
import { createPortal } from 'react-dom';
import { Modal } from 'components/Modal/Modal';

const getDisplayResolution = () => {
  const height = Math.floor((window.innerHeight / 10) * 9);
  const width = Math.floor((window.innerWidth / 10) * 9);
  let ratioHeight = Math.floor(width / 1.77);
  let ratioWidth = width;

  if (ratioHeight > height) {
    ratioHeight = height;
    ratioWidth = Math.floor(height * 1.77);
  }

  return { ratioWidth, ratioHeight };
};

export const TrailerContainer = ({ isShow, backdrop, video }) => {
  const { ratioWidth, ratioHeight } = getDisplayResolution();

  console.log(ratioWidth, ratioHeight);
  return createPortal(
    <Modal onActive={isShow} backdrop={backdrop}>
      {video !== '' ? (
        <YouTubePlayer
          videoId={video}
          width={ratioWidth}
          height={ratioHeight}
        />
      ) : (
        <div>Oops! Something went wrong</div>
      )}
    </Modal>,
    document.body
  );
};

TrailerContainer.propTypes = {
  isShow: PropTypes.func.isRequired,
  backdrop: PropTypes.string,
  video: PropTypes.string.isRequired,
};
