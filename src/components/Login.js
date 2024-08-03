import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

const Login = ({ onLogin }) => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(`handle got hit ${username}`)
    console.log('Login payload:', { username, password });
    try {
      const data = await login({ username, password });
      console.log('Login successful:', data);
      localStorage.setItem('token', data.token);
      onLogin();
      console.log('Navigating to /todos');
      navigate('/todos');
    } catch (error) {
      console.error('Login error', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

