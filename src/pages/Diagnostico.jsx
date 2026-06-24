import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import FlowHeader from '../components/FlowHeader'
import { QUESTIONS, DIMS } from '../lib/vectorData'
import { calcAllScores } from '../lib/vectorCalc'
import './Diagnostico.css'

const SCALE = [1, 2, 3, 4, 5]
const EASE = [0.16, 1, 0.3, 1]

const stepVariants = {
  enter: { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
  exit: { opacity: 0, y: -16, transition: { duration: 0 } },
}

function TextField({ label, placeholder, value, onChange }) {
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      <input
        className="field-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

function ScoreButton({ value, selected, onClick }) {
  return (
    <button
      type="button"
      className={`score-btn magnetic ${selected ? 'is-selected' : ''}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  )
}

export default function Diagnostico() {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [userInfo, setUserInfo] = useState({ name: '', profession: '', city: '' })
  const [answers, setAnswers] = useState(
    Object.fromEntries(QUESTIONS.map((q) => [q.id, null]))
  )

  const currentDim = step >= 1 ? DIMS[step - 1] : null
  const currentQuestions = step >= 1 ? QUESTIONS.filter((q) => q.dim === currentDim.key) : []
  const dimAnswered = currentQuestions.every((q) => answers[q.id] !== null)
  const infoComplete = userInfo.name.trim() && userInfo.profession.trim() && userInfo.city.trim()
  const progressPct = step >= 1 ? ((step - 1) / 6) * 100 : 0

  function setAnswer(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  function handleFinish() {
    const scores = calcAllScores(answers, QUESTIONS)
    const params = new URLSearchParams({
      name: userInfo.name,
      profession: userInfo.profession,
      city: userInfo.city,
      V: scores.V, E: scores.E, C: scores.C, T: scores.T, O: scores.O, R: scores.R,
    })
    const resultUrl = `${window.location.origin}/resultado?${params.toString()}`

    // Aviso interno a Lucas, no bloquea ni afecta la experiencia del visitante.
    fetch('/api/notify-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...userInfo, scores, resultUrl }),
    }).catch(() => {})

    navigate(`/resultado?${params.toString()}`)
  }

  return (
    <div className="diagnostico">
      <FlowHeader />

      {step >= 1 && (
        <div className="diag-progress">
          <motion.div
            className="diag-progress-fill"
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.4, ease: EASE }}
          />
        </div>
      )}

      <div className="diag-stage">
        <div className="diag-card">
          <AnimatePresence initial={false}>
            {step === 0 && (
              <motion.div
                key="step-0"
                variants={stepVariants}
                initial="enter" animate="center" exit="exit"
              >
                <div className="section-label diag-label">Antes de empezar</div>
                <h1 className="diag-title">Cuéntenos<br/>sobre usted</h1>
                <p className="diag-sub">Su resultado se personaliza según su perfil profesional.</p>

                <TextField
                  label="Nombre completo"
                  placeholder="Su nombre"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                />
                <TextField
                  label="Profesión o actividad"
                  placeholder="Ej: psicóloga independiente, asesor de seguros..."
                  value={userInfo.profession}
                  onChange={(e) => setUserInfo({ ...userInfo, profession: e.target.value })}
                />
                <TextField
                  label="Ciudad"
                  placeholder="Ej: Medellín"
                  value={userInfo.city}
                  onChange={(e) => setUserInfo({ ...userInfo, city: e.target.value })}
                />

                <button
                  type="button"
                  className="btn-primary magnetic diag-cta"
                  disabled={!infoComplete}
                  onClick={() => setStep(1)}
                >
                  Comenzar evaluación
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </motion.div>
            )}

            {step >= 1 && currentDim && (
              <motion.div
                key={`step-${step}`}
                variants={stepVariants}
                initial="enter" animate="center" exit="exit"
              >
                <div className="section-label diag-label">Dimensión {step} de 6</div>
                <h2 className="diag-dim-title">
                  <span className="diag-dim-letter">{currentDim.key}</span> {currentDim.full}
                </h2>

                {currentQuestions.map((q) => (
                  <div key={q.id} className="diag-question">
                    <p className="diag-question-text">{q.text}</p>
                    <div className="score-row">
                      {SCALE.map((v) => (
                        <ScoreButton
                          key={v}
                          value={v}
                          selected={answers[q.id] === v}
                          onClick={(val) => setAnswer(q.id, val)}
                        />
                      ))}
                    </div>
                    <div className="score-labels">
                      <span>Totalmente en desacuerdo</span>
                      <span>Totalmente de acuerdo</span>
                    </div>
                  </div>
                ))}

                <div className="diag-nav">
                  {step > 1 ? (
                    <button type="button" className="btn-ghost magnetic" onClick={() => setStep(step - 1)}>
                      Anterior
                    </button>
                  ) : <span />}

                  <button
                    type="button"
                    className="btn-primary magnetic"
                    disabled={!dimAnswered}
                    onClick={step < 6 ? () => setStep(step + 1) : handleFinish}
                  >
                    {step < 6 ? 'Siguiente' : 'Ver mi resultado'}
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
