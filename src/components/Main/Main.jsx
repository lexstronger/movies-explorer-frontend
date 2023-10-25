import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfoilio from "../Portfolio/Portfolio";
import './Main.css';

function Main() {

  function scrollDown() {
    const aboutProject = document.getElementById('project');
    if(aboutProject) {
      aboutProject.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <main className="main">
      <Promo scrollDown={scrollDown}/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfoilio/>
    </main>    
  );
}

export default Main;