import React, { useEffect, useState } from 'react';
import './Users.scss';
import Sidebar from './sidebar';
import TopBar from './Topbar';
import {
  useGetUsersQuery,
  useDeleteUserMutation,
  useSuspendUserMutation
} from '../features/user/userApi';

const Users = () => {
  const { data: usersData, error, isLoading } = useGetUsersQuery();
  const [users, setUsers] = useState([]);
  const [deleteUser] = useDeleteUserMutation();
  const [suspendUser] = useSuspendUserMutation();

  // Log fetched data
  useEffect(() => {
    if (usersData) {
      console.log('Fetched users data:', usersData);
      // Assuming usersData is an array
      setUsers(usersData.recordset.filter(user => user.role !== 'admin'));
    }
  }, [usersData]);

  // Log current users state
  useEffect(() => {
    console.log('Current users state:', users);
  }, [users]);

  const updateUserStatus = async (userId, status) => {
    console.log(`Updating user status: ${userId} to ${status}`);
    try {
      await suspendUser(userId);
      setUsers(users.map(user => 
        user.id === userId ? { ...user, status } : user
      ));
    } catch (error) {
      console.error('Error suspending user:', error);
    }
  };

  const removeUser = async (userId) => {
    console.log(`Removing user: ${userId}`);
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const activeUsers = users.filter(user => user.status !== 'suspended');
  const suspendedUsers = users.filter(user => user.status === 'suspended');

  if (isLoading) {
    console.log('Loading users...');
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading users:', error);
    return <div>Error loading users</div>;
  }

  return (
    <>
      <Sidebar />
      <TopBar pageTitle="Users" />
      <div className="users">
        <h2>Users</h2>
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Balance</th>
              <th>CreatedAt</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeUsers.map(user => (
              <tr className='details' key={user.id}>
                <td>{user.Username}</td>
                <td>{user.Email}</td>
                <td>{user.Balance}</td>
                <td>{user.CreatedAt}</td>
                <td>{user.Status}</td>
                <td>
                  <button onClick={() => removeUser(user.id)} className="action-btn remove">Remove</button>
                  <button onClick={() => updateUserStatus(user.id, 'suspended')} className="action-btn suspend">Suspend</button>
                </td>
              </tr>
            ))}
            {suspendedUsers.map(user => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.balance}</td>
                <td>{user.createdAt}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => removeUser(user.id)} className="action-btn remove">Remove</button>
                  <button onClick={() => updateUserStatus(user.id, 'active')} className="action-btn recall">Recall</button>
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


