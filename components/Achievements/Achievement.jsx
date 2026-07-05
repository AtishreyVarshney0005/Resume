import "./Achievement.css";
import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaLaptopCode,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaProjectDiagram />,
    number: "15+",
    title: "Projects Completed",
    desc: "Successfully built modern React & Full Stack applications."
  },
  {
    icon: <FaLaptopCode />,
    number: "2+",
    title: "Years Experience",
    desc: "Experience in frontend and backend development."
  },
  {
    icon: <FaUsers />,
    number: "12+",
    title: "Technologies",
    desc: "Worked with React, Node, Express, MongoDB and more."
  },
  {
    icon: <FaAward />,
    number: "100%",
    title: "Client Satisfaction",
    desc: "Focused on quality, clean code and performance."
  },
];

const Achievement = () => {
  return (
    <section className="achievement" id="achievement">

      <motion.div
        className="achievement-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >
        <h4>My Achievements</h4>
        <h2>Achievements</h2>
        <div className="line"></div>
      </motion.div>

      <div className="achievement-grid">

        {achievements.map((item, index) => (

          <motion.div
            className="achievement-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: index * .15 }}
            viewport={{ once: true }}
          >

            <div className="achievement-icon">
              {item.icon}
            </div>

            <h1>{item.number}</h1>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Achievement;