import './05.css';
import intro from './assets/intro.jpeg';

function RegisterForm() {
  return (
    <>
      <h1 className="title">Registrate</h1>
      <form className="form" onSubmit={(evt) => evt.preventDefault()}>
        <label htmlFor="email" className="label">
          Correo:
        </label>
        <input
          id="email"
          type="email"
          required
          className="text-input"
          placeholder=" "
        />
        <label htmlFor="password" className="label">
          Contraseña:
        </label>
        <input
          id="password"
          type="password"
          required
          className="text-input"
          placeholder=" "
          pattern="^.{6,}"
        />
        <fieldset className="fieldset">
          <legend className="label">Consola preferida:</legend>
          <div className="field">
            <input
              id="pc"
              name="console"
              value="pc"
              type="radio"
              className="radio-input"
              defaultChecked
            />
            <label htmlFor="pc">PC</label>
          </div>
          <div className="field">
            <input
              id="ps4"
              name="console"
              value="ps"
              type="radio"
              className="radio-input"
            />
            <label htmlFor="ps4">Play Station</label>
          </div>
          <div className="field">
            <input
              id="xbox"
              name="console"
              value="xbox"
              type="radio"
              className="radio-input"
            />
            <label htmlFor="xbox">Xbox</label>
          </div>
        </fieldset>
        <button className="button" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
}

function App() {
  return (
    <main className="content">
      <section className="section">
        <img className="background" src={intro} />
      </section>
      <section className="section section--form">
        <RegisterForm />
      </section>
    </main>
  );
}

export default App;
