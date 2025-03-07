import Path from "../../path";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-swan.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-options">
        <NavLink to={Path.About} className="nav-link">
          <li>About us</li>
        </NavLink>
        <NavLink to={Path.Products} className="nav-link">
          <li>Products</li>
        </NavLink>
        <NavLink to={Path.AddProduct} className="nav-link">
          <li>Add product</li>
        </NavLink>
      </ul>
      <NavLink to="/">
        <img className='logo' src={logo} alt="logo" />
      </NavLink>
      <ul className="profile-options">
        <NavLink to={Path.Profile} className="nav-link">
          <li>Profile</li>
        </NavLink>
        <NavLink to={Path.Login} className="nav-link">
          <li>Login</li>
        </NavLink>
        <NavLink to={Path.Logout} className="nav-link">
          <li>Logout</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
