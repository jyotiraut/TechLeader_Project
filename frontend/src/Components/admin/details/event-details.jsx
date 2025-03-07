import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './eventdetails.css';
import Sidebar from "../sidebar/sidebar";

const Eventdetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const userData = JSON.parse(localStorage.getItem("chat-user")); 
      console.log("User Data from localStorage:", userData); 
      
      const userId = userData?._id; // Extract user ID
      console.log("Extracted User ID:", userId); // Debugging

      if (!userId) {
        console.error("User ID not found in localStorage");
        return;
      }

      const response = await fetch(`http://localhost:3000/api/v1/events/user-events/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user events");
      }

      const data = await response.json();
      console.log("Fetched Events Data:", data); // Debugging
      setEvents(data);
    } catch (error) {
      console.error("Error fetching user events:", error);
    }
  };

  // Format the date
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="event-details-page">
          <div className="event-details-table">
            <h1>My Events</h1>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Location</th>
                  <th>Event Date</th>
                  <th>Created Date</th>
                </tr>
              </thead>
              <tbody>
                {events.map(event => (
                  <tr key={event._id}>
                    <td>{event.title}</td>
                    <td>{event.description}</td>
                    <td>{event.location}</td>
                    <td>{formattedDate(event.date)}</td>
                    <td>{formattedDate(event.createdAt)}</td> {/* Display created date */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="add-event-button">
            <Link to="/add-event" className="btn btn-green">
              <FontAwesomeIcon icon={faPlus} /> Add Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventdetails;
