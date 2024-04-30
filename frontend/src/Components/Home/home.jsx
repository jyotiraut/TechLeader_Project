import React,{useState,useEffect} from "react";
import './home.css';
import img1 from "./temple1.jpg"
import icon2 from "./icon2.jpg"
import photo1 from "./temple1.jpg"
// Card component for each event

function EventCard({ image, title, description, location, Time }) {
  return (
    <div className="event-card">
      <img src={photo} alt={title} className="event-photo" />
      <div className="event-details">
        <h3 className="event-name">{title}</h3>
        <div className="event-description">
          <span>{description}</span>
        </div>
        <div className="event-location">
          <span>{location}</span>
        </div>
        <div className="event-time">
          <span>{Time}</span>
        </div>
        
      </div>
    </div>
  );
}

// Homepage component

      function Homepage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/events/allevents");
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
        <img src={icon2}  className="icon" />
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
              Time={event.Time}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;

