import './02.css';
import * as React from 'react';

const keys = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '*',
  '0',
  '#',
];

/*
  1. Usa la propiedad tabIndex para establecer el enfoque en aquellos elementos que necesitan ser enfocados. 🟡
  2. No olvides validar que los pseudo controles puedan ser usados con el teclado. 🟣
  3. Habilita el uso de los controles mediante la tecla [SPACE], como funciona en los controles reales. 🟡
*/

function App() {
  const [number, setNumber] = React.useState('');

  function handleClick(evt) {
    if (evt.type === 'keydown' && evt.keyCode !== 32) return;
    const touchedNumber = evt.target.innerHTML;
    setNumber(`${number}${touchedNumber}`);
  }

  function handleReset() {
    if (evt.type === 'keydown' && evt.keyCode !== 32) return;
    setNumber('');
  }

  return (
    <main className="content">
      <h1 className="title">¡Llamanos! ☎️</h1>
      <section className="screen">
        <p className="screen__text">{number}</p>
      </section>
      <div className="buttons">
        {keys.map((number) => (
          <div
            tabIndex={0}
            key={number}
            className="button"
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            {number}
          </div>
        ))}
      </div>
      <div
        tabIndex={0}
        className="button button--reset"
        onClick={handleReset}
        onKeyDown={handleReset}
      >
        Limpiar
      </div>
      <p className="indicatives">
        Si no conoces el indicativo de tu pais, puedes encontrarlo
        viendo esta{' '}
        <a
          href="https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales"
          target="_blank"
        >
          lista de indicativos de paises
        </a>
      </p>
    </main>
  );
}

export default App;
