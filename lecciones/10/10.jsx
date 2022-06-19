import './10.css';
// import './10.solution.css';

import * as React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from 'react-icons/fa';

/* 
  Tu ejercicio está ubicado en el archivo 10.css 🤠
*/

function App() {
  const [result, setResult] = React.useState(0);
  const formRef = React.useRef(null);

  function onSubmit(evt) {
    evt.preventDefault();
    const formValues = Object.fromEntries(
      new FormData(formRef.current)
    );
    const newResult = (
      formValues.weight / Math.pow(formValues.height, 2)
    ).toFixed(2);
    setResult(newResult);
  }

  return (
    <>
      <header className="header">
        <h1 className="header__title">Dev Fit 💪</h1>
      </header>
      <main className="imc-calc">
        <h1 className="imc-calc__title">Calcula tu IMC</h1>
        <p className="imc-calc__description">
          El índice de masa corporal (IMC) es un número que se calcula
          con base en el peso y la estatura de la persona. Para la
          mayoría de las personas, el IMC es un indicador confiable de
          la gordura y se usa para identificar las categorías de peso
          que pueden llevar a problemas de salud.
        </p>
        <form ref={formRef} onSubmit={onSubmit} className="imc-form">
          <label className="imc-form__label">
            Tu peso (kg):
            <input
              type="number"
              className="imc-form__input"
              name="weight"
              step={0.01}
              required
            />
          </label>
          <label className="imc-form__label">
            Tu altura (m):
            <input
              type="number"
              className="imc-form__input"
              name="height"
              step={0.01}
              required
            />
          </label>
          <button className="imc-form__cta">Calcular</button>
        </form>
        {!!result && (
          <section className="imc-result">
            <h2 className="imc-result__title">
              Tu IMC es de {result}:
            </h2>
            <h3 className="imc-result__subtitle">
              Valores de referencia
            </h3>
            <ul>
              <li>Menos de 18.5 - Peso inferior al normal</li>
              <li>Entre 18.5 y 24.9 - Peso normal</li>
              <li>Entre 25.0 y 29.9 - Peso superior al normal</li>
              <li>Mas de 30.0 - Obesidad</li>
            </ul>
          </section>
        )}
      </main>
      <footer className="footer">
        <a
          className="footer__link"
          target="_blank"
          href="https://facebook.com"
        >
          <FaFacebook />
        </a>
        <a
          className="footer__link"
          target="_blank"
          href="https://twitter.com"
        >
          <FaTwitter />
        </a>
        <a
          className="footer__link"
          target="_blank"
          href="https://instagram.com"
        >
          <FaInstagramSquare />
        </a>
      </footer>
    </>
  );
}

export default App;
