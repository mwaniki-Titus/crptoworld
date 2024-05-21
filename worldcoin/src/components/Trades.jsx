import React, { useState, useEffect } from 'react';
import './Trades.scss'; 
import NoDataImage from '../assets/nodata.svg';
import TopBar from '../layouts/Topbar'


const Trades = () => {
    const [trades, setTrades] = useState([]);

    // Assume trades are fetched from an API or stored in local storage
    useEffect(() => {
        // Fetch trades data or get it from local storage
        // Example:
        // const fetchedTrades = fetchTrades(); // Implement fetchTrades function or retrieve from local storage
        // setTrades(fetchedTrades);
        const fetchedTrades = [
            { id: 1, type: 'Buy', amount: 100, agent: 'Israel Wataka' },
            { id: 2, type: 'Withdraw', amount: 50, agent: 'Sed Est' }
            // Add more trades as needed
        ];
        setTrades(fetchedTrades);
    }, []);

    return (
        <>
        {<TopBar/>}
        <div className="trades-container">
            <h2>Recent Trades</h2>
            {trades.length > 0 ? (
                <ul className="trade-list">
                    {trades.map(trade => (
                        <li key={trade.id} className="trade-item">
                            <p>{trade.type} {trade.amount} WLD with {trade.agent}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="no-data">
                    <img src={NoDataImage} alt="No Data" />
                    <p>No Data <br/>Your trades will appear here</p>
                </div>
            )}
        </div>
        </>
    );
}

export default Trades;
