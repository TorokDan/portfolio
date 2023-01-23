import React from 'react'
import { MdWork } from 'react-icons/md'
import './jobs.css'

const jobs = [
    {
        name: "Erste Bank",
        time: "2023 - ",
        title: "Integration Developer",
        description: "I am developing the communation between different microservices in the infrastructure of the Bank."
    },
    {
        name: "National Police Headquarters Of Hungary",
        time: "2020 - 2022",
        title: "Linux System Administrator",
        description: "I was responsible for the Linux network of the police. I set up, monitored and troubleshot Linux servers, eliminated errors and malfunctions."
    }
]

const Jobs = () => {
    return (
        <section id="jobs">
            <h5>Where Did I Worked</h5>
            <h2>Experience</h2>

            <div className="container jobs__container">
                {
                    jobs.map(({ name, time, title, description }) => {
                        return (
                            <div>
                                <h5>{time}</h5>
                                <h3>{name}</h3>
                                <article className='jobs__details'>
                                    <MdWork className='jobs__details-icon' />
                                    <div>
                                        <h4>{title}</h4>
                                        <small className='text-light'>{description}</small>
                                    </div>
                                </article>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Jobs