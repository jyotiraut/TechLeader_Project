import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarAlt, faSignOutAlt, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"; // Import all icons in one line
import "./dashboard.css";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from "../../context/authContext";
import Sidebar from "../sidebar/sidebar";

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
            <Sidebar />
            <div className="main-content">
                <h1>Dashboard</h1>
                {/* Your other dashboard content goes here */}
            </div>
        </div>
    );
};

export default Dashboard;
