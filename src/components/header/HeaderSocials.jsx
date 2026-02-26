import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'
import content from '../../data/content.json'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href={content.personal.linkedin} target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href={content.personal.github} target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href={content.personal.codewars} target="_blank" rel="noopener noreferrer"><SiCodewars /></a>
    </div>
  )
}

export default HeaderSocials