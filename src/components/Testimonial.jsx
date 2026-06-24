import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import './Testimonial.css'

export default function Nosotros() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="contact" className="closing">
      <div className="testimonial-bg-quote" aria-hidden="true">&ldquo;</div>
      <div className="contact-glow" aria-hidden="true" />

      <div className="closing-inner" ref={ref}>
        <div className="closing-col closing-trust">
          <motion.div
            className="section-label"
            initial={{ opacity:0, y:20 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.7, ease:[0.16,1,0.3,1] }}
          >
            Nosotros
          </motion.div>

          <motion.blockquote
            className="testimonial-quote"
            initial={{ opacity:0, y:40 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:1.0, delay:0.1, ease:[0.16,1,0.3,1] }}
          >
            "Toda empresa tiene un punto de inflexión: el momento en que empieza a hacerse las preguntas correctas,{' '}
            <em>enfoca sus competencias en lo que genera valor</em>{' '}
            y construye una operación más eficiente, rentable y sostenible."
          </motion.blockquote>

          <motion.div
            className="testimonial-author"
            initial={{ opacity:0, y:24 }}
            animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.8, delay:0.3, ease:[0.16,1,0.3,1] }}
          >
            <div className="author-avatar">
              <img
                src="/images/lucas-velasquez.png"
                alt="Lucas Velásquez"
                onError={e => e.target.style.display='none'}
              />
              <svg className="avatar-placeholder" viewBox="0 0 52 52" fill="none">
                <rect width="52" height="52" fill="#1A1A18"/>
                <circle cx="26" cy="20" r="10" fill="rgba(255,255,255,0.12)"/>
                <ellipse cx="26" cy="44" rx="16" ry="10" fill="rgba(255,255,255,0.08)"/>
              </svg>
            </div>
            <div>
              <div className="author-name">Lucas Velásquez</div>
              <div className="author-role">Fundador · VECTOR Estrategia</div>
              <div className="author-bio">
                Economista · 15 años en planeación estratégica y gestión de proyectos · Colombia
              </div>
            </div>
          </motion.div>
        </div>

        <div className="closing-col closing-cta">
          <motion.div
            className="section-label"
            initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}}
            transition={{ duration:0.7, delay:0.1, ease:[0.16,1,0.3,1] }}
          >
            Sesión exploratoria — sin costo
          </motion.div>

          <motion.h2
            className="contact-title"
            initial={{ opacity:0, y:40 }} animate={inView?{opacity:1,y:0}:{}}
            transition={{ duration:0.9, delay:0.18, ease:[0.16,1,0.3,1] }}
          >
            Una conversación tranquila<br/>
            y un <em className="text-gold">portafolio de nuevas oportunidades</em>.
          </motion.h2>

          <motion.p
            className="contact-sub"
            initial={{ opacity:0, y:32 }} animate={inView?{opacity:1,y:0}:{}}
            transition={{ duration:0.8, delay:0.34, ease:[0.16,1,0.3,1] }}
          >
            La primera conversación va por nuestra cuenta. En 60 minutos evaluamos juntos el potencial competitivo, la ruta de valor y las eficiencias operativas, diseñando el proceso específico para su negocio.
          </motion.p>

          <motion.div
            className="contact-actions"
            initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}}
            transition={{ duration:0.8, delay:0.42, ease:[0.16,1,0.3,1] }}
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
      </div>
    </section>
  )
}
