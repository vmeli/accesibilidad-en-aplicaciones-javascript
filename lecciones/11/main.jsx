import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './11';
import AppSolution from './11.solution';

const previewMode = 'NEW';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'SOLUTION' ? <AppSolution /> : null}
  </React.StrictMode>
);
