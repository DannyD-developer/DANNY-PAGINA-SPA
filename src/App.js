import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [section, setSection] = useState("home");
  const mainRef = useRef(null);

  useEffect(() => {
    if (mainRef.current) mainRef.current.focus();
  }, [section]);

  const renderSection = () => {
    switch (section) {
      case "characters":
        return <Characters />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header setSection={setSection} currentSection={section} />
      <main ref={mainRef} tabIndex="-1" className="main-content">
        {renderSection()}
      </main>
      <footer className="footer">
        <p>
          Accessible SPA Danny Diaz &copy; 2025 |{" "}
          <a href="#home" style={{ color: "yellow" }}>
            Home
          </a>{" "}
          |{" "}
          <a href="#contact" style={{ color: "yellow" }}>
            Contact
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
