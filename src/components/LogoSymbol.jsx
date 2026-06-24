const W = '#F0EBE1'
const G = '#C9952A'

export default function LogoSymbol({ width = 60, className = '' }) {
  return (
    <svg
      viewBox="0 0 170 110"
      width={width}
      height={Math.round(width * (110 / 170))}
      aria-label="Símbolo VECTOR"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* V */}
      <polygon points="15.38 31.01 35.03 31.01 67.41 91.46 47.76 91.46 15.38 31.01" fill={W}/>
      <line x1="63.71" y1="89.46" x2="86.17" y2="24.83" stroke={W} strokeWidth="9" fill="none"/>
      <path d="M91.85,12.59l-2.31,31.84-3.93-18.08-17.61,11.51,23.85-25.27Z" fill={G}/>
      {/* O — hexágono, recorrido junto a la V */}
      <g transform="translate(-162.18, 0)">
        <polygon points="289.06 30.93 316.95 47.06 316.95 79.33 289.06 95.46 261.18 79.33 261.18 47.06 289.06 30.93" stroke={G} strokeWidth="5" strokeLinejoin="round" fill="none"/>
        <polygon points="289.06 44.76 305.08 53.98 305.08 72.41 289.06 81.63 273.04 72.41 273.04 53.98 289.06 44.76" stroke="rgba(240,235,225,0.38)" strokeWidth="4.5" strokeLinejoin="round" fill="none"/>
      </g>
    </svg>
  )
}
