import React from 'react';
import { useNavigate } from 'react-router-dom';
import less from '../assets/back.svg';
import './TopBar.scss';

const TopBar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="topbar">
      <button onClick={handleBack} className="back-button">
        <img src={less} alt="Back" />
      </button>
    </div>
  );
};

export default TopBar;
