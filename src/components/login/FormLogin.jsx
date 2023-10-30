import { Form, Formik } from 'formik';
import InputCost from '../formInput/InputCost';

export default function FormLogin() {
    const submitFormLogin = data => {
    console.log("### data in Submit Login", data)
}

  return (
    <div>
      <h2>Форма входу:</h2>
      <Formik
      initialValues={{ email: '', password: ''}}
      onSubmit={submitFormLogin}
      // validationSchema={formLoginSchema}
      >
        <Form>
          <InputCost
            label="Введіть електронну пошту:"
            name="email"
            type="email"
          />
          <InputCost label="Введіть пароль:" name="password" type="password" />

          <button type="submit">Увійти</button>
        </Form>
      </Formik>
    </div>
  );
}
