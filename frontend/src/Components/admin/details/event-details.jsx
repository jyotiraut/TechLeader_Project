import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './eventdetails.css';

const Eventdetails = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/events/allevents");
      
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Format the date
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="event-details-page">
      <div className="event-details-table">
        <h2>All Events</h2>
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
              <tr key={event.id}>
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
  );
}

export default Eventdetails;
