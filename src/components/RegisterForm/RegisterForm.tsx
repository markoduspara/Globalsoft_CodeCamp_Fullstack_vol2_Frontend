import { useContext } from 'react';
import InputField from '../InputField/InputField';
import LoginButton from '../LoginButton/LoginButton';
import { LoginContext } from '../../context/Context';

function RegisterForm() {
  const usernameObject = {
    //id: 'username',
    placeholder: 'neki text',
    className: 'inputType-username',
  };
  const passwordObject = {
    //id: 'password',
    placeholder: 'neki password text',
    className: 'inputType-password',
    type: 'password',
  };
  const context = useContext(LoginContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'test', userPassword: 'testpassword' }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.username === 'test') {
          console.log('da');
          context.setIsLoggedIn(true);
        } else {
          console.log('ne');
          context.setIsLoggedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField type={usernameObject}></InputField>
        <InputField type={passwordObject}></InputField>
        <LoginButton type="submitButton"></LoginButton>
      </form>
    </div>
  );
}

export default RegisterForm;
