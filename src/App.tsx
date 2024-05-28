import React, { useState, createContext } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { LoginContext } from './context/Context';
import RegisterForm from './components/RegisterForm/RegisterForm';
import GameGrid from './components/GameGrid/GameGrid';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return !isLoggedIn ? (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <LoginForm />
    </LoginContext.Provider>
  ) : (
    <div>
      <p>Game</p>
    </div>
  );
}

export default App;
