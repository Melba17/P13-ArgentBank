import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';  // Importer le reducer depuis userSlice

const store = configureStore({
  reducer: {
    user: userReducer,  // Utiliser le reducer du user
  },
});

export default store;
