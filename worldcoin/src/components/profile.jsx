import React from 'react';
import Orb from '../assets/Orb.jpg';
import Nodata from '../assets/nodata.svg';
import Globe from '../assets/globe.jpeg';
import './profile.scss'; // Import the SCSS file
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <div className="card-section">
        <div className="progress-bar">
          <div className="progress" style={{ width: '33%' }}></div>
        </div>
        <hr className="divider" />
        <div className="step">
          <p>Create Account</p>
        </div>
        <div className="step">
          <p>Verify Orb</p>
        </div>
        <div className="step">
          <p>Become a Merchant</p>
        </div>

        <div className="pr-verify-orb-section">
          <img src={Orb} alt="Orb" />
          <p>Once the online Orb is issued, you can start scanning people by sending your Worldcoin Merchant code (Referral Code) through WhatsApp, messenger etc.</p>
          <hr className="line" />
          <p>Worldcoin  Unique Humans</p>
          <img src={Globe} alt="Globe" className="globe-image" />
          <a href="/onboarding" className="pr-verify-now">VERIFY NOW</a>
        </div>

        <div className="pr-friends-on-worldcoin-section">
          <p className="bold-text">Friends on Worldcoin</p>
          <img src={Nodata} alt="No Data" />
          <p>No data</p>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );

}

export default Profile;
