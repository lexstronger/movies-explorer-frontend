import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__heading">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://lexstronger.github.io/how-to-learn/" rel='noreferrer' target='_blank'>
            <p className="portfolio__site">Статичный сайт</p>
            <span className="portfolio__arrow" aria-hidden="true"></span>            
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://lexstronger.github.io/russian-travel/" rel='noreferrer' target='_blank'>
            <p className="portfolio__site">Адаптивный сайт</p>
            <span className="portfolio__arrow" aria-hidden="true"></span>            
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://lexstronger.github.io/react-mesto-auth/" rel='noreferrer' target='_blank'>
            <p className="portfolio__site">Одностраничное приложение</p>
            <span className="portfolio__arrow" aria-hidden="true"></span>            
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;