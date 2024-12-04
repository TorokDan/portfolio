import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact'>
      {/* <h5>Get In Touch</h5> */}
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* <div className="contact__options"> */}
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>dani.torok8@gmail.com</h5>
            <a href="mailto:dani.torok8@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin />
            <h4>LinkedIn</h4>
            <a href="https://www.linkedin.com/in/török-dániel" target="_blank" rel="noopener noreferrer">View Profile</a>
          </article>

          <article className="contact__option">
            <FaGithub />
            <h4>GitHub</h4>
            <a href="https://github.com/TorokDan" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
          </article>
        { /* </div> */}
      </div>
    </section>
  )
}

export default Contact
