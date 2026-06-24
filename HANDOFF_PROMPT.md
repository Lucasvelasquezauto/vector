# Contexto para continuar el proyecto VECTOR Estrategia

## Tu rol en esta etapa

Actúa como **diseñador(a) visual / de producto senior**, no como ingeniero ejecutando órdenes al pie de la letra. El propósito de esta etapa del proyecto es **exclusivamente diseño** — composición, jerarquía visual, tipografía, espaciado, color, movimiento — no contenido nuevo, no backend, no la app de diagnóstico todavía (eso viene después, ver más abajo).

Esto implica, de forma activa y sin que se te tenga que pedir cada vez:
- **Usa tus skills profesionales de diseño de forma proactiva** (`impeccable`, `design-taste-frontend`, `ui-ux-pro-max` — detalladas abajo). No son un recurso opcional para cuando alguien pregunta "¿qué opinas?": cárgalas y consúltalas como parte normal de tu proceso al revisar o proponer cualquier sección.
- Cuando algo no se vea bien o quede genérico, dilo con criterio propio y una razón concreta — no esperes a que el dueño del proyecto note el problema primero.
- Cuando propongas algo, fundamenta con una fuente real (una regla citable de un skill, una medida real del preview) — nunca con gusto personal disfrazado de autoridad técnica (ver reglas de comportamiento abajo).
- Sigue pensando en jerarquía completa de cada sección (qué pesa más, qué respira, qué se relaciona con qué) en vez de resolver un elemento aislado sin mirar el conjunto.

Estoy refinando el sitio web de **VECTOR Estrategia**, una consultoría de estrategia competitiva para profesionales independientes y pequeñas empresas en Colombia. **No es una empresa de IA** — la IA es una herramienta que usamos, la estrategia es el producto. Esto es central: el diseño nunca debe leerse como "startup de tecnología" (sin morados degradados, sin iconografía de robots, sin lenguaje de "revolución tecnológica").

## Dónde está todo

- **Proyecto actual (el sitio que estamos construyendo):** `C:\Users\lucas\Claude\Code\vector-site`
- **Proyecto viejo (de aquí sale la app del diagnóstico que hay que integrar más adelante):** `C:\Users\lucas\Claude\Projects\VECTOR Comunicaciones\P01_App_VECTOR` — es un proyecto Next.js separado. Cuando lleguemos a la sección de evaluación/diagnóstico, hay que revisar ese proyecto para traer o conectar esa funcionalidad.
- **Contexto de marca:** `C:\Users\lucas\Claude\Code\vector-site\PRODUCT.md` — léelo al empezar. Define registro (brand), usuarios, propósito, personalidad de marca, anti-referencias y principios de diseño.

## Stack técnico

React 18 + Vite. Framer Motion para animación. CSS plano (sin Tailwind, sin CSS modules — cada componente tiene su `.css` global, ej. `Hero.jsx` + `Hero.css`). Tokens de marca en `globals.css`: fondo `#050505`, texto `#F0EBE1`, acento teal `#00E5C4` (`var(--accent-teal)`), acento dorado `#C9A96E`/`#C9952A` según el archivo (`var(--accent-gold)`), serif Cormorant (`var(--font-serif)`, titulares), sans Space Grotesk (`var(--font-sans)`, cuerpo/UI), mono Space Mono (`var(--font-mono)`, etiquetas pequeñas).

## Skills disponibles — úsalas, no improvises

- **`impeccable`**: para craft/critique/audit/polish de UI. Requiere `PRODUCT.md` (ya existe). Tiene reglas reales citables (ej. techo de tipografía de hero `clamp() max ≤ 6rem`, "Hero top padding max ≈6rem, si necesita más aire aumenta escala, no padding").
- **`design-taste-frontend`**: el manual de reglas duras que he venido citando todo este proyecto (`C:\Users\lucas\.claude\skills\design-taste-frontend\SKILL.md`). Tiene reglas mecánicas verificables: techo de hero a 96px, máximo 2 líneas de headline en desktop, altura de nav máx 80px, ban de "eyebrow" en más de 1 de cada 3 secciones, ban de CTAs duplicados con la misma intención, etc. **Cítalas con número de línea cuando las uses** — el dueño del proyecto exige fuentes reales, no opiniones inventadas.
- **`ui-ux-pro-max`**: base de datos consultable vía `python "C:\Users\lucas\.claude\skills\ui-ux-pro-max\scripts\search.py" "<consulta>" --domain ux -n 8`. Útil para verificar si una recomendación tiene respaldo real antes de proponerla — **muchas búsquedas no traen nada relevante, en ese caso dilo explícitamente, no fuerces una cita que no aplica**.

## Cómo levantar el preview y verificar cambios

Servidor configurado en `C:\Users\lucas\Claude\Code\.claude\launch.json` (un nivel arriba del proyecto), nombre **`vector-vite`**, puerto 3034. Úsalo así:
```
preview_start({ name: "vector-vite" })
preview_resize / preview_eval / preview_screenshot
```

**Lección importante de esta sesión: no confíes ciegamente en `preview_screenshot`.** Tuvo al menos un episodio real de desincronización (mostraba contenido en una posición distinta a la real). Si algo se ve raro en la captura, verifica con `preview_eval` usando `getBoundingClientRect()` y `document.elementFromPoint(x, y)` antes de concluir que hay un bug — la métrica real del DOM es la fuente de verdad, no la imagen.

## Reglas de comportamiento que el dueño del proyecto exige (aprendidas a pulso esta sesión)

1. **Nunca edites código sin aprobación explícita e inequívoca** ("sí", "adelante", "dale"). Presenta el plan primero, espera confirmación, luego edita.
2. **Nunca afirmes cómo se ve algo sin medirlo de verdad.** Usa `preview_eval` con `getBoundingClientRect()` para medir posiciones/tamaños reales antes de declarar que algo "se ve bien" o "ya cabe".
3. **Nunca inventes una fuente de diseño.** Si citas una regla, debe existir literalmente en un skill o documento real, con archivo y línea. Si no tienes una fuente real, dilo honestamente en vez de sonar autorizado.
4. **Nunca asumas — pregunta.** Si falta un dato (una ruta, un asset, cuál es "el logo símbolo" de la marca, etc.), pregunta directamente. El dueño fue explícito: "si no sabes algo lo preguntas, o simplemente dices que no lo sabes. Pero nunca nunca inventes."
5. **Cuando el dueño da una instrucción puntual ("arreglo quirúrgico, solo X"), toca solo X.** No empaquetes cambios adicionales no pedidos, incluso si te parecen buena idea — primero pregunta o propón aparte.
6. **Cambios de escritorio no deben afectar el móvil, salvo que se diga explícitamente.** El dueño trabaja viendo una pantalla ancha (resolución real ≈2056px de ancho visible) y ha repetido varias veces que las decisiones de PC son aparte de las de móvil — protege siempre el breakpoint `@media (max-width: 768px)` con los valores anteriores cuando cambies algo en desktop.
7. **Cuando el dueño pide tu opinión profesional ("¿qué opinas?", "usa tus skills"), da una recomendación concreta con razón, no una lista neutra de opciones.** Pero si vas a fundamentar una recomendación con una regla de diseño, esa regla tiene que ser real (ver punto 3).
8. **Si rehaces algo varias veces y pierdes el hilo de qué se aprobó y qué no, dilo y para a reconstruir con cuidado** en vez de seguir adivinando — esto pasó dos veces esta sesión (con la columna del gráfico del Manifiesto) y generó bastante frustración evitable.
9. Todas las medidas que reportes deben ser números reales medidos en el preview (px exactos), no estimaciones.

## Estado actual exacto de cada sección (todo ya implementado y aprobado)

### Nav (`src/components/Nav.jsx` + `Nav.css`)
Todo +50% en escritorio respecto al tamaño original: logo `width={222}` (era 148), padding `2.25rem 3.75rem` (era 1.5rem 2.5rem), gap de links `3.75rem`, link font `1.17rem`, CTA font `1.125rem` padding `0.9rem 2.1rem`. En móvil (`≤768px`) se agregó override explícito para que NO herede el aumento: logo `130px`, padding `1.25rem 1.5rem`, nav-scrolled `1rem 1.5rem`.

### Hero (`src/components/Hero.jsx` + `Hero.css`)
- `.hero`: `justify-content: center` (antes `flex-end` — se cambió para repartir el espacio vacío del viewport).
- Título: 3 líneas exactas (agrupación de palabras en el array `lines` dentro de `Hero.jsx`, la línea 2 llega hasta "evolucionar."), `font-size: clamp(2.38rem, 5.79vw, 6rem)` (96px en pantalla ancha), `max-width: 67rem` (se amplió para que ninguna línea se parta en 2 filas).
- `.hero-label`: `font-size: 1.225rem` (19.6px), `margin-bottom: 1.8rem`.
- `.hero-bottom`: `margin-top: 3.575rem`.
- `.hero-desc`: texto cambiado a "Estrategia competitiva para empresas y profesionales independientes. Planificamos su ruta de evolución competitiva soportada en herramientas de Inteligencia Artificial.", `font-size: clamp(1.29rem, calc(0.92rem + 1.53vw), 2.3rem)` (32px en pantalla ancha), `max-width: 47ch` (angostado ~20% real, medido en la resolución del dueño, no en una de referencia distinta).
- `.hero-bottom` mantiene `justify-content: space-between` (NO se cambió a flex-start — eso fue un error que se revirtió: el dueño quería más aire entre párrafo y botón, no menos).
- `.hero-geo` (gráfico decorativo): agrandado a `min(820px, 64vw)` (antes 540px/46vw). **Bug real corregido**: Framer Motion pisaba el `transform: translateY(-50%)` del CSS con su propio `style={{x,y}}` — la solución fue mover el centrado al mismo `style` de Framer: `style={{ x: geoX, y: geoY, translateY: '-50%' }}` en `Hero.jsx`. Rango de movimiento del mouse ampliado de `[-28,28]/[-18,18]` a `[-140,140]/[-90,90]`.
- Las dos formas "cuadradas" (diamantes rotados) del SVG decorativo se cambiaron a **hexágonos** (mismo color/grosor de línea, solo cambió la geometría de 4 a 6 lados) — están en `Hero.jsx` dentro del SVG del `hero-geo`.

### Marquee (`src/components/Marquee.css`)
Todo +50%: padding `1.5rem 0`, item font `1.05rem`, gap/padding del item `2.7rem`, dot `6px`. Velocidad de la animación bajada de 24s a **36s** (más lento).

### Manifesto (`src/components/Manifesto.jsx` + `Manifesto.css`)
- `.manifesto-inner`: `max-width: 1800px` (antes 1100px, dejaba ~46% de la pantalla ancha vacío).
- `.section-label`: `1.0625rem` (17px).
- Título: ahora **2 líneas** ("Desarrollamos criterio" / "para decidir con *autonomía*."), `font-size: clamp(2.2rem, 3.89vw, 5rem)` (80px), `max-width: 70vw`.
- `.manifesto-text` (párrafo): `font-size: clamp(1.125rem, calc(0.92rem + 0.84vw), 2rem)` (32px), `max-width: 50vw`.
- **El gráfico (`.manifesto-figure-float`) flota con `position: absolute; top:0; right:0`**, tamaño `min(560px, 36vw)` — centrado dentro de su propia columna (`align-items: center`, NO se movió como bloque completo, eso fue otro error corregido). El número `66%` (`.figure-num`) subido a `clamp(3.2rem, 4.6vw, 4.6rem)` (+35% sobre el original, instrucción puntual y aislada).
- **Solo la leyenda del gráfico (`.figure-caption`) está anclada al borde derecho real de la pantalla** (no a su propia caja angosta) vía un wrapper `.figure-caption-wrap { width: 100% }` + `.figure-caption { text-align: right; margin-left: auto }`. Texto actual: "De las MiPymes colombianas usan IA, la mayoría sin estrategia clara." a `font-size: 1.25rem` (20px).
- **El Tease vive DENTRO de esa misma columna flotante** (después de la leyenda, en el espacio libre que queda debajo) — NO es un bloque aparte de ancho completo. Está alineado a la derecha (`align-items: flex-end; text-align: right`).
- Tease rediseñado: la pregunta completa ("¿Tiene claro su nivel de *madurez competitiva* frente a su sector?") ES el botón clickeable (no hay un botón "Sigamos" separado) — palabra por palabra animada (reutiliza el patrón `AnimWord`), con flecha **hacia abajo** al final de la frase, efecto hover de **glow** (no subrayado, eso se descartó), pulso sutil constante (`teasePulse`), font-size `clamp(1.5rem, 2.42vw, 2.07rem)` (+15% sobre la versión anterior, sigue en 2 renglones). Al hacer clic, hace scroll a `#payoff`.

### Payoff (`src/components/Payoff.jsx` + `Payoff.css` — sección NUEVA creada esta sesión)
Antes el remate ("Tal vez se sorprenda con lo que descubra." + botón) vivía dentro del Manifiesto. Se separó en su propia sección de pantalla completa, registrada en `App.jsx` justo después de `<Manifesto />` y antes de `<Evaluacion />`.
- Frase a `font-size: clamp(2.6rem, 6.5vw, 6rem)` (96px, el techo documentado de hero).
- **Marca de agua de fondo**: el símbolo real de la marca (la V + el hexágono de la O del logo, unidos), nuevo componente `src/components/LogoSymbol.jsx` — construido tomando los mismos `<polygon>`/`<path>` exactos de `LogoVector.jsx` (la V y el hexágono de la "O"), reposicionados para quedar juntos. **No es un hexágono genérico inventado — son los trazos reales del logo.** Centrado de fondo, `opacity: 0.11`, tamaño `1100px`, **sin animación de giro** (se probó y se descartó explícitamente).
- Botón: copy "Quiero mi diagnóstico" (se cambió de "Descúbralo en 5 minutos" porque la palabra "descubra" ya está en el texto de arriba — quedaba redundante). Forma píldora (`border-radius: 999px`), color **dorado** (`var(--accent-gold)`, NO teal — el teal ya lo usa la frase, había que diferenciar), borde delgado, fondo transparente que se llena de dorado al hover, con un halo (`::before` con `radial-gradient` + `blur`) permanentemente visible al 55% de opacidad que sube a 100% en hover.

## Próximos pasos

1. Seguir revisando las secciones siguientes en orden real de la página (`App.jsx`): `Evaluacion` → `Services` → `Sectors` → `Process` → `Numbers` → `Testimonial` → `Contact` → `Footer`.
2. Cuando lleguemos a `Evaluacion` (la sección del diagnóstico/evaluación), hay que mirar el proyecto viejo (`C:\Users\lucas\Claude\Projects\VECTOR Comunicaciones\P01_App_VECTOR`) para traer o conectar la app real de diagnóstico — todavía no se ha explorado ese proyecto en esta sesión, así que empieza por entender su estructura antes de proponer nada.
3. Todo lo que se haga de aquí en adelante debe seguir el mismo patrón: plan → aprobación explícita → implementación → verificación con medidas reales → reporte con números.
