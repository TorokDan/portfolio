import React from 'react'
import './about.css'
import ME2 from '../../assets/torokdannew.jpg'

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know Me</h5> */}
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I am a passionate backend developer who strives to write clean, maintainable, and easy-to-understand code.
            Over the years, I have specialized in Java-based technologies and the design and development of microservices architectures.
            My professional journey began as a Linux system administrator, where I gained valuable experience in managing systems and ensuring their reliability.
            However, I soon discovered that my true passion lies in coding and creating solutions that directly impact users and businesses.
            In my free time, I enjoy sports like inline skating and wall climbing, which help me stay focused and energized.
            I am also deeply committed to continuous learning and improving my skills, exploring new technologies, and expanding my knowledge to become a better developer every day. For me, programming is not just a job but a craft I take pride in perfecting.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
