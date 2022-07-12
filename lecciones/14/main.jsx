import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './14';
import AppSolution from './14.solution';
import AppExtra01 from './14.extra.01';

const previewMode = 'NEW';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'SOLUTION' ? <AppSolution /> : null}
    {previewMode === 'EXTRA_01' ? <AppExtra01 /> : null}
  </React.StrictMode>
);
