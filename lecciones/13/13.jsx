import './13.css';
import * as React from 'react';
import HeroIllustration from './assets/hero_illustration.svg';

/*
  Ejercicio 13 ♿️

  1. Ejecuta este ejercicio y en tu labor de inspector, encuentra los problemas
    de accesibilidad relacionados a este ejercicio. 🟣
  2. Agrega la propiedad role a los elementos del componente <Layout />, role="navigation",
    role="main" y role="contentinfo" respectivamente. 🟢
  3. Utiliza la propiedad aria-describedby para relacionar la imagen del componente
    <Hero /> con su texto descriptivo de la parte inferior. 🟢
  4. Utiliza la propiedad aria-expanded en el botón del componente <Content /> para
    reportar el estado del widget (isActive ? "true" : "false"). 🟢
  5. Añade la propiedad aria-hidden con el valor de "true" dentro de las pseudo-viñetas
    del componente <Content /> para omitir su mención en el narrador de voz. 🟢

  Crédito Extra 01 👑 : Relacionando el contenido del formulario
  En el componente <SubscribeForm /> relaciona el campo de ubicación con su descripción
  en la parte inferior, no olvides omitir la descripción para evitar redundancias.


  Crédito Extra 02 👑 : Etiquetando las secciones del sitio
  Dentro de cada componente (a excepción de <Layout />), y en su contenedor principal,
  utiliza la propiedad aria-labelledby, para relacionar cada componente con su respectivo título

  Crédito Extra 03 👑 : Omitiendo más contenido del narrador de voz
  Hemos olvidado ocultar un carácter especial del narrador de voz en el componente
  <Content />, una vez más, y como lo hicimos en el punto 5, agrega la propiedad
  aria-hidden="true" dentro del pseudo icono de flecha.
*/

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
      <div className="nav">A</div>
      <div className="main">{children}</div>
      <div className="footer">C</div>
    </>
  );
}

function Hero() {
  return (
    <div className="hero size-wrapper">
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
        <img className="hero__pic" src={HeroIllustration} alt="" />
        <p id="hero__caption" className="hero__caption">
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
    <div className="content">
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
          onClick={onToggleClick}
        >
          {isActive ? 'Ocultar' : 'Mostrar'} temas{' '}
          <span>&#5171;</span>
        </button>
        <ul
          className={`content__list ${
            isActive ? 'content__list--active' : ''
          }`}
        >
          <li className="content__item">
            <span>&#8277;</span> HTML
          </li>
          <li className="content__item">
            <span>&#8277;</span> CSS
          </li>
          <li className="content__item">
            <span>&#8277;</span> Javascript
          </li>
          <li className="content__item">
            <span>&#8277;</span> Pruebas Unitarias
          </li>
        </ul>
      </div>
    </div>
  );
}

function SubscribeForm() {
  return (
    <div className="subscribe-form size-wrapper">
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
          <input type="text" className="subscribe-form__input" />
          <span>
            Ciudad y pais. <br /> Por ejemplo: Medellin, Colombia
          </span>
        </label>
        <button className="subscribe-form__button">Enviar</button>
      </form>
    </div>
  );
}

export default App;
