import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <motion.div
        className="exp-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <h4>Career Journey</h4>
        <h2>Work Experience</h2>
        <div className="line"></div>
      </motion.div>

      <div className="timeline">

        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="timeline-icon">
            <FaBriefcase />
          </div>

          <div className="timeline-content">

            <span className="company">
              Full Stack Developer
            </span>

            <h3>Atitech</h3>

            <div className="timeline-meta">

              <span>
                <FaCalendarAlt />
                01 Apr 2024 - Present
              </span>

              <span>
                <FaMapMarkerAlt />
                Gurugram, India
              </span>

            </div>

            <p>
              Working as a Full Stack Developer and building
              modern web applications using React.js,
              JavaScript, Node.js and REST APIs.
            </p>

            <ul>

              <li>
                Developed responsive client websites.
              </li>

              <li>
                Integrated REST APIs.
              </li>

              <li>
                Improved UI/UX and performance.
              </li>

              <li>
                Built reusable React components.
              </li>

              <li>
                Fixed bugs and optimized applications.
              </li>

              <li>
                Worked with Git & GitHub deployment.
              </li>

            </ul>

            <div className="tech-stack">

              <span>React.js</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Tailwind</span>
              <span>Git</span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Experience;
