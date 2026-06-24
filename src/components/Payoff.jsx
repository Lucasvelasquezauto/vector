import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import LogoSymbol from './LogoSymbol'
import './Payoff.css'

export default function Payoff() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })

  const payoff = ['Tal', 'vez', 'se', 'sorprenda', 'con', 'lo', 'que', 'descubra.']
  const btnDelay = payoff.length * 0.08 + 0.3

  return (
    <section id="payoff" className="payoff" ref={ref}>
      <LogoSymbol width={825} className="payoff-watermark" />
      <div className="payoff-inner">
        <h3 className="hook-payoff">
          <motion.span
            className="hook-glow" aria-hidden="true"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
          {payoff.map((w, i) => (
            <span className="hook-word-wrap" key={i}>
              <motion.span
                className="hook-word"
                initial={{ y: '115%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h3>

        <motion.div
          className="hook-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: btnDelay, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/evaluacion" className="btn-primary magnetic">
            Quiero mi diagnóstico
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <p className="payoff-meta">Gratuita · 12 preguntas · 5 minutos · Sin registro</p>
        </motion.div>
      </div>
    </section>
  )
}
