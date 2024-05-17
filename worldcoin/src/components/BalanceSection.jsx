import React from 'react';
import './balance.scss';
import DepositIcon from '../assets/deposit.svg';
import WithdrawIcon from '../assets/withdraw.svg';
import BuyIcon from '../assets/buy.svg';
import { Link } from 'react-router-dom';

const BalanceSection = () => {
  return (
    <div className="balancesection">
      <div className="profile-page__banner">
        <div className="total-balance">
          <p className="profile-page__banner-text">Total Balance</p>
          <p className="profile-page__banner-amount">$179.24</p>
        </div>
      </div>
      <div className="icons">
        <Link to="/payments/deposit" className="icon">
          <div className="icon-circle">
            <img src={DepositIcon} alt="Deposit" />
          </div>
          <p>Deposit</p>
        </Link>
        <Link to="/payments/withdraw" className="icon">
          <div className="icon-circle">
            <img src={WithdrawIcon} alt="Withdraw" />
          </div>
          <p>Withdraw</p>
        </Link>
        <Link to="/cashiers" className="icon">
          <div className="icon-circle">
            <img src={BuyIcon} alt="Buy" />
          </div>
          <p>Buy</p>
        </Link>
      </div>
    </div>
    
  );
};

export default BalanceSection;
