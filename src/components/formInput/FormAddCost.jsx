import {Formik, Form, useField, useFormikContext} from 'formik';
import {object, string} from 'yup'
import InputDate from "./InputDate";
import InputCost from "./InputCost.jsx";
import InputCategory from "./InputCategory.jsx";


const formAddCostSchema = object().shape({
    category: string().required("Поле обов'язкове для заповнення"),
    cost: string().matches(/^\d+(\.\d{1,2})?$/, 'Сума витрат має бути числом з максимум двома десятковими знаками')
        .required("Поле обов'язкове для заповнення"),
})

const submitFormAddCost = () => {
    console.log("### Сабміт успішний.  Треба внести в базу")
}
export default function FormAddCost() {

    return (
        <div>
            <h2>Додати витрату</h2>
            <Formik
                initialValues={{category: "", cost: "", date: new Date()}}
                onSubmit={(values) => {
                    console.log("### ТУТ САБМІТ", values)
                }}
                validationSchema={formAddCostSchema}
            >
                <Form>
                    <InputCategory label="Введіть категорію витрат:" name="category">
                        <option value="">Виберіть позицію</option>
                        <option value="Їжа та продукти">Їжа та продукти</option>
                        <option value="Плата за житло">Плата за житло</option>
                        <option value="Транспорт">Транспорт</option>
                        <option value="Одяг та взуття">Одяг та взуття</option>
                        <option value="Здоров'я та медицина">Здоров'я та медицина</option>
                        <option value="Розваги та культура">Розваги та культура</option>
                        <option value="Подарунки та святкування">Подарунки та святкування</option>
                        <option value="Технології та комунікації">Технології та комунікації</option>
                        <option value="Подорожі та відпочинок">Подорожі та відпочинок</option>
                        <option value="Спорт і фітнес">Спорт і фітнес</option>
                        <option value="Витрати на дітей">Витрати на дітей</option>
                        <option value="Інші витрати">Інші витрати</option>
                    </InputCategory>

                    <InputCost
                        label="Введіть суму витрат (грн.):"
                        name="cost"
                        type="text"
                    />

                    <InputDate name="date"/>

                    <button type="submit">Записати</button>
                </Form>
            </Formik>
        </div>
    )
}