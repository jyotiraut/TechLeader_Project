import React from 'react';
import './history.css';

const History = () => {
  return (
    <div className="history-container">
      <div className="history-heading">Indrayani Temple</div>
      <div className="history-content">
        <div className="history-image">
          <img src="/src/Components/Home/temple1.jpg" alt="Indraynai Temple" />
        </div>
        <div className="history-description">
          <p>
            <strong>Name:</strong> Indrayani Temple <br />
            <strong>Alternative names:</strong> Lhuti Maru Ajima Temple, Indrani Temple, Lunti Ajima, Luntimaru <br />
            <strong>Location:</strong> P873+H2J, Kathmandu 44600 <br />
            <strong>Time:</strong> Open 24 hours <br />
            <strong>Details:</strong> Shaktism Temple, partially damaged 2015 by earthquake. Three Roof Temple (Pagoda Style) of Indrayani (Astra Matrika). Ajima means "grandmother" and represent a group of Mother Goddesses.<br/>
          </p>
        </div>
      </div>
      <div className="history-section">
        <div className="history-subheading">History of Indrayani Temple</div>
        <p className="history-paragraph">
          The Indrayani Jatra, a once vibrant festival in Kathmandu, Nepal, has gradually faded away over the past decades, leaving behind only stories and memories. Traditions like raising a 48-feet ceremonial pole and rituals like Aju Aji Dya and Paa Pi Wonegu have vanished, lost to time. <br /><br />

          The festival is rooted in the story of Goddess Indrayani, who was mistreated by her family but later became wealthy through a magical pot of gold. She then held her own celebration, distancing herself from her family's extravagance. <br /><br />

          Historically, the festival was grander, but today it struggles to maintain its traditions. Many rituals, like the snake oblation and the procession with Indrayani's idol, have seen visible changes or losses. The decline is attributed to factors like the disappearance of fields where ritual items were sourced, lack of public interest, and a change in lifestyle leading to fewer people participating. <br /><br />

          Efforts to preserve the festival face challenges, including a lack of knowledge passed down from elders and a dwindling number of locals involved in organizing and participating. The festival's importance seems to be diminishing in the eyes of some, as changing priorities and lifestyles take precedence.
        </p>
      </div>
    </div>
  );
};

export default History;