import React, { useState } from 'react'; // Import useState
import './Login.scss';
import { Link } from 'react-router-dom';
import Logo from '../assets/favicon.ico';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Send username and password to backend for authentication
    // If authentication is successful, handle redirection or other actions
  }; 

  return (
    <div className="page">
      <img src={Logo} alt="Worldcoin Logo" />
      <h2>Login</h2>
      <p>Enter your details to login back to your account.</p>
      <form>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <p className="forgot-password">Forgot your password? <Link to="/forgotpassword">Reset here</Link></p>
        </div>
        <div className="checkbox-wrapper">
          <input type="checkbox" id="trust" />
          <label htmlFor="trust">Trust this device</label>
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
      <p className="create-account">Don't have an account? <Link to="/createaccount">Create Account</Link></p>
    </div>
  );
};

export default Login;
