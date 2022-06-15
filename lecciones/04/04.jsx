import './04.css';
import * as React from 'react';
import sun from './assets/sun.png';
import pics from './assets/pics.json';

/*
  Ejercicio 04 ♿️
  1. Intenta navegar por la galería como un usuario con
    discapacidad visual. ¿Serías capaz de interpretar el contenido? 🟣
  2. Agrega el atributo alt a todas las imágenes del sitio
    no olvides el panel de preview de la derecha 🟢
  3. Echa una vez más un vistazo a la navegación asistida
    como un usuario discapacitado, puedes encontrar las mejoras? 🟣

  Crédito Extra 01 👑 : Imágenes decorativas
  ¿Notaste la imagen decorativa en el panel de la derecha?
  Evitemos que el usuario asistido interprete este tipo de contenido,
  verifica con el narrador de voz la diferencia entre no tener atributo alt
  y tener uno vacío.

  Crédito Extra 02 👑 : Texto alternativo en pagina
  Existen ocasiones en las que un texto puede describir la imagen,
  al panel de la derecha, debajo de la imagen, le agregaremos la siguiente etiqueta

  <p className="preview__description" id="preview__description">
    {selectedPic.alt}
  </p>

  ¿Como le especificamos al narrador de voz que ese es el texto alternativo de la imagen? 🤔
*/

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
              <img className="gallery__pic" src={pic.src} />
            </li>
          ))}
        </ul>
      </section>
      <section className="preview">
        <img className="preview__decoration" src={sun} />
        <div className="preview__container">
          <img className="preview__pic" src={selectedPic.src} />
        </div>
      </section>
    </main>
  );
}

export default App;
