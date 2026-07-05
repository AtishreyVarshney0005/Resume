import "./Hero.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profile from "../../src/assets/images/profile.png";
import resume from "/Atishrey Varshney Resume.pdf";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="welcome">Welcome to my portfolio</span>

          <h3>Hello, I&apos;m</h3>
          <h1>Atishrey Varshney</h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Frontend Developer",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="typing"
          />

          <p>
            Passionate Full Stack Developer specializing in React.js, Node.js,
            and modern web technologies. I build responsive, scalable, and
            user-friendly web applications that make a difference.
          </p>

          <div className="hero-buttons">
            <a href={resume} download>
              <button className="btn1">Download Resume</button>
            </a>

            <a href="#contact">
              <button className="btn2">Hire Me</button>
            </a>
          </div>

          <div className="socials">
            <a
              href="https://github.com/AtishreyVarshney0005"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/atishreyvarshney"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:atishreyvarshney@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="image-box">
            <img src={profile} alt="Atishrey Varshney" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
