import React from 'react';
import './Wallet.scss'; // Import the SCSS file

const Wallet = () => {
    return (
        <>
            <div className="wallet__balance">
                <h4>Total Balance</h4>
                <h1>$179.24</h1>
                <button>Deposit</button>
                <button>Withdraw</button>
                <button>Buy</button>
            </div>

            <div className="wallet__recent-payments">
                <h2>Recent Payments</h2>
                <div className="wallet__payment-item">
                    <img src="" alt="" />
                    <div>
                        <h4>Worldcoin Grant</h4>
                        <p>26th Apr 2024</p>
                    </div>
                </div>
                <div>+179.24</div>
            </div>
        </>
    );
}

export default Wallet;
