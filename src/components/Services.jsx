import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Services.css'

// ─── VECTOR Dimension data ────────────────────────────────────────────────────

const DIMS = [
  { letter: 'V', deg: 0,
    name: 'Vigencia Competitiva',
    desc: '¿La IA puede sustituir su propuesta de valor?' },
  { letter: 'E', deg: 60,
    name: 'Estructura Operativa',
    desc: 'Procesos y sistemas que sostienen la operación' },
  { letter: 'C', deg: 120,
    name: 'Capacidades Aumentadas',
    desc: 'Brecha entre adopción actual y potencial de IA' },
  { letter: 'T', deg: 180,
    name: 'Transformación Aplicada',
    desc: 'Capacidad real de ejecutar cambios identificados' },
  { letter: 'O', deg: 240,
    name: 'Optimización Medible',
    desc: '¿Gestiona con indicadores o con intuición?' },
  { letter: 'R', deg: 300,
    name: 'Rentabilidad Sostenible',
    desc: 'Criterio para invertir en tecnología con retorno' },
]

const CURRENT   = { V: 42, E: 38, C: 28, T: 45, O: 52, R: 35 }
const POTENTIAL = { V: 78, E: 74, C: 72, T: 76, O: 82, R: 70 }

const CX = 200, CY = 145, R_HEX = 84.5, R_LABEL = 106.6
const d2r = deg => deg * Math.PI / 180

function hexPt(deg, r) {
  return { x: CX + r * Math.sin(d2r(deg)), y: CY - r * Math.cos(d2r(deg)) }
}
function polyStr(r) {
  return DIMS.map(d => { const p = hexPt(d.deg, r); return `${p.x.toFixed(1)},${p.y.toFixed(1)}` }).join(' ')
}
function dataStr(scores) {
  return DIMS.map(d => { const p = hexPt(d.deg, R_HEX * scores[d.letter] / 100); return `${p.x.toFixed(1)},${p.y.toFixed(1)}` }).join(' ')
}

// ─── Interactive radar — the VECTOR model ─────────────────────────────────────

function DiagnosticoArt() {
  const [hovered, setHovered] = useState(null)

  return (
    <svg viewBox="0 0 400 335" fill="none" preserveAspectRatio="xMidYMid slice" style={{ pointerEvents: 'all' }}>
      <polygon points={polyStr(R_HEX)} fill="none" stroke="rgba(0,229,196,0.15)" strokeWidth="1"/>

      {DIMS.map(d => {
        const p = hexPt(d.deg, R_HEX)
        const active = hovered === d.letter
        return (
          <line key={`ax-${d.letter}`}
            x1={CX} y1={CY} x2={p.x.toFixed(1)} y2={p.y.toFixed(1)}
            stroke={active ? 'rgba(0,229,196,0.45)' : 'rgba(0,229,196,0.12)'}
            strokeWidth={active ? 1.5 : 1}
            style={{ transition: 'stroke 0.2s, stroke-width 0.2s' }}
          />
        )
      })}

      <polygon points={dataStr(POTENTIAL)} fill="rgba(201,149,42,0.09)" stroke="rgba(201,149,42,0.55)" strokeWidth="1.5" strokeDasharray="4 3"/>
      <polygon points={dataStr(CURRENT)} fill="rgba(0,229,196,0.14)" stroke="rgba(0,229,196,0.62)" strokeWidth="1.5"/>

      <circle cx={CX} cy={CY} r="4" fill="rgba(0,229,196,0.28)" stroke="rgba(0,229,196,0.52)" strokeWidth="1"/>

      {DIMS.map(d => {
        const p = hexPt(d.deg, R_LABEL)
        const active = hovered === d.letter
        return (
          <g key={d.letter}
            onMouseEnter={() => setHovered(d.letter)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setHovered(hovered === d.letter ? null : d.letter)}
          >
            <circle cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="20" fill="transparent"/>
            <circle cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r={active ? 15 : 12}
              fill={active ? 'rgba(0,229,196,0.20)' : 'rgba(0,229,196,0.07)'}
              stroke={active ? 'rgba(0,229,196,0.82)' : 'rgba(0,229,196,0.38)'}
              strokeWidth="1"
              style={{ transition: 'all 0.18s ease' }}
            />
            <text x={p.x.toFixed(1)} y={(p.y + 4.5).toFixed(1)} textAnchor="middle"
              fill={active ? '#00E5C4' : 'rgba(240,235,225,0.72)'}
              fontSize="11" fontFamily="Space Mono, monospace" fontWeight="bold"
              style={{ transition: 'fill 0.18s ease', userSelect: 'none', pointerEvents: 'none' }}
            >{d.letter}</text>
          </g>
        )
      })}

      <circle cx="108" cy="277" r="3.5" fill="rgba(0,229,196,0.72)"/>
      <text x="116" y="281" fill="rgba(240,235,225,0.38)" fontSize="8" fontFamily="Space Mono, monospace">Estado actual</text>
      <line x1="222" y1="277" x2="234" y2="277" stroke="rgba(201,149,42,0.65)" strokeWidth="2" strokeDasharray="3 2"/>
      <text x="240" y="281" fill="rgba(240,235,225,0.38)" fontSize="8" fontFamily="Space Mono, monospace">Potencial</text>

      <line x1="40" y1="289" x2="360" y2="289" stroke="rgba(0,229,196,0.09)" strokeWidth="1"/>

      {DIMS.map(d => (
        <g key={`info-${d.letter}`} style={{ opacity: hovered === d.letter ? 1 : 0, transition: 'opacity 0.18s' }}>
          <text x="200" y="302" textAnchor="middle" fill="rgba(0,229,196,0.88)" fontSize="9.2"
            fontFamily="Space Mono, monospace" letterSpacing="2">{d.letter} - {d.name.toUpperCase()}</text>
          <text x="200" y="318" textAnchor="middle" fill="rgba(240,235,225,0.52)" fontSize="13.2"
            fontFamily="Cormorant Garamond, Cormorant, Georgia, serif" fontStyle="italic">{d.desc}</text>
        </g>
      ))}

      <g style={{ opacity: hovered ? 0 : 1, transition: 'opacity 0.18s' }}>
        <text x="200" y="305" textAnchor="middle" fill="rgba(240,235,225,0.15)" fontSize="7"
          fontFamily="Space Mono, monospace" letterSpacing="2">PASE EL CURSOR SOBRE CADA DIMENSIÓN</text>
      </g>

      <circle cx="148" cy="40"  r="2"   fill="rgba(0,229,196,0.28)"/>
      <circle cx="320" cy="58"  r="1.5" fill="rgba(201,169,110,0.32)"/>
      <circle cx="348" cy="220" r="1.5" fill="rgba(0,229,196,0.18)"/>
      <circle cx="52"  cy="215" r="1.5" fill="rgba(201,169,110,0.18)"/>
    </svg>
  )
}

// ─── The three levels of acompañamiento ───────────────────────────────────────

const services = [
  {
    num: '1',
    name: 'Diagnóstico\nVECTOR',
    desc: 'Informe estratégico personalizado: Índice VECTOR, mapa de oportunidades priorizado y hoja de ruta en tres fases. Entregable en 10 días (profesionales) o 4 semanas (empresas).',
    deliverable: 'Informe de diagnóstico detallado con identificación de brechas.',
    art: (
      <svg viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="sg1" cx="50%" cy="34%" r="65%">
            <stop offset="0%" stopColor="#0D2B2B"/>
            <stop offset="100%" stopColor="#050505"/>
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#sg1)"/>
        <line x1="74" y1="84" x2="156" y2="56" stroke="rgba(0,229,196,0.18)" strokeWidth="1"/>
        <line x1="156" y1="56" x2="238" y2="98" stroke="rgba(0,229,196,0.18)" strokeWidth="1"/>
        <line x1="238" y1="98" x2="320" y2="64" stroke="rgba(0,229,196,0.16)" strokeWidth="1"/>
        <line x1="74" y1="84" x2="184" y2="142" stroke="rgba(0,229,196,0.14)" strokeWidth="1"/>
        <circle className="art-pulse-dot" style={{ animationDelay: '0s' }}   cx="74"  cy="84"  r="5"   fill="#00E5C4"/>
        <circle className="art-pulse-dot" style={{ animationDelay: '0.6s' }} cx="156" cy="56"  r="3.5" fill="#00E5C4" opacity="0.7"/>
        <circle className="art-pulse-dot" style={{ animationDelay: '1.2s' }} cx="238" cy="98"  r="3.5" fill="#00E5C4" opacity="0.7"/>
        <circle className="art-pulse-dot" style={{ animationDelay: '1.8s' }} cx="320" cy="64"  r="3"   fill="#00E5C4" opacity="0.6"/>
        <circle className="art-pulse-dot" style={{ animationDelay: '2.4s' }} cx="184" cy="142" r="3"   fill="#00E5C4" opacity="0.6"/>
        <circle cx="74" cy="84" r="12" stroke="rgba(0,229,196,0.3)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    num: '2',
    name: 'Plan de\nAcción VECTOR',
    desc: 'Acompañamiento sesión a sesión para llevar la hoja de ruta al plano real. De 4 a 6 sesiones de 90 minutos en 8 a 10 semanas, con soporte asincrónico entre sesiones. Las capacidades que construimos son suyas.',
    deliverable: 'Hoja de ruta detallada y costeada.',
    art: (
      <svg viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="sg2" cx="50%" cy="36%" r="65%">
            <stop offset="0%" stopColor="#1C1408"/>
            <stop offset="100%" stopColor="#050505"/>
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#sg2)"/>
        <g className="art-wave-track">
          <path d="M-200,90 C-150,55 -50,55 0,90 C50,125 150,125 200,90 C250,55 350,55 400,90 C450,125 550,125 600,90 C650,55 750,55 800,90 C850,125 950,125 1000,90"
            stroke="rgba(201,169,110,0.55)" strokeWidth="1.5" fill="none"/>
          <path d="M-200,90 C-150,55 -50,55 0,90 C50,125 150,125 200,90 C250,55 350,55 400,90 C450,125 550,125 600,90 C650,55 750,55 800,90 C850,125 950,125 1000,90"
            stroke="rgba(201,169,110,0.18)" strokeWidth="1" fill="none" transform="translate(0,30)"/>
        </g>
      </svg>
    ),
  },
  {
    num: '3',
    name: 'Asesoría\nEstratégica',
    desc: 'Un interlocutor estratégico permanente para sus decisiones de competitividad y tecnología. Una sesión mensual de 60 minutos más soporte asincrónico. Compromiso mínimo: 3 meses.',
    deliverable: 'Decisiones acompañadas y estrategia conjunta.',
    accent: '#3B82F6',
    art: (
      <svg viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="sg3" cx="50%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#0A1228"/>
            <stop offset="100%" stopColor="#050505"/>
          </radialGradient>
        </defs>
        <rect width="400" height="300" fill="url(#sg3)"/>
        <circle className="art-ring" style={{ animationDelay: '0s' }}    cx="180" cy="110" r="6" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" fill="none"/>
        <circle className="art-ring" style={{ animationDelay: '2.1s' }}  cx="180" cy="110" r="6" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" fill="none"/>
        <circle className="art-ring" style={{ animationDelay: '4.2s' }}  cx="180" cy="110" r="6" stroke="rgba(59,130,246,0.55)" strokeWidth="1.5" fill="none"/>
        <circle cx="180" cy="110" r="4" fill="#3B82F6"/>
      </svg>
    ),
  },
]

// ─── Card component ───────────────────────────────────────────────────────────

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const [tipOpen, setTipOpen] = useState(false)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg) translateZ(6px)`
    el.style.transition = 'transform 0.1s ease'
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.transition = 'transform 0.6s var(--ease-out)'
  }

  return (
    <motion.div
      ref={ref}
      className="service-card magnetic-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.16,1,0.3,1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="service-art">{service.art}</div>
      <div className="service-info">
        <button
          type="button"
          className="service-arrow"
          aria-label="Qué recibe en este nivel"
          onClick={() => setTipOpen(o => !o)}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M6.5 5.85V9.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            <circle cx="6.5" cy="3.85" r="0.75" fill="currentColor"/>
          </svg>
        </button>
        <div className={`service-tooltip${tipOpen ? ' is-open' : ''}`}>
          <span className="service-tooltip-label">Recibe</span>
          {service.deliverable}
        </div>
      </div>
      <div className="service-content">
        <div className="service-name-row">
          <span className="service-num" style={{ '--card-accent': service.accent }}>
            <span className="service-num-digit">{service.num}</span>
          </span>
          <h3 className="service-name">{service.name}</h3>
        </div>
        <p className="service-desc">{service.desc}</p>
      </div>
    </motion.div>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

export function ModeloVector() {
  const mRef = useRef(null)
  const mInView = useInView(mRef, { once: true, margin: '-10% 0px' })

  return (
    <section id="modelo" className="modelo">
      <div className="modelo-inner" ref={mRef}>
        <motion.div
          className="modelo-copy"
          initial={{ opacity: 0, y: 32 }} animate={mInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
        >
          <div className="section-label">El marco analítico</div>
          <h2 className="services-title">El Modelo<br/><em className="text-gold">VECTOR</em></h2>
          <p className="modelo-sub">
            Seis dimensiones que evalúan qué tan bien se apoya en la IA para darle
            competitividad a su negocio y qué tanto puede mejorar su posición con nuestro acompañamiento.
          </p>
          <button
            type="button"
            className="modelo-cta magnetic"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conozca cómo lo logramos juntos
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
        <motion.div
          className="modelo-radar-wrap"
          initial={{ opacity: 0, scale: 0.96 }} animate={mInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.16,1,0.3,1] }}
        >
          <div className="modelo-radar">
            <DiagnosticoArt />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Niveles() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <section id="services" className="services">
      <div className="services-header" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
        >
          <h2 className="services-title">
            Tres niveles<br/>
            <em className="text-gold">de acompañamiento</em>
          </h2>
          <motion.p
            className="services-note"
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y:0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16,1,0.3,1] }}
          >
            Todo empieza con el diagnóstico. Usted decide qué tan profundo llega.
          </motion.p>
        </motion.div>
      </div>


      <div className="services-grid">
        {services.map((s, i) => <ServiceCard key={s.num} service={s} index={i} />)}
      </div>
    </section>
  )
}
