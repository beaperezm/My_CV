import React from "react";
import "./BackEnd.scss";

function BackEnd({ infoBack }) {
  return (

      <div className="programmingLanguage">

        <div className="programmingLanguage__backEnd">
          <h2>{infoBack.title}</h2>
          <img src={infoBack.img} alt={infoBack.alt}></img>
        </div>
        
      </div>

    
  );
}

export default BackEnd;
