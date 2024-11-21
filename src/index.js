import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Stil dosyasını import edebilirsiniz
import App from './App'; // App bileşenini import ediyorsunuz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
