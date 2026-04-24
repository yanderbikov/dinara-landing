import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const spaRedirect = sessionStorage.getItem('spaRedirect');
if (spaRedirect) {
  sessionStorage.removeItem('spaRedirect');
  window.history.replaceState(null, '', spaRedirect);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
