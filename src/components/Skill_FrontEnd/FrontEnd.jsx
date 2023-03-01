import React from "react";
import "./FrontEnd.scss";

function FrontEnd({ infoFront }) {
  return (
    <div className="programmingLanguage">
      <div className="programmingLanguage__frontEnd">
        <h2>{infoFront.title}</h2>
        <img src={infoFront.img} alt={infoFront.alt}></img>
      </div>
    </div>
  );
}

export default FrontEnd;
