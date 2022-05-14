import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './01';
import AppFinal from './01.final';

const previewMode = 'NEW';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'FINAL' ? <AppFinal /> : null}
  </React.StrictMode>
);
