import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>About Us</h1>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/src/Components/Home/temple1.jpg" alt="About us" />
        </div>
        <div className="about-text">
          <p>
            Welcome to our website! We're Team Swostik, a dedicated group within TechLeadHers committed to preserving and promoting the rich culture and tourism of Ward no. 17 in Kathmandu. Ward 17 boasts a tapestry of cultural landmarks and traditions, each with its own compelling history waiting to be uncovered. However, many people are unaware of these invaluable cultural assets, leading to a gradual fading of the area's distinct identity.
          </p>
          <p>
          Through our website, we aim to shine a spotlight on the historical significance of Ward 17, ensuring that its cultural legacy remains alive and accessible for generations to come. On our platform, users can learn and discover the historical landmarks and events of Ward 17.
          </p>
          <p>
          However, Swostik is more than just a repository of information – it's a platform for active participation and engagement. Through our website, users can not only learn about the cultural heritage of Ward 17 but also directly engage in its preservation. Whether through volunteering opportunities or participation in cultural events, we provide avenues for individuals to actively contribute to the preservation and celebration of Ward 17's cultural identity.
          </p>
          <p>
          Join us in our journey to safeguard the heritage of Ward 17 and ensure that its cultural legacy continues to thrive. Together, let's explore, cherish, and preserve the essence of this remarkable community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;