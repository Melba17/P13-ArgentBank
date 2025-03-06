/**
 * 🔹 Slice Redux pour la gestion de l'utilisateur.
 * - Stocke le token et les informations utilisateur (`email`, `firstName`, `lastName`).
 * - Permet de définir (`setUser`) ou supprimer (`logout`) les données utilisateur.
 * 
 * @module userSlice
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  email: '',
  firstName: '',
  lastName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout: (state) => {
      state.token = null;
      state.email = '';
      state.firstName = '';
      state.lastName = '';
    },
  },
});

// 🔹 Extraction et export des actions
export const { setUser, logout } = userSlice.actions; 

// 🔹 Export du reducer principal/final pour être utilisé dans le store pour initialiser le state ou le mettre à jour en fonction des actions (setUser, logout)
export default userSlice.reducer; 

// state correspond toujours à l'état utilisateur stocké à un instant T dans Redux => évolue dynamiquement à chaque action dispatchée (setUser ou logout)
