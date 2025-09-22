import React from "react";

export default function Home() {
  return (
    <section aria-labelledby="home-title" className="section">
      <h1 id="home-title">Welcome to the World of Mario</h1>
      <h2 style={{ color: "#333" }}>Explore and interact with our content</h2>
      <p>This world is designed with professionalism</p>
      <button
        onClick={() => alert("You clicked Learn More!")}
        style={{
          backgroundColor: "#ffcc00",
          color: "#000",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Learn More About Nintendo
      </button>
    </section>
  );
}
