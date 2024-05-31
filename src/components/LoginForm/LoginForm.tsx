import { useContext, useState } from 'react';
import InputField from '../InputField/InputField';
import LoginButton from '../LoginButton/LoginButton';
import { LoginContext } from '../../context/Context';

function LoginForm() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const context = useContext(LoginContext);
  const usernameObject = {
    id: 'username',
    placeholder: 'neki text',
    className: 'inputType-username',
  };
  const passwordObject = {
    id: 'password',
    placeholder: 'neki password text',
    className: 'inputType-password',
    type: 'password',
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => {
        context.setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error(error);
        context.setIsLoggedIn(false);
      });
    //context.setIsLoggedIn(true);
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

export default LoginForm;
