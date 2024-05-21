import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../features/user/userApi';
import Logo from '../assets/favicon.ico';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting login with:', email, password); // Add console log
      const result = await loginUser({ Email: email, Password: password }).unwrap();

      if (result.token) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        console.log('Login successful'); // Add console log
        navigate('/Home'); // Change to the appropriate route after successful login
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="page">
      <img src={Logo} alt="Worldcoin Logo" />
      <h2>Login</h2>
      <p>Enter your details to log in to your account.</p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <p className="forgot-password">Forgot your password? <Link to="/forgotpassword">Reset here</Link></p>
        </div>
        <button type="submit" disabled={isLoading}>Login</button>
      </form>
      {isError && <p className="error">Login failed: {error.data?.message || error.message}</p>}
      <p className="create-account">Don't have an account? <Link to="/createaccount">Create Account</Link></p>
    </div>
  );
};

export default Login;
