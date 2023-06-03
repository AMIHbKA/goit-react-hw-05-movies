import PropTypes from 'prop-types';
// import { YouTubePlayer } from 'components/YouTubePlayer/YouTubePlayer';
import { createPortal } from 'react-dom';
import { Modal } from 'components/Modal/Modal';
import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const YouTubePlayer = lazy(() =>
  import('../YouTubePlayer/YouTubePlayer').then(module => {
    return {
      ...module,
      default: module.YouTubePlayer,
    };
  })
);

export const TrailerContainer = ({ isShow, backdrop, video }) => {
  return createPortal(
    <Modal onActive={isShow} backdrop={backdrop}>
      <Suspense fallback={<Loader />}>
        <YouTubePlayer videoId={video} />
      </Suspense>
    </Modal>,
    document.body
  );
};

TrailerContainer.propTypes = {
  isShow: PropTypes.func.isRequired,
  backdrop: PropTypes.string,
  video: PropTypes.string.isRequired,
};
