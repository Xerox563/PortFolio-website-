import React, { useRef, useEffect } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsChevronDown } from "react-icons/bs";
import me from "../assets/avatar.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import anime from "animejs";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 10000, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  // Using Anime.js Library

  useEffect(() => {
    // Create a new animation using anime.js
    var textWrapper = document.querySelector(".ml1 .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml1 .letter",
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i + 1),
      })
      .add({
        targets: ".ml1 .line",
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700,
        offset: "-=875",
        delay: (el, i, l) => 80 * (l - i),
      })
      .add({
        targets: ".ml1",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
      once: false,
    });
  });
  return (
    <div id="home">
      <section>
        <div>
          {/* <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Amit Gangwar
          </motion.h1> */}
          <h1 class="ml1">
            <span class="text-wrapper">
              <span class="line line1"></span>
              <span class="letters">
                <span id="hi">Hi!</span> I am <span id="amit">AMIT</span>
              </span>
              <span class="line line2"></span>
            </span>
          </h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Programmer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div data-aos="fade-right">
            <a href="mailto:gangwaramit449@gmail.com">Hire Me</a>
            <a id="cv" href="../assets/" download="resume.pdf">
              Download CV
            </a>
          </div>

          <article data-aos="fade-up">
            <p>
              +
              <motion.span
                ref={clientCount}
                whileInView={animationClientsCount}
              >
                10
              </motion.span>
            </p>
            <h1 id="world">Clients Worldwide</h1>
          </article>

          <aside>
            <article data-aos="fade-up">
              <p>
                +
                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                >
                  10
                </motion.span>
              </p>
              <h1 id="world">Projects Done</h1>
            </article>

            <article data-special data-aos="fade-up">
              <p>Contact</p>
              <span>gangwaramit449@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section data-aos="fade-left">
        <img src={me} alt="Amit" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
