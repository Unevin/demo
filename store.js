import { configureStore } from '@reduxjs/toolkit';
import inputReducer from './Slice/inputSlice';

export const store = configureStore({
  reducer: {
    input: inputReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
