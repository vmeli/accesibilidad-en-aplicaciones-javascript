import './02.css';

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
