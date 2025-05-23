import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Portfolio of fridaSea</h1>
        <p>Frontend Web Developer and Software Tester</p>

        <p>This page is still a work in progress 🚧</p>
        <p>Please come back later</p>
      </div>

      <div>
        Hello & welcome to my digital desktop / cozy workplace <br />
        I`m Maria aka fridaSea, a full-stack developer with passion for frontned
        development and software testing, based in Berlin. <br />
        <h2>About</h2>
        With a background in customer support, I love to step into the customers
        role, while building new webpages and features. <br />
        Always going the extra mile.
        <h2>Projects</h2>
        - Catching Sunsets <br />
        - Extincted Animals <br />- com&com
        <h2>Skills</h2>
        I constantly try to improve "Tech Stack einzeln auflisten" HTML, CSS,
        JavaScript, TypeScript, ReactJS, NextJS, NodeJS, ExpressJS, MongoDb,
        Git, Github, Vercel, Netlify, Postman <br />
        Next to learn: Tailwind CSS, Shadcn
        <h2>Education</h2>
        "Code Academy and Testing Zertificate" Zeitleistenstrahl
        <h2>Contact</h2>
        GET IN TOUCH "Kontaktformulat"
      </div>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
