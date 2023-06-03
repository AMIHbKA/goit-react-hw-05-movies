import YouTube from 'react-youtube';
import { usePlayerSize } from '../../Hooks/useWindowSize';

const onReady = event => {
  // access to player in all event handlers via event.target
  event.target.playVideo();
  // event.target.pauseVideo();
};

export const YouTubePlayer = ({ videoId }) => {
  const [width, height] = usePlayerSize();

  const opts = {
    height: `${height}`,
    width: `${width}`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};
