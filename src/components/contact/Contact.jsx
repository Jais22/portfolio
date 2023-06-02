import React from 'react';
import './contact.css';
import {MdOutlineEmail} from'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import{RiWhatsappFill } from'react-icons/ri'
{/*import { useRef } from 'react';
import emailjs from 'emailjs';

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_6k93dfp', 'template_px049ir', form.current, 'BIsvhqApNjRR_iG0t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };*/}


  const Contact = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch </h5>
      <h2> Contact Me </h2>
      <div className=" container contact__container" >
        <article className=" contact__option">
          <MdOutlineEmail  className='contact__option-icons' />
          <h4>Email-Id</h4>
          <h5> prachijais98@gmail.com</h5>
          <a href="mailto:prachijais98@gmail.com" target="blank"> Send a Message</a>
        </article>

        <article className=" contact__option">
          <RiMessengerLine  className='contact__option-icons' />
          <h4>Messanger</h4>
          <h5>Tutorials </h5>
          <a href="https://m.me/prachijais22" target="blank"> Send a Message</a>
        </article>

        <article className=" contact__option">
          <RiWhatsappFill  className='contact__option-icons' />
          <h4>WhatsApp</h4>
          <h5> +917279874758</h5>
          <a href="https://api.whatsapp.com/send?phone+917279874758" target="blank"> Send a Message</a>
        </article>

        {/*end of Contact option*/}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn' > Send Message </button>

        </form>
      </div>
    </section>
  )
}

export default Contact