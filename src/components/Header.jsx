import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
   
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "linear",
      once: false,
    });
  });
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2 data-aos="flip-right">Xerox </h2>
    <div data-aos="fade-down" delay="200">
      <a href="#home">Home</a>
      <a href="#word">Work</a>
      <a href="#timeline">Services</a>
      <a href="#services">About</a>
      <a href="#testimonialy">Contact</a>
     
    </div>
    <a href="mailto:gangwaramit449@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
