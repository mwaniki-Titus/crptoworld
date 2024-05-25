import React from 'react';
import './Dashboard.scss';
import SideBar from './sidebar'

const Dashboard = () => {
  return (
    <>
    <SideBar />
    <div className="dashboard">
      <header className="header">
        <h1 className="header__title">Dashboard</h1>
        <div className="header__user">
          <button className="header__button"> <a href ='/First'>Visit Website</a></button>
          <div className="header__user-info">
            <img src="profile-picture-url" alt="User" className="header__user-avatar" />
            <span className="header__user-name">Israel Wataka</span>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="card">
          <div className="card__icon card__icon--blue">
            <i className="fas fa-users"></i>
          </div>
          <div className="card__info">
            <h2 className="card__title">Unique Humans</h2>
            <p className="card__count">332</p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon card__icon--red">
            <i className="fas fa-check"></i>
          </div>
          <div className="card__info">
            <h2 className="card__title">Verified Users</h2>
            <p className="card__count">226</p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon card__icon--orange">
            <i className="fas fa-user"></i>
          </div>
          <div className="card__info">
            <h2 className="card__title">Total Verified Agents</h2>
            <p className="card__count">13</p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon card__icon--green">
            <i className="fab fa-bitcoin"></i>
          </div>
          <div className="card__info">
            <h2 className="card__title">Total WLD Claimed</h2>
            <p className="card__count">11532</p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon card__icon--black">
            <i className="fas fa-business-time"></i>
          </div>
          <div className="card__info">
            <h2 className="card__title">Total Unverified Users</h2>
            <p className="card__count">96</p>
          </div>
        </div>
        <div className="card">
          <div className="card__icon card__icon--lightblue">
            <i className="fas fa-sliders-h"></i>
          </div>
          <div className="card__info">
            <h2 className="card__title">Total Trades</h2>
            <p className="card__count">122</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
