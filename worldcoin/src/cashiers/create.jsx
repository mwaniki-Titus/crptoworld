import React, { useState } from 'react';
import './create.scss';
import TopBar from '../layouts/Topbar'


    const CreateCashier = () => {
        // State variables for form inputs
        const [name, setName] = useState('');
        const [mpesaNumber, setMpesaNumber] = useState('');
        const [email, setEmail] = useState('');
        const [bio, setBio] = useState('');
        const [depositCommission, setDepositCommission] = useState('');
        const [withdrawCommission, setWithdrawCommission] = useState('');
        const [errors, setErrors] = useState({});
      
        // Handle form submission
        const handleSubmit = (e) => {
          e.preventDefault();
          // Add validation logic here
          const errors = {};
          if (!name.trim()) {
            errors.name = 'P2P Cashier Name is required';
          }
          if (!mpesaNumber.trim()) {
            errors.mpesaNumber = 'M-Pesa Number is required';
          } else if (isNaN(mpesaNumber)) {
            errors.mpesaNumber = 'M-Pesa Number must contain only numbers';
          } else if (mpesaNumber.length < 9) {
            errors.mpesaNumber = 'M-Pesa Number must be at least 9 digits';
          }
          if (!email.trim()) {
            errors.email = 'Email is required';
          }
          if (!bio.trim()) {
            errors.bio = 'Bio is required';
          }
          if (!depositCommission.trim()) {
            errors.depositCommission = 'Deposit Commission is required';
          } else if (isNaN(depositCommission)) {
            errors.depositCommission = 'Deposit Commission must contain only numbers';
          }
          if (!withdrawCommission.trim()) {
            errors.withdrawCommission = 'Withdraw Commission is required';
          } else if (isNaN(withdrawCommission)) {
            errors.withdrawCommission = 'Withdraw Commission must contain only numbers';
          }
          setErrors(errors);
          // If no errors, proceed with form submission
          if (Object.keys(errors).length === 0) {
            // Proceed with form submission
          }
        };
      
        return (
          <>
          <TopBar/>
          <div className="create-container">
            <h2>Create P2P Cashier</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">P2P Cashier Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="mpesaNumber">M-Pesa Number</label>
                <input type="text" id="mpesaNumber" value={mpesaNumber} onChange={(e) => setMpesaNumber(e.target.value)} />
                {errors.mpesaNumber && <span className="error">{errors.mpesaNumber}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                {errors.bio && <span className="error">{errors.bio}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="depositCommission">Deposit Commission</label>
                <input type="text" id="depositCommission" value={depositCommission} onChange={(e) => setDepositCommission(e.target.value)} />
                {errors.depositCommission && <span className="error">{errors.depositCommission}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="withdrawCommission">Withdraw Commission</label>
                <input type="text" id="withdrawCommission" value={withdrawCommission} onChange={(e) => setWithdrawCommission(e.target.value)} />
                {errors.withdrawCommission && <span className="error">{errors.withdrawCommission}</span>}
              </div>
        <button type="submit">Become A Cashier</button>
      </form>
    </div>
    </>
  );
};

export default CreateCashier;
