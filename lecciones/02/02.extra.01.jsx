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
  1. Evalua dentro del ciclo, si el key es igual a (*) o (#). 🟡
  2. Si es así, significa que debes ignorarlo (-1). 🟡
  3. Si no es así, significa que debes tenerlo en cuenta (0). 🟡
  4. Intenta navegar de nuevo y verifica si funciono como esperabamos. 🟣
*/

function App() {
  const [number, setNumber] = React.useState('');

  function handleClick(evt) {
    const touchedNumber = evt.target.innerHTML;
    setNumber(`${number}${touchedNumber}`);
  }

  function handleReset() {
    setNumber('');
  }

  return (
    <main className="content">
      <h1 className="title">¡Llamanos! ☎️</h1>
      <section className="screen">
        <p className="screen__text">{number}</p>
      </section>
      <div className="buttons">
        {keys.map((number) => {
          const tabIndex = ['*', '#'].includes(number) ? -1 : 0;
          return (
            <button
              key={number}
              className="button"
              onClick={handleClick}
              tabIndex={tabIndex}
            >
              {number}
            </button>
          );
        })}
      </div>
      <button className="button button--reset" onClick={handleReset}>
        Limpiar
      </button>
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
