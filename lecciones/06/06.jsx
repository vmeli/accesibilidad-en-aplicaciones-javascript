import * as React from 'react';
import pic from './assets/pic.jpeg';
import './06.css';
// import './06.solution.css';
// import './06.extra.01.css';

function ThemeToggler(props) {
  const { theme, onClick } = props;
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  return (
    <button className="toggler" onClick={() => onClick(nextTheme)}>
      Set {nextTheme} theme
    </button>
  );
}

function App() {
  const [theme, setTheme] = React.useState('light');
  return (
    <div className={`theme-${theme}`}>
      <ThemeToggler
        theme={theme}
        onClick={(nextTheme) => setTheme(nextTheme)}
      />
      <header className="header">
        <h1 className="header__title">Hello World</h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/">Inicio</a>
            </li>
            <li className="nav__item">
              <a href="/">Nosotros</a>
            </li>
            <li className="nav__item">
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="content">
        <h2 className="content__title">Beber agua</h2>
        <p className="content__info">
          Beber suficiente agua cada día es esencial para mantener
          nuestra salud, aun así muchos de nosotros no tomamos
          suficiente agua. Como resultado nos perdemos los numerosos
          beneficios para la salud de una hidratación adecuada.
        </p>
        <p className="content__info">
          A pesar de que nuestro cuerpo necesita agua para sobrevivir,
          casi una de cada diez personas en el mundo no tiene acceso a
          una fuente de agua salubre. Para los que tenemos la suerte
          de disponer de agua dulce ilimitada, el consumo diario de
          este recurso inestimable mantiene muchas de las funciones
          del cuerpo y tiene un impacto positivo en nuestro aspecto y
          en cómo nos sentimos.
        </p>
        <img
          src={pic}
          className="content__pic"
          alt="Vaso con agua encima de una mesa"
        />
        <p className="content__info">
          Foto por Pixabay de{' '}
          <a href="https://www.pexels.com/photo/clean-clear-cold-drink-416528/">
            Pexels
          </a>
        </p>
        <p className="content__info">
          No hay un consenso universal sobre la cantidad de agua que
          debe consumirse al día, ya que las necesidades particulares
          varían, pero existe cierto acuerdo sobre cuánto es una
          cantidad saludable. Según el Institute of Medicine (IOM), un
          consumo de agua adecuado para los hombres es aproximadamente
          3 litros al día, para las mujeres es 2,2 litros al día.
        </p>
        <button className="content__button">Mark as read</button>
      </main>
    </div>
  );
}

export default App;
