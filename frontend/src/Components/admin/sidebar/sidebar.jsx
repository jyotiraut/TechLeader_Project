import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaCalendarAlt, FaUsers } from 'react-icons/fa'; 
import "./Sidebar.css"     

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <Link to="/" className="menu-item">
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
