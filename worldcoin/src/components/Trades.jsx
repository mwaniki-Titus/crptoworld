import React from 'react';
import './Trades.scss'; 
import NoDataImage from '../assets/nodata.svg';

const Trades = () => {
    return (
        <div className="trades-container">
            <h2>Recent Trades</h2>
            <div className="no-data">
                <img src={NoDataImage} alt="No Data" />
                <p>No Data <br/>Your trades will appear here</p>
            </div>
        </div>
    );
}

export default Trades;
