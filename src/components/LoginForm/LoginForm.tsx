import InputField from '../InputField/InputField';
import LoginButton from '../LoginButton/LoginButton';

function LoginForm() {
  const usernameObject = { placeholder: 'neki text', className: 'username' };
  const passwordObject = {
    placeholder: 'neki password text',
    className: 'password',
  };
  return (
    <div>
      <form>
        <InputField type={usernameObject}></InputField>
        <InputField type={passwordObject}></InputField>
        <LoginButton type="submitButton"></LoginButton>
      </form>
    </div>
  );
}

export default LoginForm;
