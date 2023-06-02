import React from 'react';
import './portfolio.css';
import IMG2 from '../../images/img2.jpg'
import IMG3 from'../../images/img3.jpg'
import IMG4 from'../../images/img4.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2> Portfolio </h2>
      <div className="conatine portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={IMG2}  alt=" "/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com " className='btn'> GitHub</a>
          <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank'> Live Demo </a>
        </div>
        </article>

        
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={IMG3}  alt=" "/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com " className='btn'> GitHub</a>
          <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank'> Live Demo </a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={IMG4}  alt=" "/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com " className='btn'> GitHub</a>
          <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank'> Live Demo </a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={IMG3}  alt=" "/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com " className='btn'> GitHub</a>
          <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank'> Live Demo </a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={IMG4}  alt=" "/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com " className='btn'> GitHub</a>
          <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank'> Live Demo </a>
        </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img  src={IMG2}  alt=" "/>
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com " className='btn'> GitHub</a>
          <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank'> Live Demo </a>
        </div>
        </article>


      </div>
    </section>
  )
}

export default portfolio