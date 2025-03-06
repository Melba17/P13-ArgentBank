import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './base.css';
import store from './redux/Store.js';
import App from './App.jsx';

/**
 * 🔹 Point d'entrée de l'application React.
 * - Utilise `StrictMode` pour détecter les problèmes potentiels en développement.
 * - Fournit le `store` Redux via `Provider` pour la gestion globale de l'état.
 * - Rend l'application principale (`App`) dans l'élément racine du DOM.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);
