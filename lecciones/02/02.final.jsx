import './02.css';
import ghost from './assets/ghost.png';

function App() {
  return (
    <>
      <header className="header">
        <h1>A</h1>
      </header>
      <nav id="main-nav" className="navigation">
        <p>B</p>
      </nav>
      <main className="content">
        <article className="article article--b">
          <img className="emoji" src={ghost} />
        </article>
        <article className="article article--c">
          <p>C</p>
        </article>
      </main>
      <footer className="footer">
        <p>D</p>
      </footer>
    </>
  );
}

export default App;
