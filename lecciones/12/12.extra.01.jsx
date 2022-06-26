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
    if (evtType === 'mouseenter' || evtType === 'focus') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  function handlePlay(evt) {
    const evtType = evt.type;
    const evtKeyCode = evt.keyCode;

    if (
      evtType === 'keydown' &&
      evtKeyCode !== 13 &&
      evtKeyCode !== 32
    )
      return;
    videoRef.current.play();
    setIsPlaying(true);
  }

  function handlePause(evt) {
    const evtType = evt.type;
    const evtKeyCode = evt.keyCode;
    if (
      evtType === 'keydown' &&
      evtKeyCode !== 13 &&
      evtKeyCode !== 32
    )
      return;
    videoRef.current.pause();
    setIsPlaying(false);
  }

  function handleStop(evt) {
    const evtType = evt.type;
    const evtKeyCode = evt.keyCode;
    if (
      evtType === 'keydown' &&
      evtKeyCode !== 13 &&
      evtKeyCode !== 32
    )
      return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  }

  return (
    <div
      className="video-player"
      tabIndex={0}
      onMouseEnter={handleControls}
      onMouseLeave={handleControls}
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
          onKeyDown={onPause}
          src={pauseIcon}
          tabIndex={0}
        />
      ) : (
        <img
          alt=""
          className="controls__button"
          onClick={onPlay}
          onKeyDown={onPlay}
          src={playIcon}
          tabIndex={0}
        />
      )}
      <img
        alt=""
        className="controls__button"
        onClick={onStop}
        onKeyDown={onStop}
        src={stopIcon}
        tabIndex={0}
      />
    </div>
  );
}

export default App;
