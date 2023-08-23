import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [names, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  // const [allEntry, setallEntry] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      alert("Submitted");
      await axios.post("http://localhost:3000/", {
        msg,
        names,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };
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
            <form  id="formic" action="POST">
              <h1 className="heading11">Contact</h1>
              <input type="text" 
              value={names}
              name="names"
              id="names"
              onChange={handleName} 
              placeholder="Name" />
              <input type="email" id="email" value={email} name="email" onChange={handleEmail} placeholder="Email" />
              <textarea
                type="message"
                name="messages"
                className="msges"
                id="msg"
                value={msg}
                rows="4"
                cols="37"
                onChange={handleMsg}
                placeholder="Message"
              />
              <button type="submit" onClick={submit} value={submit} className="btn">Send Message</button>
            </form>
          </div>
          <div className="apna-container">
            <div className="apna">
              <div className="apna-hai apna-right" id="testimonialy">
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
