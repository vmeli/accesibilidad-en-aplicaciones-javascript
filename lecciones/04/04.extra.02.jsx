import './04.css';
import * as React from 'react';
import sun from './assets/sun.png';
import pics from './assets/pics.json';

function App() {
  const [selectedPic, setSelectedPic] = React.useState(pics[0]);

  return (
    <main className="content">
      <section className="gallery">
        <h1 className="gallery__title">Nuevas casas 🤩</h1>
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
