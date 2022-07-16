import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './05';
import AppSolution from './05.solution';
import AppExtra01 from './05.extra.01';
import AppExtra02 from './05.extra.02';

const previewMode = 'NEW';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'SOLUTION' ? <AppSolution /> : null}
    {previewMode === 'EXTRA_01' ? <AppExtra01 /> : null}
    {previewMode === 'EXTRA_02' ? <AppExtra02 /> : null}
  </React.StrictMode>
);
