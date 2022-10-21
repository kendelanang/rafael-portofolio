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
              <h5>Experience</h5>
              <small>Fresh Graduate
                Lulusan Terbaik
              </small>
            </article>

            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Design, 2 Apps, 1 IOT</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex at placeat molestiae enim numquam facere laudantium, nesciunt facilis omnis eligendi, labore, odit tempora aut est. Laborum qui voluptates dolor.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About