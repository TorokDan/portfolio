import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const knowledge = [
  {
    type: "Backend",
    technologies: [
      "Java",
      "C#",
      "Bash",
      "Python",
      "SQL"
    ]
  },
  {
    type: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ]
  }
]

const Experience = () => {
  return (
    <section id='experience'>
      {/* <h5>What I Learned</h5> */}
      <h2>My Knowledge</h2>

      <div className="container experience__container">
        {
          knowledge.map(({ type, technologies }) => {
            return (
              <div>
                <h3>{type}</h3>
                <div className='experience__content'>
                  {
                    technologies.map((name) => {
                      return (
                        <article className='experience__details'>
                          <BsPatchCheckFill className='experience__details-icon' />
                          <div>
                            <h4>{name}</h4>
                            {/* <small className='text-light'>{comment}</small> */}
                          </div>
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

export default Experience