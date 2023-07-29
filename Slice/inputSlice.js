import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
  projectDetails: {},
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
    AddProjectData: (state, action) => {
      state.projectDetails = action.payload;
    },
    resetProjectDate: (state, action) => {
      state.projectDetails = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddUserData, resetUserData, AddProjectData, resetProjectDate } =
  inputSlice.actions;

export default inputSlice.reducer;
