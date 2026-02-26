import React from 'react'
import { useState } from 'react'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Skills</a>
      <a href="#learnings" onClick={() => setActiveNav('#learnings')} className={activeNav === '#learnings' ? 'active' : ''}>Education</a>
      <a href="#jobs" onClick={() => setActiveNav('#jobs')} className={activeNav === '#jobs' ? 'active' : ''}>Experience</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
    </nav>
  )
}

export default Nav