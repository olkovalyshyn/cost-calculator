import { useDispatch } from 'react-redux';
import {
  setIsShowChoiceBtnsForAdmin,
  setLoginBtnClick,
  setUserInStore,
} from '../../store/sliceUser.js';

export const BtnLogin = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setLoginBtnClick(true));
    console.log('### I push Login');
  };

  return <button onClick={handleSubmit}>Вхід</button>;
};

export function BtnLogout() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setLoginBtnClick(false));
    dispatch(setUserInStore({}));
    console.log('### I push LOGOUT');
  };

  return <button onClick={handleSubmit}>Вихід</button>;
}

export function BtnAddUser() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setIsShowChoiceBtnsForAdmin(false));
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
