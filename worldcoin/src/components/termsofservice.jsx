import React from 'react';
import { Link } from 'react-router-dom';
import './terms.scss';

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <h1 className="terms-title">Terms of Service</h1>
      <p className="terms-subtitle">WORLDCOIN USER TERMS AND CONDITIONS</p>
      <p className="terms-introduction">
        Welcome to Worldcoin. These Terms between you and Tools for Humanity Corporation, a Delaware corporation (“Worldcoin,” “we,” or “us”), govern your use of and access to Worldcoin’s websites and applications, and all of the associated functionality, content, applications, and services we provide to you (collectively, the “Services”). Please read these Terms carefully before using or accessing the Services. By accessing or using any of the Services we provide, you expressly agree to be bound by these Terms and by our Privacy Statement, which is incorporated as a part of these Terms.
      </p>
      <p className="terms-important">Please note two especially important parts of these Terms:</p>
      <ul className="terms-important-list">
        <li>Dispute Resolution; Arbitration and Waiver of Class Action: You agree to resolve any disputes between you and Worldcoin through binding arbitration rather than in court. Please review the section below titled “Dispute Resolution; Arbitration and Waiver of Class Action” for details.</li>
        <li>Investment Disclaimer: Nothing in the Services constitutes an offer to sell, or the solicitation of an offer to buy, any securities. The Services do not constitute investment advice. Holding, buying, or selling Worldcoin tokens (“WLD”) or any other digital currencies may not be permitted where you live, and it is your responsibility to comply with all applicable laws. Please consider whether buying, selling, using, or holding digital currencies, including WLD, is suitable for you in light of your financial circumstances and your understanding of digital currencies. The value of WLD and other digital currencies may change quickly and may lose all of their value. We do not guarantee that we will launch the Worldcoin network, that the Worldcoin network will operate as planned, or that WLD will have value.</li>
      </ul>
      <p className="terms-key-points"><strong>Key Points:</strong></p>
      <ul className="terms-key-points-list">
        <li>Notifications: We may send you notices (emails, texts, and other automated communications) about the Services. You can choose how you’d like to receive these notices through the settings of the Worldcoin application. Due to circumstances outside of our control, notices may be delayed or prevented. You may receive notifications that include your username, account balance, and other account information.</li>
        <li>Privacy and Your Data: Our Privacy Statement describes the data we collect from you and how we use it. Please review it carefully.</li>
        <li>Eligibility: To use the Services, you must comply with these Terms and all applicable laws. You cannot use the Services for illegal activities. Additionally, you must meet specific criteria, including being 18 years of age or older and not residing in certain restricted regions.</li>
      </ul>
      <p className="terms-disclaimer">Good luck with your Worldcoin venture! 🌐💼</p>
      <p className="terms-back-link"><Link to="/createaccount">Back</Link></p>
    </div>
  );
};

export default TermsOfService;
