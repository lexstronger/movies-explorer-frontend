import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="project" id="project">
      <h2 className="project__heading">О проекте</h2>
      <div className="project__info">
        <div className="project__text-block">
          <h3 className="project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="project__text-block">
          <h3 className="project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="project__schedule">
        <p className="project__progress">1 неделя</p>
        <p className="project__progress project__progress_frontend">4 недели</p>
        <span className="project__label">Back-end</span>
        <span className="project__label">Front-end</span>
      </div>
    </section>
  );
}

export default AboutProject;