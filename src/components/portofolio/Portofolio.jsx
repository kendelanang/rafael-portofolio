import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/port1.jpg'
import port1 from '../../assets/portfrontend/port1.jpg'
import port2 from '../../assets/portfrontend/port2.jpg'
import port3 from '../../assets/portfrontend/port3.jpg'
import port4 from '../../assets/portfrontend/port4.jpg'
import reactlogo from '../../assets/react.svg'
import flutterlogo from '../../assets/flutter.png'
import tailwindlogo from '../../assets/tailwind.svg'
import firebase from '../../assets/firebase.svg'

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My recent work</h5>
      <h2>Portofolio Front-End</h2>

      <div className="container portofolio__container">
        <article className='portofolio__item'>
          <img className="logo-1" src={reactlogo}></img>
          <div className='portofolio__item-image'>
            <img src={port4} alt='' />
          </div>
          <h3>Portofolio Website</h3>
          <div className='portofolio__item-cta'>
            <a href='github.com' className='btn'>Github</a>
            <a href='youtube.com' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>

        <article className='portofolio__item'>
          <img className="logo-1" src={reactlogo}></img>
          <img className="logo-2" src={tailwindlogo}></img>
          <div className='portofolio__item-image'>
            <img src={port1} alt='' />
          </div>
          <h3>KNDLIX - Streaming Movies Website</h3>
          <div className='portofolio__item-cta'>
            <a href='github.com' className='btn'>Github</a>
            <a href='youtube.com' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portofolio__item'>
          <img className="logo-1" src={flutterlogo}></img>
          <img className="logo-2" src={firebase}></img>
          <div className='portofolio__item-image'>
            <img src={port2} alt='' />
          </div>
          <h3>Face Mask Detection Apps</h3>
          <div className='portofolio__item-cta'>
            <a href='github.com' className='btn'>Github</a>
            <a href='youtube.com' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portofolio__item'>
          <img className="logo-1" src={flutterlogo}></img>
          <div className='portofolio__item-image'>
            <img src={port3} alt='' />
          </div>
          <h3>Aquaponics Apps</h3>
          <div className='portofolio__item-cta'>
            <a href='github.com' className='btn'>Github</a>
            <a href='youtube.com' className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portofolio