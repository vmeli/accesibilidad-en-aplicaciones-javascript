import './05.css';
import intro from './assets/intro.jpeg';

const minLengthRegexp = '^.{6,}';

function App() {
  return (
    <main className="content">
      <section className="section">
        <img className="background" src={intro} alt="" />
      </section>
      <section className="section section--form">
        <h1 className="title">Registrate</h1>
        <form
          className="form"
          onSubmit={(evt) => evt.preventDefault()}
        >
          <Field name="email" type="email">
            Correo electrónico:
          </Field>
          <Field
            name="password"
            type="password"
            pattern={minLengthRegexp}
          >
            Contraseña:
          </Field>
          <Field
            name="passwordRepeat"
            type="password"
            pattern={minLengthRegexp}
          >
            Repetir contraseña:
          </Field>
          <div className="actions">
            <button className="button" type="submit">
              Enviar
            </button>
            <button className="button button--reset" type="reset">
              Borrar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

function Field(props) {
  const { name, type, children, pattern } = props;
  return (
    <>
      <label className="label" htmlFor={name}>
        {children}
      </label>
      <input
        className="input"
        id={name}
        pattern={pattern}
        type={type}
        autoComplete="off"
      />
      <p className="error">Error en este campo</p>
    </>
  );
}

export default App;
