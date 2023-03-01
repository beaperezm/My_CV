import React from "react";
import "./Experience.scss";

function Experience({ experience, id, title }) {

  const experienceList = experience.map((info, index) => {
    return (
      <section id={id} key={index}>
        <li className="experience__card">
        <p className="experience__card_date">{info.date}</p>
          <p className="experience__card_name"><strong>{info.name}</strong></p>
          <p className="experience__card_where">{info.where}</p>
          <div className="experience__card_description">
          {info.description.map((info) => {
            return (
              <div key={JSON.stringify(info)}>
                <p>{info.info}</p>
              </div>
            );
          })}
        </div>
        </li>
      </section>
    );
  })
  return (
    <>
      <div className="experience">
        <p className="experience__content" id={id}>
          {title}
        </p>

        <ul className="experience__list">
          {experienceList}
        </ul>
      </div>
    </>
  );
};

export default Experience;
