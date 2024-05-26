import React, { useState } from 'react';
import Sidebar from './sidebar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Grants.scss';
import TopBar from './Topbar'

const Grants = () => {
  const [grants, setGrants] = useState([
    { id: 1, name: 'Grant A', amount: 500, dateRange: '2024-01-01 to 2024-02-01', eligible: 'All Users' },
    { id: 2, name: 'Grant B', amount: 300, dateRange: '2024-03-01 to 2024-04-01', eligible: 'Verified Users' },
    // Add more grants as needed
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newGrant, setNewGrant] = useState({
    name: '',
    amount: '',
    dateRangeStart: new Date(),
    dateRangeEnd: new Date(),
    eligible: 'All Users'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGrant({ ...newGrant, [name]: value });
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setNewGrant({ ...newGrant, dateRangeStart: start, dateRangeEnd: end });
  };

  const addNewGrant = (e) => {
    e.preventDefault();
    const dateRange = `${newGrant.dateRangeStart.toISOString().split('T')[0]} to ${newGrant.dateRangeEnd.toISOString().split('T')[0]}`;
    setGrants([...grants, { ...newGrant, id: grants.length + 1, dateRange }]);
    setNewGrant({ name: '', amount: '', dateRangeStart: new Date(), dateRangeEnd: new Date(), eligible: 'All Users' });
    setShowForm(false);
  };

  return (
    <>
      { <Sidebar /> }
      <>
      <TopBar pageTitle="Grants"/>
      </>
      <div className="grants">
        <h2>Grants</h2>
        <button onClick={() => setShowForm(!showForm)} className="add-grant-btn">
          {showForm ? 'Cancel' : 'Add New Grant'}
        </button>

        {showForm && (
          <form onSubmit={addNewGrant} className="grant-form">
            <div className="form-group">
              <label htmlFor="name">Grant Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={newGrant.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={newGrant.amount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date Range</label>
              <DatePicker
                selected={newGrant.dateRangeStart}
                onChange={handleDateChange}
                startDate={newGrant.dateRangeStart}
                endDate={newGrant.dateRangeEnd}
                selectsRange
                inline
              />
            </div>
            <div className="form-group">
              <label htmlFor="eligible">Eligible Users</label>
              <select
                id="eligible"
                name="eligible"
                value={newGrant.eligible}
                onChange={handleInputChange}
                required
              >
                <option value="All Users">All Users</option>
                <option value="Verified Users">Verified Users</option>
              </select>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        )}

        <table className="grants-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Date Range</th>
              <th>Eligible Users</th>
            </tr>
          </thead>
          <tbody>
            {grants.map(grant => (
              <tr key={grant.id}>
                <td>{grant.name}</td>
                <td>{grant.amount}</td>
                <td>{grant.dateRange}</td>
                <td>{grant.eligible}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Grants;
