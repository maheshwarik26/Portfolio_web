import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./Projects.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/projects`);

        setProjects(response.data.data || []);
      } catch (error) {
        console.error("Project fetch failed:", error);
        setError("Unable to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categories = useMemo(() => {
    return ["All", ...new Set(projects.map((project) => project.category))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory, projects]);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Projects</span>
          <h2>Featured Work</h2>
          <p>
            Projects that show my practical learning in React, MERN stack,
            frontend development, and AI-based problem solving.
          </p>
        </motion.div>

        {loading && <p className="projects-message">Loading projects...</p>}

        {error && <p className="projects-message error">{error}</p>}

        {!loading && !error && (
          <>
            <div className="project-tabs">
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

            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <motion.article
                  className={`project-card ${
                    project.status === "Featured" ? "featured" : ""
                  }`}
                  key={project._id || project.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="project-header">
                    <span className="project-category">
                      {project.category}
                    </span>
                    <span className="project-status">{project.status}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  {project.impact && (
                    <div className="project-impact">
                      <span>Impact</span>
                      <p>{project.impact}</p>
                    </div>
                  )}

                  <div className="tech-stack">
                    {project.tech?.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
