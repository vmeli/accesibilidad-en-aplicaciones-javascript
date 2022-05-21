import './02.css';
import ghost from './assets/ghost.png';

/*
  Credito extra 👑 : Convirtiendo regiones genericas en landmarks
  Imagina que estás mejorando la accesibilidad de las regiones, pero no puedes cambiar las etiquetas HTML.
  La propiedad role puede usarse para asignar los roles que las etiquetas semanticas traen por defecto,
  echale un vistazo al arbol de accesibilidad en tu solución inicial y ahora usando solo divs intenta llegar al mismo resultado
*/
function App() {
  return (
    <>
      <div className="bar" role="banner">
        <h1 className="bar__title">SnackOverflow 🍿</h1>
      </div>
      <div className="menu" role="navigation">
        A
      </div>
      <div className="content" role="main">
        <div className="panel panel--a" role="article">
          B
        </div>
        <div className="panel panel--b" role="article">
          C
        </div>
      </div>
      <div className="info" role="contentinfo">
        D
      </div>
    </>
  );
}
export default App;
