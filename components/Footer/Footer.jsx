import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

      <div className="footer-container">

        <h2 className="footer-logo">
          Atishrey <span>Varshney</span>
        </h2>

        <p className="footer-text">
          Full Stack Developer • React Developer • MERN Stack Developer
        </p>

        <ul className="footer-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#education">Education</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="footer-social">

          <a
            href="https://github.com/AtishreyVarshney0005"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/atishreyvarshney"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:atishreyvarshney@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Atishrey Varshney. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;