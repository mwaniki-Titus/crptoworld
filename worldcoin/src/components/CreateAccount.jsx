import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/favicon.ico';
import './createaccount.scss'; 

const CreateAccount = () => {
  return (
    <div className="c-a-page" style={{ width: '400px', height: '600px', margin: '0 auto' }}>
      <img src={Logo} alt="Worldcoin Logo" className="c-a-logo" />
      <h2 className="c-a-heading">Create Account</h2>
      <p className="c-a-paragraph">Fill this form to access Worldcoin, where you can explore exciting opportunities.</p>
      <form className="c-a-form">
        <input type="text" placeholder="First Name" className="c-a-input" />
        <input type="text" placeholder="Last Name" className="c-a-input" />
        <input type="email" placeholder="Email" className="c-a-input" />
        <input type="password" placeholder="Password" className="c-a-input" />
        <div className="c-a-checkbox">
          {/*<input type="checkbox" id="c-a-terms" className="c-a-checkbox-input" />*/}
          <label htmlFor="c-a-terms" className="c-a-checkbox-label">By proceeding, I agree to the <Link to="/termsofservice" className="c-a-checkbox-link">Terms of Service</Link> and <Link to="/privacypolicy" className="c-a-checkbox-link">Privacy Policy</Link></label>
        </div>
        <button type="submit" className="c-a-button">REGISTER</button>
      </form>
      <p className="c-a-registered"> <Link to="/login" className="c-a-link">Already registered?</Link></p>
    </div>
  );
};

export default CreateAccount;

