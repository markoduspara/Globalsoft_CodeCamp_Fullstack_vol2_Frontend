import './InputField.css';

function InputField({ type, onChange }) {
  return (
    <div>
      <input onChange={onChange} {...type}></input>
    </div>
  );
}

export default InputField;
