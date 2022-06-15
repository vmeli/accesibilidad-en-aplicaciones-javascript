import './03.css';
import * as React from 'react';

/*
  Ejercicio 03 ♿️
  1. Intenta usar el marcador del teléfono sin usar tu mouse, fue posible? 🟣
  2. Reemplaza los pseudo botones con etiquetas <button /> reales. 🟡
  3. Reemplaza el pseudo link por una etiqueta <a /> real y su respectivo atributo href. 🟡
  4. Elimina el código adicional (handleLinkClick) que tuvimos que crear
    para hacer funcionar nuestro pseudo link. 🔴

  Crédito Extra 01 👑 : Deshabilitando el enfoque a propósito
  Desde el area de UX, nos han sugerido que no permitamos que se enfoquen las teclas de * o #.
  Como podemos desactivar el enfoque unicamente de estos dos controles?

  Crédito Extra 02 👑 : Habilitando el foco en elementos genéricos
  Producción está roto 🚨 y es porque cambiamos las etiquetas,
  ahora tenemos que volver a las etiquetas genéricas y al mismo tiempo
  permitir que sean enfocables y accionables. Recuerda que los elementos genéricos
  no habilitan el evento de click como si lo hacen los controles, debes asegurarte
  de que solo al presionar las teclas enter (13) y space (32) la acción ocurra
*/
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

  function handleLinkClick() {
    window.open(
      'https://es.wikipedia.org/wiki/Anexo:Prefijos_telef%C3%B3nicos_mundiales'
    );
  }

  return (
    <div className="keypad">
      <h1 className="keypad__title">¡Llámanos!</h1>
      <div className="keypad__screen">
        <p className="keypad__screen-text">{keys}</p>
      </div>
      <div className="keypad__buttons">
        {options.map((key) => (
          <div
            key={key}
            className="keypad__button"
            onClick={handleKeyClick}
          >
            {key}
          </div>
        ))}
      </div>
      <div
        className="keypad__button keypad__button--reset"
        onClick={handleReset}
      >
        Limpiar
      </div>
      <p className="indicatives">
        Si no conoces el indicativo de tu pais, puedes encontrarlo
        visitando esta{' '}
        <span className="indicatives__link" onClick={handleLinkClick}>
          lista de indicativos de países
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
