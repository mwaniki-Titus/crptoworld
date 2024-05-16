import access from '../assets/info.svg';
import setting from '../assets/Dashboard.jpeg';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={access} alt="Access" />
            <NavLink to="/dashboard">
                <img src={setting} alt="Setting" />
            </NavLink>
        </div>
    );
};

export default Navbar;
