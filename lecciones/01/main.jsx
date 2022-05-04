import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './01';
import AppFinal from './01.final';

const isFinal = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isFinal ? <AppFinal /> : <App />}
  </React.StrictMode>
);
