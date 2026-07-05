import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const education = [
  {
    title: "B.Tech - Computer Science Engineering",
    college: "GL Bajaj College",
    year: "2025 - Present",
    desc: "Currently pursuing Bachelor of Technology in Computer Science Engineering."
  },
  {
    title: "Senior Secondary (XII)",
    college: "Gagan Public School (CBSE)",
    year: "2025",
    desc: "Completed Higher Secondary Education with First Division."
  },
  {
    title: "Secondary (X)",
    college: "Gagan Public School (CBSE)",
    year: "2023",
    desc: "Completed Secondary Education with First Division."
  }
];

const Education = () => {
  return (
    <section className="education" id="education">

      <motion.div
        className="education-heading"
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.8}}
        viewport={{once:true}}
      >
        <h4>Qualification</h4>
        <h2>Education</h2>
        <div className="line"></div>
      </motion.div>

      <div className="education-timeline">

        {education.map((item,index)=>(
          <motion.div
            className="education-card"
            key={index}
            initial={{opacity:0,x:index%2===0?-80:80}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:.8}}
            viewport={{once:true}}
          >

            <div className="edu-icon">
              <FaGraduationCap/>
            </div>

            <div className="edu-content">

              <h3>{item.title}</h3>

              <h4>{item.college}</h4>

              <span>
                <FaCalendarAlt />
                {item.year}
              </span>

              <p>{item.desc}</p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Education;
