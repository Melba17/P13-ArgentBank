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

