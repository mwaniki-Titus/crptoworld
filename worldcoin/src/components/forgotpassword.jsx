import React, { useState } from 'react';
import "./forgot.scss";

const ForgotPassword = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //  add code to handle the submission of the username
    //   make an API call to send a password reset email
    console.log("Submitted username:", username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="forgot-password-page">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="back-to-login">Back to <a href="/login">Login</a></p>
    </div>
  );
};

export default ForgotPassword;
