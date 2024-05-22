import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/favicon.ico';
import './createaccount.scss';
import { useRegisterUserMutation } from '../features/user/userApi';

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const [registerUser, { isLoading, isSuccess, isError, error }] = useRegisterUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert('You must accept the terms and conditions to proceed.');
      return;
    }

    try {
      console.log('Registering user:', { firstName, email, password });
      
      const response = await registerUser({ Username: firstName, Email: email, Password: password, isAdmin: false }).unwrap();
      console.log('Registration response:', response); 
      
      if (response) {
        localStorage.setItem('user', JSON.stringify(response));
        navigate('/login');
      }
    } catch (err) {
      console.error('Failed to register:', err);
    }
  };

  return (
    <div className="c-a-page" style={{ width: '400px', height: '600px', margin: '0 auto' }}>
      <img src={Logo} alt="Worldcoin Logo" className="c-a-logo" />
      <h2 className="c-a-heading">Create Account</h2>
      <p className="c-a-paragraph">Fill this form to access Worldcoin, where you can explore exciting opportunities.</p>
      <form className="c-a-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="c-a-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          className="c-a-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="c-a-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="c-a-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="c-a-checkbox">
          <input
            type="checkbox"
            id="c-a-terms"
            className="c-a-checkbox-input"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            required
          />
          <label htmlFor="c-a-terms" className="c-a-checkbox-label">
            By proceeding, I agree to the <Link to="/termsofservice" className="c-a-checkbox-link">Terms of Service</Link> and <Link to="/privacypolicy" className="c-a-checkbox-link">Privacy Policy</Link>
          </label>
        </div>
        <button type="submit" className="c-a-button" disabled={isLoading}>REGISTER</button>
      </form>
      {isError && <p className="c-a-error">Registration failed: {error.data?.message || error.message}</p>}
      <p className="c-a-registered">
        <Link to="/login" className="c-a-link">Already registered?</Link>
      </p>
    </div>
  );
};

export default CreateAccount;
