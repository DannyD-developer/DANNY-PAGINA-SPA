import React from "react";

export default function Characters() {
  const characters = [
    { name: "Mario", description: "Plumber and hero.", img: ${process.env.PUBLIC_URL}/images/mario.jpg },
    { name: "Luigi", description: "Mario's brother.", img: ${process.env.PUBLIC_URL}/images/luigi.jpg },
    { name: "Peach", description: "Princess of Mushroom Kingdom.", img: ${process.env.PUBLIC_URL}/images/peach.jpg },
    { name: "Yoshi", description: "Friendly dinosaur companion.", img: ${process.env.PUBLIC_URL}/images/yoshi.jpg },
    { name: "Bowser", description: "The main antagonist.", img: ${process.env.PUBLIC_URL}/images/bowser.jpg },
  ];

  return (
    <section aria-labelledby="characters-title" className="section">
      <h1 id="characters-title">Characters</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {characters.map((char, i) => (
          <li
            key={char.name + i}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem",
              gap: "1rem",
            }}
          >
            <img
              src={char.img}
              alt={char.name}
              width="150"
              height="150"
              style={{ objectFit: "cover", borderRadius: 6 }}
            />
            <div>
              <strong>{char.name}</strong>: {char.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
