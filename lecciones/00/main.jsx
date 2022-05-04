import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './00';
import AppFinal from './00.final';

const isFinal = false;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isFinal ? <AppFinal /> : <App />}
  </React.StrictMode>
);
