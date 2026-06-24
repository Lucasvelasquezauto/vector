import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Sectors.css'

const sectors = [
  {
    id: 'psicologos',
    sector: 'Psicólogos & Salud Mental',
    headline: 'Diferenciación sostenible frente a las apps de IA',
    automations: [
      'Agenda y recordatorios automáticos',
      'Notas de sesión asistidas por IA',
      'Seguimiento de pacientes sin perder calidez',
    ],
    color: '#00E5C4',
    img: '/images/sector-psicologos.png',
  },
  {
    id: 'seguros',
    sector: 'Asesores de Seguros & Financieros',
    headline: 'De la defensa a la diferenciación competitiva',
    automations: [
      'Comparación de pólizas en minutos',
      'Reportes de cartera automatizados',
      'Alertas de vencimientos y renovaciones',
    ],
    color: '#C9A96E',
    img: '/images/sector-seguros.png',
  },
  {
    id: 'legal',
    sector: 'Abogados & Consultores',
    headline: 'La experiencia acumulada potenciada, no reemplazada',
    automations: [
      'Primeros borradores de documentos asistidos',
      'Búsqueda de jurisprudencia acelerada',
      'Resúmenes de casos en minutos',
    ],
    color: '#A78BFA',
    img: '/images/sector-legal.png',
  },
  {
    id: 'bienestar',
    sector: 'Bienestar, Spa & Estética',
    headline: 'Un negocio que escala sin perder lo que lo hace especial',
    automations: [
      'Agenda sin llamadas',
      'Campañas de fidelización automatizadas',
      'Control de inventario simplificado',
    ],
    color: '#FB923C',
    img: '/images/sector-bienestar.png',
  },
]

function SectorPanel({ s, index, expanded, onEnter, onLeave, onTap }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.article
      ref={ref}
      className={`sector-panel${expanded ? ' is-expanded' : ''}`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onTap}
    >
      <img src={s.img} alt={`Sector ${s.sector}`} className="sector-panel-img" />
      <div className="sector-panel-scrim" />
      <div className="sector-panel-content">
        <h3 className="sector-panel-name">{s.sector}</h3>
        <div className="sector-panel-detail">
          <p className="sector-panel-headline" style={{ color: s.color }}>{s.headline}</p>
          <ul className="sector-panel-list">
            {s.automations.map(a => <li key={a}>{a}</li>)}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

export default function Sectors() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-5% 0px' })
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="sectors" className="sectors">
      <div className="sectors-header" ref={headerRef}>
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="section-label">A quién servimos</div>
          <h2 className="sectors-title">
            Sectores que<br />
            <em className="text-gold">transformamos</em>
          </h2>
        </motion.div>
        <motion.p
          className="sectors-note"
          initial={{ opacity: 0, y: 24 }} animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          Profesionales independientes y pequeñas empresas de servicios en Colombia.
          Pase el cursor sobre cada sector para ver ideas de automatización.
        </motion.p>
      </div>

      <div className="sectors-accordion">
        {sectors.map((s, i) => (
          <SectorPanel
            key={s.id}
            s={s}
            index={i}
            expanded={activeIndex === i}
            onEnter={() => setActiveIndex(i)}
            onLeave={() => setActiveIndex(null)}
            onTap={() => setActiveIndex(activeIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  )
}
