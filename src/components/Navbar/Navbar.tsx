import { NavLink } from "react-router";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="logo">
            fridaSea
          </a>

          <div
            className="menu-icon"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>

            <li>
              {" "}
              <NavLink to="/library">Components Library</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
