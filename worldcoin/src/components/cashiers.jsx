import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cashiers.scss';
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

const CashierPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
    <TopBar/>
    <div className="cashier-page">
      <h2>Buy WLD</h2>
      <p>Contact your preferred payment agent for payment instructions and make your deposit.</p>
      <input
        type="text"
        placeholder="Search agent"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="agent-list">
        {filteredAgents.length > 0 ? (
          filteredAgents.map(agent => (
            <div key={agent.name} className="agent">
              <div className="agent-summary" onClick={() => setSelectedAgent(selectedAgent === agent.name ? null : agent.name)}>
                <span className="agent-name">{agent.name}</span>
                <p className="agent-description">{agent.description}</p>
              </div>
              {selectedAgent === agent.name && (
                <div className="agent-details">
                  <p><strong>{agent.name}</strong></p>
                  <p>{agent.description}</p>
                  <div className="commission-box">
                    <p>Deposit Commission: {agent.depositCommission}%</p>
                    <p>Withdraw Commission: {agent.withdrawCommission}%</p>
                  </div>
                  <Link to={`/trades/${encodeURIComponent(agent.name)}`}>
                    <button>Buy WLD</button>
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No agent found with that name</p>
        )}
      </div>
    </div>
    </>
  );
};

export default CashierPage;
