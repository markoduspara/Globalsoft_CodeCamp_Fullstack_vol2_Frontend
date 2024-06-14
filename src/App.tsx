import React, { useState, createContext } from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import { LoginContext } from './context/Context';
import RegisterForm from './components/RegisterForm/RegisterForm';
import GameGrid from './components/GameGrid/GameGrid';
import SeatForm from './components/Game/SeatForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showView, setShowView] = useState('login');
  const loginContext = createContext(LoginContext);
  console.log(showView);
  return (
    <LoginContext.Provider value={{ showView, setShowView }}>
      {showView === 'login' ? (
        <LoginForm />
      ) : showView === 'register' ? (
        <RegisterForm />
      ) : showView === 'seat' ? (
        <SeatForm />
      ) : (
        <GameGrid></GameGrid>
      )} 
    </LoginContext.Provider>
  );
}

export default App;
