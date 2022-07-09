import '../../lib/resets.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './13';
import AppSolution from './13.solution';
import AppExtra01 from './13.extra.01';
import AppExtra02 from './13.extra.02';
import AppExtra03 from './13.extra.03';

const previewMode = 'EXTRA_03';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {previewMode === 'NEW' ? <App /> : null}
    {previewMode === 'SOLUTION' ? <AppSolution /> : null}
    {previewMode === 'EXTRA_01' ? <AppExtra01 /> : null}
    {previewMode === 'EXTRA_02' ? <AppExtra02 /> : null}
    {previewMode === 'EXTRA_03' ? <AppExtra03 /> : null}
  </React.StrictMode>
);
