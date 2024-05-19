import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';
import P2P from '../assets/p2p.svg';
import Trade from '../assets/trade.svg';
import WhatsApp from '../assets/whatsapp.svg';
import Profile from '../assets/profile.svg';
import Logout from '../assets/logout.svg';
import GreaterBlack from '../assets/greaterblack.svg';
import GreaterWhite from '../assets/greaterwhite.svg';
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

const Dashboard = () => {
  const [isCashierVerified, setIsCashierVerified] = useState(false);

  // Function to handle cashier verification status change
  const handleCashierVerification = () => {
    setIsCashierVerified(false); // Set cashier verification status to true
  };

  return (
    <div className="ds-dashboard-container">
      <Navbar/>
      <div className="ds-dashboard">
        {isCashierVerified ? (
          <Link to="/cashier/dashboard" className="ds-dashboard-card black-bg">
            <div className="ds-circle-icon black-bg">
              <img src={P2P} alt="P2P" className="icon" />
            </div>
            <div className="content">
              <h2>P2P Cashier Dashboard</h2>
              <p>Reload your float, manage trades and more. Access your dashboard</p>
            </div>
            <img src={GreaterWhite} alt="Greater White" className="greater-icon" />
          </Link>
        ) : (
          <Link to="/cashiers/join" className="ds-dashboard-card blue-bg">
            <div className="ds-circle-icon skyblue-bg">
              <img src={P2P} alt="P2P" className="icon" />
            </div>
            <div className="content">
              <h2>Become a P2P Cashier</h2>
              <p>Become a cashier and start selling WLD on the app</p>
            </div>
            <img src={GreaterWhite} alt="Greater White" className="greater-icon" />
          </Link>
        )}

        
<Link to="/trades" className="ds-dashboard-card">
          <div className="ds-circle-icon blue-bg">
            <img src={Trade} alt="Trade" className="icon" />
          </div>
          <div className="content">
            <h2>Traders</h2>
            <p>Manage your profile and account</p>
          </div>
          <img src={GreaterBlack} alt="Greater Black" className="greater-icon" />
        </Link>

        <Link to="/marketing/whatsapp" className="ds-dashboard-card">
          <div className="ds-circle-icon green-bg">
            <img src={WhatsApp} alt="WhatsApp" className="icon" />
          </div>
          <div className="content">
            <h2>WhatsApp Ads</h2>
            <p>Post on WhatsApp status and earn</p>
          </div>
          <img src={GreaterBlack} alt="Greater Black" className="greater-icon" />
        </Link>

        <Link to="/user/prof" className="ds-dashboard-card">
          <div className="ds-circle-icon purple-bg">
            <img src={Profile} alt="Profile" className="icon" />
          </div>
          <div className="content">
            <h2>Account</h2>
            <p>Manage your profile and account</p>
          </div>
          <img src={GreaterBlack} alt="Greater Black" className="greater-icon" />
        </Link>

        <Link to="/First" className="ds-dashboard-card">
          <div className="ds-circle-icon red-bg">
            <img src={Logout} alt="Logout" className="icon" />
          </div>
          <div className="content">
            <h2>Logout</h2>
            <p>Logout of your account</p>
          </div>
          <img src={GreaterBlack} alt="Greater Black" className="greater-icon" />
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
