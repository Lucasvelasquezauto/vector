export const PROFILE_TEXTS = {
  Consolidada: (w) =>
    `Su evaluación revela un perfil competitivo bien construido. El momento es oportuno para amplificar sus ventajas actuales, con atención especial a ${w[0].full} y ${w[1].full}.`,
  'En desarrollo': (w) =>
    `Su evaluación muestra fortalezas reales con potencial sin explotar, especialmente en ${w[0].full} y ${w[1].full}. Con intervención focalizada, alcanzar el grupo más competitivo de su sector es viable en el corto plazo.`,
  Comprometida: (w) =>
    `Su evaluación revela una posición que requiere atención estratégica. Las brechas más importantes están en ${w[0].full} (${w[0].score}/100) y ${w[1].full} (${w[1].score}/100). La ventana para actuar con ventaja está abierta, pero la competencia también se mueve.`,
  'En riesgo': (w) =>
    `Su evaluación indica una exposición competitiva significativa. Las brechas más críticas están en ${w[0].full} y ${w[1].full}. Cada mes sin un plan estructurado amplía la distancia frente al 15% más competitivo de su sector.`,
}
