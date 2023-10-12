import { useState } from "react";
import "./styles.css";

const content = [
  [
    "cricket is an popular game",
    "Cricket is a bat-and-ball game",
    "Forms of cricket range from Twenty20",
    "Test matches played over five days"
  ],
  [
    "There are a number of references to traditional",
    "Various State",
    "Sports commonly called football",
    "11 Members"
  ],
  [
    "Volley ball is a sport",
    " Sports commonly called beach ball",
    "11 members"
  ],
  ["India's national sport", " Sports commonly called hockey", "11 members"]
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <header>
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button
            className={activeContentIndex === 0 ? "active" : ""}
            onClick={() => setActiveContentIndex(0)}
          >
            Cricket
          </button>
          <button
            className={activeContentIndex === 1 ? "active" : ""}
            onClick={() => setActiveContentIndex(1)}
          >
            FootBall
          </button>
          <button
            className={activeContentIndex === 2 ? "active" : ""}
            onClick={() => setActiveContentIndex(2)}
          >
            VolleyBall
          </button>
          <button
            className={activeContentIndex === 3 ? "active" : ""}
            onClick={() => setActiveContentIndex(3)}
          >
            Hockey
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
