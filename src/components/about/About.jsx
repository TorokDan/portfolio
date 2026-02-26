import React from 'react'
import './about.css'
import ME2 from '../../assets/torokdannew.jpg'
import { useLanguage } from '../../context/LanguageContext'

const About = () => {
  const { content } = useLanguage()

  return (
    <section id="about">
      <h2>{content.ui.about.heading}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>{content.personal.bio}</p>
          <a href="#contact" className='btn btn-primary'>{content.ui.about.contactButton}</a>
        </div>
      </div>
    </section>
  )
}

export default About
