import React from "react";
import "./Design.scss";

function Design({ infoDesign }) {
  return (

      <div className="programmingLanguage">

        <div className="programmingLanguage__design">
          <h2>{infoDesign.title}</h2>
          <img src={infoDesign.img} alt={infoDesign.alt}></img>
        </div>
       
      </div>

    
  );
}

export default Design;
