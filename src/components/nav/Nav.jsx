import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { BiMessageAltEdit } from 'react-icons/bi'
import { CgWorkAlt } from 'react-icons/cg'
import { MdOutlineSchool } from 'react-icons/md'
import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  const { lang, setLang } = useLanguage()

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#learnings" onClick={() => setActiveNav('#learnings')} className={activeNav === '#learnings' ? 'active' : ''}><MdOutlineSchool /></a>
      <a href="#jobs" onClick={() => setActiveNav('#jobs')} className={activeNav === '#jobs' ? 'active' : ''}><CgWorkAlt /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltEdit /></a>

      <div className='nav__lang'>
        <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
        <button onClick={() => setLang('hu')} className={lang === 'hu' ? 'active' : ''}>HU</button>
      </div>
    </nav>
  )
}

export default Nav