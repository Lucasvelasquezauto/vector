import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="contact" className="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner" ref={ref}>
        <motion.div
          className="section-label"
          initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
        >
          Sesión exploratoria — sin costo
        </motion.div>

        <motion.h2
          className="contact-title"
          initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.9, delay:0.1, ease:[0.16,1,0.3,1] }}
        >
          La próxima<br/>
          decisión<br/>
          <em className="text-gold">importa.</em>
        </motion.h2>

        <motion.p
          className="contact-tagline"
          initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.8, delay:0.2, ease:[0.16,1,0.3,1] }}
        >
          La claridad estratégica no se improvisa, se diagnostica.
        </motion.p>

        <motion.p
          className="contact-sub"
          initial={{ opacity:0, y:32 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.8, delay:0.28, ease:[0.16,1,0.3,1] }}
        >
          La primera conversación es gratuita y sin compromiso. En 60 minutos evaluamos juntos si existe una oportunidad real de trabajar, y si la hay, diseñamos el proceso exacto para su situación.
        </motion.p>

        <motion.div
          className="contact-actions"
          initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}}
          transition={{ duration:0.8, delay:0.38, ease:[0.16,1,0.3,1] }}
        >
          <a
            href="https://cal.com/lucas-velasquez-5urbfr/sesion-exploratoria-vector"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary magnetic"
          >
            Agendar sesión exploratoria
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <Link to="/evaluacion" className="btn-ghost magnetic">
            Hacer la Evaluación Ejecutiva
          </Link>
        </motion.div>

        <motion.p
          className="contact-email"
          initial={{ opacity:0 }} animate={inView?{opacity:1}:{}}
          transition={{ duration:0.8, delay:0.5, ease:[0.16,1,0.3,1] }}
        >
          <a href="mailto:vector.estrategia.co@gmail.com">vector.estrategia.co@gmail.com</a>
        </motion.p>
      </div>
    </section>
  )
}
