import "./About.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h4>Know Me More</h4>

        <h2>About Me</h2>

        <div className="line"></div>
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>
            I'm <span>Atishrey Varshney</span>
          </h2>

          <p>
            I'm a passionate Full Stack Developer who loves building modern,
            responsive and scalable web applications.
          </p>

          <p>
            My expertise includes React.js, JavaScript, Node.js, Express,
            FastAPI, MySQL and MongoDB. I enjoy transforming ideas into
            beautiful digital experiences with clean UI and optimized
            performance.
          </p>

          <p>
            Currently I'm working as a Full Stack Developer at Atitech while
            pursuing my B.Tech in Computer Science Engineering.
          </p>

          <div className="about-info">
            <div>
              <span>Name</span>
              <h5>Atishrey Varshney</h5>
            </div>

            <div>
              <span>Email</span>
              <h5>atishreyvarshney@gmail.com</h5>
            </div>

            <div>
              <span>Location</span>
              <h5>Gurugram, India</h5>
            </div>

            <div>
              <span>Availability</span>
              <h5>Open to Work</h5>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <FaLaptopCode />
            <h3>Frontend</h3>
            <p>React.js, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS</p>
          </div>

          <div className="card">
            <FaServer />
            <h3>Backend</h3>
            <p>Node.js, Express.js, FastAPI, REST APIs</p>
          </div>

          <div className="card">
            <FaDatabase />
            <h3>Database</h3>
            <p>MySQL, MongoDB</p>
          </div>

          <div className="card">
            <FaReact />
            <h3>Projects</h3>
            <p>React Applications, Inventory System, Weather & News Apps</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="stats"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="stat">
          <h2>15+</h2>
          <p>Projects</p>
        </div>

        <div className="stat">
          <h2>2+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h2>12+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat">
          <h2>100%</h2>
          <p>Dedication</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
