/**
 * 🔹 Configuration du store Redux.
 * - Intègre le reducer `userSlice` pour gérer l'état utilisateur.
 * - Utilise `configureStore` de Redux Toolkit pour simplifier la configuration.
 * 
 * @module store
 */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';  

const store = configureStore({
  reducer: {
    user: userReducer,  // Utilise le reducer du slice user => correspond à reducers dans userSlice.js
  },
});
export default store;
