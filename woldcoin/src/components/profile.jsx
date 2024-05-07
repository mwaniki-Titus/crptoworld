import React from 'react';
import Orb from '../assets/favicon.ico';
import './profile.scss'; // Import the SCSS file

const Profile = () => {
    return (
        <>
            <div className="profile__buttons">
                <button>Create Account</button>
                <button>Verify Orb</button>
                <button>Become a Merchant</button>
            </div>

            <div className="profile__verification">
                <img src={Orb} alt="" />
                <h2>Verify Org online</h2>
                <p>Once the online Orb is issued, you can start scanning people by sending your Orb Merchant code (Referral Code) through WhatsApp, messenger etc</p>
                <hr />
                <div className="profile__currency">
                    <div>
                        <img src="orb" alt="" />
                        <h3>Worldcoin</h3>
                        <p>Unique humans</p>
                    </div>
                    <div>
                        <button>VERIFY NOW</button>
                    </div>
                </div>
            </div>

            <div>
                <h2>Friends on Worldcoin</h2>
            </div>
        </>
    );
}

export default Profile;
