import './12.css';
import * as React from 'react';
import video from './assets/video.mp4';
import playIcon from './assets/play.png';
import pauseIcon from './assets/pause.png';
import stopIcon from './assets/stop.png';

function App() {
  const [isActive, setIsActive] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  function handleControls(evt) {
    const evtType = evt.type;
    if (evtType === 'mouseover' || evtType === 'focus') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function handlePlay() {
    videoRef.current.play();
    setIsPlaying(true);
  }

  function handlePause() {
    videoRef.current.pause();
    setIsPlaying(false);
  }

  function handleStop() {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  }

  return (
    <div
      className="video-player"
      tabIndex={0}
      onMouseOver={handleControls}
      onMouseOut={handleControls}
      onFocus={handleControls}
      onBlur={handleControls}
    >
      <video ref={videoRef} src={video} />
      <Controls
        isActive={isActive}
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onStop={handleStop}
      />
    </div>
  );
}

function Controls(props) {
  const { isActive, isPlaying, onPlay, onPause, onStop } = props;
  return (
    <div className={`controls ${isActive ? 'controls--active' : ''}`}>
      {isPlaying ? (
        <img
          alt=""
          className="controls__button"
          onClick={onPause}
          src={pauseIcon}
        />
      ) : (
        <img
          alt=""
          className="controls__button"
          onClick={onPlay}
          src={playIcon}
        />
      )}
      <img
        alt=""
        className="controls__button"
        onClick={onStop}
        src={stopIcon}
      />
    </div>
  );
}

export default App;
