import React, { useState } from 'react';
import './AdminReferrals.scss';
import Sidebar from './sidebar';
import TopBar from './Topbar';

const AdminReferrals = () => {
  const [users, setUsers] = useState([
    { id: 1, fullName: 'John Doe', referrals: 5 },
    { id: 2, fullName: 'Jane Smith', referrals: 3 },
    { id: 3, fullName: 'Alice Johnson', referrals: 7 },
    { id: 4, fullName: 'Bob Brown', referrals: 10 },
    // Add more users as needed
  ]);

  const [rewardAmount, setRewardAmount] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRewardClick = (userId) => {
    setSelectedUser(userId);
  };

  const handleRewardSubmit = (event) => {
    event.preventDefault();
    if (selectedUser && rewardAmount) {
      alert(`Rewarded User ${selectedUser} with $${rewardAmount}`);
      // Here you would typically update the user's rewards in the backend
      setRewardAmount('');
      setSelectedUser(null);
    }
  };

  // Sort users by referrals in descending order
  const sortedUsers = [...users].sort((a, b) => b.referrals - a.referrals);

  return (
    <>
      <Sidebar />
      <>
      <TopBar pageTitle="Referrals"/>
      </>
      <div className="admin-referrals">
        <h2>Users with Referrals</h2>
        <table className="referrals-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Referrals</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.referrals}</td>
                <td>
                  <button onClick={() => handleRewardClick(user.id)} className="action-btn reward">Reward User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {selectedUser !== null && (
          <form className="reward-form" onSubmit={handleRewardSubmit}>
            <h3>Reward User {selectedUser}</h3>
            <input 
              type="number" 
              value={rewardAmount} 
              onChange={(e) => setRewardAmount(e.target.value)} 
              placeholder="Enter reward amount" 
              required 
            />
            <button type="submit" className="action-btn submit">Submit</button>
          </form>
        )}
      </div>
    </>
  );
};

export default AdminReferrals;
