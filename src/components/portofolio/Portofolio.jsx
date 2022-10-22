import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/port1.jpg'
import IMG2 from '../../assets/port2.jpg'
import IMG3 from '../../assets/port3.jpg'
import IMG4 from '../../assets/port4.jpg'
import IMG5 from '../../assets/port5.jpg'
import IMG6 from '../../assets/port6.jpg'
import IMG7 from '../../assets/port7.jpg'
import IMG8 from '../../assets/port8.jpg'
import IMG9 from '../../assets/port9.jpg'
import IMG10 from '../../assets/port10.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Face Mask Detection',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Face Mask Detection',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Face Mask Detection',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My recent work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portofolio__item'>
                <div className='portofolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portofolio__item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portofolio