import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.scss';

const Sidebar = () => {
  const [logoutClicked, setLogoutClicked] = useState(false);

  const handleLogout = () => {
    
    setLogoutClicked(true);
    setTimeout(() => {
      window.location.href = '/admin/login';
    }, 2000); 
  };

  const handleLogoutClick = () => {
    alert('Logging out. See you next time.');
    handleLogout();
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h3>Worldcoin</h3>
      </div>
      <nav className="sidebar__nav">
        <NavLink to="/admin/dashboard" activeClassName="active" className="sidebar__link">
          <i className="fas fa-home"></i>
          Dashboard
        </NavLink>
        <NavLink to="/admin/users" activeClassName="active" className="sidebar__link">
          <i className="fas fa-users"></i>
          Users
        </NavLink>
        <NavLink to="/admin/referrals" activeClassName="active" className="sidebar__link">
          <i className="fas fa-images"></i>
          Referrals
        </NavLink>
        <NavLink to="/admin/grants" activeClassName="active" className="sidebar__link">
          <i className="fas fa-briefcase"></i>
          Grants
        </NavLink>
        <NavLink to="/admin/agents" activeClassName="active" className="sidebar__link">
          <i className="fas fa-handshake"></i>
          Agents
        </NavLink>
        <NavLink to="/admin/faq" activeClassName="active" className="sidebar__link">
          <i className="fas fa-question-circle"></i>
          FAQ
        </NavLink>
        <NavLink to="/admin/photo-gallery" activeClassName="active" className="sidebar__link">
          <i className="fas fa-camera"></i>
          Photo Gallery
        </NavLink>
        <NavLink to="/admin/setting" activeClassName="active" className="sidebar__link">
          <i className="fas fa-cog"></i>
          Setting
        </NavLink>
        <button onClick={handleLogoutClick} className="sidebar__link">
          <i className="fas fa-sign-out"></i>
          Logout
        </button>
      </nav>
      {logoutClicked && (
        <div className="logout-message">
          <p>Logging out. See you next time.</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
