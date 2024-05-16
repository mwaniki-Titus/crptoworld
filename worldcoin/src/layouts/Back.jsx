import React from 'react';
import { useHistory } from 'react-router-dom';
import access from '../assets/info.svg';
import './back.scss';

const Back = () => {
    const history = useHistory();

    const handleBack = () => {
        window.history.back(); // Go back using browser's built-in history
    };

    return (
        <div className="back">
            <img src={access} alt="Access" onClick={handleBack} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default Back;
