import "./inputfield.css";

const InputField = (props) => {
    const {type, placeholder, name, label} = props;
    return (
        <div>
            <label className="input-label">{label}</label>
            <input className="reusable-input" type={type} placeholder={placeholder} name={name} />
        </div>
    )
}
export default InputField;