import React, { useState } from 'react';
import './Users.scss';
import Sidebar from './sidebar';
import TopBar from './Topbar'

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, fullName: 'John Doe', status: 'active' },
    { id: 2, fullName: 'Jane Smith', status: 'active' },
    { id: 3, fullName: 'Alice Johnson', status: 'active' },
    { id: 4, fullName: 'Beauty Johnson', status: 'suspended' },
    // Add more users as needed
  ]);

  const removeUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const suspendUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'suspended' } : user
    ));
  };

  const recallUser = (userId) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: 'active' } : user
    ));
  };

  const activeUsers = users.filter(user => user.status !== 'suspended');
  const suspendedUsers = users.filter(user => user.status === 'suspended');

  return (
    <>
      <Sidebar />
      <>
      <TopBar pageTitle="Users"/>
      </>
      <div className="users">
        <h2>Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => removeUser(user.id)} className="action-btn remove">Remove</button>
                  <button onClick={() => suspendUser(user.id)} className="action-btn suspend">Suspend</button>
                </td>
              </tr>
            ))}
            {suspendedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.fullName}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => removeUser(user.id)} className="action-btn remove">Remove</button>
                  <button onClick={() => recallUser(user.id)} className="action-btn recall">Recall</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
