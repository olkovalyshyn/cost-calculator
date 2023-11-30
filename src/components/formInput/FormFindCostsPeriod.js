import { Formik, Form } from 'formik';
import axios from 'axios';
import InputDate from './InputDate.jsx';
import { useState } from 'react';
import { APIURL } from '../../helpers/constants.js';

export default function FormFindCostsPeriod() {
  const [costsTotal, setCostsTotal] = useState();
  console.log('### costsTotal1', costsTotal);

  const submitFormFindCostsPeriod = async (values, { resetForm }) => {
    try {
      console.log(
        '### Сабміт FormFindCostsPeriod успішний.  Треба внести в базу!!!',
        values,
      );
      const response = await axios.post(
        `${APIURL}/api/get-cost-period`,
        values,
      );
      const costsSumm = response.data.reduce(
        (accumulator, currentValue) => accumulator + currentValue.cost,
        0,
      );
      setCostsTotal(costsSumm);
      console.log('### costsTotal2', costsTotal);

      console.log(
        '### response.data in submitFormFindCostsPeriod',
        response.data,
      );

      resetForm();
    } catch (error) {
      console.log('### error in submitFormFindCostsPeriod!', error);
    }
  };

  return (
    <div class="border rounded p-4">
      <h2>Отримати витрату за період:</h2>
      <Formik
        initialValues={{ dateFrom: '', dateTo: '' }}
        onSubmit={submitFormFindCostsPeriod}
        // validationSchema={formFindCostsPeriodSchema}
      >
        <Form className="d-flex flex-column">
          <InputDate name="dateFrom" label="Виберіть початкову дату:" />
          <InputDate name="dateTo" label="Виберіть кінцеву дату:" />

          <button type="submit" className="btn btn-success m-2">
            Отримати витрати
          </button>
        </Form>
      </Formik>
      {costsTotal && (
        <>
          <h2>Загальна витрата за період складає: {costsTotal} грн.</h2>
        </>
      )}
    </div>
  );
}
