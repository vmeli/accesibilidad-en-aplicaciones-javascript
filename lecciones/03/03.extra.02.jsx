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
    /* 
      Si el evento es de tipo keydown
      solo debemos aceptar cuando se presiona enter o space
    */
    const isValidKeyDown =
      evt.type === 'keydown' &&
      (evt.keyCode === 13 || evt.keyCode === 32);

    if (!isValidKeyDown) return;
    const touchedKey = evt.target.innerHTML;
    setKeys(`${keys}${touchedKey}`);
  }

  function handleReset(evt) {
    const isValidKeyDown =
      evt.type === 'keydown' &&
      (evt.keyCode === 13 || evt.keyCode === 32);

    if (!isValidKeyDown) return;
    setKeys('');
  }

  function handleLinkClick(evt) {
    const isValidKeyDown =
      evt.type === 'keydown' &&
      (evt.keyCode === 13 || evt.keyCode === 32);

    if (!isValidKeyDown) return;
    window.open(
      'https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales'
    );
  }

  return (
    <div className="keypad">
      <h1 className="keypad__title">¡Llamanos!</h1>
      <div className="keypad__screen">
        <p className="keypad__screen-text">{keys}</p>
      </div>
      <div className="keypad__buttons">
        {options.map((key) => (
          <div
            key={key}
            className="keypad__button"
            onClick={handleKeyClick}
            onKeyDown={handleKeyClick}
            tabIndex={key === '#' || key === '*' ? -1 : 0}
          >
            {key}
          </div>
        ))}
      </div>
      <div
        className="keypad__button keypad__button--reset"
        onClick={handleReset}
        onKeyDown={handleReset}
        tabIndex={0}
      >
        Limpiar
      </div>
      <p className="indicatives">
        Si no conoces el indicativo de tu pais, puedes encontrarlo
        visitando esta{' '}
        <span
          className="indicatives__link"
          // href="https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales"
          onClick={handleLinkClick}
          onKeyDown={handleLinkClick}
          tabIndex={0}
        >
          lista de indicativos de paises
        </span>
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
