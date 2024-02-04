import React from 'react'
import Header from "../layouts/Header"
import Hero from "../layouts/Hero"
import About from "../layouts/About"
import Project from "../layouts/Projets"
import Skills from "../layouts/Skills"
import Contact from "../layouts/Contact"
import Footer from "../layouts/Footer"


function Home() {
  return (
    <div className='home'>
      <Header />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home