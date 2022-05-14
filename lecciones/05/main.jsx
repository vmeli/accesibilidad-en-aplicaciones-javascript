import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './05';
import AppFinal from './05.final';

const previewMode = 'FINAL';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'FINAL' ? <AppFinal /> : null}
  </React.StrictMode>
);
