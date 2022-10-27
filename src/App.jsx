import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Portofolio from './components/portofolio/Portofolio'
import Testimonials from './components/testimonials/Testimonials'
import Portofolio_design from './components/portofolio-design/Portofolio_design'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Experience/>
      <Portofolio/>
      <Portofolio_design/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App