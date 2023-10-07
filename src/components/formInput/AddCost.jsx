import {Formik, Form} from 'formik';
import {useEffect} from "react";

const submitFormAddCost = () => {
    console.log("### Треба внести в базу")
}
export default function AddCost() {

    useEffect(()=>{
        const currentDate = new Date().toISOString().split('T')[0];
        const dateInput = document.getElementById('date');
        dateInput.value = currentDate;
    },[])

    return (
        <div>
            <h2>Додати витрату</h2>
            <Formik
                initialValues={{category: "", cost: ""}}
                onSubmit={submitFormAddCost}
            >
                <Form>
                    <label htmlFor="category"> Введіть категорію витрат:</label>
                    <select name="category" id="category" >
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
                    </select>

                    <label htmlFor="cost"> Введіть суму витрат (грн.):</label>
                    <input type="text" name="cost" id="cost"/>

                    <label htmlFor="date"> Введіть дату витрат:</label>
                    <input type="date" name="date" id="date"/>

                    <button type="submit">Підтвердити</button>
                </Form>

            </Formik>
        </div>
    )
}