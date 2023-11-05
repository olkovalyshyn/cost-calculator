import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './sliceUser.js';

export const store = configureStore({
  reducer: {
    data: userReducer,
  },
});
