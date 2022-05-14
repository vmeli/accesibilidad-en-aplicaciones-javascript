import './04.css';
import * as React from 'react';
import sun from './assets/sun.png';

const pics = [
  {
    src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    alt: 'Casa de dos pisos, color azul, con las luces encendidas, en la tarde, foto tomada por Binyamin Mellish y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    alt: 'Casa de dos pisos, color beidge, con las luces encendidas, en el ocaso del atardecer, foto tomada por Binyamin Mellish y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    alt: 'Casa color blanca de dos pisos, en la mañana, foto tomada por Scott Web y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
    alt: 'Casa de dos pisos, color beige, en el ocaso del atardecer, foto tomada por Pixabay y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    alt: 'Casa de un piso, color verde, en la tarde, foto tomada por Binyamin Mellish y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
    alt: 'Casa de tres pisos, color verde, foto tomada por Emre Can Acer y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg',
    alt: 'Casa de dos pisos, de color negro, en el mediodia, foto tomada por Expect Best y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg',
    alt: 'Casa de dos pisos y chimenea, color gris, en la mañana, foto tomada por Mike y sacada de Pexels.com',
  },
  {
    src: 'https://images.pexels.com/photos/2850472/pexels-photo-2850472.jpeg',
    alt: 'Casa de dos pisos y jardín, color beidge, en la tarde, foto tomada por Vivint Solar y sacada de Pexels.com',
  },
];

function App() {
  const [selectedPic, setSelectedPic] = React.useState(pics[0]);

  return (
    <main className="content">
      <section className="gallery">
        <h1 className="gallery__title">La casa de tus sueños 🤩</h1>
        <ul className="gallery__list">
          {pics.map((pic, index) => (
            <li
              key={index}
              className="gallery__item"
              onClick={() =>
                setSelectedPic({
                  src: pic.src,
                  alt: pic.alt,
                })
              }
            >
              <img
                className="gallery__pic"
                src={pic.src}
                alt={pic.alt}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="preview ">
        <img className="preview__decoration" src={sun} alt="" />
        <div className="preview__container">
          <img
            className="preview__pic"
            src={selectedPic.src}
            aria-labelledby="preview__description"
          />
          <p
            className="preview__description"
            id="preview__description"
          >
            {selectedPic.alt}
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
