import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './16';
import AppSolution from './16.solution';

const previewMode = 'SOLUTION';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'SOLUTION' ? <AppSolution /> : null}
  </React.StrictMode>
);
