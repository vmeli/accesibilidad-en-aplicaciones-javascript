import './03.css';
import * as React from 'react';

function KeyPad() {
  const [keys, setKeys] = React.useState('');
  const options = [
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

  function handleKeyClick(evt) {
    const touchedKey = evt.target.innerHTML;
    setKeys(`${keys}${touchedKey}`);
  }

  function handleReset() {
    setKeys('');
  }

  // function handleLinkClick() {
  //   window.open(
  //     'https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales'
  //   );
  // }

  return (
    <div className="keypad">
      <h1 className="keypad__title">¡Llamanos!</h1>
      <div className="keypad__screen">
        <p className="keypad__screen-text">{keys}</p>
      </div>
      <div className="keypad__buttons">
        {options.map((key) => (
          <button
            key={key}
            className="keypad__button"
            onClick={handleKeyClick}
          >
            {key}
          </button>
        ))}
      </div>
      <button
        className="keypad__button keypad__button--reset"
        onClick={handleReset}
      >
        Limpiar
      </button>
      <p className="indicatives">
        Si no conoces el indicativo de tu pais, puedes encontrarlo
        visitando esta{' '}
        <a
          className="indicatives__link"
          href="https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales"
          //  onClick={handleLinkClick}
        >
          lista de indicativos de paises
        </a>
      </p>
    </div>
  );
}

function App() {
  return (
    <main className="content">
      <section className="content__section content__section--pic">
        <img
          className="pic"
          src="https://images.pexels.com/photos/4240498/pexels-photo-4240498.jpeg"
          alt=""
        />
      </section>
      <section className="content__section content__section--keypad">
        <KeyPad />
      </section>
    </main>
  );
}

export default App;
