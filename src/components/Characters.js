import React from "react";

export default function Characters() {
  const characters = [
    { name: "Mario", description: "Plumber and hero.", img: "./images/mario.jpg" },
    { name: "Luigi", description: "Mario's brother.", img: "./images/luigi.jpg" },
    { name: "Peach", description: "Princess of Mushroom Kingdom.", img: "./images/peach.jpg" },
    { name: "Yoshi", description: "Friendly dinosaur companion.", img: "./images/yoshi.jpg" },
    { name: "Bowser", description: "The main antagonist.", img: "./images/bowser.jpg" },
  ];

  return (
    <section aria-labelledby="characters-title" className="section">
      <h1 id="characters-title">Characters</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {characters.map((char, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem",
              gap: "1rem",
            }}
          >
            <img src={char.img} alt={char.name} width="150" height="150" />
            <div>
              <strong>{char.name}</strong>: {char.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
