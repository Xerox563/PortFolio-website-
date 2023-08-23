import React, { useEffect } from "react";

import {
  FaPalette, // Creative Design
  FaCode, // Web Development
  FaVideo, // Video Editing
  FaInstagram, // Social Media
  FaPen, // Content Creation
  FaMagic, // After Effects
} from "react-icons/fa";
import cardsData from "../assets/info.json";
import "../styles/Card.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const icons = [
  <FaPalette />,
  <FaCode />,
  <FaVideo />,
  <FaInstagram />,
  <FaPen />,
  <FaMagic />,
];

const CardList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "linear",
      once: false,
    });
  });
  return (
    <>
      <wrapper id="timeline">
        <h1 className="skill-header" data-aos="fade-right">
          Skills
        </h1>
        <div className="card-list" data-aos="fade-up">
          {cardsData.Data.map((card, index) => (
            <div
              className="card-x"
              key={card.id}
              data-aos="zoom-in"
              delay="300"
            >
              <div className="card-icon">{icons[index]}</div>
              <h2 className="card-title">{card.title}</h2>
              <p className="card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
       
      </wrapper>
    </>
  );
};

export default CardList;
