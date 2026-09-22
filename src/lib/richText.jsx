// Formato inline mínimo: **negrita** y *cursiva*, igual a la convención
// ya usada en las fichas de portafolio (VECTOR_Ficha_*_Texto.md).
const PATTERN = /\*\*(.+?)\*\*|\*(.+?)\*/g

export default function Rich({ text }) {
  if (!text) return null
  const parts = []
  let lastIndex = 0
  let match
  let key = 0

  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index))
    if (match[1] !== undefined) parts.push(<b key={key++}>{match[1]}</b>)
    else parts.push(<em key={key++}>{match[2]}</em>)
    lastIndex = PATTERN.lastIndex
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex))

  return parts
}
