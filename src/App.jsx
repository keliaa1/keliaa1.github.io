import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BlogCTA from './components/BlogCTA'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative bg-black w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <BlogCTA />
      <Gallery />
      <Contact />

      <footer style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.2)', fontWeight: '800', letterSpacing: '0.4em' }}>
        &copy; 2026 Kelia PORTFOLIO. ALL RIGHTS RESERVED.
      </footer>
    </div>
  )
}

export default App
