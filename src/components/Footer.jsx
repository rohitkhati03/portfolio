import React from "react";
import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Prasiddhi — All Rights Reserved</p>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://github.com/rohitkhati03" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/rohit-khati03" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/khati4731" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
