import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("HOME");

  const images = {
    HOME: "/home.jpg",
    TRADITION: "/tradition.jpg",
    PROGRESS: "/progress.jpg",
    UNITY: "/unity.jpg",
  };

  const content = {
    HOME: (
      <div>
        <h2>Welcome to the Municipality of Taraka</h2>
        <p>
          Nestled in the heart of Lanao del Sur, the Municipality of Taraka
          stands as a symbol of unity, resilience, and progress. It is a place
          where the beauty of nature meets the richness of Maranao heritage —
          from the serene landscapes to the vibrant communities that celebrate
          faith and culture. Taraka continues to thrive as one of the proud
          municipalities that preserve the true spirit of the Maranao people.
        </p>
      </div>
    ),
    TRADITION: (
      <div>
        <h2>Maranao People: History, Culture & Traditions</h2>
        <p>
          The Maranao people are known for their rich culture, intricate art,
          and deep traditions that have been passed down through generations.
          Their heritage continues to shape the identity and pride of Taraka,
          seen in every woven fabric, every graceful dance, and every story that
          carries the wisdom of their ancestors.
        </p>
      </div>
    ),
    PROGRESS: (
      <div>
        <h2>Ongoing Development and Growth</h2>
        <p>
          Taraka is continuously moving forward toward a future of sustainable
          progress and inclusive development. With its growing infrastructure,
          educational opportunities, and community-driven initiatives, the
          municipality strives to uplift every citizen while maintaining balance
          with its cultural roots. Innovation and tradition walk hand in hand as
          Taraka builds a stronger and more prosperous tomorrow.
        </p>
      </div>
    ),
    UNITY: (
      <div>
        <h2>Working Together for a Better Taraka</h2>
        <p>
          The true strength of Taraka lies in its people — a community built on
          trust, compassion, and cooperation. Through the collective efforts of
          its citizens, leaders, and youth, Taraka fosters unity that transcends
          differences. Together, they uphold the Maranao values of kinship and
          solidarity, ensuring that every achievement is a shared success and
          every challenge is faced as one.
        </p>
      </div>
    ),
  };

  return (
    <>
      <div className="header">
        <h1 className="title">MUNICIPALITY OF TARAKA</h1>
        <nav className="nav">
          {["HOME", "TRADITION", "PROGRESS", "UNITY"].map((item) => (
            <span
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => setActive(item)}
            >
              {item}
            </span>
          ))}
        </nav>
      </div>

      <div className="content">
        <div className="image-container">
          <img src={images[active]} alt={active} className="main-image" />
        </div>
        <div className="overlay-content fade-in">{content[active]}</div>
      </div>
    </>
  );
}

export default App;
