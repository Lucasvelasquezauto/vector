import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LogoVector from './LogoVector'
import './Nav.css'

const links = [
  { label: 'Servicios', href: '#services' },
  { label: 'Sectores', href: '#sectors' },
  { label: 'Nosotros', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 1.1, ease: [0.16,1,0.3,1] } }}
    >
      <a href="#" className="nav-logo magnetic" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }}>
        <LogoVector width={167} />
      </a>

      <ul className="nav-links">
        {links.map(({ label, href }) => (
          <li key={href}>
            <button className="nav-link magnetic" onClick={() => scrollTo(href)}>{label}</button>
          </li>
        ))}
      </ul>

      <button className="nav-cta magnetic" onClick={() => scrollTo('#contact')}>
        Hablar con nosotros
      </button>

      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        aria-label="Menú"
        onClick={() => setMenuOpen(v => !v)}
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <motion.div
          className="nav-mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {links.map(({ label, href }) => (
            <button key={href} className="nav-mobile-link" onClick={() => scrollTo(href)}>{label}</button>
          ))}
          <button className="nav-cta nav-cta--mobile" onClick={() => scrollTo('#contact')}>
            Hablar con nosotros
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
