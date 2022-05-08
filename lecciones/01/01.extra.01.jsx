import './01.css';
import ghost from './assets/ghost.png';

/*
  1. Usa roles como article, banner, nav, article, footer. 🟡
  2. Utiiza una vez más el narrador de voz e identifica los
    beneficios de asignar roles cuando no se puede cambiar las etiquetas. 🟣
*/

function App() {
  return (
    <>
      <div className="header" role="banner">
        <p>A</p>
      </div>
      <div className="navigation" role="navigation">
        <p>B</p>
      </div>
      <div className="content" role="main">
        <div className="article article--b" role="article">
          <img className="emoji" src={ghost} />
        </div>
        <div className="article article--c" role="article">
          <p>C</p>
        </div>
      </div>
      <div className="footer" role="footer">
        <p>D</p>
      </div>
    </>
  );
}

export default App;
