import axios from 'axios';
import { Form, Formik } from 'formik';
import InputCost from '../formInput/InputCost';
import { APIURL } from '../../helpers/constants.js';
import { Role } from '../../helpers/enum.js';
import InputCategory from '../formInput/InputCategory.jsx';
import { notifyFailure, notifySuccess } from '../../helpers/notify';
import { object, string } from 'yup';
import hashPassword from '../../helpers/sequrity.js';

export default function FormRegistrationUser() {
  const formRegistrationSchema = object().shape({
    email: string().required("Поле обов'язкове для заповнення"),
    password: string().required("Поле обов'язкове для заповнення"),
  });

  const submitFormRegistrationUser = async (values, { resetForm }) => {
    try {
      console.log('### Сабміт успішний.  Треба подивитись в базі!!!', values);
      const response = await axios.post(
        `${APIURL}/api/registration-user`,
        values,
      );
      notifySuccess();
      resetForm();
    } catch (error) {
      notifyFailure();
      console.log('### error in FormRegistrationUser!', error);
    }
  };

  return (
    <div class="border rounded p-4">
      <h2>Форма реєстрації користувача:</h2>
      <Formik
        initialValues={{ email: '', password: '', role: Role.BASE }}
        onSubmit={submitFormRegistrationUser}
        validationSchema={formRegistrationSchema}
      >
        <Form className="d-flex flex-column">
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

          <button type="submit" className="btn btn-success m-2">
            Зареєструвати користувача
          </button>
        </Form>
      </Formik>
    </div>
  );
}
