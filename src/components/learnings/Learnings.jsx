import React from 'react'
import './learnings.css'
import { BiCode } from 'react-icons/bi'
import content from '../../data/content.json'

function Learnings() {
    return (
        <section id="learnings">
            <h2>Schools</h2>

            <div className="container learnings__container">
                {content.education.schools.map(({ name, period, field }) => (
                    <article className='learnings__school' key={name}>
                        <h5>{period}</h5>
                        <h3>{name}</h3>
                        <h4>{field}</h4>
                    </article>
                ))}
                {content.education.trainings.map(({ name, period, field, technologies }) => (
                    <div className='learnings__training' key={name}>
                        <h5>{period}</h5>
                        <h3>{name}</h3>
                        <h4>{field}</h4>
                        <div className='learnings__training-content'>
                            {technologies.map((technology) => (
                                <article className='learnings__training-details' key={technology}>
                                    <BiCode className='learnings__training-details-icon' />
                                    <h4>{technology}</h4>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Learnings