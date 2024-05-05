import React from 'react';
import './thahity_history.css';

const Thahity_History = () => {
  return (
    <div className="history-container">
      <div className="history-heading">Thahiti</div>
      <div className="history-content">
        <div className="history-image">
          <img src="/src/Components/history/thahitiChowk.jpg" alt="Thaythi" />
        </div>
        <div className="history-description">
          <p>
            <strong>Name:</strong>Thahiti<br/>
            <strong>Address:</strong>Thahity, Kathmandu 44600 <br/>
            <strong>Opening hours:</strong>Open 24 hours <br/>
          </p>
        </div>
      </div>
      <div className="history-section">
        <div className="history-subheading">History of Thahiti</div>
        <p className="history-paragraph">
        Thahiti Chowk, located on the border between Thamel, Jyatha, and the old walled city, boasts a rich history dating back to the 15th century. At its heart lies the Thahiti Stupa, believed to have been constructed by a Tibetan trader who once resided in the area. Legend has it that this trader stumbled upon a hiti, a natural water source with a tap, which dispensed gold coins. Fearing theft, he concealed the hiti by building the stupa over it, safeguarding the precious spout within.<br/>
Over the centuries, Thahiti Chowk has evolved into a vibrant hub, with a small garden park surrounding the stupa. Vendors line the fence enclosing the park, offering goods to passersby, while a local vegetable market adds to the bustling atmosphere. Across from the stupa stands the Nateshwar temple, dedicated to Nate, an incarnation of Shiva, constructed in the 18th century.<br/>
Despite its ancient origins, the Thahiti Stupa remains remarkably well-preserved, protected from the hustle and bustle of the surrounding streets by a fence and garden area. Although the ornate doors of the Nateshwar temple typically remain closed, glimpses of its faded stone statues offer a window into the past.<br/>
Today, Thahiti Chowk continues to enchant visitors with its blend of history, spirituality, and commerce. The legacy of the Tibetan trader lives on, as travelers and locals alike marvel at the hidden treasures nestled within this historic square.<br/>
        </p>
      </div>
    </div>
  );
};

export default Thahity_History;