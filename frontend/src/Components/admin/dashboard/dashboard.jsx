import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faSignOutAlt, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"; // Import all icons in one line
import "./dashboard.css";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/authContext";

const Dashboard = () => {
    const { authUser } = useAuthContext(); // Retrieve user information from application state
    const { loading, logout } = useLogout();

    // Function to handle logout
    const handleLogout = async () => {
        await logout();
    };
    console.log("authUser:", authUser);

    return (
        <div className="dashboard-container">
            <div className="sidebar">
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
                            <a href="/event-details">
                                <FontAwesomeIcon icon={faCalendarAlt} /> Events
                            </a>
                        </li>
                        <li>
                            <a href="/volunteer-details">
                                <FontAwesomeIcon icon={faUsers} /> Volunteers
                            </a>
                        </li>
                        <li>
                            <button onClick={handleLogout} disabled={loading}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main-content">
                <h1>Dashboard</h1>
                {/* Your other dashboard content goes here */}
            </div>
        </div>
    );
};

export default Dashboard;
