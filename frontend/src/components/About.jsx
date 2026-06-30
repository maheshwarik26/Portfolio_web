import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

const aboutCards = [
  {
    title: "Education",
    value: "B.E. Information Technology",
    detail: "MMCOE, Pune | 2023 - 2027",
    description:
      "Currently studying software engineering fundamentals while building practical projects using frontend, backend, and database technologies.",
  },
  {
    title: "Current Focus",
    value: "React, MERN Stack, AI Features",
    detail: "Full-stack web development",
    description:
      "Focused on React concepts, reusable components, state management, backend APIs, MongoDB, and AI-powered portfolio features.",
  },
  {
    title: "Experience",
    value: "Software Intern",
    detail: "Swapsoft Sghitech Pvt. Ltd.",
    description:
      "Worked on responsive UI pages and reusable frontend components for a Smart Budget Management System.",
  },
  {
    title: "Achievement",
    value: "1st Place - UDAAN 2K24",
    detail: "AI Cognitive Agents Project",
    description:
      "Built an AI-focused project around cognitive agents and secured first place at UDAAN 2K24.",
  },
   {
    title: "Certifications",
    value: "AI, Cybersecurity, Web Development",
    detail: "Deloitte Australia, Infosys Springboard",
    description:
      "Completed virtual and online certification programs including Cybersecurity Virtual Experience from Deloitte Australia and Generative AI learning from Infosys Springboard.",
  },
];

function About() {
  const [selectedCard, setSelectedCard] = useState(aboutCards[0]);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="section-tag">About Me</span>
          <h2>Building skills through real projects and practical learning.</h2>
          <p>
            I am Maheshwari Kadus, an Information Technology student with a
            strong interest in software engineering, web development, and
            AI-powered applications.
          </p>
        </motion.div>

        <div className="about-layout">
          <div className="about-grid">
            {aboutCards.map((card, index) => (
              <motion.button
                type="button"
                className={`about-card ${
                  selectedCard.title === card.title ? "active" : ""
                }`}
                key={card.title}
                onClick={() => setSelectedCard(card)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                <span>{card.title}</span>
                <h3>{card.value}</h3>
                <p>{card.detail}</p>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.aside
              className="about-details"
              key={selectedCard.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <span>Selected Highlight</span>
              <h3>{selectedCard.value}</h3>
              <p>{selectedCard.description}</p>
            </motion.aside>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default About;