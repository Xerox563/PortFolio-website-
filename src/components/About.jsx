import React from "react";

import "../styles/about.scss";
import { FaBirthdayCake, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";

import imge from "../assets/grid1.jpg";

const About = () => {
  return (
    <>
      <h2 className="about-head" data-aos="fade-left">
        About Me
      </h2>
      <div className="grid-container" data-aos="fade-right">
        <div className="item1,gradient-box" data-aos="zoom-in">
          <img className="pic" src={imge} alt="Handsome man" />
        </div>
        <div className="item2 gradient-border" id="services">
          <div className="item2-child1" data-aos="fade-right">
            <h1 className="intro-head">A Brief Intro</h1>
            <p id="into">
              Hi! My name is <span className="ami">Amit</span>. I am a Web
              Developer, and I'm very passionate and dedicated to my work. With
              2 years experience as a professional Web developer, I have
              acquired the skills and knowledge necessary to make your project a
              success. I done many Projects including both Frontend and backened
              as well as combo of both .. Currently i am working on the Movie
              Project which includes faster loading time,bug free and
              implemented Google Auth 2.O with attractive UI..
            </p>
          </div>
          <div className="item2-child2" data-aos="fade-up">
            <div className="final_child1">
              <h3>
                <FaBirthdayCake /> <span className="child-icon">Birthday</span>{" "}
                : 14.06.2002
              </h3>
              <h3>
                <TiLocation /> <span className="child-icon"> Location</span> :
                46 , Suresh Sharma Nagar Bareilly
              </h3>
              <h3>
                <FaGraduationCap /> <span className="child-icon"> Study</span> :
                B.I.E.T Jhansi
              </h3>
              <h3>
                <FaEnvelope /> <span className="child-icon">E-Mail</span> :
                parker121alex@gmail.com
              </h3>
            </div>
            <div className="final_child2" data-aos="fade-up">
              <div className="final_child1">
                <h3>
                  <FaBirthdayCake /> <span className="child-icon">Age</span> :
                  21
                </h3>
                <h3>
                  <TiLocation /> <span className="child-icon"> Interest</span> :
                  Music,Online Gaming
                </h3>
                <h3>
                  <FaGraduationCap />
                  <span className="child-icon">Degree</span>: Information
                  Technology
                </h3>
                <h3>
                  <FaEnvelope />{" "}
                  <span className="child-icon">Phone Number</span>: 9867453812
                </h3>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default About;
