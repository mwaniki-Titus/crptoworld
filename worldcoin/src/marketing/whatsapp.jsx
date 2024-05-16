import React from 'react';
import './whatsapp.scss';
import WhatsAppLogo from '../assets/whatsapp.svg';
import CheckMarkIcon from '../assets/checkmark.svg'; // Assuming you have a checkmark icon

const WhatsAppAds = () => {
    return (
        <div className="whatsapp-ads-container">
            <h2>Unlock Earnings with WhatsApp</h2>
            <p>At WorldCoin, we value your support and want to reward you for spreading the word about our amazing service. You can earn real rewards just by sharing our service on your WhatsApp status.</p>
            
            <h3>How it Works</h3>
            <ol>
                <li>
                    <span className="checkmark-icon"><img src={CheckMarkIcon} alt="Checkmark" /></span>
                    <span className="bold">Get Your Unique Link.</span> Once you're logged in, you'll receive a unique referral link.
                </li>
                <li>
                    <span className="checkmark-icon"><img src={CheckMarkIcon} alt="Checkmark" /></span>
                    <span className="bold">Share on WhatsApp.</span> Share your link on your WhatsApp status and encourage your friends and followers to check out our service.
                </li>
                <li>
                    <span className="checkmark-icon"><img src={CheckMarkIcon} alt="Checkmark" /></span>
                    <span className="bold">Track Your Progress.</span> Your earnings will progressively increase as more people join through your referral link.
                </li>
                <li>
                    <span className="checkmark-icon"><img src={CheckMarkIcon} alt="Checkmark" /></span>
                    <span className="bold">Earn Rewards.</span> Share the screenshot of your views to <a href="https://wa.me/+18272628272">+18272628272</a>.
                </li>
            </ol>

            <div className="whatsapp-button">
                <a href="https://api.whatsapp.com/send?phone=18272628272&text=Hello,%20I%20would%20like%20to%20earn%20posting%20on%20WhatsApp">
                    <img src={WhatsAppLogo} alt="WhatsApp Logo" className="whatsapp-logo" />
                    <span>WhatsApp Us to get started</span>
                </a>
            </div>
        </div>
    );
}

export default WhatsAppAds;
