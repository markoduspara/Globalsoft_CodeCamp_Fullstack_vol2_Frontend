import './LoginButton.css';
function LoginButton({ type, children, disabled }) {
  return (
    <div>
      <button disabled={disabled} className={type} type="submit">
        {children}
      </button>
    </div>
  );
}

export default LoginButton;
