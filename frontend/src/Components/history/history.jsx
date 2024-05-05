import React from 'react';
import { Link } from 'react-router-dom';
import './history.css';


const History = () => {
  return (
    <div className="history-container">
      <div className="heading">
        <img src="/src/Components/Home/icon2.jpg" alt="Places" />
        <h1>Cultural Places</h1>
      </div>
      <div className="cards-container">
        <div className="card">
          <img src="/src/Components/history/picind2.jpg" alt="Indrayani Temple"/>
          <div className="text">
          <p>
            <strong>Name:</strong> Indrayani Temple <br />
            <strong>Alternative names:</strong> Lhuti Maru Ajima Temple, Indrani Temple, Lunti Ajima, Luntimaru <br />
            <strong>Location:</strong> P873+H2J, Kathmandu 44600 <br />
            <strong>Time:</strong> Open 24 hours <br />
          </p>
          </div>
          <Link to="/Indrayani_History"> {/* Link to indrayani_History */}
            <button className="read-more-btn">Read more</button>
          </Link>
        </div>
        <div className="card">
          <img src="/src/Components/history/kanyamandir.jpg" alt="Kanya Mandir"/>
          <div className="text">
            <p>
              <strong>Name:</strong> Kanya Mandir <br />
              <strong>Address:</strong> Kanya Ladies School, Gangalal Marg, Kathmandu 44600 <br />
              <strong>Opening hours:</strong> 10 AM - 4 PM (Closed on Saturday) <br />
              <strong>Established date:</strong> 14th of Chaitra 2003 BS (27th March, 1947 AD) <br />
            </p>
          </div>
          <Link to="/KanyaMandir_History">
            <button className="read-more-btn">Read more</button>
          </Link>
        </div>
        <div className="card">
          <img src="/src/Components/history/thahitiChowk.jpg" alt="Thaythi" />
          <div className="text">
            <p>
              <strong>Name:</strong> Thahity <br />
              <strong>Address:</strong> Thahity, Kathmandu 44600 <br />
              <strong>Opening hours:</strong> Open 24 hours <br />
            </p>
          </div>
          <Link to="/Thahity_History">
            <button className="read-more-btn">Read more</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default History;