import axios from 'axios';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import InputCost from '../formInput/InputCost';
import { APIURL } from '../../helpers/constants.js';
import {
  setIsShowChoiceBtnsForAdmin,
  setUserInStore,
} from '../../store/sliceUser.js';
import { Role } from '../../helpers/enum.js';
import { notifyNotFoundUser } from '../../helpers/notify';

export default function FormLogin() {
  const dispatch = useDispatch();
  const role = useSelector(state => state.data?.user?.role);

  const storeFull = useSelector(state => state);
  console.log('### storeFull', storeFull);

  const submitFormLogin = async (values, { resetForm }) => {
    try {
      console.log('### Сабміт успішний.  Треба подивитись в базі!!!', values);
      const response = await axios.post(`${APIURL}/api/login`, values);
      dispatch(setUserInStore(response.data[0]));

      if (response.data[0].role === Role.ADMIN) {
        dispatch(setIsShowChoiceBtnsForAdmin(true));
      }

      console.log('### response in submitFormLogin', response);
      console.log('### response.data in submitFormLogin', response.data);

      resetForm();
    } catch (error) {
      notifyNotFoundUser();
      console.log('### error in submitFormLogin!', error);
    }
  };

  return (
    <div className="form-group">
      <h2>Форма входу:</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={submitFormLogin}
        // validationSchema={formLoginSchema}
      >
        <Form >
          <InputCost
            label="Введіть електронну пошту: "
            name="email"
            type="email"
          />
          <InputCost label="Введіть пароль: " name="password" type="password" />

          <button type="submit" className="btn btn-success">Увійти</button>
        </Form>
      </Formik>
    </div>
  );
}
