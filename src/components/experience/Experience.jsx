import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import htmlogo from '../../assets/html5.svg'
import csslogo from '../../assets/css.svg'
import javascriptlogo from '../../assets/javascript.svg'
import reactlogo from '../../assets/react.svg'
import androidlogo from '../../assets/android.svg'
import tailwindlogo from '../../assets/tailwind.svg'
import arduinologo from '../../assets/arduino.svg'
import firebaselogo from '../../assets/firebase.svg'
import pythonlogo from '../../assets/python.svg'
import githublogo from '../../assets/github.png'
import flutterlogo from '../../assets/flutter.png'
import pslogo from '../../assets/ps.svg'
import pplogo from '../../assets/pp.svg'
import aelogo from '../../assets/ae.svg'
import ibispaintlogo from '../../assets/ibispaint.svg'
import capcutlogo from '../../assets/capcut.svg'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills i have</h5>
      <h2>My experience</h2>

      <div className='container experience__container'>
        <div className='experience__develop'>
          <h3>Software Engineering</h3>
          <div className='experience__content'>
            <div>
              <img src={htmlogo} alt=''></img>
              <p>HTML</p>
            </div>
            <div>
              <img src={csslogo} alt=''></img>
              <p>CSS</p>
            </div>
            <div>
              <img src={javascriptlogo} alt=''></img>
              <p>Javascript</p>
            </div>
            <div>
              <img src={reactlogo} alt=''></img>
              <p>React JS</p>
            </div>
            <div>
              <img src={tailwindlogo} alt=''></img>
              <p>Tailwind</p>
            </div>
            <div>
              <img src={androidlogo} alt=''></img>
              <p>Android (Java)</p>
            </div>
            <div>
              <img src={arduinologo} alt=''></img>
              <p>Arduino</p>
            </div>
            <div>
              <img src={flutterlogo} alt=''></img>
              <p>Flutter</p>
            </div>
            <div>
              <img src={pythonlogo} alt=''></img>
              <p>Python</p>
            </div>
            <div>
              <img src={firebaselogo} alt=''></img>
              <p>Firebase</p>
            </div>
            <div>
              <img src={githublogo} alt=''></img>
              <p>Github</p>
            </div>
          </div>
        </div>
        <div className='experience__contentcreating'>
          <h3>Content Creating</h3>
          <div className='experience__content'>
          <div>
              <img src={pslogo} alt=''></img>
              <p>Photoshop</p>
            </div>
            <div>
              <img src={pplogo} alt=''></img>
              <p>Premiere Pro</p>
            </div>
            <div>
              <img src={aelogo} alt=''></img>
              <p>After Effect</p>
            </div>
            <div>
              <img src={capcutlogo} alt=''></img>
              <p>Capcut</p>
            </div>
            <div>
              <img src={ibispaintlogo} alt=''></img>
              <p>Ibis Paint X</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Experience