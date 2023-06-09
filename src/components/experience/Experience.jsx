import React from 'react';
import './experience.css';
import{BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have </h5>
      <h2> My Experience</h2>
      <div className="container experience__container">
        <div className="experience__Frontend">
          <h3> Frontend Devlopment </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div> 
                 <h4> HTML </h4>
              <small className='text-light'>Experienced </small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> CSS </h4>
              <small className='text-light'>Intermediate </small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> JAVASCRIPT </h4>  
            <small className='text-light'>Intermediate </small>
            </div>
           </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> BOOTSTRAP </h4>
              <small className='text-light'>Intermediate </small>
              </div>
            </article>

            
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> REACT </h4>
              <small className='text-light'>Basic </small>
              </div>
            </article>

            
                    </div>
        </div>
        {/* end of frontend */ }

        <div className=" experience__backend">
        <h3> Backend Devlopment </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> JAVA </h4>
              <small className='text-light'>Experienced </small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> C </h4>
              <small className='text-light'>Intermediate </small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> MYSQL </h4>
              <small className='text-light'>Intermediate </small>
              </div>
            </article>

         
          <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>
              <h4> PHP </h4>
              <small className='text-light'>Intermediate </small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon' />
              <div>             
                 <h4> SPRINGBOOT </h4>
              <small className='text-light'> Beginner </small>
              </div>

            </article>
</div>
        </div>
      </div>
    </section>
  )
}

export default Experience