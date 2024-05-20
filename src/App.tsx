import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField/InputField';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <LoginForm />
  );
}

export default App;
