import { useContext, useEffect, useState } from 'react';

import InputField from '../InputField/InputField';
import LoginButton from '../LoginButton/LoginButton';
import { LoginContext } from '../../context/Context';

function RegisterForm() {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    userPassword: '',
  });

  const usernameObject = {
    placeholder: 'Username',
    className: 'inputType-username',
    name: 'username',
  };
  const passwordObject = {
    placeholder: 'Password',
    className: 'inputType-password',
    type: 'password',
    name: 'userPassword',
  };
  const context = useContext(LoginContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(
      `http://localhost:3000/user/login?username=${loginFormData.username}&userpassword=${loginFormData.userPassword}`
    )
      .then((response) => response.json())
      .then((data) => {
        context.setShowView('game');
      })
      .catch((error) => {
        console.error(error);
        context.setShowView('login');
      });
    //context.setIsLoggedIn(true);
  };
  const handleChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    console.log(loginFormData);
    setIsFormValid(!!loginFormData.username && !!loginFormData.userPassword);
  }, [loginFormData]);

  const goToRegister = () => {
    context.setShowView('register');
  };
  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <InputField type={usernameObject} onChange={handleChange}></InputField>
        <InputField type={passwordObject} onChange={handleChange}></InputField>
        <LoginButton disabled={!isFormValid} type="submitButton">
          Submit
        </LoginButton>
      </form>
      <button onClick={goToRegister}>Register form</button>
    </div>
  );
}

export default RegisterForm;
