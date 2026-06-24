import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Manifesto.css'

function AnimWord({ children, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  return (
    <span className="anim-word-wrap" ref={ref}>
      <motion.span
        className="anim-word"
        initial={{ y: '105%' }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.16,1,0.3,1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16,1,0.3,1] }}
    >
      {children}
    </motion.div>
  )
}

function CountUp({ target, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      onAnimationStart={() => {
        if (!inView) return
        const el = ref.current
        if (!el) return
        const start = performance.now()
        const dur = 1800
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          el.textContent = (ease * target).toFixed(decimals) + suffix
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }}
    >
      0{suffix}
    </motion.span>
  )
}

function Figure() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })
  return (
    <div className="manifesto-figure" ref={ref}>
      <svg viewBox="0 0 320 320" fill="none">
        <defs>
          <linearGradient id="mf-arc" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00E5C4" />
            <stop offset="1" stopColor="#C9A96E" />
          </linearGradient>
        </defs>

        {/* Brand hexagons — entrance + continuous ambient spin */}
        <g style={{ transformOrigin: '160px 160px', animation: 'mfSpin 26s linear infinite' }}>
          <motion.polygon
            points="160,40 263.9,100 263.9,220 160,280 56.1,220 56.1,100"
            fill="none" stroke="rgba(0,229,196,0.18)" strokeWidth="1"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </g>
        <g style={{ transformOrigin: '160px 160px', animation: 'mfSpin 34s linear infinite reverse' }}>
          <motion.polygon
            points="160,70 237.9,115 237.9,205 160,250 82.1,205 82.1,115"
            fill="none" stroke="rgba(201,169,110,0.10)" strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.12 }}
          />
        </g>

        {/* Track + 66% arc */}
        <circle cx="160" cy="160" r="78" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
        <motion.circle
          cx="160" cy="160" r="78" fill="none" stroke="url(#mf-arc)" strokeWidth="4"
          strokeLinecap="round" transform="rotate(-90 160 160)"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 0.66 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Floating accents */}
        {[
          { cx: 160,   cy: 40,  r: 4,   fill: '#00E5C4',              d: 0.7 },
          { cx: 263.9, cy: 100, r: 3,   fill: '#C9A96E',              d: 0.8 },
          { cx: 56.1,  cy: 220, r: 2.5, fill: 'rgba(0,229,196,0.5)',  d: 0.9 },
          { cx: 300,   cy: 64,  r: 2,   fill: 'rgba(201,169,110,0.5)',d: 1.0 },
          { cx: 28,    cy: 150, r: 2,   fill: 'rgba(0,229,196,0.35)', d: 1.05 },
        ].map((dot, i) => (
          <motion.circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill={dot.fill}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: dot.d } } />
        ))}
      </svg>
      <div className="figure-stat">
        <span className="figure-num"><CountUp target={66} suffix="%" /></span>
      </div>
    </div>
  )
}

function Tease() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })

  const words = [
    { w: '¿Tiene',       d: 0 },
    { w: 'claro',        d: 0.06 },
    { w: 'su',           d: 0.12 },
    { w: 'nivel',        d: 0.18 },
    { w: 'de',           d: 0.24 },
    { w: 'madurez',      d: 0.30, italic: true },
    { w: 'competitiva',  d: 0.36, italic: true },
    { w: 'frente',       d: 0.42 },
    { w: 'a',            d: 0.48 },
    { w: 'su',           d: 0.54 },
    { w: 'sector?',      d: 0.60 },
  ]
  return (
    <div className="manifesto-tease" ref={ref}>
      <motion.div
        className="hook-rule" aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <button
        className="tease-question-btn magnetic"
        onClick={() => document.querySelector('#payoff')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="tease-question">
          {words.map(({ w, d, italic }, i) => (
            <span className="anim-word-wrap" key={i}>
              <motion.span
                className={`anim-word ${italic ? 'text-italic' : ''}`}
                initial={{ y: '105%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
          <svg className="tease-question-arrow" width="16" height="16" viewBox="0 0 14 14" fill="none">
            <path d="M7 2.5V11.5M7 11.5L3 7.5M7 11.5L11 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  )
}

export default function Manifesto() {
  const titleWords = [
    { w: 'Desarrollamos', d: 0 },
    { w: 'criterio',      d: 0.08 },
  ]
  const titleWords2 = [
    { w: 'para',          d: 0.18 },
    { w: 'decidir',       d: 0.24 },
    { w: 'con',           d: 0.34 },
    { w: 'autonomía.',    d: 0.40, italic: true },
  ]

  return (
    <section id="manifesto" className="manifesto">
      <div className="manifesto-glow" aria-hidden="true" />

      <div className="manifesto-inner">
        <FadeIn className="section-label" delay={0}>Nuestro enfoque</FadeIn>

        <h2 className="manifesto-title">
          <div className="manifesto-line">
            {titleWords.map(({ w, d, italic }) => (
              <AnimWord key={w} delay={d}><span className={italic ? 'text-italic' : ''}>{w}</span></AnimWord>
            ))}
          </div>
          <div className="manifesto-line">
            {titleWords2.map(({ w, d, italic }) => (
              <AnimWord key={w} delay={d}><span className={italic ? 'text-italic' : ''}>{w}</span></AnimWord>
            ))}
          </div>
        </h2>

        <div className="manifesto-split">
          <FadeIn delay={0.3} className="manifesto-text">
            <p>
              La inteligencia artificial está al alcance de todos, en especial de sus clientes y competidores.
              El diferencial estratégico es el <strong>criterio para aplicarla donde genere valor real</strong>,
              con una planeación eficiente y la disciplina para medir el beneficio de su inversión en cada etapa.
            </p>
            <p>
              En VECTOR Estrategia analizamos su negocio para encontrar las brechas en productividad, los procesos
              con el mayor potencial para <strong>optimizar recursos e incrementar utilidades</strong>, trazando
              finalmente la ruta para implementarlo y capitalizarlo.
            </p>
          </FadeIn>
        </div>

        <div className="manifesto-figure-float">
          <Figure />
          <FadeIn delay={0.5} className="figure-caption-wrap">
            <p className="figure-caption">
              De las MiPymes colombianas usan IA, la mayoría sin estrategia clara.
              <span className="figure-source">Microsoft, 2025</span>
            </p>
          </FadeIn>
          <Tease />
        </div>
      </div>

      <style>{`
        @keyframes mfSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
