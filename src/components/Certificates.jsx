import React from "react";
import '../styles/certification.css';
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
  const certifications = [
    {
      title: "MERN Stack Developer Certification",
      issuer: "30dayscoding",
      link: "https://drive.google.com/file/d/15tCWOXZsDmTJelbCLAu7BZsd7Sh_0qNa/view?usp=drive_link",
    },
    {
      title: "Leadership and Team Effectiveness",
      issuer: "NPTEL",
      link: "https://drive.google.com/file/d/171Wl6kKmZWe1W3Zs1jfn-Uzo92D5mVca/view?usp=drive_link",
    },
    {
      title: "MongoDB",
      issuer: "MongoDB",
      link: "https://drive.google.com/file/d/1w9AJjfuh8Yb73294bSOFzJEIvQ40K-u1/view?usp=drive_link, https://drive.google.com/file/d/1dDcX4KvFWr6q7Bu_m5OeEo1jPwmCFLN5/view?usp=drive_link, https://drive.google.com/file/d/1Tc7NyuOro7NsOv16ZGYZbvRlZAhetR7v/view?usp=drive_link",
    },
  ];

  return (
    <section id="certifications" className="cert-section">
      {/* Background shapes */}
      <div className="cert-bg-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
      </div>

      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">
              <FaCertificate />
            </div>
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
