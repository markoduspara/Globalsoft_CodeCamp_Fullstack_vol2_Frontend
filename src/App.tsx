import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField/InputField';
import LoginForm from './components/LoginForm/LoginForm';
import { LoginContext } from './context/Context';
import RegisterForm from './components/RegisterForm/RegisterForm';

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginContext = createContext(LoginContext);

  return !isLoggedIn ? (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <RegisterForm />
    </LoginContext.Provider>
  ) : (
    <div>
      <p>neka game forma</p>
    </div>
  );
}

export default App;
