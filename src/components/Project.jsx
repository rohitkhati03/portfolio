import React from "react";
import "../styles/project.css";
import { FaNodeJs, FaReact, FaDatabase, FaPython, FaJsSquare, FaServer } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "FinVest",
      techIcons: [<FaNodeJs />, <FaReact />, <FaDatabase />],
      tech: ["Node.js", "Rest API", "MongoDB", "React"],
      description:
        "A smart finance companion for budgeting, expense tracking, and investment guidance.",
      link: "https://github.com/rohitkhati03/Finance_Project",
    },
    {
      name: "Tele Health",
      techIcons: [<FaNodeJs />, <FaDatabase />, <FaServer />],
      tech: ["Express.js", "MongoDB", "React", "REST API"],
      description:
        "A full-stack telemedicine system providing centralized health data access, symptom analysis, and clinic recommendations",
      link: "https://github.com/rohitkhati03/TeleHealth",
    },
    {
      name: "Smile Foundation Clone",
      techIcons: [<FaReact />, <FaDatabase />, <FaJsSquare />],
      tech: ["HTML5", "BootStrap", "Javascript"],
      description:
        "Developed a responsive clone of NGO over the learning purpose.",
      link: "https://github.com/rohitkhati03/Smile_Foundation_Clone",
    },
    {
      name: "YamiPlex",
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      tech: ["React", "Node.js", "MongoDB"],
      description:
        "An Anime Streaming Platform with optimal data Usages",
      link: "https://github.com/rohitkhati03/Yamiplex",
    },
    {
      name: "GameVerse",
      techIcons: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      tech: ["React", "Express.js", "MongoDb"],
      description:
        "GameVerse is a dynamic gaming platform showcasing immersive gameplay and modern interactive design.",
      link: "https://github.com/rohitkhati03/minigameverse",
    },
    {
      name: "Portfolio Pro",
      techIcons: [<FaReact />, <FaJsSquare />, <FaDatabase />],
      tech: ["React", "JavaScript", "Firebase"],
      description:
        "Interactive personal portfolio with dynamic project showcase, dark/light mode, and contact form.",
      link: "https://github.com/rohitkhati03/portfolio",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      {/* Floating background shapes */}
      <div className="projects-bg-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
        <span className="shape shape4"></span>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="tech-art">
              {project.techIcons.map((icon, idx) => (
                <span key={idx} className="tech-icon">{icon}</span>
              ))}
            </div>
            <h3>{project.name}</h3>
            <div className="tech-tags">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
