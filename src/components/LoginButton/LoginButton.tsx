import './LoginButton.css';
function LoginButton({ type }) {
  return (
    <div>
      <button className={type} type="submit"></button>
    </div>
  );
}

export default LoginButton;
