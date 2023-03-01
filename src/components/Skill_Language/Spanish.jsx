import React from "react";
import "./Spanish.scss";

function Spanish ({ spanishInfo }) {
  return (
    <div className="language">
    <div>
      <h2>{spanishInfo.spanish}</h2>
      </div>
      <div className="spanishLevel">
        <div>
          <div className="spanishLevel__progress">
            <h3 className="spanishLevel__text">{spanishInfo.spanishLevel}</h3>
          </div>
        </div>
      </div>
    </div>

);
}

export default Spanish;
