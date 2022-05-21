import './01.css';

/* 
  Solución 01 💻
  1. Apoyate en etiquetas más semanticas como main, section, article 🟢
  2. Usa etiquetas de titulo, definiendo una y solo una etiqueta h1 🟢
  3. Reemplaza la pseudo listas y los pseudo items con etiquetas como ul y li 🟢
*/
function App() {
  return (
    <article className="article">
      <h1 className="title title--xxl">
        Formularios en React: Una Guía Práctica
      </h1>
      <p className="paragraph">
        El uso de formularios en desarrollo web es fundamental a la
        hora de crear aplicaciones interactivas ya que con ellos
        podemos validar y enviar información a nuestros servidores. La
        verdad es que trabajar con formularios puede ser más
        desafiante de lo que pudiéramos creer.
      </p>
      <p className="paragraph">
        Para crear un buen formulario, debemos tener en cuenta los
        siguientes aspectos:
      </p>
      <ul className="list">
        <li className="list__item">Accesibilidad</li>
        <li className="list__item">Validación</li>
        <li className="list__item">Serialización</li>
      </ul>
      <h2 className="title title--xl">
        Patrones de React para crear formularios
      </h2>
      <h3 className="title title--l">Componentes Controlados</h3>
      <p className="paragraph">
        Un componente controlado es aquel que usa los cambios de
        estado o cambios de props como fuente de verdad para
        representarse en el DOM.
      </p>
      <h3 className="title title--l">Componentes No Controlados</h3>
      <p className="paragraph">
        Un componente no controlado, es aquel que no usa el estado o
        las props para representarse en el DOM, y, por el contrario,
        usa la API del DOM. La manera en la que React obtiene los
        valores es usando la API de REF.
      </p>
    </article>
  );
}

export default App;
