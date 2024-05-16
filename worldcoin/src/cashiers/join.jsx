import React, { useState } from 'react';
import './join.scss';
import CommissionIcon from '../assets/commission.svg';
import PromoteIcon from '../assets/promote.svg';
import HelpIcon from '../assets/help.svg';
import AccountIcon from '../assets/account.svg';
import JoinImage from '../assets/join.jpg'; 
import FAQ from './faq';

const JoinCashiers = () => {

  return (
    <div className="join-container">
      <div className="join-section first-section">
        <h2>Become a payment agent on Worldcoin</h2>
        <p>
          Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're doing our best here.
          No kanban boards, burndown charts, or tangled flowcharts with our Focus system. Just the undeniable urge to fill empty circles.
        </p>
        <a href="/cashiers/create" className="become-agent-btn">Become an agent</a>
      </div>
      <div className="join-section second-section">
        <h2>Tap into an established and growing market</h2>
        <p>
          Reach hundreds of traders on our platform looking for ways to fund their accounts through local bank wires and e-payment methods.
        </p>
        <img src={JoinImage} alt="Join background" style={{ width: '490px', height: '357px' }} />
       
      </div>

      <div className="control-info">
        <h3>You are in control</h3>
        <div className="control-cards">
          <div className="control-card">
            <img src={CommissionIcon} alt="Commission" />
            <p>Determine your commission per transaction, subject to our established thresholds.</p>
          </div>
          <div className="control-card">
            <img src={PromoteIcon} alt="Promote" />
            <p>Promote your services to clients in your country.</p>
          </div>
        </div>
        <div className="control-cards">
          <div className="control-card">
            <img src={HelpIcon} alt="Help" />
            <p>Help clients to make multiple deposits and withdrawals daily.</p>
          </div>
          <div className="control-card">
            <img src={AccountIcon} alt="Account" />
            <p>Close your account at any time you want.</p>
          </div>
        </div>
      </div>

     <FAQ/>
    </div>
  );
};

export default JoinCashiers;
