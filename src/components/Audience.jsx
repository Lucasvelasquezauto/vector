import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { PRO_DATA, PYME_DATA } from '../lib/pricingData'
import './Audience.css'

const EASE = [0.16, 1, 0.3, 1]

// Nombres de producto tomados de pricingData, para que la landing
// nunca se desalinee del portafolio publicado en /pro y /pymes.
const productNames = (data) => data.route.rows.map(r => r.name.split(' — ')[0])

const lines = [
  {
    key: 'pro',
    tag: 'Línea PRO',
    title: 'Soy profesional independiente',
    promise: 'Optimice recursos, potencie sus ingresos.',
    products: productNames(PRO_DATA),
    to: '/pro',
  },
  {
    key: 'pyme',
    tag: 'Línea PyME',
    title: 'Tengo una empresa',
    promise: 'Libere capacidad, aumente su margen.',
    products: productNames(PYME_DATA),
    to: '/pymes',
  },
]

function Hexagon() {
  return (
    <svg className="offer-hex" viewBox="0 0 200 230" fill="none" aria-hidden="true">
      <polygon points="100,4 196,59.5 196,170.5 100,226 4,170.5 4,59.5" stroke="currentColor" strokeWidth="1" />
      <polygon points="100,44 161.4,79.5 161.4,150.5 100,186 38.6,150.5 38.6,79.5" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

function LinePanel({ line, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      className="offer-cell"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: EASE }}
    >
      <Link to={line.to} className={`offer-panel offer-panel--${line.key} magnetic`}>
        <Hexagon />
        <div className="offer-panel-head">
          <span className="offer-tag">{line.tag}</span>
          <h3 className="offer-panel-title">{line.title}</h3>
          <p className="offer-promise">{line.promise}</p>
        </div>

        <ul className="offer-products">
          {line.products.map(name => <li key={name}>{name}</li>)}
        </ul>

        <span className="offer-cta">
          Ver productos y precios
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </Link>
    </motion.div>
  )
}

export default function Audience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="services" className="offer">
      <div className="offer-header" ref={ref}>
        <motion.h2
          className="offer-title"
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          VECTOR se articula<br/>
          <em className="text-gold">con su modelo de negocio</em>
        </motion.h2>
      </div>

      <div className="offer-grid">
        {lines.map((line, i) => <LinePanel line={line} index={i} key={line.key} />)}
      </div>
    </section>
  )
}
