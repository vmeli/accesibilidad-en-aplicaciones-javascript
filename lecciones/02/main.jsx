import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './02';
import AppFinal from './02.final';
import AppExtra01 from './02.extra.01';

const previewMode = 'NEW';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'FINAL' ? <AppFinal /> : null}
    {previewMode === 'EXTRA_01' ? <AppExtra01 /> : null}
  </React.StrictMode>
);
