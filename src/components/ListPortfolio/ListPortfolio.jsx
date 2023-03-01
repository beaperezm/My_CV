import React from "react";
import "./ListPortfolio.scss";
import Portfolio from "../Portfolio/Portfolio.jsx";

function ListPortfolio({ title, id, portfolio }) {
  return (
    <section className="listPortfolio">
      <p className="listPortfolio__content" id={id}>
        {title}
      </p>
      <div className="listPortfolio__allData">
        {portfolio.map((info, index) => {
          return <Portfolio info={info} key={index} />;
        })}
      </div>
    </section>
  );
}

export default ListPortfolio;
