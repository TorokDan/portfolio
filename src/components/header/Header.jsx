import React from 'react'
import CTA from './CTA'
import './header.css'
import ME2 from '../../assets/stand.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Török Dániel</h1>
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME2} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Jump Down</a>
      </div>
    </header>
  )
}

export default Header
