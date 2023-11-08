import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: [],
  loginBtnClicked: false,
  isAdmin: false,
  isShowFormRegistrationAdmin: true,
  isShowChoiceBtnsForAdmin: false,
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
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setIsShowFormRegistrationAdmin: (state, action) => {
      state.isShowFormRegistrationAdmin = action.payload;
    },
    setIsShowChoiceBtnsForAdmin: (state, action) => {
      state.isShowChoiceBtnsForAdmin = action.payload;
    },
  },
});
console.log('### userSlice', userSlice);
export const {
  setUserInStore,
  setLoginBtnClick,
  setIsAdmin,
  setIsShowFormRegistrationAdmin,
  setIsShowChoiceBtnsForAdmin,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
