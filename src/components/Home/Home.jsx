import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Home.scss";
import image from "../../images/fotowithoutframe.png";


function Home({ myInfo, id, title }) {
  return (
    <section className="home">
      
    <div className="home__card">
      <article className="home__image">
        <img src={image} alt="foto" className="myPortrait"/>
     
      </article>
      
      <h1 className="home__card_name">{myInfo.name}</h1>
      <h2 className="home__card_perfil">{myInfo.perfil}</h2>

      <div className="icons">
        <a href="https://github.com/beaperezm" target="_blank">
          <FaGithub className="gitHub"/>
        </a>
        <a href="https://www.linkedin.com/in/beatriz-p%C3%A9rez-9a2999260/" target="_blank">
          <FaLinkedin className="linkedin"/>
        </a>
      </div>
      </div>
    </section>

  );
};

export default Home;
