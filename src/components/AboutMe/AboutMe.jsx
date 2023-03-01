import React from "react";
import "./AboutMe.scss";
import { HashLink as Link } from "react-router-hash-link";

function AboutMe({ aboutMe, id, title, softSkills }) {
  return (
    <>
      <section className="aboutMe">
        <div className="aboutMeCard">
          <p className="aboutMeCard__title" id={id}>
            {title}
          </p>

          <div className="aboutMeCard__description">
            
            {aboutMe.map((info) => {
              return (
                <div id={id} key={JSON.stringify(info)}>
                  <p className="aboutMeCard__description_info">
                    <span className="aboutMeCard__description_greeting"> {info.info0} </span> {info.info1} {info.info2} {info.info3}
                  </p>
                  <p className="aboutMeCard__description_info">
                     {info.info2}
                  </p>
                  <p className="aboutMeCard__description_info">
                     {info.info3}
                  </p>
                </div>
              );
            })}

            <ul className="aboutMeCard__softSkills">
              {softSkills.map((info, index) => {
                return <li key={index} className="aboutMeCard__softSkills_list">{info.info}</li>
              })}
            </ul>
          </div>
        </div>

        {/* <div className="buttonDownloadArrow">
          <button className="buttonDownload">
            <Link className="linkButton">Descargar CV</Link>
          </button>
        </div> */}
   
      </section>
    </>
  );
}

export default AboutMe;
