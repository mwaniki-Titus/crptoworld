import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import binanceIcon from '../assets/binance.svg'; // Import Binance icon image
import mpesaIcon from '../assets/mpesa.png'; // Import Mpesa icon image
import GreaterBlack from '../assets/greaterblack.svg';
import './deposit.scss';

const DepositPage = () => {
  return (
    <div className="deposit-page">
      <h2>Select Exchange</h2>
      <div className="dp-card">
        <Link to="/payments/deposit/crypto" className="exchange-option-1">
          <img src={binanceIcon} alt="Binance Icon" />
          <span>Crypto</span>
          <span className="available-text">Available</span>
          <img src={GreaterBlack} alt="Greater White" className="greater-icon-1" />
        </Link>
        <div className="exchange-option">
          <img src={mpesaIcon} alt="Mpesa Icon" />
          <span>Payment Agent</span>
          <span className="unavailable-text">Unavailable</span>
          <img src={GreaterBlack} alt="Greater White" className="greater-icon-1" />
        </div>
      </div>
    </div>
  );
}

export default DepositPage;
