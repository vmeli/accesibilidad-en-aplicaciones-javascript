import './17.css';
import * as React from 'react';
import carouselItems from './lib/carouselItems';

function App() {
  return (
    <main>
      <h1 className="title">Carousel Example:</h1>
      <Carousel items={carouselItems} />
    </main>
  );
}

function Carousel(props) {
  const [active, setActive] = React.useState(0);
  const { items } = props;

  return (
    <section
      className="carousel"
      aria-label="This is an informative carousel, use the previous/next slide buttons"
    >
      <button
        className="carousel__control"
        onClick={() => setActive(active === 0 ? active : active - 1)}
        aria-label="Previous slide"
      />
      {items.map((item, index) => (
        <div
          className={`carousel__item ${
            index === active ? 'carousel__item--active' : ''
          }`}
          role="group"
          aria-label={`Item ${index + 1} of ${items.length}`}
          key={index}
        >
          <h2 className={'carousel__title'}>{item.title}</h2>
          <p className={'carousel__description'}>
            {item.description}
          </p>
          <img
            alt=""
            className="carousel__background"
            src={item.background}
          />
        </div>
      ))}
      <button
        className="carousel__control carousel__control--next"
        onClick={() =>
          setActive(active === items.length - 1 ? active : active + 1)
        }
        aria-label="Next slide"
      />
    </section>
  );
}

export default App;
