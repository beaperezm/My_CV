import React from 'react';
import './App.scss';
import Home from './Home/Home.jsx';
import Header from './Header/Header.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import Education from './Education/Education.jsx'
import Experience from './Experience/Experience.jsx';
import Skills from './Skills/Skills.jsx';
import ListPortfolio from './ListPortfolio/ListPortfolio.jsx';
// import Contact from './Contact/Contact.jsx';
import { CV } from '../CV/CV';


const { myInfo, softSkills, education, experience, skills, portfolio, forList } = CV;



function App() {
  
  return (
    <div className="App">
      <Header myInfo={myInfo} forList={forList} />
      <Home myInfo={myInfo} />
      <AboutMe aboutMe={myInfo.aboutMe} myInfo={myInfo} softSkills={softSkills} id="aboutme" title="Sobre Mi" />
      <Education education={education} id="education" title="Formación"/>
      <Experience experience={experience} id="experience" title="Experiencia"/>
       <Skills id="skills" frontEnd={skills.frontEnd} backEnd={skills.backEnd} design={skills.design} english={skills.english} spanish={skills.spanish} title="Competencias"/>
      <ListPortfolio id="portfolio" portfolio={portfolio} title="Portfolio"/>
      {/* <Contact id="contact" myInfo={myInfo} title="Contacto"/> */}

    </div>
  );
}

export default App;
