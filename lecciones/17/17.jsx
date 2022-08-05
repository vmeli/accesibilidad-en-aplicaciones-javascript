import './17.css';
import * as React from 'react';
import carouselItems from './lib/carouselItems';

/*
  Ejercicio 17 ♿️

  1. Levanta tu setup de experto en accesibilidad y analicemos juntos los reportes 🟣
  2. Reemplaza la propiedad aria-message por aria-label en las diferentes secciones
    de este archivo 🟡
  3. Reemplaza los pseudo botones que controlan el carousel por botones reales
    asegurandote de eliminar también las propiedades tabIndex 🟡
  4. Agrega el atributo alt en las imagenes  del carousel, el alt vacio
    funcionará bien para este ejercicio 🟢
  5. En el componente <App />, reemplaza el contenedor div, por un contenedor main
    y agrega un titulo con la clase "title" 🟢 🟡
  6. Agrega el atributo lang="es" en la etiqueta html del archivo index.html de esta lección 🟢
*/

function App() {
  return (
    <div>
      <Carousel items={carouselItems} />
    </div>
  );
}

function Carousel(props) {
  const [active, setActive] = React.useState(0);
  const { items } = props;

  return (
    <section
      className="carousel"
      aria-message="This is an informative carousel, use the previous/next slide buttons"
    >
      <div
        tabIndex={0}
        className="carousel__control"
        onClick={() => setActive(active === 0 ? active : active - 1)}
      />
      {items.map((item, index) => (
        <div
          className={`carousel__item ${
            index === active ? 'carousel__item--active' : ''
          }`}
          role="group"
          aria-message={`Item ${index + 1} of ${items.length}`}
          key={index}
        >
          <h2 className={'carousel__title'}>{item.title}</h2>
          <p className={'carousel__description'}>
            {item.description}
          </p>
          <img
            className="carousel__background"
            src={item.background}
          />
        </div>
      ))}
      <div
        tabIndex={0}
        className="carousel__control carousel__control--next"
        onClick={() =>
          setActive(active === items.length - 1 ? active : active + 1)
        }
      />
    </section>
  );
}

export default App;
