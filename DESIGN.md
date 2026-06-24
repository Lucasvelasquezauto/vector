# Design Memory — VECTOR Estrategia (vector-site)

Esta es la memoria de diseño canónica del proyecto. Cárgala completa antes de tocar cualquier sección. `PRODUCT.md` (en esta misma carpeta) cubre registro/usuarios/personalidad de marca a alto nivel — este archivo cubre decisiones concretas de diseño, copy y layout, y las reglas de trabajo que rigen este proyecto.

**`HANDOFF_PROMPT.md` está desactualizado** (quedó congelado a mitad de una sesión anterior, antes de varios cambios grandes: la sección Proceso se eliminó, Testimonial+Contact se fusionaron, Sectores se rediseñó por completo). No lo uses como fuente de verdad — este archivo lo reemplaza.

Estado: **versión definitiva del sitio**, confirmada por el dueño del proyecto.

---

## 1. Qué es VECTOR Estrategia (y qué NO es)

Consultoría de estrategia competitiva para profesionales independientes y pequeñas empresas en Colombia (psicólogos, asesores de seguros, abogados, negocios de bienestar/spa, etc.). **La IA es una herramienta que usamos, no el producto.** El diseño y la copy nunca deben leerse como "empresa de tecnología" o "startup de IA": sin morados degradados, sin iconografía de robots, sin lenguaje de "revolución tecnológica". La audiencia llega escéptica del hype de IA y necesita ver **criterio y rigor**, no entusiasmo tecnológico.

Ver `PRODUCT.md` para personalidad de marca y anti-referencias completas.

---

## 2. Identidad visual

### Tokens (`src/globals.css`)
```
--bg:           #050505   (fondo principal)
--surface:      #0C0C0B   (fondo de secciones alternas)
--card:         #101010   (tarjetas)
--card-hover:   #151513
--border:       rgba(255,255,255,0.055)
--border-mid:   rgba(255,255,255,0.10)
--text:         #F0EBE1
--text-mid:     #8C8880
--text-faint:   #2E2C29   (¡cuidado! casi invisible sobre --card — no usar para texto que deba leerse, ver §6)
--accent-teal:  #00E5C4
--accent-gold:  #C9A96E
--accent-volt:  #D4FF47   (uso puntual, no es acento principal)

--font-serif: 'Cormorant', Georgia, serif    (titulares, display)
--font-sans:  'Space Grotesk', system-ui     (cuerpo, UI)
--font-mono:  'Space Mono', monospace        (etiquetas pequeñas, mono labels)

--ease-out:    cubic-bezier(0.16, 1, 0.3, 1)   ← easing por defecto para reveals
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Reglas de color
- Teal = acento "actual/predeterminado" en todo el sitio (CTAs, líneas, hover). Dorado = momentos de énfasis puntual dentro de un texto (`<em className="text-gold">`) o para diferenciar un elemento del resto (ej. botón de Payoff es dorado precisamente porque la frase de arriba ya usa teal).
- La tarjeta 3 de Niveles ("Asesoría Estratégica") usa un acento **azul** (`#3B82F6`) en vez de teal/dorado — deliberado, para diferenciarla visualmente de las otras dos tarjetas (ver §5.3).
- El radar hexagonal de "El Modelo VECTOR" usa teal para "estado actual" y dorado punteado para "potencial/benchmark" — ese par de colores es el lenguaje visual fijo de cualquier radar VECTOR (reutilizado en `ResultRadar.jsx` del flujo de diagnóstico).

### El hexágono como motivo
El hexágono es la forma de la **O del logo** (ver `LogoVector.jsx` y `LogoSymbol.jsx`). Reutilizarlo decorativamente en otras partes del sitio (radar de 6 ejes, contenedores de stats, etc.) refuerza el recuerdo de marca — **no es dilución de significado**. La única restricción real: el **radar hexagonal específicamente** no debe representar nunca el entregable pagado del Diagnóstico VECTOR como si fuera lo mismo que un resultado gratuito — ese es el límite, no el hexágono como forma en general.

### Tipografía — jerarquía de uso
- **Cormorant (serif)**: todo titular/display (`h1`-`h3` de cada sección), las citas (`blockquote`). Cursiva del serif = énfasis editorial (ej. "*importa.*", "*portafolio de nuevas oportunidades*").
- **Space Grotesk (sans)**: cuerpo de texto, botones, nav, descripciones.
- **Space Mono**: SOLO etiquetas pequeñas en mayúsculas con letter-spacing (section labels tipo "— NOSOTROS", notas técnicas pequeñas como bio del fundador, labels de tooltip). Nunca para párrafos largos.

### Animación
- Reveals estándar: `opacity:0, y:20-40` → `opacity:1, y:0` con `var(--ease-out)`, duración 0.7-1s, con pequeños `delay` escalonados por índice cuando hay varios elementos hermanos (no todos al mismo tiempo).
- Animaciones en loop (CSS `@keyframes`) siempre dentro de `@media (prefers-reduced-motion: no-preference)`, con alternativa estática en `prefers-reduced-motion: reduce`.
- Framer Motion (`motion`, `useInView`) para reveals al hacer scroll, `once: true` (no se repiten al volver a pasar).
- **Bug de origen de transform en SVG**: `transform: scale()` sobre un `<circle>`/shape SVG usa por defecto la esquina del viewport como origen, no el centro de la figura → se ve como si "volara" en diagonal en vez de crecer en su lugar. Fix: `transform-box: fill-box; transform-origin: 50% 50%;` en la clase animada (ver `.art-ring` en `Services.css`).

---

## 3. Reglas de copy y voz de marca

1. **Afirmativo primero**: la copy comunica lo que VECTOR es, nunca lo que no es. Evitar el patrón "es X, no Y" (antítesis por negación) — afirmar la cualidad positiva sola. Ejemplo de algo que se corrigió esta sesión: "es gratuita y sin compromiso" → "va por nuestra cuenta".
2. **No-tech-hype**: nunca usar lenguaje de "revolución tecnológica", "disrupción", IA como protagonista. La estrategia y el criterio son el producto.
3. **No repetir frases/pilares ya usados en otra sección.** Ej.: "criterio" ya se usa en el Manifiesto — no reusar la misma palabra clave como eje de otra sección sin razón.
4. **Evitar finales de frase con tríadas de adjetivos abstractos** ("eficiente, rentable y sostenible" es el único caso aceptado porque cierra la cita del fundador con ritmo de tres — no convertir esto en patrón repetido en otras secciones). Preferir una imagen concreta y vívida sobre una lista de adjetivos vagos.
5. **Nunca redactar copy basada en miedo/temor indirecto.** Se evaluó explícitamente para la cita del fundador y se descartó a favor de "urgencia racional" (mostrar lo que se gana, no lo que se pierde por no actuar).
6. Mono/uppercase labels (section labels tipo "— NOSOTROS") se usan con moderación — no convertir en un eyebrow obligatorio en cada sección si no aporta.

---

## 4. Estructura de la página (`src/App.jsx`)

Orden real y definitivo, ruta `/`:

```
Nav → Hero → Marquee → Manifesto → Payoff → ModeloVector → Niveles → Sectors → Testimonial → Footer
```

Rutas adicionales: `/evaluacion` (`Diagnostico.jsx`, el cuestionario VECTOR de 12 preguntas) y `/resultado` (`Resultado.jsx`, pantalla de resultado con `ResultRadar`). Ambas con `FlowHeader` minimalista en vez del `Nav` completo.

**Archivos en disco que ya NO se usan en la página** (dejados intencionalmente, no eliminados, por instrucción explícita del dueño): `Process.jsx`/`Process.css`, `Contact.jsx`/`Contact.css`. La sección "Proceso" se eliminó por ser redundante con contenido ya cubierto en otras secciones; "Contact" se fusionó dentro de `Testimonial.jsx` (ver §5.7). `.testimonial-note` en `Testimonial.css` también quedó huérfana tras quitar esa nota del JSX.

---

## 5. Estado final de cada sección

### 5.1 Nav (`Nav.jsx` + `Nav.css`)
Logo + 3 links (`Servicios #services`, `Sectores #sectors`, `Nosotros #contact` — apunta a la sección fusionada) + CTA "Hablar con nosotros" → `#contact`. Scroll-to-hash vía `scrollIntoView`, no anchors reales (`href="#"` con `preventDefault`).

### 5.2 Hero
Título de 3 líneas, gráfico decorativo `hero-geo` con hexágonos (no diamantes), reacciona al mouse vía Framer Motion `useTransform`. Texto actual: "Estrategia competitiva para empresas y profesionales independientes. Planificamos su ruta de evolución competitiva soportada en herramientas de Inteligencia Artificial."

### 5.3 Manifesto
Título "Desarrollamos criterio / para decidir con *autonomía*." + stat flotante "66% de las MiPymes colombianas usan IA, la mayoría sin estrategia clara." + Tease (pregunta clickeable que hace scroll a `#payoff`).

### 5.4 Payoff (sección propia, separada del Manifiesto)
Frase "Tal vez se sorprenda con lo que descubra." sobre marca de agua `LogoSymbol` (la V + hexágono del logo real, no un hexágono genérico). Botón dorado "Quiero mi diagnóstico" → `/evaluacion` (react-router `Link`), con meta-línea rescatada de la antigua sección Evaluación: "Gratuita · 12 preguntas · 5 minutos · Sin registro".

### 5.5 ModeloVector (`Services.jsx`, export `ModeloVector`)
Radar hexagonal interactivo de 6 ejes (V-E-C-T-O-R), hover/tap por dimensión muestra nombre + descripción. Polígono teal = estado actual, polígono dorado punteado = potencial. CTA "Conozca cómo lo logramos juntos" hace scroll a `#services` (Niveles).

### 5.6 Niveles (`Services.jsx`, export `Niveles`, `id="services"`)
3 tarjetas full-bleed, sin caja de icono (explícitamente rechazado por verse "como cartelera escolar"). Cada tarjeta: número grande en círculo + nombre + descripción + arte SVG de fondo que comunica la **estructura temporal** del nivel (no es decoración abstracta):
- **1. Diagnóstico VECTOR** (entregable único): puntos de pulso que se conectan, sugiere un "snapshot" — acento teal.
- **2. Plan de Acción VECTOR** (proceso acotado de varias semanas): onda continua que se desplaza (loop de 12s, período de 400px ajustado para que no salte) — acento dorado.
- **3. Asesoría Estratégica** (relación abierta/continua): anillos concéntricos que se expanden indefinidamente — acento **azul** `#3B82F6` (deliberadamente distinto de las otras dos para diferenciar el nivel "siempre abierto").
Tooltip por tarjeta (botón "i", hover en desktop + tap en mobile) muestra el entregable concreto ("Recibe: ..."). Desktop: grid de 3 columnas que llena la pantalla (`min-height:100svh`, flex stretch). Mobile: columna única, `height:auto`, des-acoplado del stretch de desktop.

### 5.7 Sectors (`Sectors.jsx`, `id="sectors"`)
Acordeón full-bleed de 4 paneles fotográficos (psicólogos, seguros, legal, bienestar), construido con flexbox (`flex-grow:1` por defecto, `flex-grow:2` en `.is-expanded`) — no CSS Grid, para evitar el bug de estiramiento uniforme de filas. Hover (desktop) o tap (mobile) expande un panel y revela su `headline` + 3 `automations` específicas del sector (copy única por sector, no genérica). Mobile: columna vertical, paneles colapsados a 160px, expandido a 420px.

### 5.8 Testimonial / Closing (`Testimonial.jsx`, `id="contact"`)
Sección fusionada de "Nosotros" (testimonio del fundador) + "Contacto" (CTA de agenda), dos columnas en desktop para aprovechar el ancho de pantalla completo:
- **Columna izquierda** (`.closing-trust`): label "Nosotros", cita del fundador ("Toda empresa tiene un punto de inflexión..."), foto + nombre + rol + bio.
- **Columna derecha** (`.closing-cta`): label "Sesión exploratoria — sin costo", título "Una conversación tranquila y un *portafolio de nuevas oportunidades*.", párrafo ("La primera conversación va por nuestra cuenta. En 60 minutos evaluamos juntos el potencial competitivo, la ruta de valor y las eficiencias operativas, diseñando el proceso específico para su negocio."), botones (Agendar sesión exploratoria → Cal.com / Hacer la Evaluación Ejecutiva → `/evaluacion`), email de contacto.
- **No hay línea divisoria entre columnas** (`.closing-divider` se eliminó — se veía como una hoja de cálculo). La separación es puramente el `gap` del grid.
- **Cada columna llena su carril completo del grid** (`grid-template-columns: 1fr 1fr`, sin `max-width` restrictivo en `.closing-col` ni `justify-self: end/start`) — antes el contenido se "jalaba" hacia el centro dejando más espacio en los bordes que entre columnas; ahora los márgenes quedan parejos.
- Mobile (`≤900px`): una sola columna, sin divisor.

### 5.9 Footer
3 columnas de links (Servicios, Empresa, Contacto) + tagline + copyright. Todos los links de hash son `<button onClick={scrollTo}>`, el email es un `<a href="mailto:...">`. Sin fila de "Privacidad/Términos" (esas páginas no existen aún).

---

## 6. Bugs reales encontrados y corregidos esta sesión (para no repetirlos)

- **Contraste roto**: `.author-bio` usaba `var(--text-faint)` (#2E2C29) sobre `var(--card)` (#101010) — casi invisible. Corregido a `var(--text-mid)`.
- **Grid blowout / espacio muerto**: CSS Grid con `align-items: stretch` por defecto + `min-height: auto` implícito en los hijos estira todas las filas a la altura del hermano más alto, dejando huecos en blanco. Pasó en Niveles (mobile) — se evitó proactivamente en Sectors usando flexbox en vez de Grid para la fila de paneles.
- **Animación de SVG que "vuela" en diagonal**: ver §2, fix con `transform-box: fill-box`.
- **Salto visible en loop de animación**: el path de la onda (Plan de Acción) tenía un período visual real de 400px pero la animación solo trasladaba 200px antes de reiniciar. Fix: extender el path un período más y ajustar keyframe + duración.
- **Footer con email sin wrap**: el correo largo desbordaba su columna en mobile. Fix: `overflow-wrap: anywhere` en `.footer-link`.
- **Hero/Nav se superponían en mobile**: el padding del Hero no dejaba espacio para el logo del Nav fijo. Fix: padding-top explícito en el breakpoint mobile de `Hero.css`.

---

## 7. Reglas de trabajo con el dueño del proyecto (Lucas)

1. **Nunca ejecutar un cambio de código/diseño sin aprobación explícita** ("sí", "adelante", "dale", "oko"). Siempre: diagnóstico con evidencia concreta → lista numerada de cambios propuestos → esperar confirmación → recién ahí editar. Esto aplica incluso a cambios que parezcan obvios o pequeños, y aunque el dueño ya haya nombrado el problema (nombrar el problema no es aprobar la solución).
2. **Medir, no asumir.** Usar `getBoundingClientRect()` vía `preview_eval` para confirmar posiciones/tamaños reales antes de declarar que algo "ya quedó bien".
3. **No inventar fuentes de diseño.** Si se cita una regla de un skill, debe existir literalmente, con archivo y línea.
4. **Cambios de desktop no deben afectar mobile** salvo que se diga explícitamente — siempre verificar el breakpoint `@media (max-width: 768px)` después de tocar desktop.
5. Cuando el dueño da su propia redacción de copy (títulos, frases), se usa tal cual la entrega — no se "mejora" sin que él lo pida.
6. El dueño prefiere recomendaciones concretas con una razón, no listas neutras de opciones, cuando pide opinión profesional.

---

## 8. Pendientes / fuera de alcance (explícitamente no resueltos aún)

- Páginas de Privacidad y Términos (footer las omite hasta que existan).
- Envío de resultado del diagnóstico por email vía Resend — implementado en `api/send-result.js` y `api/notify-lead.js` (ver tareas completadas), pero no es parte de este documento de diseño visual.
