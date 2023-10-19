import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__bar'>
        <p className='footer__copyright'>&copy; {(new Date()).getFullYear()}</p>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a className='footer__link' href='https://practicum.yandex.ru' rel='noreferrer' target='_blank'>Яндекс.Практикум</a>
          </li>
          <li className='footer__item'>
            <a className='footer__link' href='https://github.com/lexstronger' rel='noreferrer' target='_blank'>Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;