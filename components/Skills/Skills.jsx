import "./Skills.css";
import { motion } from "framer-motion";

const skillData = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "HTML5", level: 98 },
      { name: "CSS3", level: 95 },
      { name: "Bootstrap", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "FastAPI", level: 82 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    category: "Programming & Tools",
    skills: [
      { name: "C++", level: 90 },
      { name: "Python", level: 84 },
      { name: "Git & GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.div
        className="skills-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h4>Technical Expertise</h4>
        <h2>My Skills</h2>
        <div className="line"></div>
      </motion.div>

      <div className="skills-grid">
        {skillData.map((group, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{group.category}</h3>

            {group.skills.map((skill, i) => (
              <div className="skill" key={i}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className="progress">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
