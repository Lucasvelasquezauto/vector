import './Marquee.css'

const items = [
  'Estrategia Competitiva', 'Productividad impulsada por IA',
  'Ventaja Diferencial', 'Optimización de Recursos',
  'Decisiones con Criterio', 'Madurez Competitiva',
  'Rentabilidad Sostenible', 'Diagnóstico Estratégico',
  'Índice VECTOR 0–100', 'Hoja de Ruta',
  'Inteligencia Artificial Aplicada', 'Crecimiento Medible',
]

function Track() {
  return (
    <div className="marquee-track" aria-hidden="true">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="marquee-item">
          <span className="marquee-dot" />
          {item}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee-band" aria-label="Áreas de expertise">
      <Track />
    </div>
  )
}
