import React from "react";

export default function Characters() {
  const characters = [
    {
      name: "Mario",
      description: "Plumber and hero.",
      imgUrl: "https://dannyd-developer.github.io/DANNY-PAGINA-SPA/images/mario.jpg",
    },
    {
      name: "Luigi",
      description: "Mario's brother.",
      imgUrl: "https://dannyd-developer.github.io/DANNY-PAGINA-SPA/images/luigi.jpg",
    },
    {
      name: "Peach",
      description: "Princess of Mushroom Kingdom.",
      imgUrl: "https://dannyd-developer.github.io/DANNY-PAGINA-SPA/images/peach.jpg",
    },
    {
      name: "Yoshi",
      description: "Friendly dinosaur companion.",
      imgUrl: "https://dannyd-developer.github.io/DANNY-PAGINA-SPA/images/yoshi.jpg",
    },
    {
      name: "Bowser",
      description: "The main antagonist.",
      imgUrl: "https://dannyd-developer.github.io/DANNY-PAGINA-SPA/images/bowser.jpg",
    },
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
            <img
              src={char.imgUrl}
              alt={char.name}
              width="150"
              height="150"
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
