import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaCalendarAlt, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import './Sidebar.css';
import { useAuthContext } from '../../context/authContext';
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="sidebar">
      <div className='user-image-wrapper'>
        <div className='user-image'>
          <BiUser style={{ fontSize: "40px" }} />
        </div>
        <p>{authUser ? authUser.organizationName : 'Ward 17 Org'}</p>
        <p>{authUser ? authUser.email : 'ward17@gmail.com'}</p>
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
        <div className="menu-item" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
