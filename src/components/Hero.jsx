import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import './Hero.css'

function WordReveal({ word, italic, delay }) {
  return (
    <span className="word-wrap">
      <motion.span
        className={`word ${italic ? 'word--italic' : ''}`}
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const mouseX  = useMotionValue(0)
  const mouseY  = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const geoX    = useTransform(springX, [-1,1], [-140, 140])
  const geoY    = useTransform(springY, [-1,1], [-90, 90])

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect()
      mouseX.set(((e.clientX - left) / width  - 0.5) * 2)
      mouseY.set(((e.clientY - top)  / height - 0.5) * 2)
    }
    hero.addEventListener('mousemove', onMove)
    return () => hero.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  const lines = [
    [{ w: 'La', d: 1.30 }, { w: 'mayoría', d: 1.36 }, { w: 'de', d: 1.42 }, { w: 'las', d: 1.47 }, { w: 'empresas', d: 1.52 }],
    [{ w: 'saben', d: 1.66 }, { w: 'que', d: 1.72 }, { w: 'deben', d: 1.78 }, { w: 'evolucionar.', d: 1.84 }],
    [{ w: 'Pocas', d: 1.98 }, { w: 'conocen', d: 2.04 }, { w: 'el', d: 2.10, italic: true }, { w: 'camino.', d: 2.16, italic: true }],
  ]

  return (
    <section id="hero" ref={heroRef} className="hero">
      <div className="hero-noise" aria-hidden="true" />

      {/* Geometric art — parallax */}
      <motion.div
        className="hero-geo"
        style={{ x: geoX, y: geoY, translateY: '-50%' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1.4, delay: 0.5, ease: [0.16,1,0.3,1] } }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 560 560" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="280" cy="280" r="260" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          <circle cx="280" cy="280" r="180" stroke="rgba(0,229,196,0.10)" strokeWidth="1" strokeDasharray="4 8"/>
          <circle cx="280" cy="280" r="100" stroke="rgba(201,169,110,0.13)" strokeWidth="1"/>
          <circle cx="280" cy="280" r="4" fill="#00E5C4"/>
          <circle cx="280" cy="20"  r="6" fill="#00E5C4" opacity="0.8"/>
          <circle cx="540" cy="280" r="5" fill="#C9A96E" opacity="0.6"/>
          <circle cx="280" cy="540" r="4" fill="rgba(255,255,255,0.25)"/>
          <circle cx="20"  cy="280" r="5" fill="rgba(255,255,255,0.18)"/>
          <line x1="280" y1="20"  x2="280" y2="540" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          <line x1="20"  y1="280" x2="540" y2="280" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          <g style={{transformOrigin:'280px 280px',animation:'geoSpin 22s linear infinite'}}>
            <polygon points="280,100 435.88,190 435.88,370 280,460 124.12,370 124.12,190" stroke="rgba(0,229,196,0.18)" strokeWidth="1" fill="none"/>
          </g>
          <g style={{transformOrigin:'280px 280px',animation:'geoSpin 38s linear infinite reverse'}}>
            <polygon points="280,20 505.16,150 505.16,410 280,540 54.84,410 54.84,150" stroke="rgba(201,169,110,0.07)" strokeWidth="1" fill="none"/>
          </g>
          <circle cx="460" cy="180" r="8" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="rgba(0,229,196,0.08)"/>
          <circle cx="380" cy="80"  r="5" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(201,169,110,0.07)"/>
          <circle cx="100" cy="380" r="7" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="rgba(0,229,196,0.05)"/>
          <line x1="280" y1="280" x2="460" y2="180" stroke="rgba(0,229,196,0.13)" strokeWidth="0.8" strokeDasharray="3 6"/>
          <line x1="280" y1="280" x2="380" y2="80"  stroke="rgba(201,169,110,0.09)" strokeWidth="0.8" strokeDasharray="3 6"/>
          <line x1="280" y1="280" x2="100" y2="380" stroke="rgba(0,229,196,0.09)" strokeWidth="0.8" strokeDasharray="3 6"/>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 1.25, ease: [0.16,1,0.3,1] } }}
        >
          Estrategia competitiva · Productividad impulsada por IA
        </motion.div>

        <h1 className="hero-title">
          {lines.map((line, i) => (
            <div className="hero-line" key={i}>
              {line.map(({ w, italic, d }) => (
                <WordReveal key={w} word={w} italic={!!italic} delay={d} />
              ))}
            </div>
          ))}
        </h1>

        <div className="hero-bottom">
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 2.45, ease: [0.16,1,0.3,1] } }}
          >
            Estrategia competitiva para empresas y profesionales independientes. Planificamos su ruta de evolución competitiva soportada en herramientas de Inteligencia Artificial.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 2.6, ease: [0.16,1,0.3,1] } }}
          >
            <a href="#manifesto" className="btn-primary magnetic" onClick={e=>{e.preventDefault();document.querySelector('#manifesto')?.scrollIntoView({behavior:'smooth'})}}>
              Continúe y descubra su punto de partida
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.5 } }}
        aria-hidden="true"
      >
        <div className="scroll-line"><div className="scroll-drop" /></div>
        <span>scroll</span>
      </motion.div>

      <style>{`
        @keyframes geoSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
