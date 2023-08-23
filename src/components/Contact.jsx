import React, { useEffect } from "react";
import "../styles/contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <>
      <h2 className="contactME" data-aos="fade-left">
        CONTACT HERE
      </h2>
      <div className="outer" data-aos="fade-up" delay="300">
        <div className="contain">
          <div className="formic-container sign-in-container">
            <form action="#" id="formic">
              <h1 className="heading11">Contact</h1>
              <input type="name" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea
                type="message"
                className="msg"
                rows="4"
                cols="37"
                placeholder="Message"
              />
              <button className="btn">Send Message</button>
            </form>
          </div>
          <div className="apna-container">
            <div className="apna">
              <div className="apna-hai apna-right" id="testimonial">
                <h1 className="head">Unleash Your Inner Champion</h1>
                <p className="para"> Conquer, Compete, and Conquer Again!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
