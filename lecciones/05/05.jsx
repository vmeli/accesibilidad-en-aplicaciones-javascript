import './05.css';
import intro from './assets/intro.jpeg';

/*
  Ejercicio 05 ♿️
  1. Inspecciona el arbol de accesibilidad, qué elementos son
    relevantes para apoyar la asistencia? 🟣
  2. Reemplaza los elementos genericos por unos semanticos como h1, form y label. 🟡
  3. Conecta los labels con los input usando el atributo htmlFor. 🟡
  4. Inspecciona una vez más el arbol de accesibilidad, puedes reconocer los cambios? 🟣


  Crédito Extra 01 👑 :
  Agrupa los radio buttons en un solo fieldset, adicionalmente usa un elemento de leyenda (legend)
  para relacionar los inputs y que sean tratados como un grupo semantico.

  Crédito Extra 02 👑 :
  Al encontrar un error, las validaciones están cambiando el color de borde de los inputs,
  esto es un problema para los usuarios que modifican el contraste de colores (haz el intento).

  En vez de responder a los errores con cambios de colores, presentale al usuario contenido semantico
  que explique el error. Debajo de cada input crea un parrafo con la clase "error" y el error especifico
  para ese campo.
*/

function RegisterForm() {
  return (
    <>
      <span className="title">Regístrate</span>
      <div className="form" onSubmit={(evt) => evt.preventDefault()}>
        <span className="label">Correo electrónico:</span>
        <input
          id="email"
          type="email"
          required
          className="text-input"
          placeholder=" "
        />
        <span className="label">Contraseña:</span>
        <input
          id="password"
          type="password"
          required
          className="text-input"
          placeholder=" "
          pattern="^.{6,}"
        />
        <div className="fieldset">
          <p className="label">Consola preferida:</p>
          <div className="field">
            <input
              id="pc"
              name="console"
              value="pc"
              type="radio"
              className="radio-input"
              defaultChecked
            />
            <span>PC</span>
          </div>
          <div className="field">
            <input
              id="ps4"
              name="console"
              value="ps"
              type="radio"
              className="radio-input"
            />
            <span>Play Station</span>
          </div>
          <div className="field">
            <input
              id="xbox"
              name="console"
              value="xbox"
              type="radio"
              className="radio-input"
            />
            <span>Xbox</span>
          </div>
        </div>
        <button className="button" type="submit">
          Enviar
        </button>
      </div>
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
