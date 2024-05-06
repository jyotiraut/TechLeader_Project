import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faHome, faCalendarAlt, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import useLogout from '../../hooks/useLogout'; // Assuming the path is correct

function Sidebar() {
    const { loading, logout } = useLogout(); // Using the useLogout hook

    // const handleNavigation = (route) => {
    //     // Navigate to the specified route
    //     window.location.href = route;
    // };

    return (
        <div className="sidebar">
            <div className="sidebar-item" onClick={() => handleNavigation('/')}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className="sidebar-item" onClick={() => handleNavigation('/dashboard')}>
                <FontAwesomeIcon icon={faTachometerAlt} />
                <span>Dashboard</span>
            </div>
            <div className="sidebar-item" onClick={() => handleNavigation('/')}>
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </div>
            <div className="sidebar-item" onClick={() => handleNavigation('/add-event')}>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>Events</span>
            </div>
            {/* Implement the logout functionality */}
            <div className="sidebar-item" onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Logout</span>
                {/* Show loading indicator if logout operation is in progress */}
                {loading && <span>Loading...</span>}
            </div>
        </div>
    );
}

export default Sidebar;
