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

export default function FormRegistrationAdmin() {
  const dispatch = useDispatch();
  const [isAdminRegistered, setIsAdminRegistered] = useState(false);

  const submitFormRegistrationAdmin = async (values, { resetForm }) => {
    try {
      console.log('### Сабміт успішний.  Треба подивитись в базі!!!', values);
      const response = await axios.post(
        `${APIURL}/api/registration-admin`,
        values,
      );
      console.log(
        '### response BEFORE DISPATCH in FormRegistrationAdmin',
        response,
      );

      dispatch(setUserInStore(response.data[0]));
      console.log('### response in FormRegistrationAdmin', response);
      console.log('### response.data in FormRegistrationAdmin', response.data);

      resetForm();
      dispatch(setIsShowFormRegistrationAdmin(false));
      dispatch(setIsShowChoiceBtnsForAdmin(true));
    } catch (error) {
      console.log('### error in FormRegistrationAdmin!', error);
    }
  };

  return (
    <div>
      <h2>Форма реєстрації адміністратора:</h2>
      <Formik
        initialValues={{ email: '', password: '', role: Role.ADMIN }}
        onSubmit={submitFormRegistrationAdmin}
        // validationSchema={formLoginSchema}
      >
        <Form>
          <InputCost
            label="Введіть електронну пошту:"
            name="email"
            type="email"
          />
          <InputCost label="Введіть пароль:" name="password" type="password" />

          <button type="submit">Зареєструвати адміністоатора</button>
        </Form>
      </Formik>
    </div>
  );
}
