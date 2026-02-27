import React from 'react'
import './header.css'
import ME2 from '../../assets/stand.png'
import HeaderSocials from './HeaderSocials'
import { useLanguage } from '../../context/LanguageContext'

const Header = () => {
  const { content } = useLanguage()

  return (
    <header id="home">
      <div className="container header__container">
        <h1>{content.personal.name}</h1>
        <h5 className="text-light">{content.personal.title}</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME2} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>{content.ui.header.scrollDown}</a>
      </div>
    </header>
  )
}

export default Header
