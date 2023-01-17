import React from 'react'
import { MdWork } from 'react-icons/md'
import './jobs.css'

const jobs = [
    {
        name: "Országos Rendőr-főkapitányság",
        time: "2020 - 2022",
        title: "Linux Rendszer Adminisztrátor",
        description: "A rendőrségi architektúrában hibák felkutatása és elhárítása, linux alapú rendszerek monitorozása, fejlesztése."
    },
    {
        name: "Erste Bank",
        time: "2023 - ",
        title: "Integrációs Fejlesztő",
        description: "A bank különböző szolgáltatásai közötti kommunikáció fejlesztése."
    }
]

const Jobs = () => {
    return (
        <section id="jobs">
            <h5>Hol dolgoztam</h5>
            <h2>Munkahelyeim</h2>

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