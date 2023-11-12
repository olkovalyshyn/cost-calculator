import { useDispatch } from 'react-redux';
import {
  setIsShowChoiceBtnsForAdmin,
  setIsShowFormRegistrationUser,
  setLoginBtnClick,
  setUserInStore,
  setIsAdmin,
  resetToInitialState,
} from '../../store/sliceUser.js';

export const BtnLogin = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setLoginBtnClick(true));
    dispatch(setIsShowFormRegistrationUser(false));
    console.log('### I push Login');
  };

  return <button onClick={handleSubmit}>Вхід</button>;
};

export function BtnLogout() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(resetToInitialState());

    // dispatch(setLoginBtnClick(false));
    // dispatch(setUserInStore({}));
    // dispatch(setIsShowFormRegistrationUser(false));
    // dispatch(setIsShowChoiceBtnsForAdmin(false));
    // dispatch(setIsAdmin(false));
    console.log('### I push LOGOUT');
  };

  return <button onClick={handleSubmit}>Вихід</button>;
}

export function BtnAddUser() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setIsShowChoiceBtnsForAdmin(false));
    dispatch(setIsShowFormRegistrationUser(true));
    // dispatch(setLoginBtnClick(false));
    // dispatch(setUserInStore({}));
    console.log('### I push BtnAddUser');
  };

  return <button onClick={handleSubmit}>Додати користувача</button>;
}

export function BtnAddCosts() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setIsShowChoiceBtnsForAdmin(false));

    // dispatch(setLoginBtnClick(false));
    // dispatch(setUserInStore({}));
    console.log('### I push BtnAddCosts');
  };

  return <button onClick={handleSubmit}>Додати витрати</button>;
}
