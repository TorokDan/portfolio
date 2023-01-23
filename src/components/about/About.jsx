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
            I am 24 years old, and I live in Budapest. I spend most of my free time with sports, like inline skating and wall climbing. I started to learn programming 5 years ago. Shortly after I wrote my first Hello World, I realized that I want to work in the IT. I started to work as a Linux system administrator, but after 2 years, I found out I enjoy more writing code, than managing systems. I believe it is important to learn and  improve, in my free time I spend as much time as I can with programming, so I can become a great developer.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About