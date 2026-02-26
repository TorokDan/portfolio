import React from 'react'
import { MdWork } from 'react-icons/md'
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
                        <article className='jobs__details'>
                            <MdWork className='jobs__details-icon' />
                            <div>
                                <h4>{title}</h4>
                                <small className='text-light'>{description}</small>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Jobs
