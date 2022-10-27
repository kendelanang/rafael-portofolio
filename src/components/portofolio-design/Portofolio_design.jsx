import React from 'react'
import './portofolio_design.css'
import IMG1 from '../../assets/port1.jpg'
import reactlogo from '../../assets/react.svg'
import flutterlogo from '../../assets/flutter.png'
import pp from '../../assets/pp.svg'
import ps from '../../assets/ps.svg'
import ae from '../../assets/ae.svg'
import kolase1 from '../../assets/portdesain/kolase1.jpg'
import kolase2 from '../../assets/portdesain/kolase2.jpg'
import kolase3 from '../../assets/portdesain/kolase3.jpg'
import kolase4 from '../../assets/portdesain/kolase4.jpg'


const Portofolio_design = () => {
    return (
        <section id='portofolio'>
            <h5>My recent work</h5>
            <h2>Portofolio Content Creating</h2>

            <div className="container portofolio__container">
                <article className='portofolio__item'>
                    <img className="logo-1" src={ps}></img>
                    <div className='portofolio__item-image'>
                        <img src={kolase3} alt='' />
                    </div>
                    <h3>Lomba Desain</h3>
                    <div className='portofolio__item-cta'>
                        <a href={kolase3}  className='btn btn-primary' target='_blank'>Preview</a>
                    </div>
                </article>

                <article className='portofolio__item'>
                    <img className="logo-1" src={ps}></img>
                    <div className='portofolio__item-image'>
                        <img src={kolase1} alt='' />
                    </div>
                    <h3>Art Commission</h3>
                    <div className='portofolio__item-cta'>
                        <a href={kolase1} className='btn btn-primary' target='_blank'>Preview</a>
                    </div>
                </article>
                <article className='portofolio__item'>
                    <img className="logo-1" src={ps}></img>
                    <div className='portofolio__item-image'>
                        <img src={kolase2} alt='' />
                    </div>
                    <h3>Social Media Purpose</h3>
                    <div className='portofolio__item-cta'>
                        <a href={kolase2}  className='btn btn-primary' target='_blank'>Preview</a>
                    </div>
                </article>
                <article className='portofolio__item'>
                    <img className="logo-1" src={pp}></img>
                    <img className="logo-22" src={ae}></img>
                    <div className='portofolio__item-image'>
                        <img src={kolase4} alt='' />
                    </div>
                    <h3>Youtube</h3>
                    <div className='portofolio__item-cta'>
                        <a href={kolase4}  className='btn btn-primary' target='_blank'>Preview</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portofolio_design