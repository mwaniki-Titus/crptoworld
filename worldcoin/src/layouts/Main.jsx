import React from "react";
import "./Main.scss";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../components/home";
import Profile from "../components/profile";
import Dashboard from "../components/dashboard";
import Grants from "../components/grants";
import Wallet from "../components/Wallet";
import First from "../components/First";
import CreateAccount from "../components/CreateAccount";
import Login from "../components/Login";
import ForgotPassword from "../components/forgotpassword";
import PrivacyPolicy from "../components/PrivacyPolicy";
import TermsOfService from "../components/termsofservice";
import Trades from "../components/Trades";
import Whatsapp from "../marketing/whatsapp";
import Join from "../cashiers/join";
import Create from "../cashiers/create";
import Prof from "../user/Prof";
import Dash from "../cashier/DASHBOARD";
import Deposit from "../payments/deposit";
import Crypto from "../payments/deposit/crypto"
import Withdraw from "../payments/withdraw";

const Main = () => {
  const isLoggedIn = false; // Assume the user is not logged in
  
  return (
    <>
      <div className="mainContent">
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Navigate to="/home" />} />
          ) : (
            <Route path="/" element={<First />} />
          )}
          <Route path="/home" element={<Home />} />
          <Route path="/First" element={<First />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/grants" element={<Grants/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/Trades" element={<Trades/>} />
          <Route path="/marketing/whatsapp" element={<Whatsapp />} />
          <Route path="/cashiers/join" element={<Join/>} />
          <Route path="/cashiers/create" element={<Create/>} />
          <Route path="/user/prof" element={<Prof/>} />
          <Route path="/cashier/dashboard" element={<Dash/>} />
          <Route path="/payments/deposit" element={<Deposit/>} />
          <Route path="/payments/deposit/crypto" element={<Crypto/>} />
          <Route path="/payments/withdraw" element={<Withdraw/>} />
        </Routes> 
      </div>
    </>
  );
};

export default Main;