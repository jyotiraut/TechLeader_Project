import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons"; // Import the user icon
import "./dashboard.css";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/authContext";

const Dashboard = () => {
    const { authUser } = useAuthContext(); // Retrieve user information from application state
    const { loading, logout } = useLogout();
    const [showDetails, setShowDetails] = useState(false); // State to toggle details dropdown

    // Function to handle logout
    const handleLogout = async () => {
        await logout();
    };

    // Function to toggle details dropdown
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="user-info">
                <div className="user-icon">
                    <FontAwesomeIcon icon={faUser} className="icon" /> {/* Display user icon */}
                </div>
                <span className="user-name">{authUser ? authUser.organizationName : "User"}</span> {/* Display organization name dynamically */}
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={toggleDetails}>
                            <FontAwesomeIcon icon={faCalendarAlt} /> Details
                        </a>
                        {showDetails && ( /* Show dropdown menu if showDetails is true */
                            <ul className="dropdown-menu">
                                <li><a href="/event-details">Event Details</a></li>
                                <li><a href="/volunteer-details">Volunteer Details</a></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button onClick={handleLogout} disabled={loading}>
                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                        </button>
                    </li>
                </ul>
            </div>
            {/* Your other dashboard content goes here */}
        </div>
    );
};

export default Dashboard;
