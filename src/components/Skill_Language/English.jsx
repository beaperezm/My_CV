import React from "react";
import "./English.scss";

function English ({ englishInfo }) {
  return (
    <div className="language">
      <div>
        <h2>{englishInfo.english}</h2>
        </div>
        <div className="englishLevel">
          <div>
            <div className="englishLevel__progress">
              <h3 className="englishLevel__text">{englishInfo.englishLevel}</h3>
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default English;
