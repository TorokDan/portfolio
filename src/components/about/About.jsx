import React from 'react'
import './about.css'
import ME2 from '../../assets/torokdannew.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Ismerj Meg</h5>
      <h2>Magamról</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed projects</small>
            </article>
          </div> */}

          <p>
            24 éves vagyok, Budapesten élek. Szabadidőm nagy részét sportolással töltöm. 5 éve kezdtem el hobbi szinten programozni, majd hamar rájöttem, hogy ezzel is szeretnék foglalkozni. Akkori munkám mellett elkezdtem otthon tanulni, mivel felhasználói szinten régóta használtam linuxot, ezért hamar megismerkedtem a bash-el és a pythonnal. Később egyetemen elkezdtem c#-ot használni, majd végül a GreenFox-nál elvégeztem egy java backend képzést. Fontosnak tartom, hogy az ember folyamatosan tanuljon, ezért munka mellett időt szentelek önmagam fejlesztésére is.
          </p>

          <a href="#contact" className='btn btn-primary'>Keress meg</a>
        </div>
      </div>
    </section>
  )
}

export default About