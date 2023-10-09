import {useField, ErrorMessage} from "formik";

const InputCost = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input  {...field} {...props} />
            <ErrorMessage name={props.name}/>
        </>
    );
};

export default InputCost;