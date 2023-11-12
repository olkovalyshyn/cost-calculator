import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: [],
  loginBtnClicked: false,
  isAdmin: false,
  isShowFormRegistrationAdmin: true,
  isShowChoiceBtnsForAdmin: false,
  IsShowFormRegistrationUser: false,
};

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    resetToInitialState: state => {
      return initialState;
    },
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
    setIsShowFormRegistrationUser: (state, action) => {
      state.IsShowFormRegistrationUser = action.payload;
    },
  },
});
console.log('### userSlice', userSlice);
export const {
  resetToInitialState,
  setUserInStore,
  setLoginBtnClick,
  setIsAdmin,
  setIsShowFormRegistrationAdmin,
  setIsShowChoiceBtnsForAdmin,
  setIsShowFormRegistrationUser,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
