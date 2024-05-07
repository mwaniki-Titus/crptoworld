import React from 'react';
import logo from "../assets/favicon.ico";
import './home.scss'; 

const Home = () => {
    return (
        <div className="home">
            <div className="home__balance">
                <p>Total Balance</p>
                <p>$174.24</p>
            </div>
            <div className="home__actions">
                <p>Deposit</p>
                <p>Withdraw</p>
                <p>Buy</p>
            </div>
            <div className="home__currencies">
                <div className="home__currency1">
                    <h2>Digital Dollars</h2>
                </div>
                <div className="home__currency2">
                    <h2>Crypto</h2>
                </div>
                <div className="home__currency3">
                    {/* <div> */}
                        {/* <h2>Worldcoin</h2>
                        <img src={logo} alt="" />
                    </div>
                    <div className="home__currency-details">
                        <p>Reserved: $179.24</p>
                        <p>$0.00</p>
                    </div> */}
                  
                </div>
            </div>
        </div>
    );
}

export default Home;
