import './11.css';
import * as React from 'react';
import { extend, Canvas } from '@react-three/fiber';
import { Text } from 'troika-three-text';

extend({ Text });

const text = 'Escuela Frontend';

/*
  Ejercicio 11 ♿️

  1. Usando el inspector del navegador, inspeccionemos el arbol de accesibilidad
    y los elementos que están siendo categorizados en el inspector, puedes encontrar
    el problema? 🟣
  2. Debate con tu equipo las razones por las cuales este encabezado 3D
    no es buena idea para los usuarios y reemplaza este componente por uno
    mas clásico (Ver el código comentado). 🟡
  3. Revisa una vez más el árbol de accesibilidad y encuentra las diferencias que
    hacen del segundo approach una idea mas viable 🟣.
*/

function App() {
  return (
    <>
      <Header3D />
      <BlogContent />
      <Footer />
    </>
  );
}

function Header3D() {
  const [rotation, setRotation] = React.useState([0, 0, 0]);

  const onMouseMove = (evt) =>
    setRotation([
      ((evt.clientY / evt.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((evt.clientX / evt.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0,
    ]);

  return (
    <Canvas
      aria-label={text}
      style={useCanvasStyles()}
      onMouseMove={onMouseMove}
    >
      <text
        anchorX="center"
        anchorY="middle"
        color="#FFFFFF"
        font="./assets/pacifico.ttf"
        fontSize={100}
        position-z={-180}
        rotation={rotation}
        text={text}
        textAlign="center"
      />
    </Canvas>
  );
}

function BlogContent() {
  return (
    <main>
      <h2>Latest Articles</h2>
      <ul>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <li key={index} />
          ))}
      </ul>
    </main>
  );
}

function useCanvasStyles() {
  return {
    width: '100%',
    height: 200,
  };
}

function Footer() {
  return <footer />;
}

// 🟡
// function Header() {
//   return (
//     <header>
//       <h1>{text}</h1>
//     </header>
//   );
// }

export default App;
