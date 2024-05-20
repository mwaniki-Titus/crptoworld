import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AgentPage.scss';
import TopBar from '../layouts/Topbar'


const agents = [
  {
    name: 'Israel Wataka',
    description: 'Mystic always being on the rise',
    depositCommission: 20,
    withdrawCommission: 20
  },
  {
    name: 'Sed Est',
    description: 'Nihil soluta autem id quidem...',
    depositCommission: 18,
    withdrawCommission: 18
  },
  {
    name: 'Ipsam Nihil Dolores',
    description: 'Cupiditate aut sed saepe...',
    depositCommission: 22,
    withdrawCommission: 22
  },
  {
    name: 'Totam Et Ipsa Dolores',
    description: 'Facere perspiciatis officia maiores...',
    depositCommission: 15,
    withdrawCommission: 15
  }
];

const AgentPage = () => {
  const { agentName } = useParams();
  const agent = agents.find(a => a.name === decodeURIComponent(agentName));

  if (!agent) {
    return <p>Agent not found</p>;
  }

  const [amount, setAmount] = useState(100);
  const [message, setMessage] = useState('');
  const conversionRate = 187.07;
  const maxWLD = 3000;

  const handleAmountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > maxWLD) {
      setMessage(`Maximum WLD is ${maxWLD}`);
      setAmount(maxWLD);
    } else {
      setMessage('');
      setAmount(value);
    }
  };

  const totalKshWithoutCommission = amount * conversionRate;
  const depositCommissionRate = agent.depositCommission / 100;
  const totalKshWithCommission = totalKshWithoutCommission * (1 + depositCommissionRate);
  const totalCommission = totalKshWithoutCommission * depositCommissionRate;

  return (
    <>
    <div className="agent-page">
    <TopBar/>
      <div className="header">
        <h3>Become an Agent ?</h3>
        <div className="info-box">
          <p>Deposit world coins in your account to become an ORB agent</p>
          <a href="/Agentbenefits" className="agent-benefits">Agent Benefits →</a>
        </div>
      </div>
      
      <div className="payment-section">
        <label htmlFor="amount">I will pay</label>
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
          You get {amount} WLD for Ksh {totalKshWithCommission.toFixed(2)} (including {agent.depositCommission}% commission)
        </p>
        {message && <p className="message">{message}</p>}
        <button className="buy-button">BUY NOW</button>
        <p className="total-commission">
          Total Agent commission: Ksh {totalCommission.toFixed(2)}
        </p>
      </div>
      
      <div className="agent-rates">
        <h2>Agent Rates</h2>
        <div className="rates">
          <div className="rate">
            <p>Deposit Commission</p>
            <span>{agent.depositCommission}%</span>
          </div>
          <div className="rate">
            <p>Withdraw Commission</p>
            <span>{agent.withdrawCommission}%</span>
          </div>
        </div>
      </div>
      
      <div className="agent-info">
        <h2>About this Agent</h2>
        <div className="agent-details">
          <div className="agent-status">
            <div className="agent-avatar">avatar</div>
            <p className="agent-name">{agent.name}</p>
            <p className="agent-online-status">Online</p>
          </div>
          <p className="agent-description">{agent.description}</p>
          <div className="email-verified">
            <span className="verified-check">✔</span> Orb Verified
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AgentPage;
