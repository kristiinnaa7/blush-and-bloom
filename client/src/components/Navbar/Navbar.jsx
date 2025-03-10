import Path from "../../path";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-swan.png";
import "./Navbar.css";
import { useAuthContext } from "../context/AuthContext";
import { Fragment } from "react";

const Navbar = () => {
  const { isAuthenticated, email } = useAuthContext();
  console.log(isAuthenticated);

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
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      <ul className="profile-options">
        {!isAuthenticated ? (
          <Fragment>
            <NavLink to={Path.Login} className="nav-link">
              <li>Login</li>
            </NavLink>
            <NavLink to={Path.Register} className="nav-link">
              <li>Register</li>
            </NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <NavLink to={Path.Profile} className="nav-link">
              <li>Profile</li>
            </NavLink>
            <NavLink to={Path.Logout} className="nav-link">
              <li>Logout</li>
            </NavLink>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
