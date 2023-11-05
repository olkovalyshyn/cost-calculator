import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: [],
  loginBtnClicked: false,
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserInStore: (state, action) => {
      state.user = action.payload;
    },
    setLoginBtnClick: (state, action) => {
      state.loginBtnClicked = action.payload;
    },
  },
});
console.log('### userSlice', userSlice);
export const { setUserInStore, setLoginBtnClick } = userSlice.actions;
export const userReducer = userSlice.reducer;
