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

function App() {
  const [number, setNumber] = React.useState('');

  function handleNumberClick(evt) {
    const touchedNumber = evt.target.innerHTML;
    setNumber(`${number}${touchedNumber}`);
  }

  function handleReset() {
    setNumber('');
  }

  function handleLinkClick() {
    window.open(
      'https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales'
    );
  }

  return (
    <div className="content">
      <p className="title">¡Llamanos! ☎️</p>
      <div className="screen">
        <p className="screen__text">{number}</p>
      </div>
      <div className="buttons">
        {keys.map((number) => (
          <div
            key={number}
            className="button"
            onClick={handleNumberClick}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="button button--reset" onClick={handleReset}>
        Limpiar
      </div>
      <p className="indicatives">
        Si no conoces el indicativo de tu pais, puedes encontrarlo
        viendo esta{' '}
        <span className="indicatives__link" onClick={handleLinkClick}>
          lista de indicativos de paises
        </span>
      </p>
    </div>
  );
}

export default App;
