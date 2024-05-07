import React from "react";

import "./Main.scss";
import Home from "../components/home";
import { Routes, Route } from 'react-router-dom';
import Profile from "../components/profile";
import Dashboard from "../components/dashboard";
import Grants from "../components/grants";
import Wallet from "../components/Wallet";

const Main = () => {
  return (
   <>
     <div className="mainContent">
     <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/grants" element={<Grants/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        

          
        </Routes>
     
     </div>
   
   </>
  );
};

export default Main;
