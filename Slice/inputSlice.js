import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    AddUserData: (state, action) => {
      state.userDetails = action.payload;
    },
    resetUserData: (state, action) => {
      state.userDetails = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddUserData, resetUserData } = inputSlice.actions;

export default inputSlice.reducer;
