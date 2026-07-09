import React from "react";
import "./Nav.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        {['Home', 'Skills', 'Project', 'About', 'Contact'].map((label) => (
          <a key={label} href={`#${label.toLowerCase()}`}>
            {label}
          </a>
        ))}
      </div>

      <a
        className="resume-btn"
        href="/resume/Germino-JeffersonResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </nav>
  );
}
