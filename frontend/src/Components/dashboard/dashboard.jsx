import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          Dashboard
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/" className="sidebar-item">
              <FontAwesomeIcon icon={faHome} />
              <span className="sidebar-item-label">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/add-event" className="sidebar-item">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span className="sidebar-item-label">Events</span>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="sidebar-item">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="sidebar-item-label">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        {/* Main content of the dashboard */}
      </div>
    </div>
  );
}

export default Dashboard;
