import './01.css';

/* 
  Ejercicio 01 💻
  1. Usa etiquetas más semanticas como main, section, article 🟡
  2. Reemplaza los pseudo titulos con etiquetas h1, h2 y h3 segun como se ve en el navegador 🟡
  3. Reemplaza las pseudo listas y sus pseudo items con etiquetas ul y li 🟡
*/
function App() {
  return (
    <div className="article">
      <div className="title title--xxl">
        Sint nulla dolor ipsum ex velit aute
      </div>
      <div className="paragraph">
        In sint aliqua elit duis enim commodo eiusmod reprehenderit
        anim deserunt labore mollit ad. Ex ullamco mollit exercitation
        qui nisi minim veniam incididunt aliqua irure. Dolore mollit
        excepteur laboris voluptate duis. Id occaecat pariatur ex ea
        duis aliqua aliquip culpa incididunt adipisicing anim. Quis
        fugiat esse velit dolore aute cillum id id labore nisi culpa
        quis.
      </div>
      <div className="paragraph">
        Consectetur cupidatat ut aliqua ut dolore. Incididunt aliquip
        commodo mollit qui sunt cillum in cillum nisi Lorem est
        incididunt. Esse anim irure veniam minim pariatur aute Lorem
        consequat est culpa ullamco ullamco. Nisi quis Lorem voluptate
        aliquip mollit quis cillum dolore velit culpa ullamco fugiat
        culpa velit. Ut magna occaecat proident nostrud dolor do enim
        labore non voluptate.
      </div>
      <div className="title title--xl">
        Labore dolore dolore esse labore
      </div>
      <div className="paragraph">
        Ipsum occaecat sint ad ipsum officia veniam aliqua fugiat ut.
        Non irure fugiat incididunt deserunt velit ullamco officia
        nulla occaecat. Excepteur labore et mollit voluptate nostrud.
        Velit cillum ad adipisicing non enim eu ullamco in do Lorem
        labore esse. Nisi adipisicing veniam minim ea cillum amet sunt
        magna consequat nisi exercitation. Nisi fugiat sint ex non
        Lorem ut officia cillum incididunt.
      </div>
      <div className="list">
        <div className="list-item">
          - Qui nostrud duis consectetur enim culpa.
        </div>
        <div className="list-item">
          - Et ut proident id est exercitation pariatur.
        </div>
        <div className="list-item">
          - Dolore aute nostrud anim sint culpa consectetur.
        </div>
        <div className="list-item">
          - Elit commodo mollit tempor nulla.
        </div>
      </div>
      <div className="title title--l">
        Cillum consequat cupidatat aliquip
      </div>
      <div className="paragraph">
        Elit esse amet in laboris elit excepteur nostrud ea. Officia
        laboris magna irure nostrud non velit deserunt cupidatat
        tempor qui dolore ad. Cupidatat culpa minim officia pariatur
        ipsum dolor tempor deserunt.
      </div>
      <div className="title title--xl">
        Ipsum laborum eiusmod dolor elit
      </div>
      <div className="paragraph">
        Elit esse amet in laboris elit excepteur nostrud ea. Officia
        laboris magna irure nostrud non velit deserunt cupidatat
        tempor qui dolore ad. Cupidatat culpa minim officia pariatur
        ipsum dolor tempor deserunt.
      </div>
      <div className="title title--l">
        Id mollit Lorem dolore laborum
      </div>
      <div className="paragraph">
        Elit esse amet in laboris elit excepteur nostrud ea. Officia
        laboris magna irure nostrud non velit deserunt cupidatat
        tempor qui dolore ad. Cupidatat culpa minim officia pariatur
        ipsum dolor tempor deserunt.
      </div>
    </div>
  );
}

export default App;
