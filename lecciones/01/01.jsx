import './01.css';

/* 
  Ejercicio 01 💻
  1. Apoyate en etiquetas más semanticas como main, section, article 🟡
  2. Usa etiquetas de titulo, definiendo una y solo una etiqueta h1 🟡
  3. Reemplaza la pseudo listas y los pseudo items con etiquetas como ul y li 🟡
  4. Elimina los estilos CSS usados para representar la lista 🔴
*/
function App() {
  return (
    <div className="article">
      <span className="title title--xxl">
        Formularios en React: Una Guía Práctica
      </span>
      <span className="paragraph">
        El uso de formularios en desarrollo web es fundamental a la
        hora de crear aplicaciones interactivas ya que con ellos
        podemos validar y enviar información a nuestros servidores. La
        verdad es que trabajar con formularios puede ser más
        desafiante de lo que pudiéramos creer.
      </span>
      <span className="paragraph">
        Para crear un buen formulario, debemos tener en cuenta los
        siguientes aspectos:
      </span>
      <div className="list">
        <div className="list__item">Accesibilidad</div>
        <div className="list__item">Validación</div>
        <div className="list__item">Serialización</div>
      </div>
      <div className="title title--xl">
        Patrones de React para crear formularios
      </div>
      <div className="title title--l">Componentes Controlados</div>
      <span className="paragraph">
        Un componente controlado es aquel que usa los cambios de
        estado o cambios de props como fuente de verdad para
        representarse en el DOM.
      </span>
      <div className="title title--l">Componentes No Controlados</div>
      <span className="paragraph">
        Un componente no controlado, es aquel que no usa el estado o
        las props para representarse en el DOM, y, por el contrario,
        usa la API del DOM. La manera en la que React obtiene los
        valores es usando la API de REF.
      </span>
    </div>
  );
}

export default App;
