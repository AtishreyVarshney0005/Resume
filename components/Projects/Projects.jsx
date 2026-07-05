import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import inventory from "../../src/assets/images/management-pro.jpeg";
import multiFeature from "../../src/assets/images/multi-feature-image.png";
import miniOS from "../../src/assets/images/Mini-Operating-System.png";

const projects = [
  {
    title: "Inventory & Billing System",
    image: inventory,
    description:
      "Inventory management system with CRUD operations, billing, invoices and stock management.",
    tech: [
      "React",
      "Node",
      "Express",
      "MySQL"
    ],
    github: "https://github.com/AtishreyVarshney0005/Inventory-and-Billing",
    demo: "#",
    showButtons: false
  },

  {
    title: "Multi Feature Web Application",
    image: multiFeature,
    description:
      "A React application featuring Weather, News, Products and Todo modules using REST APIs and React Router.",
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "API",
      "React Router"
    ],
    github: "https://github.com/AtishreyVarshney09/Multi-Feature-App",
    demo: "https://multi-feature-app.onrender.com/",
    showButtons: true
  },

  {
    title: "Mini Operating System",
    image: miniOS,
    description:
      "A mini operating system project showcasing core OS concepts and functionalities.",
    tech: [
      "C",
      "Assembly",
      "OS Concepts"
    ],
    github: "https://github.com/AtishreyVarshney0005/Mini-Operating-System",
    demo: "#",
    showButtons: false
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="project-heading"
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
      >
        <h4>Portfolio</h4>
        <h2>Featured Projects</h2>
        <div className="line"></div>
      </motion.div>

      <div className="project-grid">

        {projects.map((project,index)=>(
          <motion.div
            className="project-card"
            key={index}
            initial={{opacity:0,y:60}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.7,delay:index*.15}}
            viewport={{once:true}}
          >

            <img src={project.image} alt={project.title}/>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item,i)=>(
                  <span key={i}>{item}</span>
                ))}
              </div>

              <div className="project-buttons">

                <a href={project.github}>
                  <FaGithub/>
                  GitHub
                </a>

                {project.showButtons && (
                  <a href={project.demo}>
                    <FaExternalLinkAlt/>
                    Live Demo
                  </a>
                )}

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Projects;
