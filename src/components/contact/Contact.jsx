import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'

const Contact = () => {
  const { content } = useLanguage()

  return (
    <section id='contact'>
      <h2>{content.ui.contact.heading}</h2>

      <div className="container contact__container">
        <article className="contact__option">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>{content.personal.email}</h5>
          <a href={`mailto:${content.personal.email}`} target="_blank" rel="noopener noreferrer">{content.ui.contact.emailAction}</a>
        </article>

        <article className="contact__option">
          <FaLinkedin />
          <h4>LinkedIn</h4>
          <a href={content.personal.linkedin} target="_blank" rel="noopener noreferrer">{content.ui.contact.linkedinAction}</a>
        </article>

        <article className="contact__option">
          <FaGithub />
          <h4>GitHub</h4>
          <a href={content.personal.github} target="_blank" rel="noopener noreferrer">{content.ui.contact.githubAction}</a>
        </article>
      </div>
    </section>
  )
}

export default Contact
