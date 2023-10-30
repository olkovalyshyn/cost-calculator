import FormAddCost from './components/formInput/FormAddCost.jsx';
import FormFindCostsPeriod from './components/formInput/FormFindCostsPeriod.js';
import FormLogin from './components/login/FormLogin.jsx';

function App() {
  return (
    <div>
      <FormLogin />
      <FormAddCost />
      <FormFindCostsPeriod />
    </div>
  );
}

export default App;
