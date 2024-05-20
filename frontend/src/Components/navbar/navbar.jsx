import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo1 from "./logo1.jpg";
import logo from "./Logo.png"
import { useAuthContext } from '../context/authContext'; // Assuming the path is correct

function Navbar() {
  const { authUser } = useAuthContext();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/history" className="navbar-item">History</Link>
        {/* Conditionally render based on authentication status */}
       
        {!authUser && (
          <Link to="/login" className="navbar-item signin-btn">Sign-In</Link>
        )}
        {/* Show the user icon only when the user is logged in */}
        {authUser && (
          <Link to="/dashboard" className="navbar-item">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
