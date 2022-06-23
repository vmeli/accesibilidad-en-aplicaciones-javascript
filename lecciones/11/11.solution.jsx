import './11.css';
import * as React from 'react';

const text = 'Escuela Frontend';

function App() {
  return (
    <>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>{text}</h1>
    </header>
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

function Footer() {
  return <footer />;
}

export default App;
