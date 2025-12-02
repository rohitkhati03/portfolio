import React from "react";
import "../styles/hero.css";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase } from "react-icons/fa";

export default function Hero() {
  const techIcons = [
    { icon: <FaReact />, className: "react" },
    { icon: <FaNodeJs />, className: "node" },
    { icon: <FaHtml5 />, className: "html" },
    { icon: <FaCss3Alt />, className: "css" },
    { icon: <FaJsSquare />, className: "js" },
    { icon: <FaDatabase />, className: "db" },
  ];

  return (
    <section id="home" className="hero">
      {/* Background shapes */}
      <div className="hero-bg-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I am <span className="purple">Rohit Khati</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer & UI/UX Designer</h2>
          <p className="hero-description">
            I build modern, responsive, and high-performance web applications using React, Node.js, MongoDB, and clean UI principles.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="https://drive.google.com/file/d/13Ch2d04t9i0A7TbztJMv6zwB8puX3awk/view?usp=drive_link
" className="btn-secondary" download>Download CV</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="circle"></div>

          {/* Floating Tech Stack Icons */}
          <div className="tech-icons">
            {techIcons.map((item, index) => (
              <div key={index} className={`icon ${item.className}`}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
