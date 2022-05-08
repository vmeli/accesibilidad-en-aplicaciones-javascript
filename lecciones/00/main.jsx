import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './00';
import AppFinal from './00.final';

const previewMode = 'NEW';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'FINAL' ? <AppFinal /> : null}
  </React.StrictMode>
);
