import React from 'react'
import './about.css'
import ME from '../../assets/me formal.jpg'
import { BiAward } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <BiAward className='about__icon' />
              <h5>Status</h5>
              <small>Fresh Graduate</small>
              <small> (Lulusan Terbaik)</small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Experience</h5>
              <small>20+ Design, 2 Apps, 1 IOT</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Hello! I'm Rafael Alferdyas Putra Alfansyah also known as kendelanang on youtube platform. I'm a Front-End Developer based out of Nganjuk East Java. from content creator to lines a code on a web page, I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites or applications.</p>
          <p></p>
          <p>I'm excited to make the leap and continue refining my skills with the right company. Thank you!</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About