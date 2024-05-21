import React from 'react';
import './about.css';
import about from "./about.jpg"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src={about} alt="About us" />
        </div>
        <div className="about-text">
            Welcome to our website!<br/>
            We're Team Swostik, a dedicated group within TechLeadHers committed to preserving and promoting the rich culture and tourism of Ward no. 17 in Kathmandu. <br/>
            Through our website, we aim to shine a spotlight on the historical significance of Ward 17, ensuring that its cultural legacy remains alive and accessible for generations to come. On our platform, users can learn and discover the historical landmarks and events of Ward 17. Likewise, through our website, users can not only learn about the cultural heritage of Ward 17 but also directly engage in its preservation. Whether through volunteering opportunities or participation in cultural events, we provide avenues for individuals to actively contribute to the preservation and celebration of Ward 17's cultural identity. <br/>
        </div>
      </div>
    </div>
  );
};

export default About;