import Path from "../../path";
import { NavLink } from "react-router-dom";
import logo from "../../assets/app-logo.png";
import "./Navbar.css";
import { useAuthContext } from "../context/AuthContext";
import { Fragment, useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { isAuthenticated, email } = useAuthContext();
  const name = email?.split("@")[0];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 720) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(menuOpen);
  return (
    <div className="navbar">
      <div className={menuOpen ? "mobile-nav-options" : "nav-options"}></div>
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
              <li>{`${name.toUpperCase()}'s Profile`}</li>
            </NavLink>
            <NavLink to={Path.Logout} className="nav-link">
              <li>Logout</li>
            </NavLink>
          </Fragment>
        )}
      </ul>

      <div className="burger-menu" onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
