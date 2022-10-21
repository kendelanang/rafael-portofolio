import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My experience</h2>

      <div className='container experience__container'>
        <div className='experience__develop'>
          <h3>Software Engineering</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
          </div>
        </div>
        <div className='experience__contentcreating'>
          <h3>Content Creating</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Premiere Pro</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>After Effect</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Youtube Livestream</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Videography</h4>
                <small className='text-light'>Experienced</small>
              </div>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience