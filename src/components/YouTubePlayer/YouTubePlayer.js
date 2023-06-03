import YouTube from 'react-youtube';

const onReady = event => {
  // access to player in all event handlers via event.target
  event.target.playVideo();
  // event.target.pauseVideo();
  console.log(event.target);
};

export const YouTubePlayer = ({ videoId, width, height }) => {
  console.log('Загрузка');
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
