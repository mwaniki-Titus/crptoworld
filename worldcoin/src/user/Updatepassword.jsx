import React, { useState } from 'react';
import './UpdatePasswordForm.scss';

const UpdatePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password must match');
      return;
    }

    // Password update logic goes here
    // You can call an API to update the password

    // Reset form fields and error state
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="update-password-form-container">
      <h2>Update Password</h2>
      <p>Ensure your account is using a long, random password to stay secure.</p>
      <form onSubmit={handleSubmit} className="update-password-form">
        <label htmlFor="current-password">Current Password</label>
        <input
          type="password"
          id="current-password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
