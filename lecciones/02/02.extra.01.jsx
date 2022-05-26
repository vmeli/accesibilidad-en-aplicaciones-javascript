import './02.css';

function App() {
  return (
    <>
      <div className="bar" role="banner">
        <h1 className="bar__title">SnackOverflow 🍿</h1>
      </div>
      <div className="menu" role="navigation">
        A
      </div>
      <div className="content" role="main">
        <div className="panel panel--a" role="article">
          B
        </div>
        <div className="panel panel--b" role="article">
          C
        </div>
      </div>
      <div className="info" role="contentinfo">
        D
      </div>
    </>
  );
}
export default App;
