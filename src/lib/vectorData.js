// ─── Dimensiones VECTOR ───────────────────────────────────────────────────────
export const DIMS = [
  { key: 'V', short: 'Vigencia',     full: 'Vigencia Competitiva'    },
  { key: 'E', short: 'Estructura',   full: 'Estructura Operativa'    },
  { key: 'C', short: 'Capacidades',  full: 'Capacidades Aumentadas'  },
  { key: 'T', short: 'Transform.',   full: 'Transformación Aplicada' },
  { key: 'O', short: 'Optimización', full: 'Optimización Medible'    },
  { key: 'R', short: 'Rentabilidad', full: 'Rentabilidad Sostenible' },
]

// ─── Benchmark de referencia sectorial (15% más competitivo) ─────────────────
export const BENCHMARK = { V: 78, E: 72, C: 80, T: 70, O: 75, R: 68 }

// ─── Rangos de competitividad (mayor a menor) — colores de marca actual ───────
export const RANGES = [
  { min: 84, label: 'Consolidada',   color: '#00E5C4' },
  { min: 64, label: 'En desarrollo', color: '#2BA98F' },
  { min: 39, label: 'Comprometida',  color: '#C9952A' },
  { min: 0,  label: 'En riesgo',     color: '#C0584F' },
]

// ─── Preguntas del diagnóstico ────────────────────────────────────────────────
export const QUESTIONS = [
  { id: 1,  dim: 'V', inverted: false, text: 'En mi sector ya es evidente que la tecnología y la inteligencia artificial están cambiando la forma de competir.' },
  { id: 2,  dim: 'V', inverted: false, text: 'Mi propuesta de valor profesional o empresarial sigue siendo claramente diferenciada frente a alternativas tecnológicas emergentes.' },
  { id: 3,  dim: 'E', inverted: false, text: 'Mis procesos de trabajo están documentados y pueden funcionar sin depender exclusivamente de mí.' },
  { id: 4,  dim: 'E', inverted: true,  text: 'Dedico una parte importante de mi tiempo a tareas administrativas o repetitivas que no generan valor directo.' },
  { id: 5,  dim: 'C', inverted: false, text: 'Conozco y utilizo herramientas de inteligencia artificial que mejoran mi capacidad de trabajo.' },
  { id: 6,  dim: 'C', inverted: false, text: 'Tengo claridad sobre qué herramientas de IA podrían mejorar mis resultados en los próximos 12 meses.' },
  { id: 7,  dim: 'T', inverted: false, text: 'En el último año he rediseñado algún proceso de trabajo para adaptarlo a nuevas tecnologías.' },
  { id: 8,  dim: 'T', inverted: false, text: 'Tengo capacidad de implementar nuevas herramientas sin necesidad de grandes inversiones.' },
  { id: 9,  dim: 'O', inverted: false, text: 'Mido con indicadores concretos el impacto de las herramientas que uso en mi productividad.' },
  { id: 10, dim: 'O', inverted: false, text: 'Puedo identificar con claridad qué cambios tecnológicos han mejorado mis resultados financieros.' },
  { id: 11, dim: 'R', inverted: false, text: 'Mis decisiones de inversión tecnológica están alineadas con el crecimiento financiero del negocio.' },
  { id: 12, dim: 'R', inverted: false, text: 'Tengo una estrategia clara para incorporar inteligencia artificial en mi actividad de forma progresiva.' },
]

// ─── Etiquetas de escala Likert ───────────────────────────────────────────────
export const SCALE_LABELS = {
  1: 'Totalmente en desacuerdo',
  2: 'En desacuerdo',
  3: 'Neutral',
  4: 'De acuerdo',
  5: 'Totalmente de acuerdo',
}
