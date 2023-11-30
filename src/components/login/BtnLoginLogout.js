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
  return (
    <div class="border rounded p-4 ">
      <button className="btn btn-success" onClick={handleSubmit}>
        Вхід
      </button>
    </div>
  );
};

export function BtnLogout() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(resetToInitialState());
  };
  return (
    <button onClick={handleSubmit} className="btn btn-secondary">
      Вихід
    </button>
  );
}

export function BtnAddUser() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setIsShowChoiceBtnsForAdmin(false));
    dispatch(setIsShowFormRegistrationUser(true));
  };
  return (
    <button onClick={handleSubmit} className="btn btn-success m-1">
      Додати користувача
    </button>
  );
}

export function BtnAddCosts() {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setIsShowChoiceBtnsForAdmin(false));
  };
  return (
    <button onClick={handleSubmit} className="btn btn-success m-1">
      Додати витрати
    </button>
  );
}
