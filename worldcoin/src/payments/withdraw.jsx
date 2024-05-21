import React from 'react';
import worldcoinFavicon from '../assets/LogoWhite.svg'; // Import favicon.ico image
import './withdraw.scss';
import GreaterBlack from '../assets/greaterblack.svg';
import binanceIcon from '../assets/binance.svg'; // Import Binance icon image
import mpesaIcon from '../assets/mpesa.png';
import { Link } from 'react-router-dom';
import TopBar from '../layouts/Topbar'


const WithdrawPage = () => {
  return (
    <>
    <TopBar/>
    <div className="wt-withdraw-page">
      <h2>Select Platform</h2>
      <div className="wt-withdraw-card">
        <div className="wt-withdraw-option-1" style={{ backgroundColor: "#353D47" }}>
          <div className="wt-top-content-1">
            <div className="wt-left-content-1">
              <div className="wt-name-1">Worldcoin</div>
              <img src={worldcoinFavicon} alt="Worldcoin Favicon" className="wt-favicon-1" />
            </div>
            <div className="wt-right-content-1">
              <div className="wt-balance-1">Available Balance: </div>
              <div className="wt-amount-1"> $0.00</div>
            </div>
          </div>
        </div>
        <div className="wt-withdraw-option-2" style={{ border: "2px solid blue", backgroundColor: "#C4DEF6" }}>
          <div className="wt-top-content-2">
            <div className="wt-message-2">Your account balance is below the minimum withdrawable</div>
          </div>
          <div className="wt-bottom-content-2">
            <a href="./deposit" className="wt-merchant-link-2">Become a merchant ?</a>
          </div>
        </div>

        <div className="dp-card">
        <Link to="/payments/withdraw/Agents" className="exchange-1">
          <img src={mpesaIcon} alt="Mpesa Icon" />
          <span>M-Pesa Agent</span>
          <span className="available-text">Available</span>
          <img src={GreaterBlack} alt="Greater White" className="greater-1" />
        </Link>
        <div className="exchange-option">
          <img src={binanceIcon} alt="Binance Icon" />
          <span>Crypto</span>
          <span className="unavailable-text">Unavailable</span>
          <img src={GreaterBlack} alt="Greater White" className="greater-1" />
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default WithdrawPage;
