import React from 'react';
import bitcoinIcon from '../../assets/bitcoin.svg'; // Import Bitcoin icon image
import litecoinIcon from '../../assets/litecoin.svg'; // Import Litecoin icon image
import tetherIcon from '../../assets/tether.svg'; // Import Tether icon image
import GreaterBlack from '../../assets/greaterblack.svg';
import './crypto.scss';
import TopBar from '../../layouts/Topbar'


const CryptoPage = () => {
  return (
    <>
    <TopBar/>
    <div className="crypto-page">
      <h2>Select Network</h2>
      <div className="crypto-card">
        <div className="crypto-option">
          <img src={bitcoinIcon} alt="Bitcoin Icon" className="icon" />
          <span className="name">Bitcoin</span>
          <img src={GreaterBlack} alt="Greater Black" className="svg" />
        </div>
        <div className="crypto-option">
          <img src={litecoinIcon} alt="Litecoin Icon" className="icon" />
          <span className="name">Litecoin</span>
          <img src={GreaterBlack} alt="Greater Black" className="svg" />
        </div>
        <div className="crypto-option">
          <img src={tetherIcon} alt="Tether Icon" className="icon" />
          <span className="name">Tether USDT (TRC20)</span>
          <img src={GreaterBlack} alt="Greater Black" className="svg" />
        </div>
      </div>
    </div>
    </>
  );
}

export default CryptoPage;
