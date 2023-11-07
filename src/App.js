import { useSelector } from 'react-redux';
// import { store } from './store/store.js';
import FormAddCost from './components/formInput/FormAddCost.jsx';
import FormFindCostsPeriod from './components/formInput/FormFindCostsPeriod.js';
import FormLogin from './components/login/FormLogin.jsx';
import { BtnLogin, BtnLogout } from './components/login/BtnLoginLogout.js';
import { Role } from './helpers/enum.js';
import Greeting from './components/header/Greeting.js';
import FirstEnterForAdmin from './components/FirstEnterForAdmin/FirstEnterForAdmin.js';
import FormRegistrationAdmin from './components/login/FormRegistrationAdmin.jsx';

function App() {
  const isAdmin = useSelector(state => state.data?.isAdmin);
  const role = useSelector(state => state.data?.user?.role);
  const isLoginBtnClick = useSelector(state => state.data?.loginBtnClicked);

  console.log('### role in APP', role);
  console.log('### Role in APP', Role);
  console.log('### Role.ADMIN in APP', Role.ADMIN);

  return (
    <div>
      <FirstEnterForAdmin />
      {!isAdmin && <FormRegistrationAdmin />}

      {role && isLoginBtnClick && <Greeting />}
      {!role && !isLoginBtnClick && isAdmin && <BtnLogin />}
      {role && isLoginBtnClick && <BtnLogout />}
      {isLoginBtnClick && !role && <FormLogin />}
      {(role === Role.ADMIN || role === Role.BASE || role === Role.ADVANCED) &&
        isLoginBtnClick && <FormAddCost />}
      {(role === Role.ADMIN || role === Role.ADVANCED) && isLoginBtnClick && (
        <FormFindCostsPeriod />
      )}
    </div>
  );
}

export default App;
