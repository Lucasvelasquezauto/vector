# CLAUDE.md — Mapa del proyecto VECTOR Estrategia (vector-site)

Este archivo es el punto de entrada para cualquier sesión de Claude que trabaje en esta carpeta: resume qué es el sitio, dónde vive (repo, hosting, dominio) y cómo se despliega, para no tener que re-verificar accesos y ubicaciones desde cero cada vez. La sección 4 es un registro de decisiones que se va agregando con el tiempo — léela para entender el porqué de los últimos cambios antes de proponer otros.

No duplica lo que ya documentan estos archivos — léelos si tocas esas áreas:
- **`PRODUCT.md`** — a quién le habla el sitio, propósito, personalidad de marca, anti-referencias.
- **`DESIGN.md`** — memoria de diseño canónica: tokens visuales, layout, copy, reglas de trabajo. Cárgalo completo antes de tocar diseño o copy.
- **`HANDOFF_PROMPT.md`** — desactualizado (congelado a mitad de una sesión anterior). No usar como fuente de verdad.

## 1. Qué es

Landing page de VECTOR Estrategia, consultoría de estrategia competitiva para profesionales independientes y pequeñas empresas en Colombia. Incluye una Evaluación Ejecutiva (autodiagnóstico interactivo) como principal gancho de conversión, además de agendamiento de sesión exploratoria.

## 2. Stack y estructura

- **React 19 + Vite 8**, sin TypeScript. Animaciones con Framer Motion, GSAP y Lenis (smooth scroll).
- `src/components/` — una sección del sitio por componente (Hero, Nav, Sectors, Manifesto, Process, Testimonial, Contact, Footer, etc.) con su `.css` hermano.
- `src/pages/` — `Diagnostico.jsx` (la Evaluación Ejecutiva), `Resultado.jsx` (pantalla de resultado), `Pro.jsx`/`Pymes.jsx` (portafolio y precios por línea, rutas `/pro` y `/pymes`), enrutadas con `react-router-dom`.
- `src/lib/vectorData.js` / `vectorCalc.js` — dimensiones, rangos y lógica de cálculo del índice VECTOR (ver [[vector-business-model]] en memoria).
- `src/lib/pricingData.js` — contenido íntegro de las líneas PRO y PyME (productos, precios, condiciones), consumido por `src/components/pricing/PricingPage.jsx` (una sola plantilla para ambas rutas). `src/lib/richText.jsx` da soporte a `**negrita**`/`*cursiva*` inline en ese contenido.
- `src/components/Audience.jsx` — sección en la landing ("¿Por dónde empezar?") que dirige a `/pro` o `/pymes` según el visitante se identifique como profesional independiente o empresa.
- `api/notify-lead.js` — función serverless de Vercel: cuando alguien completa el diagnóstico, envía un correo a `lucasvelasquez@gmail.com` vía **Resend** con el resultado. Requiere env var `RESEND_API_KEY` (vive en `.env.local`, gitignorado; también debe estar configurada en Vercel → Project Settings → Environment Variables para producción).

## 3. Repo, hosting y despliegue

- **GitHub**: `Lucasvelasquezauto/vector`, rama `main`.
- **Vercel**: proyecto `vector` (id `prj_CiDho1HUhgefJZEo23CnjkbVgmR0`), team `lucas-velasquezs-projects`.
- **Dominio de producción**: `vector-st.vercel.app`.
- **Despliegue**: automático — cada push a `main` en GitHub dispara un build de producción en Vercel (no hace falta desplegar manualmente). `git-push.bat` / `push-update.bat` en la raíz son atajos locales para commitear y pushear.
- **Cómo verificar que lo publicado = lo local** (sin construir nada): comparar `git rev-parse HEAD` local vs `git rev-parse origin/main`, y luego confirmar que el deployment de producción más reciente en Vercel (`list_deployments` con `target=production`) tiene el mismo `githubCommitSha`.
- **Última verificación**: 2026-09-22 — push de `6ea2202` a `main`; `origin/main` = local = `6ea2202`, deployment de producción en Vercel creado con ese mismo `githubCommitSha`.

### Seguridad — resuelto 2026-09-22
El remote de git tenía un token personal de GitHub embebido en texto plano en la URL. Ya no: el token había expirado (el push falló con "Invalid username or token"), y se reconfiguró el remote a `https://github.com/Lucasvelasquezauto/vector.git` sin credenciales embebidas — la autenticación ahora la maneja el gestor de credenciales de Windows (login por navegador en cada push si hace falta).

## 4. Changelog de decisiones

Formato: `AAAA-MM-DD — decisión/cambio. Por qué.`

- **2026-09-22** — Se creó este archivo (`CLAUDE.md`). Motivo: verificar sincronía local/GitHub/Vercel requirió varios pasos manuales (git, Vercel API) que conviene no repetir desde cero en cada sesión futura; este archivo centraliza esa información y sirve de bitácora de decisiones.
- **2026-09-22** — Verificación de paridad local/publicado: sin discrepancias. Ver sección 3.
- **2026-09-22** — Se agregó portafolio y pricing público por línea (`/pro`, `/pymes`), reemplazando el modelo implícito de cobro por hora sin productos empaquetados. Contenido tomado de las fichas en `C:\Users\lucas\Claude\Projects\VECTOR Comunicaciones\P13_Fichas_Linea_VECTOR\`. Decisiones clave: (1) precios visibles solo dentro de las páginas de detalle, no en la landing — sin gate adicional (ni botón "revelar precio" ni registro por correo); esto **revierte** la decisión anterior "sin precios en el sitio web" registrada en memoria (`vector-business-model`), actualizada en consecuencia; (2) nombres de línea "PRO" y "PyME" conservados tal cual, con lenguaje llano ("Profesional independiente"/"Empresa") solo en el punto de entrada de la landing; (3) la "Cohorte Sectorial VECTOR" (PRO, USD 390) quedó fuera por ahora — aparecía en un borrador de texto editable pero nunca se incorporó a las versiones HTML terminadas de la ficha. Commit `ad0addc`, pusheado a `main` el mismo día tras resolver la autenticación del remote (ver sección de seguridad arriba).
- **2026-09-22** — Reestructuración de la oferta en la landing (commit `28b58e3`, publicado). Se eliminaron "Tres niveles de acompañamiento" (`Niveles` en `Services.jsx`, con sus tarjetas y arte animado), que venía del modelo de cobro por horas, y se fusionó con "¿Por dónde empezar?" en una sola sección organizada por línea (`Audience.jsx`, `id="services"`): título "VECTOR se articula con su modelo de negocio", dos paneles PRO/PyME con promesa, nombres de producto (derivados de `pricingData.js`) y botón "Ver productos y precios". Motivo: la oferta ya son productos con entregables y precios publicados; el trabajo de la landing es llevar a `/pro` y `/pymes`, no describir productos. Además: (1) menú y footer "Servicios" → "Productos y precios"; (2) `/resultado` ofrece, bajo "Agendar", enlaces a los productos de cada línea; (3) se eliminó la garantía de devolución del 100% de todo el sitio (el dueño la considera impropia de una consultora de alto nivel y abierta a abuso); la sección de cierre de `/pro` y `/pymes` pasa a llamarse "Condiciones"; (4) el público ya no se describe con listas de profesiones/sectores: los sectores iniciales eran ejemplos de arranque, VECTOR atiende a cualquier profesional y cualquier segmento de empresa. Ver `DESIGN.md` §5.6.
- **2026-09-22** — Público abierto en todo el sitio (commit `28b58e3`, publicado). La sección Sectores pasa a presentarse como ejemplos: etiqueta "Modelos de intervención", título "Algunos sectores / *que transformamos*", nota "El modelo VECTOR se adapta a cualquier profesión o tipo de empresa." La línea PyME pasa de "Pequeñas empresas de servicios" a "Empresas con proyección de futuro": el dueño no quiere llamar "pequeña" a la empresa del cliente, y VECTOR también trabaja fuera de los servicios. El lede de `/pymes` y el tagline del footer también dejan de decir "pequeñas" y "de servicios". En `/pro` y `/pymes`, "momento" se reemplazó por el nombre de cada producto ("Hasta dónde llega el diagnóstico / el plan", "Cada producto cierra con…"). `PRODUCT.md` quedó actualizado.
- **2026-09-22** — Desbordamiento horizontal corregido (`b13d3b4`): el resplandor del radar (`.modelo-radar-wrap::before`, `inset:-18%`) ensanchaba la página 73 px en escritorio y 28 px en celular, y la página se podía deslizar de lado. Se corrigió con `overflow-x: clip` en `.modelo`.
- **2026-09-22** — Radar del Modelo VECTOR más grande en celular (`6ea2202`). En pantallas de 900 px o menos, el SVG usa un viewBox recortado al contenido (`62 12 276 314`) y ocupa todo el ancho de la pantalla en 768 px o menos. El texto de ayuda en celular dice "TOQUE CADA DIMENSIÓN". Todo lo anterior se publicó con el push de `6ea2202`.
