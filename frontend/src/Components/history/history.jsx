import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './history.css';
import logo from '../Home/icon2.jpg'
import kanyamandir from './kanyamandir.jpg'
import photo from './indrayani.jpg';
import thaiti from './thahitiChowk.jpg'
const History = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setOpenCard(openCard === cardIndex ? null : cardIndex);
  };

  return (
    <div className="history-container-main">
      <div className="heading">
        <img src={logo} alt="Places" />
        <h1>Cultural Places</h1>
      </div>
      <div className="cards-container">
        <div className="cardHistory" onClick={() => handleCardClick(0)}>
          <img src={photo} alt="Indrayani Temple"/>
          <div className="text">
            <p>
              <div className='card-Name'>
                <strong>Indrayani Temple</strong>
              </div>
              <div className="card_text">
              <strong>Alternative names:</strong> Lunti Ajima, Luntimaru <br />
              <strong>Location:</strong> P873+H2J, Kathmandu 44600 <br />
              <strong>Time:</strong> Open 24 hours <br />
              </div>
            </p>
            <Link to="/Indrayani_History"> 
              <button className="read-more-btn">Read more</button>
            </Link>
          </div>
        
        </div>
        <div className="cardHistory" onClick={() => handleCardClick(1)}>
          <img src={kanyamandir} alt="Kanya Mandir"/>
          <div className="text">
            <p>
              <div className='card-Name'>
                <strong>Kanya Mandir</strong>
              </div>
              <div className="card_text">
              <strong>Address:</strong> Gangalal Marg, Kathmandu 44600 <br />
              <strong>Opening hours:</strong> 10 AM - 4 PM <br />
              <strong>Established date:</strong> 14th Chaitra 2003 BS <br />
              </div>
            </p>
            <Link to="/KanyaMandir_History">
              <button className="read-more-btn">Read more</button>
            </Link>
          </div>
          
        </div>
        <div className="cardHistory" onClick={() => handleCardClick(2)}>
          <img src={ thaiti} alt="Thahity" />
          <div className="text">
            <p>
              <div className='card-Name'>
                <strong>Thahity</strong>
              </div>
              <div className="card_text">
              <strong>Address:</strong> Thahity, Kathmandu 44600 <br />
              <strong>Opening hours:</strong> Open 24 hours <br />
              </div>
            </p>
            <Link to="/Thahity_History">
              <button className="read-more-btn">Read more</button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default History;

