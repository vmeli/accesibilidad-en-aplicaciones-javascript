import * as React from 'react';
import './07.css';
// import './07.solution.css';
// import './07.extra.01.css';

function App() {
  return (
    <>
      <main>
        <article>
          <h1>La Guía Definitiva de GraphQL</h1>
          <img
            src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg"
            alt="Persona usando un teclado mecanico en la oscuridad"
          />
          <p>
            Foto por{' '}
            <a href="https://www.pexels.com/photo/photo-of-person-typing-on-computer-keyboard-735911/">
              Soumil Kumar
            </a>
          </p>
          <p>
            GraphQL es una especificación que establece patrones para
            comunicar un cliente y un servidor, ofrece una
            arquitectura nueva para desarrollar APIs usando las
            mejores prácticas de la industria. Fue desarrollada en
            2012 por un equipo interno de Facebook y publicada como
            open source en 2015, al ser una especificación se puede
            usar en cualquier lenguaje de programación o framework.
          </p>
          <p>Estas son algunas de sus características principales:</p>
          <ul>
            <li>
              Facilita la agrupación de múltiples peticiones en una
              solicitud: Ejecutar diferentes requests desde el cliente
              es cosa del pasado, con GraphQL es posible obtener
              múltiples recursos en una sola petición.
            </li>
            <li>
              Permite ser flexible y explícito a la hora de obtener
              datos: Con GraphQL, quien tiene el control es el
              cliente, no el servidor. El frontend tiene el poder de
              pedir solo los datos que requiere, de esa forma, los
              requests son más precisos y menos costosos.
            </li>
            <li>
              Es de tipado seguro y se documenta automáticamente: Cada
              recurso está definido a través de un esquema, el cual es
              representado interactivamente como documentación de la
              API.
            </li>
          </ul>
          <p>
            Si quieres seguir leyendo este articulo puedes conseguirlo
            en Escuela Frontend como{' '}
            <a href="https://www.escuelafrontend.com/articulos/que-es-graphql-y-como-usarlo">
              la guía definitiva de GraphQL y como usarlo en tu
              próxima aplicación de React
            </a>
          </p>
        </article>
      </main>
    </>
  );
}

export default App;
