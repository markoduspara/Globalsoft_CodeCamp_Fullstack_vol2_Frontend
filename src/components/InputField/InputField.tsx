import './InputField.css';

function InputField({ type }) {
  return (
    <div>
      <input {...type}></input>
    </div>
  );
}

export default InputField;
