import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/favicon.ico';
import './First.scss'; 

function First() {
  return (
    <div className="custom-homepage">
      <header className="custom-header">
        <img src={Logo} alt="Worldcoin Logo" className="custom-logo" />
      </header>
      <div className="custom-page">
        <h1 className="custom-heading">Introducing Worldcoin Online orb Verification</h1>
        <p className="custom-paragraph">
          Worldcoin, an online platform, allows you to establish a distinctive digital identity by scanning your iris using an orb camera. Accessing the Worldcoin wallet is granted upon creating an account through the Worldcoin app or website.
        </p>
        <p className="custom-paragraph">
          The Orbs ONLINE device camera will be used to verify your biometrics (eye iris) to ensure that you are a real person. Thereafter, you will be issued with a WORLD ID. It is important to note that once your iris has been scanned and ID created, that IRIS image is automatically deleted from the network.
        </p>
        <div className="custom-cta">
          <Link to="/createaccount"><button className="custom-create-account">Create Account</button></Link>
          <Link to="/login"><button className="custom-login">Login</button></Link>
        </div>
      </div>
    </div>
  );
}

export default First;
