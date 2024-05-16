import React from 'react';
import { Link } from 'react-router-dom';
import './privacy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-subtitle">WORLDCOIN PRIVACY POLICY</p>
      <p className="privacy-introduction">
        <strong>Introduction</strong>
        <br />
        Welcome to Worldcoin! This Privacy Policy explains how we collect, use, and protect your personal information when you use our Services. By accessing or using any of the Services, you agree to the terms outlined in this policy.
      </p>
      <p className="privacy-info-heading">
        <strong>Information We Collect</strong>
      </p>
      <ul className="privacy-info-list">
        <li>Account Information: When you create a Worldcoin account, we collect your email address, username, and other necessary details.</li>
        <li>Usage Data: We collect information about how you use our Services, including your interactions with the Worldcoin application.</li>
        <li>Cookies and Tracking Technologies: We use cookies and similar technologies to enhance your experience and improve our Services.</li>
        <li>Third-Party Services: If you link third-party services (such as social media accounts) to your Worldcoin account, we may collect information from those services.</li>
      </ul>
      <p className="privacy-info-heading">
        <strong>How We Use Your Information</strong>
      </p>
      <ul className="privacy-info-list">
        <li>Providing Services: We use your information to deliver and improve our Services.</li>
        <li>Communication: We may send you notifications, updates, and important announcements related to Worldcoin.</li>
        <li>Analytics and Research: We analyze user behavior to enhance our Services and develop new features.</li>
        <li>Legal Compliance: We may use your information to comply with legal obligations.</li>
      </ul>
      <p className="privacy-info-heading">
        <strong>Data Security</strong>
      </p>
      <p className="privacy-info">
        We take data security seriously. We implement measures to protect your information from unauthorized access, disclosure, or alteration.
      </p>
      <p className="privacy-info-heading">
        <strong>Your Choices</strong>
      </p>
      <ul className="privacy-info-list">
        <li>Account Settings: You can manage your account settings and communication preferences within the Worldcoin application.</li>
        <li>Data Access and Deletion: You can request access to or deletion of your personal data by contacting our support team.</li>
      </ul>
      <p className="privacy-info-heading">
        <strong>Changes to this Policy</strong>
      </p>
      <p className="privacy-info">
        We may update this Privacy Policy from time to time. Please review it periodically to stay informed about any changes.
      </p>
      <p className="privacy-back-link">
        <Link to="/createaccount">Back</Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
