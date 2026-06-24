/**
 * Lógica de cálculo del Índice VECTOR de Competitividad Estratégica.
 *
 * Fórmula por dimensión (2 preguntas, escala 1-5):
 *   efectivo = inverted ? (6 - respuesta) : respuesta
 *   score = ((efectivo_a + efectivo_b - 2) / 8) * 100
 */

export function calcDimScore(answers, dimKey, questions) {
  const dimQuestions = questions.filter((q) => q.dim === dimKey)

  const effectives = dimQuestions.map((q) => {
    const raw = answers[q.id] ?? 1
    return q.inverted ? 6 - raw : raw
  })

  const sum = effectives.reduce((acc, v) => acc + v, 0)
  const score = ((sum - effectives.length) / (effectives.length * 4)) * 100

  return Math.round(score * 10) / 10
}

export function calcAllScores(answers, questions) {
  const keys = ['V', 'E', 'C', 'T', 'O', 'R']
  const scores = {}
  for (const key of keys) {
    scores[key] = calcDimScore(answers, key, questions)
  }
  return scores
}

export function calcIndex(scores) {
  const values = Object.values(scores)
  const sum = values.reduce((acc, v) => acc + v, 0)
  return Math.round((sum / values.length) * 10) / 10
}

export function getRange(index, ranges) {
  return ranges.find((r) => index >= r.min)
}

export function getWeakestDims(scores, dims, count = 2) {
  return dims
    .map((d) => ({ key: d.key, full: d.full, score: scores[d.key] }))
    .sort((a, b) => a.score - b.score)
    .slice(0, count)
}
