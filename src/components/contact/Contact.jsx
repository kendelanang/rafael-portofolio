import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f75l9zm', 'service_f75l9zm', form.current, '3miKlD0SDZO3a6cSU')
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>rafaelalferdyas@gmail.com</h5>
            <a href='mailto:rafaelalferdyas@gmail.com'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>089678465538</h5>
            <a href='https://wa.me/6289678465538'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>kendelanang</h5>
            <a href='mailto:rafaelalferdyas@gmail.com'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your full name' required />
          <input type='email' name='email' placeholder='Your email' required />
          <textarea name='message' rows='7' placeholder='Your message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact