import access from '../assets/Profile.jpeg'
import setting from '../assets/Dashboard.jpeg'
import './Navbar.scss'; 

const Navbar = () =>{
    return(
        <div className="navbar"> 
            <img src={access} alt="" />
            <img src={setting} alt="" />
        </div>
    )
}
export default Navbar;
