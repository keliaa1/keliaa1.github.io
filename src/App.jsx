import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

// Lazy load heavy components containing 3D/Images/Heavy SVGs
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Gallery = lazy(() => import('./components/Gallery'))
const BlogCTA = lazy(() => import('./components/BlogCTA'))

function App() {
  return (
    <div className="relative bg-black w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Loading...</div>}>
        <Projects />
        <Experience />
        <Testimonials />
        <BlogCTA />
        <Gallery />
      </Suspense>
      
      <Contact />

      <footer style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.2)', fontWeight: '800', letterSpacing: '0.4em' }}>
        &copy; 2026 Kelia PORTFOLIO. ALL RIGHTS RESERVED.
      </footer>
    </div>
  )
}

export default App
