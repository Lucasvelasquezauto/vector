import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FlowHeader from '../FlowHeader'
import Rich from '../../lib/richText'
import './PricingPage.css'

function useScrollProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    function tick() {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    window.addEventListener('scroll', tick, { passive: true })
    window.addEventListener('resize', tick)
    tick()
    return () => {
      window.removeEventListener('scroll', tick)
      window.removeEventListener('resize', tick)
    }
  }, [])
  return pct
}

function MomentSection({ m, forWhomPrefix }) {
  return (
    <section id={m.id} className="pp-section">
      <div className={`pp-moment${m.accent ? ` pp-moment--${m.accent}` : ''}`}>
        <span className="pp-label pp-moment-label">{m.momentLabel}</span>
        <h2 className="pp-h2"><Rich text={m.title} /></h2>
        <p className="pp-q">{m.question}</p>

        <div className="pp-forwhom">
          <b>{forWhomPrefix}</b> {m.forWhom}
        </div>

        <div className="pp-gives">
          <span className="pp-label">Lo que devuelve</span>
          <p>{m.gives}</p>
        </div>

        <span className="pp-label pp-receive-label">{m.receiveLabel}</span>
        <ul className="pp-deliv">
          {m.receive.map((item, i) => (
            <li key={i}><Rich text={item} /></li>
          ))}
        </ul>

        <div className="pp-keeps">
          <span className="pp-label">Lo que conserva</span>
          <p>{m.keeps}</p>
        </div>

        <dl className="pp-facts">
          {m.facts.map((f) => (
            <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
          ))}
        </dl>

        {m.notes.map((n, i) => (
          <p className="pp-small" key={i}><Rich text={n} /></p>
        ))}

        <div className="pp-pricebox">
          <span className="pp-label">Inversión</span>
          <div className="pp-amount">{m.price.amount}</div>
          <p className="pp-terms">{m.price.terms}</p>
          {m.price.altBold && (
            <p className="pp-alt"><b>{m.price.altBold}</b> {m.price.altText}</p>
          )}
        </div>

        {m.aside && (
          <div className="pp-aside">
            <h3>{m.aside.title}</h3>
            <p><Rich text={m.aside.text} /></p>
          </div>
        )}
      </div>
    </section>
  )
}

export default function PricingPage({ data }) {
  const pct = useScrollProgress()

  return (
    <div className="pp">
      <div className="pp-bar" style={{ width: `${pct}%` }} />
      <FlowHeader />

      <div className="pp-wrap">
        {/* ── Portada ── */}
        <header className="pp-header">
          <span className="pp-label">{data.lineLabel}</span>
          <h1 className="pp-h1"><Rich text={data.title} /></h1>
          <p className="pp-lede">{data.lede}</p>
        </header>

        <hr className="pp-hr" />

        {/* ── Índice ── */}
        <nav className="pp-nav" aria-label="Contenido">
          <span className="pp-label">Contenido</span>
          <ol>
            {data.toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>
                  {item.label}
                  {item.price && <span>{item.price}</span>}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Gratis ── */}
        <section id="gratis" className="pp-section">
          <span className="pp-label">Punto de partida</span>
          <h2 className="pp-h2">Los dos primeros pasos, <em>sin costo</em></h2>

          {data.freeSteps.map((s) => (
            <div className="pp-freebox" key={s.tag}>
              <span className="pp-tag">{s.tag}</span>
              <strong>{s.title}</strong>
              <p>{s.text}</p>
            </div>
          ))}

          <p className="pp-pull"><Rich text={data.freeQuote} /></p>
        </section>

        {/* ── Proceso ── */}
        <section id="proceso" className="pp-section">
          <span className="pp-label">Cómo trabajamos</span>
          <h2 className="pp-h2"><Rich text={data.process.title} /></h2>
          <ol className="pp-steps">
            {data.process.steps.map((s) => (
              <li key={s.title}>
                <b>{s.title}</b>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Recorrido ── */}
        <section id="recorrido" className="pp-section">
          <span className="pp-label">El recorrido de su inversión</span>
          <h2 className="pp-h2"><Rich text={data.route.title} /></h2>

          <div className="pp-route">
            {data.route.rows.map((r) => (
              <div className={`pp-row pp-row--${r.variant}`} key={r.name}>
                <div className="pp-row-top">
                  <span className="pp-row-name">{r.name}</span>
                  <span className="pp-row-price">{r.price}</span>
                </div>
                <div className="pp-row-meta">{r.meta}</div>
                <div className="pp-row-cond"><Rich text={r.cond} /></div>
              </div>
            ))}
          </div>

          <div className="pp-program">
            <span className="pp-label">El recorrido completo desde el inicio</span>
            <h3><Rich text={data.route.program.name} /></h3>
            <div className="pp-program-price">
              {data.route.program.price}
              <small>{data.route.program.compare}</small>
            </div>
            <p><Rich text={data.route.program.text} /></p>
          </div>
        </section>

        {/* ── Momentos ── */}
        {data.moments.map((m) => (
          <MomentSection m={m} forWhomPrefix={data.forWhomPrefix} key={m.id} />
        ))}

        {/* ── Garantía y condiciones ── */}
        <section id="condiciones" className="pp-section">
          <span className="pp-label">Garantía y condiciones</span>
          <h2 className="pp-h2">Lo que <em>respalda</em> el acuerdo</h2>

          <div className="pp-warranty">
            <h3>Garantía de valor del diagnóstico</h3>
            <p>{data.guarantee}</p>
          </div>

          <dl className="pp-cond">
            {data.conditions.map((c) => (
              <div key={c.title}><dt>{c.title}</dt><dd>{c.text}</dd></div>
            ))}
          </dl>
        </section>

        {/* ── Cierre ── */}
        <footer className="pp-footer">
          <span className="pp-label">El siguiente paso</span>
          <h2 className="pp-h2">El primer paso <em>va por nuestra cuenta.</em></h2>
          <p className="pp-lede">Haga la Evaluación Ejecutiva o agende una sesión exploratoria. A partir de ahí tendrá claro su punto de partida.</p>

          <Link to="/evaluacion" className="btn-primary magnetic pp-cta">
            Hacer la Evaluación Ejecutiva
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2.5 7.5H12.5M12.5 7.5L7.5 2.5M12.5 7.5L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <a
            href="https://cal.com/lucas-velasquez-5urbfr/sesion-exploratoria-vector"
            target="_blank" rel="noopener noreferrer"
            className="btn-ghost magnetic pp-cta pp-cta--ghost"
          >
            Agendar sesión exploratoria
          </a>

          <div className="pp-contact">
            <b>VECTOR ESTRATEGIA</b>
            vector-st.vercel.app<br/>
            vector.estrategia.co@gmail.com<br/>
            Medellín · Colombia
          </div>
        </footer>
      </div>
    </div>
  )
}
