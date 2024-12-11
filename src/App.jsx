import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative z-0">
      <div className="gradient-01 z-0" />
      <Navbar />
      <Hero />
      <About />
      <div className="relative">
        <div className="gradient-02 z-0" />
        <Projects />
      </div>
      <Skills />
      <div className="relative z-0">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App