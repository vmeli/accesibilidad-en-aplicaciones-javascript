import './08.css';
// import './08.solution.css';
// import './08.extra.01.css';
import backgroundPic from './assets/background.jpeg';

/* 
  Tu ejercicio está ubicado en el archivo 08.css 🤠
*/
function App() {
  return (
    <main className="content">
      <section className="rate">
        <h1 className="content__title">Califica tu experiencia</h1>
        <form className="content__form">
          <label className="content__label">
            Primer nombre:
            <input className="content__text-input" type="text" />
          </label>
          <label className="content__label">
            Segundo nombre:
            <input className="content__text-input" type="text" />
          </label>
          <label className="content__label">
            Observaciones:
            <textarea className="content__text-input" />
          </label>
          <fieldset className="content__fieldset">
            <legend className="content__label">
              Puntea tu experiencia de 1 a 5:
            </legend>
            <input
              name="rate"
              value="1"
              type="radio"
              id="1"
              className="content__radio-input"
            />
            <label htmlFor="1" className="content__radio-label">
              1
            </label>
            <input
              name="rate"
              value="2"
              type="radio"
              id="2"
              className="content__radio-input"
            />
            <label htmlFor="2" className="content__radio-label">
              2
            </label>
            <input
              name="rate"
              value="3"
              type="radio"
              id="3"
              className="content__radio-input"
            />
            <label htmlFor="3" className="content__radio-label">
              3
            </label>
            <input
              name="rate"
              value="4"
              type="radio"
              id="4"
              className="content__radio-input"
            />
            <label htmlFor="4" className="content__radio-label">
              4
            </label>
            <input
              name="rate"
              value="5"
              type="radio"
              id="5"
              className="content__radio-input"
            />
            <label htmlFor="5" className="content__radio-label">
              5
            </label>
          </fieldset>
          <button className="content__button">Enviar</button>
        </form>
      </section>
      <section className="background">
        <img src={backgroundPic} alt="" className="background__pic" />
      </section>
    </main>
  );
}

export default App;
