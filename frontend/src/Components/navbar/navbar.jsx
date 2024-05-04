import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
import logo1 from "./logo1.jpg" // If using React Router

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
        <Link to="/add-event" className="navbar-item event-btn" >Add Event</Link>
        <Link to="/login" className="navbar-item signin-btn">Sign-In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
