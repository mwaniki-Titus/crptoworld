import React, { useState } from 'react';
import './grants.scss';
import Badge from '../assets/Badge.png';
import GreaterBig from '../assets/greaterbig.svg';
import NoData from '../assets/nodata.svg';
//import Back from '../layouts/Back'

const Grants = () => {
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
    // Perform actions to update total balance and display claimed grant in wallet page
  };

  return (
    <>
    {/*<Back/>*/}
    
    <div className="grants-page">
      <h3>Available Grants</h3>
      <div className="grants-container">
        {claimed ? (
          <div className="no-grant">
            <div>
              <img src={NoData} alt="No Data" />
              <p>No data <br></br>Available grants will appear here</p>
            </div>
          </div>
        ) : (
          <div className="grants-card">
            <img src={Badge} alt="Badge" className="badge" />
            <div className="content">
              <p className="grant-name">Worldcoin Grant</p>
              <p className="grant-date">27/05/2024</p>
              <p className="grant-amount">$179.24</p>
            </div>
            <img src={GreaterBig} alt="Claim" className="claim-icon" onClick={handleClaim} />
          </div>
        )}
      </div>
    </div>
    </>
 
  );
};

export default Grants;
