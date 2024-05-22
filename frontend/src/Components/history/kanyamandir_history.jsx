import React from "react";
import "./indrayani_history.css";
import kanyamandir from "./kanyamandir.jpg";

const KanyaMandir_History = () => {
  return (
    <div className="history-container">
      <h1 className="center">Kanya Mandir</h1>

      <div className="card">
        <div className="left">
          <img src={kanyamandir} alt="Kanya Mandir" />
        </div>
        <div className="right_ind">
          <strong>Name:</strong> Kanya Mandir
          <br />
          <strong>Address:</strong> Kanya Ladies School, Gangalal Marg,
          Kathmandu 44600 <br />
          <strong>Opening hours:</strong> 10 AM - 4 PM (Closed on Saturday){" "}
          <br />
          <strong>Established date:</strong> 14th of Chaitra 2003 BS (27th
          March, 1947 AD) <br />
        </div>
      </div>

      <h2>History of Kanya Mandir</h2>
      <p>
        Kanya Mandir Secondary School stands as Nepal's pioneering institution
        for girls' education, committed to providing quality learning
        experiences bolstered by modern amenities.
        <br />
         Established on March
        27, 1947, Kanya Mandir Secondary School embarked on a journey of
        educational empowerment. However, the school faced a significant setback
        when its original building succumbed to the devastating 2015 earthquake.
        Through collaborative efforts with USAID, the school has been
        resurrected and revitalized, heralding a new chapter in its mission. A
        comprehensive five-year plan was initiated to enhance educational
        standards and infrastructure, ensuring a conducive environment for
        learning and growth. 
        <br />
        <br />
         Present-day visitors to Kanya
        Mandir Secondary School are greeted with state-of-the-art facilities and
        innovative educational programs, emblematic of its resilience and
        commitment to progress. Exploring the premises offers insights into the
        school's transformative journey post-earthquake, exemplifying
        resilience, adaptability, and dedication to quality education.
        <br /><br />
         Ikha
        Pokhari, also known as Ekha Pukhu, holds historical significance as a
        pond located in Chhetrapati, Kathmandu, cherished by the local Newar
        community for generations.  This pond, once a vital water
        source, has suffered from siltation and encroachment over time, leading
        to its gradual drying up. Despite its diminished state, Ikha Pokhari
        remains a symbol of cultural heritage, historically utilized for local
        rituals and ceremonies. Registered to Kanya Mandir Secondary School, it
        has long been intertwined with the community's traditions and practices.
        Visiting Today: Efforts are currently underway to revive and restore
        Ikha Pokhari to its former glory. While visitors may encounter its
        remnants, they can also learn about its cultural significance and the
        ongoing restoration plans led by the local community. Adjacent to the
        pond, the presence of Kanya Mandir Secondary School further highlights
        the intertwined histories and aspirations of the community, offering
        insight into its journey of preservation and renewal.
      </p>
    </div>
  );
};

export default KanyaMandir_History;
