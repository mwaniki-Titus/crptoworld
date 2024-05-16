import React from "react";
import { NavLink } from "react-router-dom"; 
import HomeImage from "../assets/Home.jpeg";
import ProfileImage from "../assets/Profile.jpeg";
import WalletImage from "../assets/Wallet.jpeg";
import GrantsImage from "../assets/Grants.jpeg";
import DashboardImage from "../assets/Dashboard.jpeg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="/Home">
        <img src={HomeImage} alt="Home" />
        <span>Home</span>
      </NavLink>
      <NavLink to="/Profile">
        <img src={ProfileImage} alt="Profile" />
        <span>Profile</span>
      </NavLink>
      <NavLink to="/Wallet">
        <img src={WalletImage} alt="Wallet" />
        <span>Wallet</span>
      </NavLink>
      <NavLink to="/Grants">
        <img src={GrantsImage} alt="Grants" />
        <span>Grants</span>
      </NavLink>
      <NavLink to="/Dashboard">
        <img src={DashboardImage} alt="Dashboard" />
        <span>Dashboard</span>
      </NavLink>
    </div>
  );
};

export default Footer;
