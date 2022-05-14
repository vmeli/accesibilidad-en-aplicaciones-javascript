import './02.css';
import ghost from './assets/ghost.png';

/*
  1. Abre el navegador y usa el narrador de vo
    intentando la forma de navegar entre secciones. 🟣
  2. Usa etiquetas semanticas como nav, main, footer,
    header y article. 🟡
  3. Utiiza de nuevo el narrador de voz e identifica los
    beneficios de usar estas nuevas etiquetas. 🟣
*/

function App() {
  return (
    <>
      <div className="header">
        <p>A</p>
      </div>
      <div className="navigation">
        <p>B</p>
      </div>
      <div className="content">
        <div className="article article--b">
          <img className="emoji" src={ghost} />
        </div>
        <div className="article article--c">
          <p>C</p>
        </div>
      </div>
      <div className="footer">
        <p>D</p>
      </div>
    </>
  );
}

export default App;
