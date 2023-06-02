import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../images/me2.jpg'
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
    <div className="container header__container">
      <h4> Hello I'am </h4>
      <h1> Prachi Jaiswal </h1>
      <h3 className="text-light">FullStack Developer </h3>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src= {ME} alt="me"/>
      </div>
      <a href="#contact" className='scroll__down'> Scroll Down</a>
    </div>
    </header>
  )
}

export default Header