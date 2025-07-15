import React from "react";
import "./Nav.css";

export default function Navbar() {
  return (
<nav className="navbar">
  {["Home", "Gallery","Project", "About", "Contact"].map((label) => (
    <a key={label} href={`#${label.toLowerCase()}`}>
      {label}
    </a>
  ))}
</nav>

  );
}
