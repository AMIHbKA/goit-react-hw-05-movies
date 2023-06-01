import YouTube from 'react-youtube';
import * as API from '../../services/api/api';

const onReady = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

export const YouTubePlayer = ({ videoId, width, height }) => {



  console.log("Загрузка")
  const opts = {
    height: `${height}`,
    width: `${width}`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
}

