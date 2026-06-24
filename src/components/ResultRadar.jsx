import './ResultRadar.css'

const CX = 200, CY = 200, R_HEX = 110, R_LABEL = 140
const d2r = (deg) => (deg * Math.PI) / 180

function hexPt(deg, r) {
  return { x: CX + r * Math.sin(d2r(deg)), y: CY - r * Math.cos(d2r(deg)) }
}

/**
 * Radar hexagonal del Índice VECTOR — mismo lenguaje visual que
 * el radar de "El Modelo VECTOR" (Services.jsx / DiagnosticoArt):
 * fondo radial oscuro, polígono teal para el perfil actual,
 * polígono dorado punteado para el benchmark sectorial.
 */
export default function ResultRadar({ dims, scores, benchmark }) {
  const polyStr = (r) => dims.map((d, i) => { const p = hexPt(i * 60, r); return `${p.x.toFixed(1)},${p.y.toFixed(1)}` }).join(' ')
  const dataStr = (vals) => dims.map((d, i) => { const p = hexPt(i * 60, R_HEX * vals[d.key] / 100); return `${p.x.toFixed(1)},${p.y.toFixed(1)}` }).join(' ')

  return (
    <svg className="result-radar" viewBox="0 0 400 400" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="rr-bg" cx="50%" cy="50%" r="62%">
          <stop offset="0%" stopColor="#0D2B2B" />
          <stop offset="100%" stopColor="#050505" />
        </radialGradient>
      </defs>

      <rect width="400" height="400" fill="url(#rr-bg)" />

      {[0.25, 0.5, 0.75, 1].map((f) => (
        <polygon key={f} points={polyStr(R_HEX * f)} fill="none" stroke="rgba(0,229,196,0.12)" strokeWidth="1" />
      ))}

      {dims.map((d, i) => {
        const p = hexPt(i * 60, R_HEX)
        return <line key={d.key} x1={CX} y1={CY} x2={p.x.toFixed(1)} y2={p.y.toFixed(1)} stroke="rgba(0,229,196,0.14)" strokeWidth="1" />
      })}

      <polygon points={polyStr(R_HEX)} fill="none" stroke="rgba(0,229,196,0.2)" strokeWidth="1" />

      <polygon points={dataStr(benchmark)} fill="rgba(201,149,42,0.08)" stroke="rgba(201,149,42,0.6)" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points={dataStr(scores)} fill="rgba(0,229,196,0.16)" stroke="#00E5C4" strokeWidth="2" />

      {dims.map((d, i) => {
        const p = hexPt(i * 60, R_HEX * scores[d.key] / 100)
        return <circle key={d.key} cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r="4" fill="#00E5C4" stroke="#050505" strokeWidth="1.5" />
      })}

      {dims.map((d, i) => {
        const p = hexPt(i * 60, R_LABEL)
        const anchor = Math.abs(p.x - CX) < 8 ? 'middle' : p.x > CX ? 'start' : 'end'
        return (
          <text key={d.key} x={p.x.toFixed(1)} y={p.y.toFixed(1)} textAnchor={anchor} dominantBaseline="middle"
            fontFamily="Space Mono, monospace" fontSize="12">
            <tspan fontWeight="700" fill="#00E5C4">{d.key}</tspan>
            <tspan fill="rgba(240,235,225,0.55)"> {scores[d.key]}</tspan>
          </text>
        )
      })}
    </svg>
  )
}
