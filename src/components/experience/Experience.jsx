import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useLanguage } from '../../context/LanguageContext'

const Experience = () => {
  const { content } = useLanguage()

  return (
    <section id='experience'>
      <h2>{content.ui.skills.heading}</h2>

      <div className="container experience__container">
        {content.skills.map(({ category, items }) => (
          <div key={category}>
            <h3>{category}</h3>
            <div className='experience__content'>
              {items.map((name) => (
                <article className='experience__details' key={name}>
                  <BsPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>{name}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

export default Experience
