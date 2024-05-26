import React from 'react';
import './Topbar.scss'

const Dashboard = ({ pageTitle }) => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1 className="header__title">{pageTitle}</h1>
        <div className="header__user">
          <button className="header__button"><a href='/First'>Visit Website</a></button>
          <div className="header__user-info">
            <img src="profile-picture-url" alt="User" className="header__user-avatar" />
            <span className="header__user-name">Israel Wataka</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
