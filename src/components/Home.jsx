import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

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

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Amit Gangwar
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Programmer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:gangwaramit449@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              <motion.span
                    ref={clientCount}
                    whileInView={animationClientsCount}
                  >
                    10
                  </motion.span>
            </p>
            <h1>Clients Worldwide</h1>
          </article>

          <aside>
            <article>
              <p>
                +
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    10
                  </motion.span>
               
              </p>
              <h1>Projects Done</h1>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>gangwaramit449@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Amit" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
