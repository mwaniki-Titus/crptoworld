import React from 'react';
import './cashierDashboard.scss'; // Import the SCSS file
import Favicon from '../assets/favicon.ico';
import NoData from '../assets/nodata.svg';

const CashierDashboard = () => {
  const fullName = "John Doe"; // Example full name
  const email = "johndoe@example.com"; // Example email

  return (
    <div className="dashboard-container">
      <div className="header-section">
        <img src={Favicon} alt="Favicon" />
        <div className="user-info">
          <p>Hi,{fullName}</p>
          <p>{email}</p>
        </div>
      </div>

      <div className="balance-section">
        <div className="balance-info">
          <div className="total-balance">
            <p>Total Balance</p>
            <p>KES0.00</p>
          </div>
          <div className="balances">
            <div className="balance">
              <p>Available Balance</p>
              <p>KES0.00</p>
            </div>
            <hr className="balance-line" />
            <div className="balance">
              <p>Escrow Balance</p>
              <p>KES0.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="trades-section">
        <p className="section-title">Recent Trades</p>
        <a href="/cashier/trades" className="view-all-link">View All</a>
        <div className="no-data">
          <img src={NoData} alt="No Data" />
          <p>No Data Available</p>
        </div>
      </div>
    </div>
  );
}

export default CashierDashboard;
