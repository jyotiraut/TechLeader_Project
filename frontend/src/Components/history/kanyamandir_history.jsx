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
            Once upon a time, in the land of Kathmandu, there lived a goddess named Indrayani. She was kind and powerful, but her family treated her poorly because she was poor.<br/>
            One day, during a big feast called Paha Charhe, Indrayani's mother served delicious food to her sisters but gave her only plain bread. Indrayani felt sad and left the feast without eating. As she walked home with her hungry children, she cried because she felt lonely and unloved. On her way, an old woman noticed her tears and gave her a pumpkin to eat. Indrayani, feeling grateful, took the pumpkin home. However, she was so upset that she forgot to cook it and cried herself to sleep.<br/>
            The next morning, she found something surprising in her kitchen - the pumpkin had turned into a pot full of shiny gold! Indrayani couldn't believe her eyes. She decided to share the gold with others by putting the pot in the river.<br/>
            People started calling her "Luti Ajima," which means "gold mother." Even though she became rich, Indrayani remained humble and kind.<br/>
            One day, during another feast, her family tried to make up for their past mistreatment by giving her fancy gifts. But Indrayani knew their love was only for her gold, not for her. So, she decided to celebrate her own festival called Bala Charhe Indrayani Jatra, where everyone was welcome, regardless of their wealth or status. This festival became a symbol of love, kindness, and overcoming hardships for all the people of Kathmandu. And from that day on, Indrayani was remembered not just as a goddess, but as a symbol of resilience and love.
        </p>
      </div>
    </div>
  );
};

export default KanyaMandir_History;