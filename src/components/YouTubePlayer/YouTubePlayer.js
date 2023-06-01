import YouTube from 'react-youtube';

const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

export const YouTubePlayer = ({videoId}) => {
console.log("Загрузка")
  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    
    return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
}

