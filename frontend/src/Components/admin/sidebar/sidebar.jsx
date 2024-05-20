import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import "./Sidebar.css"
import { BiUser } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className='user-image-wrapper'>
        <div className='user-image'>
          <BiUser style={{ fontSize: "40px" }} />
        </div>
        <p>Ward 17 Org</p>
        <p>ward17@gmail.com</p>
      </div>
      <div className="menu">
        <Link to="/dashboard" className="menu-item">
          <FaChartBar />
          <span>Dashboard</span>
        </Link>
        <Link to="/event-details" className="menu-item">
          <FaCalendarAlt />
          <span>Events</span>
        </Link>
        <Link to="/volunteer-details" className="menu-item">
          <FaUsers />
          <span>Volunteers</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
