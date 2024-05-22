import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css';
import img1 from "./Mandir1.jpg"
import icon2 from "./icon2.jpg"
import maniImg from"./website.jpg"


// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

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
        <h3 className="event-name"><strong> </strong>{title}</h3>
        <div className="event-location">
          <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {location}</span>
        </div>
        <div className="event-date">
          <span><FontAwesomeIcon icon={faCalendarAlt} /> <strong> </strong>{formattedDate}</span>
        </div>
        <div className="event-description">
          <span><strong> </strong>{description}</span>
        </div>
          <div className="apply-button">
            <Link to="/volunteer" >
            Apply for Volunteer
          </Link>
          </div>
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
      <section className="hero-banner">
        <div className="first-row">
            <div className="flex justify-content-between">
                <div className="slogan">
                    <h1 className="line-1">
                        Preserving the <span className="cursive">Past</span>
                    </h1>
                    <h1 className="line-2">
                        Embracing the <span className="cursive">Future!</span>
                    </h1>
                    <h2>Explore different volunteer opportunities,<br />and start making a meaningful impact today.</h2>
                </div>
                <div className="big-image">
                    <div className="illustration flex justify-content-end">
                        <img src={maniImg} alt="illustration" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
      <div className="workingContainer">
        <div className="flex justify-content-between services">
          <div className="service">
            
            <div className="icon">
              <i className="ion-md-appstore"></i>
            </div>
            <h1 className="service-title bold">STEP 1</h1>
            <p className="service-description">
              Explore different culture and Voulunteering Oppurtunities.
            </p>
          </div>
          <div className="service">
            <div className="icon">
              <i className="ion-md-bowtie"></i>
            </div>
            <h1 className="service-title bold">STEP 2</h1>
            <p className="service-description">
              Receive conformation and be part of the Event.
            </p>
          </div>
          <div className="service">
            <div className="icon">
              <i className="ion-md-flame"></i>
            </div>
            <h1 className="service-title bold">STEP 3</h1>
            <p className="service-description">
              If your are organizing any cultural event, add event and get Volunteers easily.         
            </p>
          </div>
        </div>
      </div>
    </section>

      



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