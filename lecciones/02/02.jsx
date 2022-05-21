import './02.css';

/*
  Ejercicio 02 ♿️
  1. Inspecciona nuestro sitio visualizando el arbol de accesibilidad,
    identifica que elementos son reconocidos por el navegador. 🟣
  2. Reemplaza las etiquetas genericas por etiquetas más semanticas
    como main, header, footer, nav. 🟡
  3. Usando una vez más el inspector, identifica el impacto de reemplazar
    etiquetas semanticas. 🟣
  4. Aprende a moverte rapidamente a través de los puntos de referencia
    del sitio usando el narrador de voz. 🟣

  
  Credito extra 👑 : Convirtiendo regiones genericas en landmarks
  Imagina que estás mejorando la accesibilidad de las regiones, pero no puedes cambiar las etiquetas HTML.
  La propiedad role puede usarse para asignar los roles que las etiquetas semanticas traen por defecto,
  echale un vistazo al arbol de accesibilidad en tu solución inicial y ahora usando solo divs intenta llegar al mismo resultado
*/
function App() {
  return (
    <>
      <div className="bar">
        <h1 className="bar__title">SnackOverflow 🍿</h1>
      </div>
      <div className="menu">A</div>
      <div className="content">
        <div className="panel panel--a">B</div>
        <div className="panel panel--b">C</div>
      </div>
      <div className="info">D</div>
    </>
  );
}

export default App;
