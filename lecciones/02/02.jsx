import './02.css';

/*
  Ejercicio 02 ♿️
  1. Inspecciona nuestro sitio visualizando el árbol de accesibilidad,
    identifica que elementos son reconocidos por el navegador. 🟣
  2. Reemplaza las etiquetas genéricas por etiquetas más semánticas
    como main, header, footer, nav. 🟡
  3. Usando una vez más el inspector, identifica el impacto de reemplazar
    etiquetas semánticas. 🟣
  4. Aprende a moverte rápidamente a través de los puntos de referencia
    del sitio usando el narrador de voz. 🟣

  
  Crédito extra 01 👑 : Convirtiendo regiones genéricas en landmarks
  Imagina que estás mejorando la accesibilidad de las regiones, pero no puedes cambiar las etiquetas HTML.
  La propiedad role puede usarse para asignar los roles que las etiquetas semánticas traen por defecto,
  échale un vistazo al árbol de accesibilidad en tu solución inicial y ahora usando solo divs intenta llegar al mismo resultado
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
