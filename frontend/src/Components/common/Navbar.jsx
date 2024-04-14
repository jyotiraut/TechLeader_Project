import React from 'react';
 // You can create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <p className="brand">VolunterEase</p>
      </div>
      <ul className="navbar-right">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">SignIn</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
