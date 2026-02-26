import React from 'react'
import './jobs.css'
import { useLanguage } from '../../context/LanguageContext'

const Jobs = () => {
    const { content } = useLanguage()

    return (
        <section id="jobs">
            <h2>{content.ui.jobs.heading}</h2>

            <div className="container jobs__container">
                {content.jobs.map(({ company, period, title, description }) => (
                    <div key={company}>
                        <h5>{period}</h5>
                        <h3>{company}</h3>
                        <h4>{title}</h4>
                        <p className='text-light'>{description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Jobs
