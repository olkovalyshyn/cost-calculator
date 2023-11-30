import {useField, ErrorMessage} from "formik";

const InputCost = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{label}</label>
            <input  {...field} {...props} class="form-control"/>
            <ErrorMessage name={props.name}/>
        </div>
    );
};

export default InputCost;