import React from 'react';
import './testimonial.css';
import IMG5 from '../../images/img5.jpg'
import IMG6 from '../../images/img6.jpg'
import IMG7 from '../../images/img7.jpg'


import {Pagination} from 'swiper';

import {Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
  avatar:IMG5,
  name:'Era watson',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Sunt obcaecati corporis tempora laborum voluptatem sit eveniet.Cumque, amet recusandae atque, voluptatibus iure fugit est facere exercitationem voluptatum sapiente minusperspiciatis!'

                
  },
  {
  avatar:IMG6,
  name:'Era watson',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt obcaecati corporis tempora laborum voluptatem sit eveniet. Cumque, amet recusandae atque, voluptatibus iure fugit est facere exercitationem voluptatum sapiente minus perspiciatis!'
  },
  {
  avatar:IMG7,
  name:'Era watson',
  review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt obcaecati corporis tempora laborum voluptatem sit eveniet.   Cumque, amet recusandae atque, voluptatibus iure fugit est facere exercitationem voluptatum sapiente minus perspiciatis!' 
  },
  ]
  const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5> Review From Clients</h5>
      <h2> Testimonials</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
{
  data.map(({avatar,name,review},index) =>
  {
    return(
      <SwiperSlide key={index } className="testimonial">
          <div className="client__img">
            <img src={avatar} />
            </div>
            <h5 className='client__name'>{name} </h5>
            <small className='client__review'> {review}</small>
        </SwiperSlide>

    )
  })
}
      </Swiper>
    </section>
  )
}

export default Testimonial