import React from "react";
import "./Portfolio.scss";

const Portfolio = ({ info }) => {
  return (
    <div className="portfolio">
      <div className="portfolio__image">
        <a href={info.href} target="_blank" rel="noopener noreferrer"><img src={info.img} alt={info.alt}></img></a>
      </div>
      <div className="portfolio__titleInfo">
        <h2>{info.title}</h2>
        <h3>{info.info}</h3>
        
      </div>
      <a href={info.hrefCode} target="_blank" rel="noopener noreferrer">
        <button className="buttonCode">Ver el código</button></a>
    </div>
  );
};

export default Portfolio;
