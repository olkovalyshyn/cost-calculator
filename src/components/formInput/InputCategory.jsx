import {Field, useField, ErrorMessage} from "formik";

const InputCategory = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name}/>
        </div>
    );
};

export default InputCategory;