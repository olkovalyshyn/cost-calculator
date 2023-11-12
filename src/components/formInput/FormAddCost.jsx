import axios from 'axios';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import InputDate from './InputDate';
import InputCost from './InputCost.jsx';
import InputCategory from './InputCategory.jsx';
import { useSelector } from 'react-redux';
import { APIURL } from '../../helpers/constants.js';
import { notifySuccess, notifyFailure } from '../../helpers/notify';

export default function FormAddCost() {
  const storeFull = useSelector(state => state);
  console.log('### storeFull in FormAddCost', storeFull);


  const formAddCostSchema = object().shape({
    category: string().required("Поле обов'язкове для заповнення"),
    cost: string()
      .matches(
        /^\d+(\.\d{1,2})?$/,
        'Сума витрат має бути числом з максимум двома десятковими знаками',
      )
      .required("Поле обов'язкове для заповнення"),
  });

  const submitFormAddCost = async (values, { resetForm }) => {
    try {
      resetForm();
      console.log('### Сабміт успішний.  Треба внести в базу!!!', values);
      const response = await axios.post(`${APIURL}/api/add-cost`, values);
      console.log('### response.data in submitFormAddCost', response.data);
      notifySuccess();
    } catch (error) {
      notifyFailure();
      console.log('### error in submitFormAddCost!', error);
    } 
  };

  return (
    <div>
      <h2>Додати витрату:</h2>
      <Formik
        initialValues={{ category: '', cost: '', date: new Date() }}
        onSubmit={submitFormAddCost}
        validationSchema={formAddCostSchema}
      >
        <Form className="d-flex flex-column">
          <InputCategory label="Введіть категорію витрат:" name="category">
            <option value="">Виберіть позицію</option>
            <option value="Їжа та продукти">Їжа та продукти</option>
            <option value="Плата за житло">Плата за житло</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Одяг та взуття">Одяг та взуття</option>
            <option value="Здоров'я та медицина">Здоров'я та медицина</option>
            <option value="Розваги та культура">Розваги та культура</option>
            <option value="Подарунки та святкування">
              Подарунки та святкування
            </option>
            <option value="Технології та комунікації">
              Технології та комунікації
            </option>
            <option value="Подорожі та відпочинок">
              Подорожі та відпочинок
            </option>
            <option value="Спорт і фітнес">Спорт і фітнес</option>
            <option value="Витрати на дітей">Витрати на дітей</option>
            <option value="Інші витрати">Інші витрати</option>
          </InputCategory>

          <InputCost
            label="Введіть суму витрат (грн.):"
            name="cost"
            type="text"
          />

          <InputDate name="date" label="Виберіть дату витрати:" />

          <button className="btn btn-success m-2" type="submit">Записати</button>
         
        </Form>
      </Formik>
    </div>
  );
}
