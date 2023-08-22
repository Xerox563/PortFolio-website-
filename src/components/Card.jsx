import React from "react";
import { TiLightbulb } from "react-icons/ti"; // Import your desired icon
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

const icons = [
  <FaPalette />,
  <FaCode />,
  <FaVideo />,
  <FaInstagram />,
  <FaPen />,
  <FaMagic />,
];

const CardList = () => {
  return (
    <>
      <wrapper>
        <h1 className="skill-header">Skills</h1>
        <div className="card-list">
          {cardsData.Data.map((card,index) => (
            <div className="card-x" key={card.id}>
              <div className="card-icon">
                {icons[index]}
              </div>
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
