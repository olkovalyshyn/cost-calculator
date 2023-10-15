import { useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InputDate = props => {
  const [field, meta, helpers] = useField(props.name);

  const { value } = field;
    const { setValue } = helpers;
    
  console.log('### field in InputDate', field);
  console.log('### meta in InputDate', meta);
  console.log('###  props', props);
  console.log('### value in InputDate', value);

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <DatePicker
        {...field}
        selected={value}
        onChange={date => setValue(date)}
      />
    </>
  );
};

export default InputDate;

// const InputDate = props => {
//   const [field, meta, helpers] = useField(props.name);

//   console.log('### props in InputDate', props);
//   console.log('### field in InputDate', field);
//   console.log('### meta in InputDate', meta);
//   console.log('### helpers in InputDate', helpers);

//   const { value } = meta;
//   const { setValue } = helpers;

//     const selectedDate = props.currentDate ? props.currentDate : "";

//   return (
//     <DatePicker {...field} selected={value || selectedDate} onChange={date => setValue(date)} />
//   );
// };

///////////////ПОЧАТКОВИЙ ПРАЦЮЮЧИЙ ВАРІАНТ
// const InputDate = ({ name = '' }) => {
//   const [field, meta, helpers] = useField(name);

//   const { value } = meta;
//   const { setValue } = helpers;

//   return (
//     <>
//       <label htmlFor={name}>Введіть дату</label>
//       <DatePicker
//         {...field}
//         selected={value}
//         onChange={date => setValue(date)}
//       />
//     </>
//   );
// };
