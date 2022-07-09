import './12.css';
import * as React from 'react';
import video from './assets/video.mp4';
import playIcon from './assets/play.png';
import pauseIcon from './assets/pause.png';
import stopIcon from './assets/stop.png';

/*
  Ejercicio 12 ♿️

  1. Estamos construyendo un reproductor de video custom y te necesitamos
    para que identifiques los problemas de accesibilidad, puedes encontrarlos? 🟣
  2. Habilita el enfoque por teclado para el elemento con la clase video-player
    usando la propiedad tabIndex con el valor de 0. 🟢
  3. Permite que el efecto de aparecer y desaparecer los controles al hacer hover
    sea posible también al enfocar (onFocus) y desenfocar (onBlur) el reproductor. 🟢


  Crédito Extra 01 👑 : Habilitando la interactividad de los controles por teclado

  1. Habilita el enfoque de los controles usando la propiedad tabIndex en las imágenes. 🟢
  2. Además de los clicks, habilita que los controles detecten la pulsación de las teclas
    usando la mismas funciones pero esta vez con el evento onKeyDown. 🟢
  3. Dentro de estos manejadores de eventos, validemos que cuando su origen sea una pulsación
    de tecla, solo sean validas las teclas Enter (13) y Espacio (32). 🟢

  Crédito Extra 02 👑 : Reduciendo la complejidad con HTML semántico

  1. Reemplaza las imágenes por botones agregando las clases controls__button--play,
    controls__button--pause y controls__button--stop respectivamente. 🟡
  2. Elimina los eventos de teclado que agregamos en el crédito extra anterior. 🔴
  3. Elimina las propiedades tabIndex que agregamos en el crédito extra anterior. 🔴
  4. Elimina las validaciones complejas que agregamos en cada manejador de eventos. 🔴
  5. Inspecciona una vez más usando tu teclado y evalúa los resultados. 🟣
*/

function App() {
  const [isActive, setIsActive] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef(null);

  function handleControls(evt) {
    const evtType = evt.type;
    if (evtType === 'mouseenter') {
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
      onMouseOver={handleControls}
      onMouseOut={handleControls}
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
          onKeyDown={onPlay}
          src={playIcon}
        />
      )}
      <img
        alt=""
        className="controls__button"
        onClick={onStop}
        onKeyDown={onStop}
        src={stopIcon}
      />
    </div>
  );
}

export default App;
