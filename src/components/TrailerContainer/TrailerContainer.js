import PropTypes from 'prop-types';
import { YouTubePlayer } from 'components/YouTubePlayer/YouTubePlayer';
import { createPortal } from 'react-dom';
import { Modal } from 'components/Modal/Modal';

export const TrailerContainer = ({ isShow, backdrop, video }) => {
  return createPortal(
    <Modal onActive={isShow} backdrop={backdrop}>
      {video !== '' ? (
        <YouTubePlayer videoId={video} />
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
