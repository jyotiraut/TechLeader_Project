import React from "react";
import './home.css';
import img1 from "./temple1.jpg"
import icon2 from "./icon2.jpg"
import photo1 from "./temple1.jpg"
// Card component for each event
function EventCard({ photo, name, location, openingTime, events }) {
  return (
    <div className="event-card">
      <img src={photo1} alt={name} className="event-photo" />
      <div className="event-details">
        <h3 className="event-name">{name}</h3>
        <div className="event-location">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20" height="20">
            <path fill="#000000" d="M192 0C86 0 0 86 0 192c0 134.5 192 320 192 320s192-185.5 192-320C384 86 298 0 192 0zM192 288c-52.9 0-96-43.1-96-96s43.1-96 96-96 96 43.1 96 96-43.1 96-96 96z"></path>
          </svg>
          <span>{location}</span>
        </div>
        <div className="event-opening-time">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px">
          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
          <span>{openingTime}</span>
        </div>
        <div className="event-events">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" height="20px">
          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
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
        <img src={img1} alt="temple" className="big-image" />
      </div>
      {/* Second Row */}
      <div className="second-row">
        <img src={icon2}  className="icon" />
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
