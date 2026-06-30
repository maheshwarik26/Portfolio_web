import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FiMail, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const contactLinks = [
  {
    label: "Email",
    value: "maheshwarikadus26@gmail.com",
    href: "mailto:maheshwarikadus26@gmail.com",
    icon: <FiMail />,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/maheshwari-kadus-458403327/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/maheshwarik26",
    icon: <FaGithub />,
  },
  {
    label: "Resume",
    value: "Download CV",
    href: "/CV.docx",
    icon: <FiDownload />,
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await axios.post(`${API_URL}/api/contact`, formData);

      setStatus(response.data.message || "Message sent successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-tag">Contact</span>
          <h2>Let&apos;s build something meaningful.</h2>
          <p>
            I am currently open to software engineering internships, frontend
            roles, and MERN stack learning opportunities.
          </p>
        </motion.div>

        <div className="contact-layout">
          <div className="contact-details">
            <motion.div
              className="contact-note"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <h3>Open to opportunities</h3>
              <p>
                Feel free to reach out for internships, collaboration, project
                discussions, or feedback on my work.
              </p>
            </motion.div>

            <div className="contact-links">
              {contactLinks.map((item, index) => (
                <motion.a
                  className="contact-item"
                  href={item.href}
                  key={item.label}
                  target={
                    item.label === "Email" || item.label === "Resume"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    item.label === "Email" || item.label === "Resume"
                      ? undefined
                      : "noreferrer"
                  }
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <span className="contact-icon">{item.icon}</span>

                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project"
                rows="5"
                required
              />
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="form-status">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
