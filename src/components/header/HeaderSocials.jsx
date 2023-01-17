import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/török-dániel" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/TorokDan" target="_blank"><BsGithub /></a>
      <a href="https://codewars.com/users/Osztor" target="_blank"><SiCodewars /></a>
    </div>
  )
}

export default HeaderSocials