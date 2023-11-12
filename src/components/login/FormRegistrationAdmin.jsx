import axios from 'axios';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import InputCost from '../formInput/InputCost';
import { APIURL } from '../../helpers/constants.js';
import {
  setIsShowChoiceBtnsForAdmin,
  setIsShowFormRegistrationAdmin,
  setLoginBtnClick,
  setUserInStore,
} from '../../store/sliceUser.js';
import { Role } from '../../helpers/enum.js';
import { useState } from 'react';
import { notifyFailure, notifySuccess } from '../../helpers/notify';

export default function FormRegistrationAdmin() {
  const dispatch = useDispatch();

  const submitFormRegistrationAdmin = async (values, { resetForm }) => {
    try {
      console.log('### Сабміт успішний.  Треба подивитись в базі!!!', values);
      const response = await axios.post(
        `${APIURL}/api/registration-admin`,
        values,
      );

      dispatch(setUserInStore(response.data[0]));
      console.log('### response in FormRegistrationAdmin', response);
      console.log('### response.data in FormRegistrationAdmin', response.data);

      resetForm();
      dispatch(setIsShowFormRegistrationAdmin(false));
      dispatch(setIsShowChoiceBtnsForAdmin(true));
            dispatch(setLoginBtnClick(true));

      notifySuccess();
    } catch (error) {
      console.log('### error in FormRegistrationAdmin!', error);
      notifyFailure();
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

          <button type="submit" className="btn btn-success">Зареєструвати адміністратора</button>
        </Form>
      </Formik>
    </div>
  );
}
