import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar scoreboard">
      <ul>
        <li>
          Clicky Game
          </li>
        <li>
          CORRECT!
          </li>
        <li>
          Score: 0 | High Score: 0
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;
