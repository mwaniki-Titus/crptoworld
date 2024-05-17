import React, { useState } from 'react';
import Orb from '../assets/Orb.jpg';
import Nodata from '../assets/nodata.svg';
import Globe from '../assets/globe.jpeg';
import './profile.scss'; // Import the SCSS file
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Profile = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <>
      <Navbar />
      <div className="verify-orb-page">
        <div className="progress">
          <div className={`step ${isVerified ? 'completed' : ''}`}>
            <span className="checkmark">✔</span>
            <p>Create Account</p>
          </div>
          <div className={`step ${isVerified ? 'completed' : 'active'}`}>
            <span className="circle">{isVerified ? '✔' : '2'}</span>
            <p>Verify Orb</p>
          </div>
          <div className={`step ${isVerified ? 'active' : ''}`}>
            <span className="circle">3</span>
            <p>Become a Merchant</p>
          </div>
        </div>

        {!isVerified ? (
          <div className="verification-section">
            <img src={Orb} alt="Orb" className="orb-image" />
            <h2>Verify Orb online</h2>
            <p>
              Once the online Orb is issued, you can start scanning people by sending your Orb Merchant code (Referral Code) through WhatsApp, messenger etc
            </p>
          </div>
        ) : (
          <div className="verification-section verified">
            <div className="merchant-info">
              <h2>Become a Merchant</h2>
              <p>
                Do you want to earn in real time by referring other users? You will be required to deposit $45 (in WORLDCOIN) to our system, after the deposit is confirmed, you will be issued with a MERCHANT ID. This is an ID that makes you a Worldcoin agent.
              </p>
              <p>
                Anytime a user joins Worldcoin through your MERCHANT ID and scans their iris, you will be awarded 10 Worldcoins. When the same referred user becomes an ORB Agent, you will be awarded $10 which will be withdrawable every Friday with a minimum withdrawal limit of $50.
              </p>
              <a href="/payments/deposit">Become a Merchant →</a>
            </div>
            <div className="orb-verified">
              <h2>Orb Verified</h2>
              <p>Share your World ID and earn 2 WLD when your friend joins.</p>
              <div className="referral-link">
                <input type="text" value="https://wld.apptap.store/join/VDQEKKQX" readOnly />
                <button onClick={() => navigator.clipboard.writeText('https://wld.apptap.store/join/VDQEKKQX')}>COPY</button>
              </div>
            </div>
          </div>
        )}

        <div className="footer-container">
          <div className="worldcoin-info">
            <img src={Globe} alt="Worldcoin" className="globe-image" />
            <p>Worldcoin</p>
            <span>Unique humans</span>
          </div>
          {!isVerified && (
            <div className="verify-now-container">
              <a href="/onboarding" className="verify-now-button">VERIFY NOW</a>
            </div>
          )}
        </div>
      </div>

      <div className="pr-friends-on-worldcoin-section">
        <p className="bold-text">Friends on Worldcoin</p>
        <img src={Nodata} alt="No Data" />
        <p>No data</p>
      </div>

      <Footer />
    </>
  );
}

export default Profile;
