// Contenido de las líneas de portafolio PRO y PyME.
// Transcrito de las fichas fuente en:
// C:\Users\lucas\Claude\Projects\VECTOR Comunicaciones\P13_Fichas_Linea_VECTOR\fuente\
// Los strings usan **negrita** / *cursiva* (ver src/lib/richText.jsx).

export const PRO_DATA = {
  lineLabel: 'Línea PRO — Profesionales independientes',
  forWhomPrefix: 'Es para usted si',
  title: 'Estrategias de competitividad soportadas en Inteligencia Artificial: *optimice recursos, potencie sus ingresos.*',
  lede: 'Productividad que genera calidad de vida, tiempo de calidad y posicionamiento profesional. Psicólogos, contadores, abogados, consultores y todos aquellos que valoran el equilibrio entre su actividad profesional y su vida no laboral.',

  toc: [
    { id: 'gratis', label: 'Los dos primeros pasos', price: 'Sin costo' },
    { id: 'proceso', label: 'Cómo trabajamos' },
    { id: 'recorrido', label: 'El recorrido de su inversión' },
    { id: 'reconocimiento', label: 'Reconocimiento', price: 'USD 590' },
    { id: 'apropiacion', label: 'Apropiación', price: 'USD 1.490' },
    { id: 'consolidacion', label: 'Consolidación', price: 'USD 290/mes' },
    { id: 'condiciones', label: 'Condiciones' },
  ],

  freeSteps: [
    { tag: 'Paso uno', title: 'Evaluación Ejecutiva VECTOR', text: 'Doce preguntas, cinco minutos, sin registro. Devuelve su Índice VECTOR de 0 a 100 y el radar de las seis dimensiones competitivas.' },
    { tag: 'Paso dos', title: 'Sesión Exploratoria', text: 'Una conversación en la que juntos evaluaremos su potencial competitivo, la ruta de creación de valor y las oportunidades de automatización operativa.' },
  ],
  freeQuote: 'La primera evaluación muestra dónde está. El diagnóstico entrega *dónde puede llegar*, en qué orden y qué productos recibe en cada paso.',

  process: {
    title: 'Un proceso *transparente* desde el día uno',
    steps: [
      { title: 'Evaluación Ejecutiva', text: 'Autodiagnóstico gratuito de doce preguntas. Obtiene su Índice VECTOR, el radar de las seis dimensiones y una lectura orientativa de su posición competitiva actual.' },
      { title: 'Sesión Exploratoria', text: 'Conversación de calificación, sin costo. Decidimos juntos si tiene sentido avanzar, qué línea corresponde a su situación y cómo se estructura el proceso exacto.' },
      { title: 'Diagnóstico Profundo', text: 'Formulario de diagnóstico y sesión con el consultor. Análisis riguroso de las seis dimensiones VECTOR aplicado al contexto específico de su profesión.' },
      { title: 'Entrega y hoja de ruta', text: 'Informe con radar actual y objetivo, mapa de oportunidades priorizado e impacto estimado. De ahí salen las rutas de continuidad: autónoma, acompañada o extendida.' },
    ],
  },

  route: {
    title: 'Tres productos y *una puerta de entrada*',
    rows: [
      { variant: 'alt', name: 'Sesión de Enfoque', price: 'USD 190', meta: 'Punto de entrada alternativo · 4 días', cond: 'Se abona completa al Reconocimiento.' },
      { variant: 'm1', name: 'Reconocimiento — Diagnóstico VECTOR Profesional', price: 'USD 590', meta: '10 días', cond: '**USD 400** si se contrata hasta 30 días después de la Sesión de Enfoque.' },
      { variant: 'm2', name: 'Apropiación — Plan de Acción VECTOR', price: 'USD 1.490', meta: '10 semanas · requiere el Reconocimiento', cond: '**USD 1.313** si se contrata hasta 30 días después de terminar el Reconocimiento.' },
      { variant: 'm3', name: 'Consolidación — Asesoría Estratégica', price: 'USD 290 / mes', meta: 'Mínimo 3 meses · requiere Reconocimiento o Apropiación', cond: '**USD 790** el trimestre anticipado.' },
    ],
    program: {
      name: 'Programa *VECTOR PRO*',
      price: 'USD 2.590',
      compare: 'USD 2.950 por separado',
      text: 'Reconocimiento, Apropiación y tres meses de Consolidación, contratados como ruta integral. Incluye beneficios especiales: **prioridad de agenda**, una **remedición adicional** de su Índice VECTOR y una **sesión de cierre de resultados**. Pago en tres o seis cuotas. Si decide detenerse al cerrar el Reconocimiento, se liquida a precio de lista de lo consumido.',
    },
  },

  moments: [
    {
      id: 'reconocimiento', accent: '',
      momentLabel: 'Reconocimiento',
      title: 'Diagnóstico VECTOR Profesional',
      question: '¿Dónde está mi mayor oportunidad de mejora y cuánto puede valer?',
      forWhom: 'quiere claridad antes de invertir tiempo o dinero en herramientas, y prefiere una lectura ordenada de sus procesos profesionales con una priorización consecuente.',
      gives: 'Al final sabrá cuántas horas al mes puede recuperar, qué ingreso se potencia y cuál es la mejor forma de empezar. Lo aproximamos en la sesión con sus propias cifras y se ajusta para la entrega final.',
      receiveLabel: 'Qué recibe',
      receive: [
        'Formulario de diagnóstico detallado, leído y comentado antes de la sesión',
        'Sesión diagnóstica de 120 minutos sobre su práctica real',
        'Índice VECTOR de 0 a 100 y radar de su estado actual frente al estado objetivo acordado',
        '**La cuenta de su tiempo:** cuántas horas al mes ocupa hoy la gestión administrativa y comercial, calculadas con usted',
        'Contexto competitivo de su profesión: qué está cambiando y a qué velocidad',
        '**Mapa de oportunidades** con las horas que libera, el ingreso que habilita y el esfuerzo que exige',
        'Hoja de ruta en tres fases, priorizada según potencial de retorno',
        'Perfil de madurez en IA, con las trampas típicas que aprenderá a vencer',
        'Sesión de entrega de 90 minutos donde el informe se explica y se acuerda la ruta de implementación',
        'Remedición de su Índice a los seis meses, sin costo',
      ],
      keeps: 'Un informe de cinco páginas con la cuenta de su tiempo y el mapa de oportunidades ordenado por retorno, y un tablero web con su Índice VECTOR.',
      facts: [
        { label: 'Duración', value: '10 días' },
        { label: 'Su tiempo', value: '≈ 4 h' },
        { label: 'Formato', value: 'Virtual' },
        { label: 'Requisito', value: 'Ninguno' },
      ],
      notes: [
        '**Hasta dónde llega el diagnóstico.** Deja cuantificada cada recomendación, en qué orden abordarla y qué retorno potencial ofrece. La construcción de las herramientas ocurre en la Apropiación o por su cuenta, siguiendo el mapa de oportunidades.',
        '**Cómo alimenta a la Apropiación.** El mapa de oportunidades se convierte, sin rehacerse, en el plan de trabajo de las sesiones — y en el orden de intervención. La cuenta de su tiempo queda como línea base contra la cual se mide el resultado al cerrar.',
      ],
      price: { amount: 'USD 590', terms: '50% al agendar, 50% antes de la sesión de entrega.', altBold: 'USD 400', altText: 'a partir de la Sesión de Enfoque: sus USD 190 se abonan completos, porque ese análisis se absorbe dentro del diagnóstico.' },
      aside: {
        title: 'Si prefiere empezar más liviano',
        text: 'La **Sesión de Enfoque VECTOR** es una sesión de trabajo de 90 minutos sobre su resultado de la Evaluación Ejecutiva. Obtiene un informe de dos páginas: sus tres decisiones prioritarias de los próximos 90 días, **cada una con las horas al mes que libera, lo que cuesta ponerla en marcha y en cuánto tiempo se paga sola**. USD 190, entrega en cuatro días hábiles, y su valor se abona completo al Reconocimiento si continúa dentro de los 30 días siguientes.',
      },
    },
    {
      id: 'apropiacion', accent: 'b',
      momentLabel: 'Apropiación',
      title: 'Plan de Acción VECTOR',
      question: '¿Qué construyo primero, y cómo lo hago bien?',
      forWhom: 'ya tiene el diagnóstico, sabe qué quiere resolver y quiere construirlo acompañado, con criterio propio para decidir y contratar.',
      gives: 'Al cerrar, las horas recuperadas están medidas y los dos activos que construyó siguen trabajando por usted, semana tras semana. Las capacidades que construimos son suyas.',
      receiveLabel: 'Qué recibe',
      receive: [
        'De cuatro a seis sesiones de trabajo de 90 minutos, en 8 a 10 semanas',
        'Diseño de **dos activos propios** — un asistente especializado, una automatización o un flujo de trabajo — elegidos por lo que devuelven',
        'Especificación funcional escrita de cada uno: el documento con el que construye o contrata sabiendo exactamente qué pide',
        'Criterios de decisión para cada compra que aparezca en el camino: qué conviene y en qué orden',
        'Soporte asincrónico entre sesiones, con respuesta en 48 horas hábiles',
        'Tablero de seguimiento con las horas recuperadas semana a semana',
        'Informe de cierre con **las horas que efectivamente liberó** y su Índice VECTOR remedido',
      ],
      keeps: 'Dos activos digitales que siguen operando, sus especificaciones por escrito y la medición de lo que devolvieron.',
      facts: [
        { label: 'Duración', value: '10 semanas' },
        { label: 'Su tiempo', value: '≈ 12 h' },
        { label: 'Formato', value: 'Virtual' },
        { label: 'Requisito', value: 'Reconocimiento' },
      ],
      notes: [
        '**Hasta dónde llega el plan.** Acompaño el diseño, la decisión y la evaluación de proveedores. La ejecución la hace usted, su equipo o el proveedor que contrate, con la especificación en la mano y criterio para exigir. Por eso el resultado medido al cierre es suyo: es lo que usted puso a funcionar.',
        '**Cómo alimenta a la Consolidación.** Las especificaciones y los criterios de decisión que construimos aquí se vuelven el marco con el que se evalúa cada oferta y cada compra nueva. Con ese marco listo, una revisión de treinta minutos alcanza para resolver una contratación.',
      ],
      price: { amount: 'USD 1.490', terms: '50/50 o tres cuotas sin recargo.', altBold: 'USD 1.313', altText: 'continuando dentro de los 30 días siguientes a su sesión de entrega del Reconocimiento: no hay que rehacer diagnóstico ni inducción, y ese menor costo se le traslada.' },
    },
    {
      id: 'consolidacion', accent: 'c',
      momentLabel: 'Consolidación',
      title: 'Asesoría Estratégica',
      question: '¿Cómo sostengo la ventaja en la próxima decisión?',
      forWhom: 'ya tiene su ruta andando y quiere un interlocutor estratégico permanente para sus decisiones de competitividad y tecnología.',
      gives: 'Cada mes queda registrado qué decidió y qué habría costado la alternativa. El valor se acumula en las compras que evitó y en las herramientas que seguían sirviendo al tercer mes.',
      receiveLabel: 'Qué recibe cada mes',
      receive: [
        'Sesión estratégica de 60 minutos',
        'Soporte asincrónico para decisiones puntuales, con respuesta en 48 horas hábiles',
        'Una revisión al mes de propuesta, cotización o herramienta, **antes de que firme**',
        '**Registro de decisiones** con el costo evitado en cada una, acumulado trimestre a trimestre',
        'Remedición trimestral de su Índice VECTOR con nota de evolución',
      ],
      keeps: 'El registro de decisiones con el costo evitado en cada una, y la serie histórica de su Índice VECTOR.',
      facts: [
        { label: 'Compromiso', value: '3 meses mín.' },
        { label: 'Su tiempo', value: '≈ 1 h / mes' },
        { label: 'Formato', value: 'Virtual' },
        { label: 'Requisito', value: 'Reconocimiento' },
      ],
      notes: [],
      price: { amount: 'USD 290 / mes', terms: 'Mes anticipado. Mínimo tres meses.', altBold: 'USD 790', altText: 'el trimestre anticipado — nueve por ciento menos que el pago mes a mes.' },
    },
  ],

  conditions: [
    { title: 'Las cifras son suyas', text: 'Las horas, los costos y el ingreso potencial de cada entregable se calculan con los datos que usted aporta en sesión. Son su propia línea base.' },
    { title: 'Moneda', text: 'Precios en dólares. La factura se emite en pesos colombianos a la TRM del día de la cotización.' },
    { title: 'Impuestos', text: 'Los precios no incluyen impuestos.' },
    { title: 'Formas de pago', text: '50% para confirmar agenda y 50% antes de la entrega. Tres cuotas sin recargo desde USD 1.490. Cinco por ciento de descuento por pago anticipado total.' },
    { title: 'Puede detenerse', text: 'Cada producto cierra con un entregable completo. La permanencia se limita al compromiso mínimo de la Consolidación.' },
    { title: 'Reprogramación', text: 'Con al menos 24 horas de aviso, sin costo.' },
  ],
}

export const PYME_DATA = {
  lineLabel: 'Línea PyME — Empresas con proyección de futuro',
  forWhomPrefix: 'Es para su empresa si',
  title: 'Estrategias de competitividad soportadas en Inteligencia Artificial: *libere capacidad, aumente su margen.*',
  lede: 'Para negocios donde la administración consume el tiempo que debería ir al cliente. Bienestar, estética y spa, salud no clínica, firmas de servicios profesionales y, en general, cualquier empresa que quiera crecer sin que la operación crezca al mismo ritmo.',

  toc: [
    { id: 'gratis', label: 'Los dos primeros pasos', price: 'Sin costo' },
    { id: 'proceso', label: 'Cómo trabajamos' },
    { id: 'recorrido', label: 'El recorrido de su inversión' },
    { id: 'reconocimiento', label: 'Reconocimiento', price: 'USD 1.890' },
    { id: 'mapa', label: 'Mapa de Competitividad', price: 'USD 690' },
    { id: 'apropiacion', label: 'Apropiación', price: 'USD 3.900' },
    { id: 'consolidacion', label: 'Consolidación', price: 'USD 590/mes' },
    { id: 'condiciones', label: 'Condiciones' },
  ],

  freeSteps: [
    { tag: 'Paso uno', title: 'Evaluación Ejecutiva VECTOR', text: 'Doce preguntas, cinco minutos, sin registro. Devuelve el Índice VECTOR de su empresa y el radar de las seis dimensiones competitivas.' },
    { tag: 'Paso dos', title: 'Sesión Exploratoria', text: 'Una conversación en la que evaluaremos juntos el potencial competitivo del negocio, la ruta de creación de valor y las oportunidades de automatización operativa.' },
  ],
  freeQuote: 'La primera evaluación muestra dónde está el negocio. El diagnóstico entrega *dónde puede llegar*, en qué orden y qué productos recibe en cada paso.',

  process: {
    title: 'Un proceso *transparente* desde el día uno',
    steps: [
      { title: 'Evaluación Ejecutiva', text: 'Autodiagnóstico gratuito de doce preguntas. Obtiene el Índice VECTOR de la empresa, el radar de las seis dimensiones y una lectura orientativa de su posición competitiva actual.' },
      { title: 'Sesión Exploratoria', text: 'Conversación de calificación, sin costo. Decidimos juntos si tiene sentido avanzar, qué alcance corresponde al tamaño de su operación y cómo se estructura el proceso exacto.' },
      { title: 'Fase 1 — Mapa de Competitividad', text: 'Sesión de trabajo con la dirección. Índice VECTOR de la empresa, mapa de los procesos que más carga consumen y estimación en pesos de lo que esa ineficiencia cuesta al año.' },
      { title: 'Fase 2 — Diagnóstico completo y hoja de ruta', text: 'Sesión con el equipo directivo e informe con matriz de prioridad y retorno, casos de uso costeados y hoja de ruta en tres fases. De ahí salen las rutas de continuidad.' },
    ],
  },

  route: {
    title: 'Tres productos y *una puerta de entrada*',
    rows: [
      { variant: 'alt', name: 'Mapa de Competitividad VECTOR', price: 'USD 690', meta: 'Fase 1 del Reconocimiento · 2 semanas', cond: 'Más **USD 1.200** para completar el diagnóstico — el total es el mismo.' },
      { variant: 'm1', name: 'Reconocimiento — Diagnóstico VECTOR Empresarial', price: 'USD 1.890', meta: '4 semanas · incluye el Mapa de Competitividad', cond: '**USD 1.200** si empezó por el Mapa de Competitividad.' },
      { variant: 'm2', name: 'Apropiación — Plan de Implementación VECTOR', price: 'USD 3.900', meta: '10 semanas · requiere el Reconocimiento', cond: '**USD 3.432** si se contrata hasta 30 días después de terminar el Reconocimiento.' },
      { variant: 'm3', name: 'Consolidación — Alianza VECTOR', price: 'USD 590 / mes', meta: 'Mínimo 6 meses · requiere Reconocimiento o Apropiación', cond: '**USD 3.240** el semestre anticipado.' },
    ],
    program: {
      name: 'Programa *VECTOR Aplicado*',
      price: 'USD 6.900',
      compare: 'USD 7.560 por separado',
      text: 'Reconocimiento, Apropiación y tres meses de Consolidación, contratados como ruta integral. Incluye beneficios especiales: **prioridad de agenda**, una **remedición adicional** del Índice VECTOR y una **sesión de cierre de resultados** con la dirección. Pago en tres o seis cuotas. Si decide detenerse al cerrar el Reconocimiento, se liquida a precio de lista de lo consumido.',
    },
  },

  moments: [
    {
      id: 'reconocimiento', accent: '',
      momentLabel: 'Reconocimiento',
      title: 'Diagnóstico VECTOR Empresarial',
      question: '¿Dónde está nuestra mayor oportunidad de eficiencia y cuánto puede valer?',
      forWhom: 'la carga administrativa crece más rápido que las ventas, y quiere priorizar dónde invertir en tecnología antes de contratar a ningún proveedor.',
      gives: 'Al terminar conocerá el costo anual de su carga administrativa y tendrá las oportunidades ordenadas por retorno, cada una con su inversión y su ahorro estimados. Lo calculamos en la sesión con las cifras de su propia operación.',
      receiveLabel: 'Qué recibe',
      receive: [
        '**Fase 1 — Mapa de Competitividad:** sesión de trabajo con la dirección de 120 minutos, Índice VECTOR de la empresa y radar de las seis dimensiones',
        'Mapa de los cinco procesos que más carga operativa consumen hoy',
        '**Costo anual de la ineficiencia** identificada, en pesos, calculado con sus propias cifras',
        'Formulario de diagnóstico detallado, leído y comentado antes de la sesión',
        '**Fase 2 —** sesión diagnóstica completa de 120 minutos con el equipo directivo',
        'Contexto competitivo de su sector: qué está cambiando y a qué velocidad',
        'Informe de ocho páginas con el diagnóstico operativo y la **matriz de prioridad y retorno**',
        'Casos de uso costeados: la inversión y el retorno estimados de cada oportunidad prioritaria',
        'Hoja de ruta en tres fases, priorizada según potencial de retorno',
        'Sesión de entrega de 90 minutos con la dirección, donde se acuerda la ruta de implementación',
        'Tablero web de la empresa y remedición del Índice a los seis meses, sin costo',
      ],
      keeps: 'Un informe de ocho páginas con el costo de su ineficiencia, la matriz de prioridad y retorno y los casos de uso costeados, más el tablero web con el Índice de la empresa.',
      facts: [
        { label: 'Duración', value: '4 semanas' },
        { label: 'Dedicación', value: '≈ 8 h' },
        { label: 'Formato', value: 'Virtual' },
        { label: 'Requisito', value: 'Ninguno' },
      ],
      notes: [
        '**Hasta dónde llega el diagnóstico.** Deja cuantificada cada oportunidad, en qué orden abordarla y qué retorno potencial ofrece. La definición técnica y la contratación de proveedores ocurren en la Apropiación o por su cuenta, siguiendo la matriz de prioridad y retorno.',
        '**Cómo alimenta a la Apropiación.** La matriz de prioridad y retorno se convierte, sin rehacerse, en el orden en que se escriben las especificaciones funcionales. El costo de la ineficiencia queda como línea base contra la cual se mide el resultado al cerrar.',
      ],
      price: { amount: 'USD 1.890', terms: '50% al agendar, 50% antes de la sesión de entrega.', altBold: 'USD 1.200', altText: 'si empezó por el Mapa de Competitividad. El total es el mismo — 690 + 1.200 = 1.890 — contrate el diagnóstico completo de una vez o por fases.' },
    },
    {
      id: 'mapa', accent: 'n',
      momentLabel: 'Puerta de entrada — Fase 1 del Reconocimiento',
      title: 'Mapa de Competitividad VECTOR',
      question: '¿Qué tenemos hoy, y por dónde empezaría el trabajo?',
      forWhom: 'quiere ver el terreno antes de comprometer el diagnóstico completo, y prefiere decidir con una primera medición sobre la mesa.',
      gives: 'Le muestra el camino: dónde está la empresa hoy, qué procesos pesan más y cuánto cuesta esa carga al año. La priorización, los casos costeados y la hoja de ruta llegan con el diagnóstico completo.',
      receiveLabel: 'Qué recibe',
      receive: [
        'Sesión de trabajo con la dirección, 120 minutos',
        '**Índice VECTOR de la empresa** y radar de las seis dimensiones competitivas',
        'Mapa de los cinco procesos que más carga operativa consumen hoy',
        '**Estimación en pesos** de lo que esa carga cuesta al año, calculada con sus propias cifras',
        'Informe de tres páginas con la recomendación de alcance para el diagnóstico completo',
      ],
      keeps: 'Un informe de tres páginas con su Índice VECTOR, los cinco procesos que más pesan y lo que esa carga cuesta al año.',
      facts: [
        { label: 'Duración', value: '2 semanas' },
        { label: 'Dedicación', value: '≈ 3 h' },
        { label: 'Formato', value: 'Virtual' },
        { label: 'Requisito', value: 'Ninguno' },
      ],
      notes: [
        '**Hasta dónde llega esta fase.** Mide y ordena: deja saber dónde está la empresa y qué le está costando su operación actual. La matriz de prioridad y retorno, los casos de uso costeados y la hoja de ruta en tres fases son parte del diagnóstico completo.',
        '**Cómo alimenta al Reconocimiento.** Todo lo que se produce aquí es la Fase 1 del diagnóstico: no se rehace y no se vuelve a pagar. El Índice VECTOR y el costo de la ineficiencia quedan como línea base contra la cual se mide el resultado de toda la ruta.',
      ],
      price: { amount: 'USD 690', terms: 'Pago anticipado.', altBold: 'USD 1.200', altText: 'para completar el diagnóstico. El total es el mismo: 690 + 1.200 = 1.890. Empezar por aquí no cuesta más; solo divide la decisión en dos.' },
    },
    {
      id: 'apropiacion', accent: 'b',
      momentLabel: 'Apropiación',
      title: 'Plan de Implementación VECTOR',
      question: '¿Qué contratamos, a quién, y cómo sabemos que quedó bien hecho?',
      forWhom: 'ya tiene el diagnóstico, sabe qué procesos quiere resolver y quiere contratar con una especificación escrita y no con una idea.',
      gives: 'Al cerrar, las soluciones prioritarias están especificadas y cotizadas, y su equipo sabe qué exigirle a cada proveedor. Identifica su necesidad real antes de firmar, no después: la diferencia frente a lo cotizado es dinero que no gasta.',
      receiveLabel: 'Qué recibe',
      receive: [
        'Seis sesiones de trabajo de 90 minutos, en 8 a 10 semanas',
        '**Especificación funcional escrita** de dos a tres soluciones priorizadas: el documento con el que sale a contratar sabiendo exactamente qué pide',
        'Criterios de selección de proveedor y **matriz de evaluación de cotizaciones**',
        'Acompañamiento en la evaluación de hasta tres propuestas de proveedores',
        'Plan de adopción interna: quién hace qué, en qué orden y con qué indicador',
        'Tablero de indicadores de la implementación',
        'Informe de cierre con el resultado medido contra la línea base y el Índice VECTOR remedido',
      ],
      keeps: 'Las especificaciones funcionales por escrito, la matriz con la que evaluó a sus proveedores y el plan de adopción de su equipo.',
      facts: [
        { label: 'Duración', value: '10 semanas' },
        { label: 'Dedicación', value: '≈ 15 h' },
        { label: 'Formato', value: 'Virtual' },
        { label: 'Requisito', value: 'Reconocim.' },
      ],
      notes: [
        '**Hasta dónde llega el plan.** Acompaño la definición, la decisión y la evaluación de proveedores. El desarrollo lo hace su equipo o el proveedor que contrate, con la especificación en la mano y criterio para exigir. Por eso el resultado medido al cierre es suyo: es lo que su empresa puso a funcionar.',
        '**Cómo alimenta a la Consolidación.** Las especificaciones y la matriz de evaluación se vuelven el marco con el que se mide cada cotización nueva. Con ese marco listo, una revisión alcanza para resolver una contratación que antes tomaba semanas.',
      ],
      price: { amount: 'USD 3.900', terms: 'Tres cuotas sin recargo.', altBold: 'USD 3.432', altText: 'continuando dentro de los 30 días siguientes a su sesión de entrega del Reconocimiento: no hay que rehacer diagnóstico ni inducción, y ese menor costo se le traslada.' },
    },
    {
      id: 'consolidacion', accent: 'c',
      momentLabel: 'Consolidación',
      title: 'Alianza VECTOR',
      question: '¿Cómo decidimos la próxima inversión tecnológica con criterio?',
      forWhom: 'ya tiene su ruta andando y quiere un interlocutor estratégico permanente para las decisiones de competitividad y tecnología.',
      gives: 'Cada mes queda registrado qué decidieron y qué habría costado la alternativa. El valor se crea en las inversiones que acertaron y en los proveedores que no tuvieron que reemplazar.',
      receiveLabel: 'Qué recibe cada mes',
      receive: [
        'Sesión estratégica de 90 minutos con la dirección',
        'Soporte asincrónico para decisiones de inversión tecnológica, con respuesta en 48 horas hábiles',
        'Revisión de hasta dos cotizaciones o propuestas de proveedores, **antes de que firmen**',
        '**Registro de decisiones** con el costo evitado en cada una, acumulado trimestre a trimestre',
        'Informe mensual de evolución de indicadores y remedición trimestral del Índice VECTOR',
      ],
      keeps: 'El registro de decisiones con el costo evitado en cada una, y la serie histórica del Índice VECTOR de la empresa.',
      facts: [
        { label: 'Compromiso', value: '6 meses mín.' },
        { label: 'Dedicación', value: '≈ 2 h / mes' },
        { label: 'Formato', value: 'Virtual' },
        { label: 'Requisito', value: 'Reconocim.' },
      ],
      notes: [],
      price: { amount: 'USD 590 / mes', terms: 'Mes anticipado. Mínimo seis meses.', altBold: 'USD 3.240', altText: 'el semestre anticipado — ocho por ciento menos que el pago mes a mes.' },
    },
  ],

  conditions: [
    { title: 'Las cifras son suyas', text: 'El costo de la ineficiencia, los ahorros y los retornos estimados se calculan con los datos que su empresa aporta en sesión. Son su propia línea base.' },
    { title: 'Moneda', text: 'Precios en dólares. La factura se emite en pesos colombianos a la TRM del día de la cotización.' },
    { title: 'Impuestos', text: 'Los precios no incluyen impuestos.' },
    { title: 'Formas de pago', text: '50% para confirmar agenda y 50% antes de la entrega. Tres cuotas sin recargo desde USD 1.890. Cinco por ciento de descuento por pago anticipado total.' },
    { title: 'Puede detenerse', text: 'Cada producto cierra con un entregable completo. La permanencia se limita al compromiso mínimo de la Consolidación.' },
    { title: 'Reprogramación', text: 'Con al menos 24 horas de aviso, sin costo.' },
  ],
}
