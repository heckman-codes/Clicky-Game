import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav className="navbar scoreboard">
      <ul>
        <li>
          <h2>
            Clicky Game
          </h2>
        </li>
        <li><h2>
          {props.message}
        </h2>
        </li>
        <li>
          Score: {props.score} | High Score: {props.highscore}
        </li>
      </ul>
      <div className="rules-div justify-content-center"><p className="text-center rules">Rules are simple: Click a picture you did not pick previously to get points.</p></div>
    </nav>
  );
}

export default Navbar;
