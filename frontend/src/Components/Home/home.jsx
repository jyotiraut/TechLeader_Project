import React from "react";
import './home.css'; // Import your custom CSS file for homepage styling

// Card component for each event
function EventCard({ photo, name, location, openingTime, events }) {
  return (
    <div className="event-card">
      <img src={photo} alt={name} className="event-photo" />
      <div className="event-details">
        <h3 className="event-name">{name}</h3>
        <div className="event-location">
          <img src="./pin.svg" alt="Location" className="icon" />
          <span>{location}</span>
        </div>
        <div className="event-opening-time">
          <img src="/clock-icon.svg" alt="Opening Time" className="icon" />
          <span>{openingTime}</span>
        </div>
        <div className="event-events">
          <img src="/event-icon.svg" alt="Events" className="icon" />
          <span>{events}</span>
        </div>
      </div>
    </div>
  );
}

// Homepage component
function Homepage() {
  return (
    <div className="homepage">
      {/* First Row */}
      <div className="first-row">
        <img src="./temple.jpg" alt="temple" className="big-image" />
      </div>
      {/* Second Row */}
      <div className="second-row">
        <img src="/"  className="icon" />
        <span>Cultural Events</span>
      </div>
      {/* Third Row */}
      <div className="third-row">
        <div className="column">
          <EventCard photo="/event1.jpg" name="Event 1" location="Location 1" openingTime="9:00 AM - 5:00 PM" events="Event A, Event B" />
        </div>
        <div className="column">
          <EventCard photo="/event2.jpg" name="Event 2" location="Location 2" openingTime="10:00 AM - 6:00 PM" events="Event C, Event D" />
        </div>
        <div className="column">
          <EventCard photo="/event3.jpg" name="Event 3" location="Location 3" openingTime="11:00 AM - 7:00 PM" events="Event E, Event F" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
