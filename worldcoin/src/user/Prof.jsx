import React, { useState } from 'react';
import './Prof.scss';
import UpdatePasswordForm from './Updatepassword';
import DeleteAccount from './DeleteAccount';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorAuthEnabled: false,
    sessions: [], // Array to store active sessions
  });
  const [emailVerified, setEmailVerified] = useState(false);

  // Function to handle saving user info
  const handleSaveUserInfo = () => {
    // Logic to save user info
  };

  // Function to handle saving password
  const handleSavePassword = () => {
    // Logic to save password
  };

  // Function to handle enabling/disabling two-factor authentication
  const handleToggleTwoFactorAuth = () => {
    // Logic to toggle two-factor authentication
  };

  // Function to handle logging out other browser sessions
  const handleLogoutOtherSessions = () => {
    // Logic to log out other sessions
  };

  // Function to handle deleting account
  const handleDeleteAccount = () => {
    // Logic to delete account
  };

  return (
    <div className="user-profile-container">
      <div className="profile-info-section">
        <h2>Profile Information</h2>
        <p>Update your account's profile information and email address..</p>

        <div className="form-group">
          <label>First Name</label>
          <input type="text" value={userInfo.firstName} onChange={(e) => setUserInfo({...userInfo, firstName: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input type="text" value={userInfo.lastName} onChange={(e) => setUserInfo({...userInfo, lastName: e.target.value})} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email: e.target.value})} />
          {emailVerified ? <p>Your email is verified</p> : <p>Your email is unverified</p>}
          {!emailVerified && <button onClick={() => console.log('Resend verification email')}>Resend Verification Email</button>}
        </div>
        <button onClick={handleSaveUserInfo}>Save</button>
      </div>

      <div className="update-password-section">
    
        <UpdatePasswordForm />
        <button onClick={handleSavePassword}>Save</button>
      </div>

      <div className="two-factor-auth-section">
        <h2>Two Factor Authentication</h2>
        <p>Add additional security to your account using two factor authentication.</p>
        <p>When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application..</p>


        {/* Two-factor authentication toggle */}
        <button onClick={handleToggleTwoFactorAuth}>Enable/Disable</button>
        {/* QR code for scanning */}
      </div>

      <div className="browser-sessions-section">
        <h2>Browser Sessions</h2>
        <p>Manage and log out your active sessions on other browsers and devices.Permanently delete your account.</p>
        <p>If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.</p>
        {/* List of active sessions */}
        <button onClick={handleLogoutOtherSessions}>Log Out Other Browser Sessions</button>
      </div>

      <div className="delete-account-section">
        <h2>Delete Account</h2>
        <p>Permanently delete your account.</p>
        <p>Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.</p>
        {/*<DeleteAccount/>*/}
        <button onClick={handleDeleteAccount}>DELETE ACCOUNT</button>
      </div>
    </div>
  );
};

export default UserProfile;
