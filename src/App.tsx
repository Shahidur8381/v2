import { useEffect } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Gallery from './components/Gallery'

import Socials from './components/Socials'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Roadmap />
      <Gallery />
      <Socials />
      <Footer />
    </div>
  )
}

export default App
