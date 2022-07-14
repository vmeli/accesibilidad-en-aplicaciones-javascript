import './16.css';
import * as React from 'react';
import banner from './assets/banner.svg';

function App() {
  return (
    <main className="signup">
      <section className="signup-section signup-section--form">
        <h1 className="signup-title">Regístrate ahora</h1>
        <form className="signup-form">
          <FieldText id="name" name="name">
            Nombre Completo:
          </FieldText>
          <FieldText id="email" name="email">
            Correo Electrónico:
          </FieldText>
          <FieldText id="password" name="password" type="password">
            Contraseña:
          </FieldText>
          <FieldText
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
          >
            Confirmar Contraseña:
          </FieldText>
          <button className="signup-form__button">
            Registrarme ahora!
          </button>
        </form>
      </section>
      <section className="signup-section signup-section--banner">
        <img src={banner} alt="" />
      </section>
    </main>
  );
}

function FieldText(props) {
  const { children, ...rest } = props;
  const inputRef = React.useRef(null);
  const [hasError, setHasError] = React.useState(false);

  function onBlur() {
    const isEmpty = /^ *$/.test(inputRef.current.value);
    if (isEmpty) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  }

  return (
    <label className="field-text">
      {children}
      <input
        className="field-text__input"
        onBlur={onBlur}
        ref={inputRef}
        tabIndex={-1}
        {...rest}
      />
      {hasError && (
        <p
          id={`error-${rest.id}`}
          className="field-text__error"
          aria-live="assertive"
        >
          Campo de {children.slice(0, -1).toLowerCase()} requerido ⚠️
        </p>
      )}
    </label>
  );
}

export default App;
