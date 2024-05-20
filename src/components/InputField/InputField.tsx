import './InputField.css';

function InputField({ type }) {
  return (
    <div>
      <input
        className={`inputType-${type.className}`}
        placeholder={type.placeholder}
      ></input>
    </div>
  );
}

export default InputField;
