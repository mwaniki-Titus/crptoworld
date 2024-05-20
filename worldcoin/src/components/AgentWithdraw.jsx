import React, { useState } from 'react';
import './AgentWithdraw.scss';
import TopBar from '../layouts/Topbar'


const WithdrawPage = () => {
  const [amount, setAmount] = useState(100);
  const [message, setMessage] = useState('');
  const withdrawalCommissionRate = 20; // Example withdrawal commission rate
  const conversionRate = 187.07; // Example conversion rate
  const maxWithdrawal = 3000; // Example maximum withdrawal amount

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > maxWithdrawal) {
      setMessage(`Maximum withdrawal amount is ${maxWithdrawal}`);
      setAmount(maxWithdrawal);
    } else {
      setMessage('');
      setAmount(value);
    }
  };

  const totalKshWithoutCommission = amount * conversionRate;
  const withdrawalCommission = totalKshWithoutCommission * (withdrawalCommissionRate / 100);
  const totalKshWithCommission = totalKshWithoutCommission + withdrawalCommission;

  const handleWithdraw = () => {
    // Implement withdrawal logic here
  };

  return (
    <>
    <TopBar/>
    <div className="withdraw-page">
      <div className="header">
        <h2>Withdraw Funds</h2>
      </div>
      
      <div className="withdraw-section">
        <label htmlFor="amount">Withdrawal Amount</label>
        <div className="input-container">
          <input 
            type="number" 
            id="amount" 
            name="amount" 
            value={amount} 
            onChange={handleAmountChange} 
          />
          <span className="currency">WLD</span>
        </div>
        <p className="conversion">
          You will receive Ksh {totalKshWithCommission.toFixed(2)} (including {withdrawalCommissionRate}% commission)
        </p>
        {message && <p className="message">{message}</p>}
        <button className="withdraw-button" onClick={handleWithdraw}>Withdraw Now</button>
      </div>
    </div>
    </>
  );
};

export default WithdrawPage;
