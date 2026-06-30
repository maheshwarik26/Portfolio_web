import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.css";

const skills = [
  {
    name: "React",
    category: "Frontend",

    status: "Learning",
    focus: "Components, props, state, hooks, routing, reusable UI",
    usedIn: "Portfolio Website, Smart Budget Management System",
  },
  {
    name: "JavaScript",
    category: "Languages",

    status: "Practicing",
    focus: "ES6, arrays, objects, events, async basics",
    usedIn: "Portfolio Website, frontend features",
  },
  {
    name: "HTML & CSS",
    category: "Frontend",

    status: "Comfortable",
    focus: "Responsive layouts, semantic structure, clean styling",
    usedIn: "Portfolio Website, internship UI pages",
  },
  {
    name: "Node.js",
    category: "Backend",

    status: "Learning",
    focus: "Server setup, routes, APIs, backend logic",
    usedIn: "College recommendation platform",
  },
  {
    name: "Express.js",
    category: "Backend",

    status: "Learning",
    focus: "API routes, middleware, request/response handling",
    usedIn: "MERN stack projects",
  },
  {
    name: "MongoDB",
    category: "Database",

    status: "Comfortable",
    focus: "Collections, schemas, CRUD operations",
    usedIn: "MERN stack projects",
  },
  {
    name: "SQL",
    category: "Database",

    status: "Comfortable",
    focus: "Collections, schemas, CRUD operations",
    usedIn: "MERN stack projects",
  },
  {
    name: "Java",
    category: "Languages",

    status: "Practicing",
    focus: "OOP, problem solving, programming fundamentals",
    usedIn: "Academic work and coding practice",
  },
  {
    name: "Git & GitHub",
    category: "Tools",

    status: "Practicing",
    focus: "Version control, commits, repositories, collaboration basics",
    usedIn: "All major projects",
  },
  {
    name: "Postman",
    category: "Tools",

    status: "Comfortable",
    focus: "API testing and debugging backend endpoints",
    usedIn: "Backend API practice",
  },
  {
    name: "AI Features",
    category: "AI",

    status: "Exploring",
    focus: "AI chatbot ideas, resume Q&A, project recommendations",
    usedIn: "AI Cognitive Agents project, portfolio plans",
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "Languages",
  "Tools",
  "AI",
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Skills</span>
          <h2>Skills & Technologies</h2>
          <p>
            Technologies I use to build responsive web applications, full-stack
            features, and AI-powered project ideas.
          </p>
        </motion.div>

        <div className="skills-tabs">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-layout">
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <motion.button
                type="button"
                className={`skill-card ${
                  selectedSkill.name === skill.name ? "active" : ""
                }`}
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <div className="skill-card-top">
                  <h3>{skill.name}</h3>
                  <span>{skill.status}</span>
                </div>

                <p>{skill.category}</p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.aside
              className="skill-details"
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
            >
              <span>Selected Skill</span>
              <h3>{selectedSkill.name}</h3>

              <div className="skill-meta">
                <p>
                  <strong>Status:</strong> {selectedSkill.status}
                </p>
                <p>
                  <strong>Focus:</strong> {selectedSkill.focus}
                </p>
                <p>
                  <strong>Used In:</strong> {selectedSkill.usedIn}
                </p>
              </div>

              <div className="learning-box">
                <span>Currently Improving</span>
                <p>
                  Advanced React patterns, API integration, authentication, and
                  AI feature implementation.
                </p>
              </div>
            </motion.aside>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Skills;
