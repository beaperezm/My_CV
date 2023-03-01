import React from "react";
import "./Skills.scss";
import FrontEnd from "../Skill_FrontEnd/FrontEnd.jsx";
import BackEnd from "../Skill_BackEnd/BackEnd.jsx";
import Design from "../Skill_Design/Design.jsx";
import English from "../Skill_Language/English.jsx";
import Spanish from "../Skill_Language/Spanish.jsx";


function Skills ({ frontEnd, backEnd, design, english, spanish, id, title }) {

  return (
    <>
    <section className="skills">

      <p className="skills__content" id={id}>
          {title}
        </p>

      <div className="skills__allData">

        <div >
          <p>Front End</p>
          <div className="skills__allData_frontEnd">
            {frontEnd.map((infoFront, index) => {
              return <FrontEnd infoFront={infoFront} key={index} />
            })}
          </div>
        </div>
        <div>
          <p>Back End</p>
          <div className="skills__allData_backEnd">
            {backEnd.map((infoBack, index) => {
              return <BackEnd infoBack={infoBack} key={index} />
            })}
          </div>
        </div>
        <div>
          <p>Design</p>
          <div className="skills__allData_design">
            {design.map((infoDesign, index) => {
              return <Design infoDesign={infoDesign} key={index} />
            })}
          </div>
        </div>

        <div>
        <p>Language</p>
          <div className="skills__allData_english">
            {english.map((englishInfo, index) => {
              return <English englishInfo={englishInfo} key={index} />
            })}
          </div>
          <div className="skills__allData_spanish">
            {spanish.map((spanishInfo, index) => {
              return <Spanish spanishInfo={spanishInfo} key={index} />
            })}
          </div>
        </div>

      </div>
    
    </section>

    

    
    </>
  );
}

export default Skills;
