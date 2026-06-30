import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import profilepic from "../assets/profile.jpeg";
import "./Hero.css";

const heroInfo = {
  name: "Maheshwari Kadus",
  role: "Software Engineering Student",
  education: "B.E. Information Technology | MMCOE, Pune | 2023 - 2027",
  summary:
    "I build responsive React and MERN stack applications, with a focus on clean UI, practical problem solving, and AI-powered features.",
};

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <span className="hero-tag">Available for Internships</span>

          <h1>
            Hey, I&apos;m <span>{heroInfo.name}</span>
          </h1>
          <h2>{heroInfo.role}</h2>

          <p className="hero-education">{heroInfo.education}</p>
          <p className="hero-summary">{heroInfo.summary}</p>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Featured Work
            </a>
            <a href="/CV.docx" className="secondary-btn">
              <FiDownload />
              Resume
            </a>
          </div>
        </motion.div>

        <div className="hero-profile">
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img src={profilepic} alt="Maheshwari" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
