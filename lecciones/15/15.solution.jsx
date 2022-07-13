import './15.css';
import * as React from 'react';
import pics from './lib/pics';

function App() {
  return <Gallery pictures={pics} />;
}

function Gallery(props) {
  const { pictures } = props;
  const [modal, setModal] = React.useState(null);

  return (
    <section className="gallery">
      <ul className="gallery__list">
        {pictures.map((picture) => (
          <li className="gallery__item" key={picture.alt}>
            <button
              className="gallery__button"
              data-testid="focusable"
              onClick={() => setModal(picture)}
              aria-label={picture.alt}
            >
              <img
                alt={picture.alt}
                className="gallery__pic"
                src={picture.src}
              />
            </button>
          </li>
        ))}
      </ul>
      {modal && (
        <Modal {...modal} onModalClose={() => setModal(null)} />
      )}
    </section>
  );
}

function Modal(props) {
  const { onModalClose, src, alt, copyright } = props;
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    modalRef.current.focus();
  }, []);

  return (
    <div
      ref={modalRef}
      className="gallery__modal"
      data-testid="modal"
      tabIndex={0}
    >
      <button
        className="gallery__modal-button"
        onClick={onModalClose}
        aria-label="Cerrar modal"
      >
        &#10799;
      </button>
      <img className="gallery__modal-pic" src={src} alt={alt} />
      <div
        className="gallery__modal-copyright"
        dangerouslySetInnerHTML={{ __html: copyright }}
      />
    </div>
  );
}

export default App;
