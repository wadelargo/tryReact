import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Pages/Index'; // Corrected import path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index /> {/* Render Index component instead of App */}
  </React.StrictMode>,
);
