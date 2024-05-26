import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('BTC');

    const handlePayment = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/create-payment', {
                amount,
                currency
            });
            window.location.href = response.data.data.invoice_url;
        } catch (error) {
            console.error('Error creating payment', error);
        }
    };

    return (
        <form onSubmit={handlePayment}>
            <div>
                <label>Amount</label>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Currency</label>
                <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)} 
                    required
                >
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    {/* Add more currencies as needed */}
                </select>
            </div>
            <button type="submit">Pay Now</button>
        </form>
    );
};

export default PaymentForm;
