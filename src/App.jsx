import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Download, Moon, Sun } from "lucide-react";
import "./index.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const projects = [
    {
      title: "AI Recommendation System",
      link: "https://recommendation-system.up.railway.app/",
    },
    {
      title: "Aiven LMS",
      link: "https://aiven-lms.up.railway.app/",
    },
    {
      title: "NexVault",
      link: "https://nexvaullt.up.railway.app/",
    },
  ];

  return (
    <div className={darkMode ? "dark app" : "light app"}>
      <motion.div
        animate={{
          x: cursorPosition.x - 10,
          y: cursorPosition.y - 10,
        }}
        className="cursor"
      />

      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <section className="hero">
        <div>
          <p className="tag">AI Engineer • Data Scientist • ML Developer</p>
          <h1>
            Tushar <span>Khitoliya</span>
          </h1>

          <p className="desc">
            Building production-grade AI systems using Machine Learning, LLMs,
            RAG pipelines, analytics, and modern web technologies.
          </p>

          <div className="btns">
            <a href="https://github.com/KHITOLIA" target="_blank">
              <Github size={18} /> GitHub
            </a>

            <a href="/resume.pdf" download>
              <Download size={18} /> Resume
            </a>
          </div>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>

        <div className="grid">
          <div className="card">
            <h3>AI / ML</h3>
            <p>TensorFlow, PyTorch, LLMs, NLP, RAG, Computer Vision</p>
          </div>

          <div className="card">
            <h3>Machine Learning</h3>
            <p>Regression, Classification, Clustering, Feature Engineering</p>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <p>LangChain, Streamlit, GitHub, Tableau, Plotly, Hugging Face</p>
          </div>
        </div>
      </section>

      <section className="projects">
        <h2>Live Projects</h2>

        <div className="grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              key={index}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>Production deployed application</p>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 Tushar Khitoliya • AI Portfolio</p>
      </footer>
    </div>
  );
}
