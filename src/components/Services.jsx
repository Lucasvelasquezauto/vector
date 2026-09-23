import { useState, useRef, useEffect } from 'react'
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

// En pantallas angostas el radar va en una sola columna: se recorta el viewBox al
// contenido real (sin el aire lateral) para que todo se vea más grande y legible.
const NARROW_QUERY = '(max-width: 900px)'
const VIEWBOX_WIDE   = '0 0 400 335'
const VIEWBOX_NARROW = '62 12 276 314'

function useNarrow() {
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.matchMedia(NARROW_QUERY).matches)
  useEffect(() => {
    const mq = window.matchMedia(NARROW_QUERY)
    const onChange = e => setNarrow(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return narrow
}

function DiagnosticoArt() {
  const [hovered, setHovered] = useState(null)
  const narrow = useNarrow()

  return (
    <svg viewBox={narrow ? VIEWBOX_NARROW : VIEWBOX_WIDE} fill="none" preserveAspectRatio="xMidYMid slice" style={{ pointerEvents: 'all' }}>
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
          fontFamily="Space Mono, monospace" letterSpacing="2">{narrow ? 'TOQUE CADA DIMENSIÓN' : 'PASE EL CURSOR SOBRE CADA DIMENSIÓN'}</text>
      </g>

      <circle cx="148" cy="40"  r="2"   fill="rgba(0,229,196,0.28)"/>
      <circle cx="320" cy="58"  r="1.5" fill="rgba(201,169,110,0.32)"/>
      <circle cx="348" cy="220" r="1.5" fill="rgba(0,229,196,0.18)"/>
      <circle cx="52"  cy="215" r="1.5" fill="rgba(201,169,110,0.18)"/>
    </svg>
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
