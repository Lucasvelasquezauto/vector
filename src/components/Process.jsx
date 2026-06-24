import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Process.css'

const steps = [
  {
    num: '01',
    name: 'Evaluación\nEjecutiva',
    desc: 'Autodiagnóstico gratuito de 12 preguntas. Obtiene su Índice VECTOR, radar de las 6 dimensiones y una lectura orientativa de su posición competitiva actual.',
  },
  {
    num: '02',
    name: 'Sesión\nExploratoria',
    desc: 'Conversación de calificación, sin costo. No es una sesión de consultoría: es el momento en que decidimos juntos si tiene sentido avanzar, qué línea corresponde a su situación y cómo se estructura el proceso exacto.',
  },
  {
    num: '03',
    name: 'Diagnóstico\nProfundo',
    desc: 'Formulario de diagnóstico + sesión(es) con el consultor. Análisis riguroso de las 6 dimensiones VECTOR aplicado a su contexto específico de industria y tamaño.',
  },
  {
    num: '04',
    name: 'Entrega y\nHoja de Ruta',
    desc: 'Informe con radar actual y objetivo, mapa de oportunidades priorizado e impacto financiero estimado. Tres rutas de continuidad: autónoma, acompañada o extendida.',
  },
]

function StepCard({ step, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      className="process-step"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="step-line" aria-hidden="true" />
      <div className="step-num">{step.num} / {String(steps.length).padStart(2, '0')}</div>
      <h3 className="step-name">{step.name}</h3>
      <p className="step-desc">{step.desc}</p>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-5% 0px' })

  return (
    <section id="process" className="process">
      <div className="process-inner">
        <div className="process-header" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">Cómo trabajamos</div>
            <h2 className="process-title">
              Un proceso<br />
              <em className="text-gold">transparente</em><br />
              desde el día uno
            </h2>
          </motion.div>
          <motion.p
            className="process-intro"
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            La Evaluación Ejecutiva es gratuita. La Sesión Exploratoria es gratuita. El diagnóstico comienza solo cuando existe un fit real y un objetivo concreto definido entre las dos partes.
          </motion.p>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
