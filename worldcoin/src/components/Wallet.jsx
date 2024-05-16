import React from 'react';
import './Wallet.scss'; // Import the SCSS file
import Badge from '../assets/Badge.png';
//import DepositIcon from '../assets/deposit.svg';
//import WithdrawIcon from '../assets/withdraw.svg';
//import BuyIcon from '../assets/buy.svg';
//import WorldIcon from '../assets/LogoWhite.svg';
import BalanceSection from './BalanceSection';
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

const Wallet = () => {
    return (
        <div classname="nav">
         <Navbar/>
         <>
        <BalanceSection />
            <div className="wl-recent-payments">
                <h3>Recent Payments</h3>
                <div className="wl-card">
                    <img src={Badge} alt="Badge" className="wl-badge" />
                    <div className="content">
                        <p className="wl-name">Worldcoin Grant</p>
                        <p className="wl-date">27/05/2024</p>
                        </div>
                        <p className="wl-amount">+$179.24</p>
                </div>
            </div>
            
        </>
        <Footer/>
        </div>
    );
}

export default Wallet;
