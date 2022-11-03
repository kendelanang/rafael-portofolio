import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rafaelalferdyas/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/kendelanang' target="_blank"><BsGithub/></a>
        <a href='https://www.youtube.com/c/Kendelanang/' target="_blank"><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials