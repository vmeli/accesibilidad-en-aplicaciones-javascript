import './02.css';

/*
  Solución 02 ♿️
  1. Inspecciona nuestro sitio visualizando el arbol de accesibilidad,
    identifica que elementos son reconocidos por el navegador. 🟢
  2. Reemplaza las etiquetas genericas por etiquetas más semanticas
    como main, header, footer, nav. 🟢
  3. Usando una vez más el inspector, identifica el impacto de reemplazar
    etiquetas semanticas. 🟢
  4. Aprende a moverte rapidamente a través de los puntos de referencia
    del sitio usando el narrador de voz. 🟢
*/
function App() {
  return (
    <>
      <header className="bar">
        <h1 className="bar__title">SnackOverflow 🍿</h1>
      </header>
      <nav className="menu">A</nav>
      <main className="content">
        <article className="panel panel--a">B</article>
        <article className="panel panel--b">C</article>
      </main>
      <footer className="info">D</footer>
    </>
  );
}

export default App;
