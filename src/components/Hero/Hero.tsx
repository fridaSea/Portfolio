import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <h1>Hello & welcome 👋</h1>
          <p>
            I'm <strong>Maria aka fridaSea</strong>, a full-stack developer with
            a passion for frontend development and software testing – based in
            Berlin. <br />
            Welcome to my digital desktop / cozy workplace.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
