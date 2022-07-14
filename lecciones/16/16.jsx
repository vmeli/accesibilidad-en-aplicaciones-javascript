import './16.css';
import * as React from 'react';
import banner from './assets/banner.svg';

/*
  Ejercicio 16 ♿️

  1.1 Agrega el atributo lang='es' en la etiqueta html de esta lección. 🟢
  1.2 Elimina la propiedad user-scalable=no de la etiqueta meta de esta lección. 🔴
  1.3 Reemplaza la etiqueta div con la clase "signup" con un main. 🟡
  1.4 Reemplaza la etiqueta div con la clase "signup-title" con un h1. 🟡
  1.5 Reemplaza la etiqueta div con la clase "signup-form__button" con un botón
    y elimina el tabIndex={1}. 🔴
  1.6 Agrega la propiedad alt text, puedes establecerla con un valor vacío,
    si es una imagen decorativa y no quieres que sea mencionada. 🟢

  2. Agrega la propiedad aria-live="assertive" en el párrafo con la
    clase "field-text__error" en el componente <FieldText />. 🟢

  3. Reemplaza la etiqueta div con la clase "className="field-text"" por
    un label en el componente <FieldText /> 🟡
*/

function App() {
  return (
    <div className="signup">
      <section className="signup-section signup-section--form">
        <p className="signup-title">Regístrate ahora</p>
        <form className="signup-form">
          <FieldText id="field" name="name">
            Nombre Completo:
          </FieldText>
          <FieldText id="field" name="email">
            Correo Electrónico:
          </FieldText>
          <FieldText id="field" name="password" type="password">
            Contraseña:
          </FieldText>
          <FieldText
            id="field"
            name="passwordConfirm"
            type="password"
          >
            Confirmar Contraseña:
          </FieldText>
          <div className="signup-form__button" tabIndex={1}>
            Registrarme ahora!
          </div>
        </form>
      </section>
      <section className="signup-section signup-section--banner">
        <img src={banner} />
      </section>
    </div>
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
    <div className="field-text">
      {children}
      <input
        className="field-text__input"
        onBlur={onBlur}
        ref={inputRef}
        tabIndex={-1}
        {...rest}
      />
      {hasError && (
        <p id={`error-${rest.id}`} className="field-text__error">
          Campo de {children.slice(0, -1).toLowerCase()} requerido ⚠️
        </p>
      )}
    </div>
  );
}

export default App;
