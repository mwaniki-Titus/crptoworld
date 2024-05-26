import React, { useState } from 'react';
import Sidebar from './sidebar';
import './Agents.scss';
import TopBar from './Topbar'

const Agents = () => {
  const [agentApplications, setAgentApplications] = useState([
    { id: 1, name: 'John Doe', status: 'Pending', lastActive: new Date(Date.now() - 3600 * 1000) },
    { id: 2, name: 'Jane Smith', status: 'Pending', lastActive: new Date() },
    // Add more applications as needed
  ]);

  const [acceptedAgents, setAcceptedAgents] = useState([]);
  const [suspendedAgents, setSuspendedAgents] = useState([]);

  const handleAccept = (id) => {
    const agent = agentApplications.find(app => app.id === id);
    agent.status = 'Accepted';
    setAcceptedAgents([...acceptedAgents, agent]);
    setAgentApplications(agentApplications.filter(app => app.id !== id));
  };

  const handleReject = (id) => {
    const agent = agentApplications.find(app => app.id === id);
    agent.status = 'Rejected';
    setSuspendedAgents([...suspendedAgents, agent]);
    setAgentApplications(agentApplications.filter(app => app.id !== id));
  };

  const handleSuspend = (id) => {
    const agent = acceptedAgents.find(agent => agent.id === id);
    agent.status = 'Suspended';
    setSuspendedAgents([...suspendedAgents, agent]);
    setAcceptedAgents(acceptedAgents.filter(agent => agent.id !== id));
  };

  const handleRecall = (id) => {
    const agent = suspendedAgents.find(agent => agent.id === id);
    agent.status = 'Pending';
    setAgentApplications([...agentApplications, agent]);
    setSuspendedAgents(suspendedAgents.filter(agent => agent.id !== id));
  };

  const activeAgentsInLast24Hours = acceptedAgents.filter(agent => {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    return agent.lastActive >= last24Hours && agent.status === 'Accepted';
  });

  return (
    <>
      <Sidebar />
      <>
      <TopBar pageTitle="Agents"/>
      </>
      <div className="agents">
        <h2>Agent Applications</h2>
        <table className="agents-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {agentApplications.map(agent => (
              <tr key={agent.id}>
                <td>{agent.name}</td>
                <td>{agent.status}</td>
                <td>
                  <button onClick={() => handleAccept(agent.id)} className="accept-btn">Accept</button>
                  <button onClick={() => handleReject(agent.id)} className="reject-btn">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>All Agents</h2>
        <table className="agents-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {acceptedAgents.map(agent => (
              <tr key={agent.id}>
                <td>{agent.name}</td>
                <td>{agent.status}</td>
                <td>
                  {agent.status === 'Accepted' && (
                    <button onClick={() => handleSuspend(agent.id)} className="suspend-btn">Suspend</button>
                  )}
                </td>
                <td>{agent.lastActive.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Active in Last 24 Hours</h2>
        <table className="agents-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Last Active</th>
            </tr>
          </thead>
          <tbody>
            {activeAgentsInLast24Hours.map(agent => (
              <tr key={agent.id}>
                <td>{agent.name}</td>
                <td>{agent.status}</td>
                <td>{agent.lastActive.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Suspended Agents</h2>
        <table className="agents-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suspendedAgents.map(agent => (
              <tr key={agent.id}>
                <td>{agent.name}</td>
                <td>{agent.status}</td>
                <td>
                  <button onClick={() => handleRecall(agent.id)} className="recall-btn">Recall</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Agents;
