import Path from "../../path";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-swan.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink to={Path.About} className="">
          <li>About us</li>
        </NavLink>
        <NavLink to={Path.Products} className="">
          <li>Products</li>
        </NavLink>
        <NavLink to={Path.AddProduct} className="">
          <li>Add product</li>
        </NavLink>
      </ul>
      <NavLink to="/">
        <img className='logo' src={logo} alt="logo" />
      </NavLink>
      <ul>
        <NavLink to={Path.Profile} className="">
          <li>Profile</li>
        </NavLink>
        <NavLink to={Path.Login} className="">
          <li>Login</li>
        </NavLink>
        <NavLink to={Path.Logout} className="">
          <li>Logout</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
