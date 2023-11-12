import axios from 'axios';
import { Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import InputCost from '../formInput/InputCost';
import { APIURL } from '../../helpers/constants.js';
import {
  setIsShowChoiceBtnsForAdmin,
  setIsShowFormRegistrationAdmin,
  setUserInStore,
} from '../../store/sliceUser.js';
import { Role } from '../../helpers/enum.js';
import { useState } from 'react';
import InputCategory from '../formInput/InputCategory.jsx';

export default function FormRegistrationUser() {
  const dispatch = useDispatch();
  const [isAdminRegistered, setIsAdminRegistered] = useState(false);

  const submitFormRegistrationUser = async (values, { resetForm }) => {
    try {
      console.log('### Сабміт успішний.  Треба подивитись в базі!!!', values);
      const response = await axios.post(
        `${APIURL}/api/registration-user`,
        values,
      );
      console.log(
        '### response BEFORE DISPATCH in submitFormRegistrationUser',
        response,
      );

      // dispatch(setUserInStore(response.data[0]));
      console.log('### response in submitFormRegistrationUser', response);
      console.log(
        '### response.data in submitFormRegistrationUser',
        response.data,
      );

      resetForm();
      //   dispatch(setIsShowFormRegistrationAdmin(false));
      //   dispatch(setIsShowChoiceBtnsForAdmin(true));
    } catch (error) {
      console.log('### error in FormRegistrationUser!', error);
    }
  };

  return (
    <div>
      <h2>Форма реєстрації користувача:</h2>
      <Formik
        initialValues={{ email: '', password: '', role: Role.BASE }}
        onSubmit={submitFormRegistrationUser}
        // validationSchema={formLoginSchema}
      >
        <Form>
          <InputCost
            label="Введіть електронну пошту:"
            name="email"
            type="email"
          />
          <InputCost label="Введіть пароль:" name="password" type="password" />

          <InputCategory label="Виберіть роль:" name="role">
            <option value={Role.BASE}>Базова</option>
            <option value={Role.ADVANCED}>Продвинута</option>
          </InputCategory>

          <button type="submit">Зареєструвати користувача</button>
        </Form>
      </Formik>
    </div>
  );
}
