import React, { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      {/* Background floating shapes */}
      <div className="contact-bg-shapes">
        <span className="shape shape1"></span>
        <span className="shape shape2"></span>
        <span className="shape shape3"></span>
        <span className="shape shape4"></span>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} >
        <input type="text" placeholder="Your Name" name="name" required />
        <input type="email" placeholder="Your Email" name="email" required />
        <textarea placeholder="Message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="gratitude-message">
          <p>Thank you for reaching out! 🙏</p>
        </div>
      )}
    </section>
  );
}
