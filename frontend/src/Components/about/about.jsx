import React from 'react';
import './about.css';
import about from "./about.jpg"
import aboutHeading from "./aboutHeading .jpg"
import mentor from "./mentor.jpg";
import kritika from "./kritika.png";
import roza from "./Roza.png";
import jyoti from "./jyoti.png";





const About = () => {
  return (
    <div className="about-container">
      <section className="top-section">
        <img src={aboutHeading} alt="illustration" className="top-image" />
        <div className="overlay-text">
          <h1>Act Now: Your Community Needs You!</h1>
          <p>Explore different culture and volunteer opportunities and start making a meaningful impact today.</p>
        </div>
      </section>
  
      <section className="about-us-section">
        <h1>ABOUT US</h1>
      </section>
  
      <section className="paragraph-section">
        <p1>        Welcome to our Website!<br/>
</p1>
        <p>
We are Team Swostik, a dedicated group within TechLeadHers, committed to raising awareness about the rich cultural heritage of Ward 17. Our mission is to shine a spotlight on the cultural places and practices of Ward 17, fostering a deeper appreciation for its traditions and landmarks. We strive to increase public participation in the vibrant cultural events of Ward 17, encouraging individuals to actively engage with the community's heritage.<br/>
On our website, you can delve into the diverse cultural places and events that define Ward 17. Discover the historical significance of each location, learn about upcoming cultural events, and immerse yourself in the essence of this remarkable community.<br/>
Organizations conducting cultural events in Ward 17 can showcase their initiatives on our platform, providing detailed information about the event's background, location, starting date, significance, and activities. Interested participants can explore these events, apply for volunteering opportunities, and directly contribute to the preservation and celebration of Ward 17's cultural identity.<br/>
Join us on this journey to celebrate and preserve the cultural heritage of Ward 17. Let's come together to explore, cherish, and promote the essence of this unique community. <br/>

        </p>
      </section>
      <section className="our-team-section">
        <h1>OUR TEAM</h1>
        <div className="team-members">
          <div className="team-member">
            <img src={jyoti} alt="Team Member 1" className="team-image" />
            <p className="team-name">Jyoti Raut</p>
          </div>
          <div className="team-member">
            <img src={kritika} alt="Team Member 2" className="team-image" />
            <p className="team-name">Kritika Panta</p>
          </div>
          <div className="team-member">
            <img src={roza} alt="Team Member 3" className="team-image" />
            <p className="team-name">Roza Shrestha</p>
          </div>
        </div>
      </section>

      <section className="our-mentor-section">
        <h1>OUR MENTOR</h1>
        <div className="mentor">
          <img src={mentor} alt="Mentor" className="mentor-image" />
          <p className="mentor-name">Akas Rai</p>
        </div>
      </section>
    </div>
  );
  };

export default About;