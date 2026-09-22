import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import './Audience.css'

const EASE = [0.16, 1, 0.3, 1]

const paths = [
  {
    tag: 'Línea PRO',
    title: 'Soy profesional independiente',
    desc: 'Psicólogos, abogados, contadores, asesores y consultores que valoran su tiempo tanto como sus ingresos.',
    to: '/pro',
  },
  {
    tag: 'Línea PyME',
    title: 'Tengo una empresa',
    desc: 'Negocios de bienestar, estética, salud no clínica y firmas de servicios que quieren crecer sin que la operación crezca al mismo ritmo.',
    to: '/pymes',
  },
]

function PathCard({ p, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
    >
      <Link to={p.to} className="audience-card magnetic">
        <span className="audience-tag">{p.tag}</span>
        <h3 className="audience-card-title">{p.title}</h3>
        <p className="audience-card-desc">{p.desc}</p>
        <span className="audience-card-cta">
          Ver planes y precios
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
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
    <section id="audience" className="audience">
      <div className="audience-header" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="section-label">¿Por dónde empezar?</div>
          <h2 className="audience-title">Un camino<br/><em className="text-gold">según su realidad</em></h2>
        </motion.div>
      </div>

      <div className="audience-grid">
        {paths.map((p, i) => <PathCard p={p} index={i} key={p.to} />)}
      </div>
    </section>
  )
}
