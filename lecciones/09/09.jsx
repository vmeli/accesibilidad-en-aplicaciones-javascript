import './09.css';
// import './09.solution.css';
import * as React from 'react';

/* 
  Tu ejercicio está ubicado en el archivo 09.css 🤠
*/

const steps = [
  {
    label: '1',
    content: 'HTML',
  },
  {
    label: '2',
    content: 'CSS',
  },
  {
    label: '3',
    content: 'Javascript',
  },
];

function App() {
  return (
    <main>
      <h1>Tres tecnologías para dominar la web</h1>
      <Stepper />
    </main>
  );
}

function Stepper() {
  const [selected, setSelected] = React.useState(1);

  function handleClick(evt) {
    const { target } = evt;
    const { index } = target.dataset;
    setSelected(parseInt(index));
  }
  return (
    <>
      <section className="panels">
        {steps.map((step, index) => (
          <article
            className={`panels__item ${
              ++index === selected ? 'panels__item--active' : ''
            }`}
            key={step.label}
          >
            {step.content}
          </article>
        ))}
      </section>
      <ul className="controls">
        {steps.map((step, index) => (
          <li className="controls__item" key={step.label}>
            <button onClick={handleClick} data-index={++index}>
              {step.label}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
