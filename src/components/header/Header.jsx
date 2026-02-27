import React from 'react'
import './header.css'
import ME from '../../assets/torokdannew.jpg'
import CTA from './CTA'
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

        <div className="header__photo-socials">
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="Török Dániel" />
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header
