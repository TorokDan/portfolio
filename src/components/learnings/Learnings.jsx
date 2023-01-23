import React from 'react'
import './learnings.css'
import { BiCode } from 'react-icons/bi'

const schools = [
    {
        name: "University Of Óbuda",
        year: "2022 - ",
        cohort: "Computer Science And Engineering"
    }
]

const trainings = [
    {
        name: "GreenFox Academy",
        year: "2022",
        cohort: "Java backend",
        technologies: [
            "Java",
            "Spring Boot",
            "gradle",
            "JUnit 5"
        ]
    }
]

function Learnings() {
    return (
        <section id="learnings">
            <h5>Where I Learned</h5>
            <h2>Schools</h2>

            <div className="container learnings__container">
                {
                    schools.map(({ name, year, cohort }) => {
                        return (
                            <article className='learnings__school'>
                                <h5>{year}</h5>
                                <h3>{name}</h3>
                                <h4>{cohort}</h4>
                            </article>
                        )
                    })
                }
                {
                    trainings.map(({ name, year, cohort, technologies }) => {
                        return (
                            <div className='learnings__training'>
                                <h5>{year}</h5>
                                <h3>{name}</h3>
                                <h4>{cohort}</h4>
                                <div className='learnings__training-content'>
                                    {
                                        technologies.map((technology) => {
                                            return (
                                                <article className='learnings__training-details'>
                                                    <BiCode className='learnings__training-details-icon' />
                                                    <h4>{technology}</h4>
                                                </article>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Learnings