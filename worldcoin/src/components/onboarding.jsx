import React from 'react';
import FaceID from '../assets/FaceID.jpeg'; 
import './Onboarding.scss'

const VerifyOnline = () => {
  return (
    <div className="verify-online-container">
      <h1>Verify Online</h1>
      <p>Scan your face to verify your identity</p>
      <p>To obtain your unique worldcoin mining ID, facial verification is required as part of the security process. This ensures a reliable and authenticated identity for participating in the mining network.</p>
      <img src={FaceID} alt="FaceID" className="face-id-image" />
      <a href="/onboarding/verify" className="continue-button">CONTINUE</a>
    </div>
  );
};

export default VerifyOnline;
