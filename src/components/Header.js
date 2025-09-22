import React from "react";

export default function Header({ setSection, currentSection }) {
  return (
    <header className="header">
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          <li>
            <button
              onClick={() => setSection("home")}
              aria-current={currentSection === "home" ? "page" : undefined}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setSection("characters")}
              aria-current={currentSection === "characters" ? "page" : undefined}
            >
              Characters
            </button>
          </li>
          <li>
            <button
              onClick={() => setSection("contact")}
              aria-current={currentSection === "contact" ? "page" : undefined}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
