import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Kendelanang</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portofolio'>Portofolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/rafaelalferdyas/'><FaLinkedin/></a>
        <a href='https://github.com/kendelanang'><FaGithub/></a>
        <a href='https://www.youtube.com/c/Kendelanang/'><FaYoutube/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; 2022 Kendelanang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer