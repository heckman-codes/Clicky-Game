import React from "react";
import "./style.css";

function Wrapper(props) {
  return <main className="container">
    <div className="row" {...props}></div>
  </main>;
}

export default Wrapper;
