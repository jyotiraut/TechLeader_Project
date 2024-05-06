import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import logo1 from "./logo1.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo1} className="logo" alt="" />
        <span className="brand-name">Tradition Keepers</span>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/about" className="navbar-item">About</Link>
        <Link to="/history" className="navbar-item">History</Link>
        
        <Link to="/login" className="navbar-item signin-btn">Sign-In</Link>
        <Link to="/dashboard" className="navbar-item">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
