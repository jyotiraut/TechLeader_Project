import React from 'react';
import './kanyamandir_history.css';

const KanyaMandir_History = () => {
  return (
    <div className="history-container">
      <div className="history-heading">Kanya Mandir</div>
      <div className="history-content">
        <div className="history-image">
          <img src="/src/Components/history/kanyamandir.jpg" alt="Kanya Mandir"/>
        </div>
        <div className="history-description">
          <p>
          <strong>Name:</strong> Kanya Mandir <br />
              <strong>Address:</strong> Kanya Ladies School, Gangalal Marg, Kathmandu 44600 <br />
              <strong>Opening hours:</strong> 10 AM - 4 PM (Closed on Saturday) <br />
              <strong>Established date:</strong> 14th of Chaitra 2003 BS (27th March, 1947 AD) <br />
          </p>
        </div>
      </div>
      <div className="history-section">
        <div className="history-subheading">History of Kanya Mandir</div>
        <p className="history-paragraph">
        Kanya Mandir Secondary School holds a significant place in the history of education in Nepal. Established in chaitra 2003 BS (27th March,1947 AD), it was a groundbreaking initiative aimed at providing quality education to girls when such opportunities were scarce. The school emerged from the collective effort of local communities, showcasing a strong commitment to women's education.<br/>
Initially, Kanya Mandir faced challenges typical of pioneering institutions, including limited resources and societal resistance to girls' education. However, it persevered, becoming a symbol of empowerment for young women across the country. The school provided a nurturing environment conducive to academic growth and personal development, nurturing generations of confident and educated women. <br/>
Tragically, the school faced a setback when its original building was destroyed in the devastating earthquake of 2015. However, with support from organizations like USAID, Kanya Mandir embarked on a journey of renewal and modernization. The construction of a new, state-of-the-art building reflects the school's commitment to excellence and innovation. <br/>
In recent years, Kanya Mandir has embraced advancements in education, incorporating modern teaching methodologies and technology into its curriculum. This evolution aims to enhance learning outcomes and prepare students for the challenges of the 21st century. Beyond academics, the school emphasizes values such as compassion, leadership, and social responsibility, fostering a strong sense of community among its students.<br/>
As Kanya Mandir moves forward, it remains dedicated to its mission of empowering young women through education. The school continues to evolve and innovate, striving to equip its students with the knowledge, skills, and values needed to thrive in an ever-changing world. With its rich heritage and legacy, Kanya Mandir stands as a testament to the transformative power of education and the resilience of the human spirit.

        </p>
      </div>
    </div>
  );
};

export default KanyaMandir_History;