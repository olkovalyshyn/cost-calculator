import { useSelector } from 'react-redux';
// import { store } from './store/store.js';
import FormAddCost from './components/formInput/FormAddCost.jsx';
import FormFindCostsPeriod from './components/formInput/FormFindCostsPeriod.js';
import FormLogin from './components/login/FormLogin.jsx';
import {
  BtnAddCosts,
  BtnAddUser,
  BtnLogin,
  BtnLogout,
} from './components/login/BtnLoginLogout.js';
import { Role } from './helpers/enum.js';
import Greeting from './components/header/Greeting.js';
import FirstEnterIsAdmin from './components/FirstEnterIsAdmin/FirstEnterIsAdmin.js';
import FormRegistrationAdmin from './components/login/FormRegistrationAdmin.jsx';
import FormRegistrationUser from './components/login/FormRegistrationUser.jsx';

function App() {
  const isAdmin = useSelector(state => state.data?.isAdmin);
  const role = useSelector(state => state.data?.user?.role);
  const isLoginBtnClick = useSelector(state => state.data?.loginBtnClicked);
  const isShowFormRegistrationAdmin = useSelector(
    state => state.data?.isShowFormRegistrationAdmin,
  );
  const isShowChoiceBtnsForAdmin = useSelector(
    state => state.data?.isShowChoiceBtnsForAdmin,
  );
  const isShowFormRegistrationUser = useSelector(
    state => state.data?.IsShowFormRegistrationUser,
  );

  // console.log('### role in APP', role);
  // console.log('### Role in APP', Role);

  return (
    <div>
      <FirstEnterIsAdmin />
      {role && isLoginBtnClick && <BtnLogout />}
      {isLoginBtnClick && !role && !isShowFormRegistrationUser && <FormLogin />}
      {role && isLoginBtnClick && <Greeting />}

      {!isAdmin && isShowFormRegistrationAdmin && <FormRegistrationAdmin />}
      {isShowChoiceBtnsForAdmin && isAdmin && (
        <div>
          <BtnAddUser />
          <BtnAddCosts />
        </div>
      )}
      {!role && !isLoginBtnClick && isAdmin && !isShowChoiceBtnsForAdmin && (
        <BtnLogin />
      )}
      {(role === Role.ADMIN || role === Role.BASE || role === Role.ADVANCED) &&
        isLoginBtnClick &&
        !isShowChoiceBtnsForAdmin &&
        !isShowFormRegistrationUser && <FormAddCost />}
      {(role === Role.ADMIN || role === Role.ADVANCED) &&
        isLoginBtnClick &&
        !isShowChoiceBtnsForAdmin &&
        !isShowFormRegistrationUser && <FormFindCostsPeriod />}
      {isShowFormRegistrationUser && <FormRegistrationUser />}
    </div>
  );
}

export default App;
