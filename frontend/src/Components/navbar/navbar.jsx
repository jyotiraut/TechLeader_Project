import React from "react";
import { Link } from "react-router-dom";
import './navbar.css' // If using React Router

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="/favicon.svg" className="logo" alt="" />
          <span className="brand-name">Tradition Keepers</span>
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="#" className="navbar-item ">Home</Link>
        <Link to="#" className="navbar-item">About</Link>
        <Link to="#" className="navbar-item">Places</Link>
        <Link to="#" className="navbar-item signin-btn">Sign-In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
