import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';
import img1 from "./Mandir1.jpg"
import icon2 from "./icon2.jpg"
import photo1 from "./temple1.jpg"

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { set } from "mongoose";

function EventCard({ image, title, description, location, date }) {
  const [expanded, setExpanded] = useState(false);
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
    setShowVolunteerForm(false);
  }

  const toggleVolunteerForm = (e) => {
    e.stopPropagation();
    setShowVolunteerForm(!showVolunteerForm);
  }

  // Format the date
  const formattedDate = new Date(date).toLocaleDateString();

  const imagePath = `http://localhost:3000/${image}`;

  return (
    <div className="event-card" onClick={toggleExpanded}>
      <img src={imagePath} alt={title} className="event-photo" />
      <div className={`event-details ${expanded ? 'expanded' : ''}`}>
        <h3 className="event-name"><strong>Title:</strong>{title}</h3>
        <div className="event-description">
          <span><strong>Description:</strong>{description}</span>
        </div>
        <div className="event-location">
          <span><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Location:</strong>{location}</span>
        </div>
        <div className="event-date">
          <span><FontAwesomeIcon icon={faCalendarAlt} /> <strong>Date:</strong>{formattedDate}</span>
        </div>
        {expanded && (
          <Link to="/volunteer" className="apply-button">
            Apply for Volunteer
          </Link>
        )}
      </div>
    </div>
  );
}

function Homepage() {
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

  return (
    <div className="homepage">
      {/* First Row */}
      <div className="first-row">
        <img src={img1} alt="temple" className="big-image" />
      </div>
      {/* Second Row */}
      <div className="second-row">
        <img src={icon2} className="icon" />
        <span>Cultural Events</span>
      </div>

      <div className="third-row">
      
        {events.map(event => (
          <div className="column" key={event.id}>
            <EventCard
              image={event.image}
              title={event.title}
              description={event.description}
              location={event.location}
              date={event.date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
