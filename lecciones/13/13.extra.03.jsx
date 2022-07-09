import './13.css';
import * as React from 'react';
import HeroIllustration from './assets/hero_illustration.svg';

function App() {
  return (
    <Layout>
      <Hero />
      <Content />
      <SubscribeForm />
    </Layout>
  );
}

function Layout(props) {
  const { children } = props;
  return (
    <>
      <div className="nav" role="navigation">
        A
      </div>
      <div className="main" role="main">
        {children}
      </div>
      <div className="footer" role="contentinfo">
        C
      </div>
    </>
  );
}

function Hero() {
  return (
    <div className="hero size-wrapper" aria-labelledby="hero__title">
      <div className="hero__info">
        <h1 id="hero__title" className="hero__title">
          Bootcamp Latam
        </h1>
        <p className="hero__description">
          Quis sit excepteur consequat ullamco ullamco ipsum ex minim
          minim et sint labore. Elit anim deserunt laboris occaecat
          labore reprehenderit cupidatat minim sit laboris esse
          voluptate. Dolore proident deserunt ipsum do cillum minim.
          Ut irure tempor ullamco laborum sit.
        </p>
        <button className="hero__button">Ver el contenido</button>
        <button className="hero__button button-secondary">
          Aplicar ahora
        </button>
      </div>
      <div className="hero__illustration">
        <img
          className="hero__pic"
          src={HeroIllustration}
          alt=""
          aria-describedby="hero__caption"
        />
        <p
          id="hero__caption"
          className="hero__caption"
          aria-hidden="true"
        >
          Dos personas retándose a si mismas para lograr un mejor
          futuro.
        </p>
      </div>
    </div>
  );
}

function Content() {
  const [isActive, setIsActive] = React.useState(false);

  function onToggleClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="content" aria-labelledby="content__title">
      <div className="size-wrapper">
        <h2 id="content__title" className="content__title">
          Nuestro contenido
        </h2>
        <p className="content__description">
          Officia reprehenderit minim ad anim irure voluptate irure
          Lorem excepteur labore proident aliquip. Do enim do commodo
          cupidatat nulla consectetur amet quis excepteur veniam
          eiusmod ullamco dolore incididunt. Velit sunt magna deserunt
          proident cupidatat id. Proident aliquip duis nisi
          consectetur esse minim ad mollit tempor do laborum nisi.
          Tempor nulla non tempor id dolor in aliqua. Irure tempor
          esse consectetur quis incididunt mollit ad eiusmod duis.
        </p>
        <button
          className={`toggle__button ${
            isActive ? 'toggle__button--active' : ''
          }`}
          aria-expanded={isActive ? 'true' : 'false'}
          onClick={onToggleClick}
        >
          {isActive ? 'Ocultar' : 'Mostrar'} temas{' '}
          <span aria-hidden="true">&#5171;</span>
        </button>
        <ul
          id="content__list"
          className={`content__list ${
            isActive ? 'content__list--active' : ''
          }`}
        >
          <li className="content__item">
            <span aria-hidden="true">&#8277;</span> HTML
          </li>
          <li className="content__item">
            <span aria-hidden="true">&#8277;</span> CSS
          </li>
          <li className="content__item">
            <span aria-hidden="true">&#8277;</span> Javascript
          </li>
          <li className="content__item">
            <span aria-hidden="true">&#8277;</span> Pruebas Unitarias
          </li>
        </ul>
      </div>
    </div>
  );
}

function SubscribeForm() {
  return (
    <div
      className="subscribe-form size-wrapper"
      aria-labelledby="subscribe-form__title"
    >
      <h2
        id="subscribe-form__title"
        className="subscribe-form__title"
      >
        Aplica ahora
      </h2>
      <p className="subscribe-form__description">
        Fugiat nostrud pariatur ut ipsum sunt deserunt sunt fugiat
        velit sit anim ea ipsum anim. Anim dolor nulla deserunt
        reprehenderit ut. Adipisicing quis proident magna anim
        proident ad. Cillum laborum dolore reprehenderit nisi
        adipisicing nisi tempor ad proident commodo. Irure cupidatat
        dolor dolore do consectetur amet eu est pariatur cillum. Anim
        eu sit consectetur pariatur pariatur nisi quis.
      </p>
      <form>
        <label className="subscribe-form__label">
          Nombre completo:
          <input type="text" className="subscribe-form__input" />
        </label>
        <label className="subscribe-form__label">
          Correo Electronico:
          <input type="email" className="subscribe-form__input" />
        </label>
        <label className="subscribe-form__label">
          Ubicación:
          <input
            type="text"
            className="subscribe-form__input"
            aria-describedby="subscribe-form__example"
          />
          <span aria-hidden="true" id="subscribe-form__example">
            Ciudad y pais. <br /> Por ejemplo: Medellin, Colombia
          </span>
        </label>
        <button className="subscribe-form__button">Enviar</button>
      </form>
    </div>
  );
}

export default App;
