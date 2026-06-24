import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FlowHeader from '../components/FlowHeader'
import ResultRadar from '../components/ResultRadar'
import { DIMS, BENCHMARK, RANGES } from '../lib/vectorData'
import { calcIndex, getRange, getWeakestDims } from '../lib/vectorCalc'
import { PROFILE_TEXTS } from '../lib/profileTexts'
import './Resultado.css'

const EASE = [0.16, 1, 0.3, 1]

export default function Resultado() {
  const [params] = useSearchParams()

  const name = params.get('name') || ''
  const profession = params.get('profession') || ''
  const city = params.get('city') || ''

  const scores = {
    V: parseFloat(params.get('V') || '0'),
    E: parseFloat(params.get('E') || '0'),
    C: parseFloat(params.get('C') || '0'),
    T: parseFloat(params.get('T') || '0'),
    O: parseFloat(params.get('O') || '0'),
    R: parseFloat(params.get('R') || '0'),
  }

  const index = calcIndex(scores)
  const range = getRange(index, RANGES) || RANGES[RANGES.length - 1]
  const weakest = getWeakestDims(scores, DIMS, 2)
  const profileText = PROFILE_TEXTS[range.label]?.(weakest) ?? ''

  return (
    <div className="resultado">
      <FlowHeader />

      <div className="res-stage">
        <motion.div
          className="res-intro"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="section-label res-label">{name ? `Resultado de la evaluación de ${name}` : 'Resultado de su evaluación'}</div>
          {(profession || city) && (
            <p className="res-meta">{[profession, city].filter(Boolean).join(' · ')}</p>
          )}
        </motion.div>

        <div className="res-grid">
          <motion.div
            className="res-score"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <div className="res-score-label">Índice VECTOR</div>
            <div className="res-score-value" style={{ color: range.color }}>{index}</div>
            <div className="res-score-max">/ 100</div>
            <div className="res-range-badge" style={{ color: range.color, borderColor: range.color }}>
              {range.label}
            </div>

            <div className="res-dims">
              {DIMS.map((d) => (
                <div key={d.key} className="res-dim-row">
                  <span><span className="res-dim-letter">{d.key}</span> {d.full}</span>
                  <span className="res-dim-score">{scores[d.key]}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="res-radar-wrap"
            initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          >
            <ResultRadar dims={DIMS} scores={scores} benchmark={BENCHMARK} />
            <div className="res-radar-legend">
              <span><i className="dot dot-teal" /> Su perfil actual</span>
              <span><i className="dash dash-gold" /> 15% más competitivo del sector</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="res-reading"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          style={{ borderLeftColor: range.color }}
        >
          <div className="section-label res-label">Lectura del perfil</div>
          <p className="res-reading-text">{profileText}</p>
        </motion.div>

        <motion.div
          className="res-cta"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
        >
          <p className="res-cta-text">Sus resultados completos los revisamos juntos en la sesión exploratoria.</p>
          <a
            href={`https://cal.com/lucas-velasquez-5urbfr/sesion-exploratoria-vector${name ? `?name=${encodeURIComponent(name)}` : ''}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-primary magnetic"
          >
            Agendar sesión exploratoria
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <Link to="/#modelo" className="res-back-link magnetic">¿Qué significa y cómo lo mejoramos?</Link>
        </motion.div>
      </div>
    </div>
  )
}
