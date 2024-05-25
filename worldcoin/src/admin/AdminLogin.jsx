import React, { useState } from 'react';
import './AdminLogin.scss';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement your login logic here
    // For example, verify username and password
    if (username === 'admin' && password === 'password') {
      alert('Login successful');
      navigate('/admin/dashboard'); // Redirect to the admin dashboard
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <button
          className="main-website-btn"
          onClick={() => navigate('/First')} // Navigate to the main website
        >
          Go to Main Website
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
