import React from "react";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import "../styles/about.css";

export default function About() {
  const techIcons = [FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt];

  return (
    <section id="about" className="about-section">
      {/* Background shapes */}
      <div className="about-bg-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
        <span className="shape shape4"></span>
        <span className="shape shape5"></span>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-paragraph">
            I am a passionate <span className="highlight">full-stack developer</span> with hands-on experience in modern frameworks like React and Node.js. I love creating <span className="highlight">clean, responsive, and intuitive UIs</span> while solving real-world problems efficiently.
          </p>
          <p className="about-paragraph">
            My focus is on building applications that not only work flawlessly but also provide a seamless user experience.
          </p>
        </div>

        <div className="about-tech">
          {techIcons.map((Icon, index) => (
            <div key={index} className="tech-icon">
              <Icon size={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
