import React from 'react';
import './home.scss';
import WorldIcon from '../assets/LogoWhite.svg';
import BalanceSection from './BalanceSection';
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'

const Home = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <BalanceSection />
            <div className="bank-cards">
                <div className="bank-card green hm-text">
                    <h4 className="hm-text">Digital Dollars</h4>
                </div>
                <div className="bank-card white hm-text">
                    <h4 className="hm-text">Crypto</h4>
                    <div className="balance hm-text"></div>
                </div>
                <div className="bank-card black hm-text">
                    <h4 className="hm-text">Worldcoin</h4>
                    <div className="balance hm-text">
                        <span className="hm-text">Reserved: $179.24</span>
                        <br />
                        <span className="hm-text">$0.00</span>
                    </div>
                    <img src={WorldIcon} alt="Worldcoin" className="world-icon" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
