import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo1 from "./logo1.jpg";
import { useAuthContext } from '../context/authContext';

function Navbar() {
  const { authUser } = useAuthContext();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo1} className="logo" alt="Logo" />
        <span className="brand-name">Tradition Keepers</span>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/history" className="navbar-item">History</Link>
        {!authUser && (
          <Link to="/login" className="navbar-item signin-btn">Sign-In</Link>
        )}
        {authUser && (
          
            <FontAwesomeIcon icon={faUser} />
         
        )}
      </div>
    </nav>
  );
}

export default Navbar;
