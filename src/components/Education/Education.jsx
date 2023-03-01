import React from "react";
import "./Education.scss";

function Education({ education, id, title }) {
  const educationList =  education.map((info, index) => {
    return (
      <div id={id} key={index}>
        <li className="education__card">
          <p className="education__card_date">{info.date}</p>
          <p className="education__card_name"><strong>{info.name}</strong></p>
          <p className="education__card_where">{info.where}</p>
        </li>
      </div>
      
    );
  })
  return (
    <>
      <section className="education">
        <p className="education__content" id={id}>
          {title}
        </p>
        <ul className="education__list">
          {educationList}
        </ul>
       
      </section>
    </>
  );
};


export default Education;
