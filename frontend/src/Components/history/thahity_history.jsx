import React from "react";
import "./indrayani_history.css";
import thaiti from "./thahitiChowk.jpg";

const Thahity_History = () => {
  return (
    <div className="history-container">
      <h1 className="center">Thahity</h1>

      <div className="card">
        <div className="left">
          <img src={thaiti} alt="Thaythi" />
        </div>
        <div className="right_ind">
          <strong>Name:</strong> Thahity
          <br />
          <strong>Address:</strong> Thahity, Kathmandu 44600 <br />
          <strong>Opening hours:</strong> Open 24 hours <br />
        </div>
      </div>

      <h2>History of Thahity Chwok</h2>
      <p>
        Thahity Chowk, situated in Kathmandu, holds a significant place in
        history, boasting both a 15th-century stupa and an 18th-century temple.
        The stupa, crafted by a Tibetan trader during the 15th century, serves
        as a protective sanctuary for a hiti, a water source rumored to dispense
        gold coins. Enclosed by a garden and fence, this ancient structure
        stands as a testament to centuries of cultural exchange and reverence.

        <br />

        Adjacent to the stupa stands the Nateshwar Temple, erected in the 18th
        century to honor the deity Nate, a manifestation of Shiva. Adorned with
        elaborate doors, stone lions, Taleju bells, and an intricate toran, the
        temple reflects the artistry and devotion of its builders. Today, it
        remains a place of pilgrimage and contemplation for devotees and
        visitors alike. Exploring Thahity Chowk today offers a glimpse into its
        rich heritage and vibrant atmosphere. The stupa area, enveloped by lush
        greenery and a protective fence, features a detailed Ganesh shrine,
        inviting visitors to pause and reflect. Nearby, the temple area bustles
        with activity, where rickshaws and touts navigate the bustling streets,
        adding to the charm of the locale.
        <br /> <br />
         Beyond its religious significance,
        Thahity Chowk serves as a hub of commerce and community. In the morning,
        it hosts a bustling vegetable market, showcasing the bounty of the land
        and fostering connections among locals. As the day transitions into
        evening, the square transforms, becoming a favorite haunt for tea
        sellers and street food vendors, tantalizing passersby with aromatic
        delights.
        <br /> <br />
        Moreover, Thahity Chowk is a pivotal stop on the heritage walk
        through Kathmandu, offering visitors the opportunity to trace the city's
        storied past. From Ason Chowk to Jana Bahal, Indra Chowk, and Kathmandu
        Durbar Square, each step unveils layers of history, architecture, and
        culture, enriching the experience of those who tread upon its ancient
        streets.
      </p>
    </div>
  );
};

export default Thahity_History;
