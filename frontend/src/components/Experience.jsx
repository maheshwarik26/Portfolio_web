import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    role: "Software Intern",
    company: "Swapsoft Sghitech Pvt. Ltd.",
    duration: "Jan 2026 - Feb 2026",
    type: "Internship",
    summary:
      "Contributed to the Smart Budget Management System by developing responsive UI pages and reusable frontend components in a professional software development environment.",
    responsibilities: [
      "Developed responsive user interface components",
      "Worked on frontend implementation using React and CSS",
      "Collaborated with the development team on feature improvements",
    ],
    skills: ["React", "CSS", "UI Development", "Team Collaboration"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Experience</span>
          <h2>Professional Experience</h2>
          <p>
            Practical internship experience where I worked on frontend pages,
            reusable components, and real project workflows.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-card"
              key={experience.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="experience-top">
                <div>
                  <span className="experience-type">{experience.type}</span>
                  <h3>{experience.role}</h3>
                  <p>{experience.company}</p>
                </div>

                <span className="experience-duration">
                  {experience.duration}
                </span>
              </div>

              <p className="experience-summary">{experience.summary}</p>

              <ul className="experience-list">
                {experience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="experience-skills">
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;