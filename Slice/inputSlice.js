import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = inputSlice.actions;

export default inputSlice.reducer;
