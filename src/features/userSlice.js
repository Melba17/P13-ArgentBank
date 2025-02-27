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

// Export de l'action setUser 
export const { setUser, logout } = userSlice.actions; 

export default userSlice.reducer; // Export du reducer pour l'utiliser dans le store
