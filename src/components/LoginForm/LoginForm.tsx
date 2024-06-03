import { useContext, useEffect, useState } from 'react';
import InputField from '../InputField/InputField';
import LoginButton from '../LoginButton/LoginButton';
import { LoginContext } from '../../context/Context';

function RegisterForm() {
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    userPassword: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
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
  const handleChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/user/login?username=${loginFormData.username}&password=${loginFormData.userPassword}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { id: number }) => {
        if (data.id) {
          context.setIsLoggedIn(true);
        } else {
          context.setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setIsFormValid(
      !!loginFormData.username && !!loginFormData.userPassword
    );
  }, [loginFormData]);
  return (
    <div className='loginForm'>
      <form onSubmit={handleSubmit}>
        <InputField type={usernameObject} onChange={handleChange}></InputField>
        <InputField type={passwordObject} onChange={handleChange}></InputField>
        <LoginButton disabled={!isFormValid} type="loginButton">
          Login
        </LoginButton>
      </form>
    </div>
  );
}

export default RegisterForm;
