import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Estilos globales — un único punto de entrada SCSS
import './styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
