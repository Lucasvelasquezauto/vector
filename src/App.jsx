import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import Cursor      from './components/Cursor'
import Loader      from './components/Loader'
import Nav         from './components/Nav'
import Hero        from './components/Hero'
import Marquee     from './components/Marquee'
import Manifesto   from './components/Manifesto'
import Payoff      from './components/Payoff'
import { ModeloVector, Niveles } from './components/Services'
import Sectors     from './components/Sectors'
import Testimonial from './components/Testimonial'
import Footer      from './components/Footer'
import Diagnostico from './pages/Diagnostico'
import Resultado   from './pages/Resultado'

// Add magnetic hover to all .magnetic elements not already bound
function addMagneticListeners() {
  document.querySelectorAll('.magnetic').forEach(el => {
    if (el.dataset.magneticBound) return
    el.dataset.magneticBound = '1'
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'))
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'))
  })
}

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Payoff />
        <ModeloVector />
        <Niveles />
        <Sectors />
        <Testimonial />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)
  const location = useLocation()
  useLenis()

  useEffect(() => {
    const id = setTimeout(() => {
      setLoaderDone(true)
      setTimeout(addMagneticListeners, 100)
    }, 2600)
    return () => clearTimeout(id)
  }, [])

  // Re-bind magnetic on route changes
  useEffect(() => {
    if (loaderDone) setTimeout(addMagneticListeners, 100)
  }, [loaderDone, location.pathname])

  // Scroll to the hash target (e.g. coming back from /resultado to /#modelo)
  useEffect(() => {
    if (!loaderDone || !location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
  }, [loaderDone, location.pathname, location.hash])

  return (
    <>
      <Cursor />
      <Loader done={loaderDone} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluacion" element={<Diagnostico />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </>
  )
}
