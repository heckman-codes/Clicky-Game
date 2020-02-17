import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className=" col col-xs-6 col-sm-6 col-md-3 d-flex align-items-stretch">
      <div className="card">
        <div className="card-body">
          <img className="img-fluid"
            alt={props.name}
            src={props.image}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
