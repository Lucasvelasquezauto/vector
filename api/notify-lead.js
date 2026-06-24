import { Resend } from 'resend'
import { DIMS, RANGES } from '../src/lib/vectorData.js'
import { calcIndex, getRange, getWeakestDims } from '../src/lib/vectorCalc.js'

// Correo donde Lucas recibe el aviso de cada diagnóstico completado.
// No requiere dominio verificado en Resend: es la misma cuenta que envía.
const NOTIFY_EMAIL = 'lucasvelasquez@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido.' })
  }

  try {
    const { name, profession, city, scores, resultUrl } = req.body

    if (!scores) {
      return res.status(400).json({ error: 'Faltan datos requeridos.' })
    }

    const index = calcIndex(scores)
    const range = getRange(index, RANGES) || RANGES[RANGES.length - 1]
    const weakest = getWeakestDims(scores, DIMS, 2)

    const dimRows = DIMS
      .map((d) => `<tr><td style="padding:4px 0;color:#666;font-size:13px;">${d.key} · ${d.full}</td><td style="padding:4px 0;font-size:13px;font-weight:700;text-align:right;">${scores[d.key]}</td></tr>`)
      .join('')

    const html = `
      <div style="font-family:Arial,sans-serif;color:#1a1a1a;max-width:560px;">
        <p style="font-size:14px;">Nuevo diagnóstico completado.</p>
        <table cellpadding="0" cellspacing="0" style="font-size:14px;margin-bottom:16px;">
          <tr><td style="padding:3px 12px 3px 0;color:#666;">Nombre</td><td style="font-weight:700;">${name || '—'}</td></tr>
          <tr><td style="padding:3px 12px 3px 0;color:#666;">Profesión</td><td>${profession || '—'}</td></tr>
          <tr><td style="padding:3px 12px 3px 0;color:#666;">Ciudad</td><td>${city || '—'}</td></tr>
        </table>
        <p style="font-size:28px;font-weight:700;margin:0;">${index}<span style="font-size:16px;color:#666;font-weight:400;">/100 · ${range.label}</span></p>
        <p style="font-size:13px;color:#666;margin:8px 0 18px;">Mayores oportunidades: ${weakest[0].full} (${weakest[0].score}) y ${weakest[1].full} (${weakest[1].score})</p>
        <table cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #eee;margin-bottom:20px;">${dimRows}</table>
        ${resultUrl ? `<a href="${resultUrl}" style="display:inline-block;background:#050505;color:#fff;text-decoration:none;padding:11px 20px;border-radius:3px;font-size:13px;">Ver resultado completo</a>` : ''}
      </div>
    `.trim()

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { error } = await resend.emails.send({
      from: 'VECTOR Estrategia <onboarding@resend.dev>',
      to: [NOTIFY_EMAIL],
      subject: `Nuevo diagnóstico: ${name || 'Sin nombre'} · Índice ${index}`,
      html,
    })

    if (error) {
      console.error('[notify-lead] Resend error:', error)
      return res.status(502).json({ error: 'No se pudo enviar el aviso.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[notify-lead] Error:', err)
    return res.status(500).json({ error: 'Error interno.' })
  }
}
