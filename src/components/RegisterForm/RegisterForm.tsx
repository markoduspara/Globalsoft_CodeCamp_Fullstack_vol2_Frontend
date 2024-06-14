import { useContext, useEffect, useState } from 'react';
import InputField from '../InputField/InputField';
import LoginButton from '../LoginButton/LoginButton';
import { LoginContext } from '../../context/Context';

function RegisterForm() {
  const [registerFormData, setRegisterFormData] = useState({
    username: '',
    userPassword: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const usernameObject = {
    //id: 'username',
    placeholder: 'neki text',
    className: 'inputType-username',
    name: 'username',
  };
  const passwordObject = {
    //id: 'password',
    placeholder: 'neki password text',
    className: 'inputType-password',
    type: 'password',
    name: 'userPassword',
  };
  const context = useContext(LoginContext);
  const handleChange = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerFormData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { id: number }) => {
        if (data.id) {
          context.setShowView('seat');
        } else {
          context.setShowView('register');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setIsFormValid(
      !!registerFormData.username && !!registerFormData.userPassword
    );
  }, [registerFormData]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField type={usernameObject} onChange={handleChange}></InputField>
        <InputField type={passwordObject} onChange={handleChange}></InputField>
        <LoginButton disabled={!isFormValid} type="submitButton">
          Submit
        </LoginButton>
      </form>
    </div>
  );
}

export default RegisterForm;
