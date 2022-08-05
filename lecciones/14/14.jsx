import './14.css';
import * as React from 'react';

/*
  Ejercicio 14 ♿️

  1. Usando el narrador de voz, encuentra los problemas
    de accesibilidad en esta app. 🟣
  2. En el componente <Notification /> agrega la propiedad
    aria-live="assertive" para notificar este mensaje
    tan pronto sea renderizado. 🟢
  3. En el componente <MarketList /> agrega la propiedad
  aria-live y asigna el valor "assertive" si y solo si es el ultimo
  elemento de la lista, de lo contrario usa el valor "off". 🟢
  
  Para encontrar el ultimo elemento:
  https://stackoverflow.com/questions/44650201/check-if-it-is-the-last-element-in-an-array-inside-map-function

  Crédito Extra 01 👑 : Enfocando el primer campo al terminar la acción

  Dado que queremos enfocar el campo de nombre una vez se haya agregado
  un producto, crea una referencia usando useRef en el componente
  <NewItemForm />, luego relaciónala al input en cuestión y,
  finalmente enfoca el campo dentro del método onSubmit a través del siguiente
  snippet: nameInputRef.current.focus();
*/

function App() {
  const [items, setItems] = React.useState([]);
  const [notificationIsActive, setNotificationIsActive] =
    React.useState(false);

  function createItem(newItem) {
    setItems((state) => [...state, newItem]);
    setNotificationIsActive(true);
    window.setTimeout(() => setNotificationIsActive(false), 3000);
  }

  return (
    <main className="main-wrapper">
      {notificationIsActive && <Notification />}
      <NewItemForm createItem={createItem} />
      <MarketList items={items} />
    </main>
  );
}

function Notification() {
  return (
    <div className="notification" aria-live="assertive">
      Producto añadido ✅
    </div>
  );
}

function NewItemForm(props) {
  const { createItem } = props;
  const formRef = React.useRef(null);
  const nameInputRef = React.useRef(null);

  function onSubmit(evt) {
    evt.preventDefault();
    const formValues = Object.fromEntries(
      new FormData(formRef.current)
    );
    createItem(formValues);
    formRef.current.reset();
    nameInputRef.current.focus();
  }

  return (
    <section className="new-item" aria-labelledby="new-item__title">
      <h1 id="new-item__title" className="new-item__title">
        Agregar producto
      </h1>
      <form
        className="new-item__form"
        ref={formRef}
        onSubmit={onSubmit}
      >
        <label className="new-item__label">
          Nombre:
          <input
            className="new-item__input"
            type="text"
            name="name"
            required
            ref={nameInputRef}
            autoComplete="off"
          />
        </label>
        <label className="new-item__label" name="quantity">
          Cantidad:
          <input
            className="new-item__input new-item__input--number"
            type="number"
            name="quantity"
            min={1}
            max={32}
            defaultValue={1}
            required
          />
        </label>
        <label className="new-item__label">
          Nota:
          <textarea className="new-item__textarea" name="note" />
        </label>
        <button type="submit" className="new-item__button">
          Crear
        </button>
      </form>
    </section>
  );
}

function MarketList(props) {
  const { items } = props;
  return (
    <section
      className="market-list"
      aria-labelledby="market-list__title"
    >
      <h2 className="market-list__title">Tu lista</h2>
      <ul className="market-list__list">
        {items.map((item, index) => (
          <li
            key={item.name}
            className="market-list__item"
            aria-live={items.length === index + 1 ? 'polite' : 'off'}
          >
            <h3>
              {item.name} x{item.quantity}
            </h3>
            <p>{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
