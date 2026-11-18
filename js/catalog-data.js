/**
 * Public storefront data. Set an HTTPS URL to activate a channel everywhere.
 * Empty URLs render as availability states, never as links.
 */
export const STORE_LINKS = {
  creatorHub: { itchIo: 'https://elbuilder77.itch.io', gumroad: '', microsoftStore: '' },
  species: {
    buggy:     { itchIo: 'https://elbuilder77.itch.io/buggy-3d-bot',     gumroad: '', microsoftStore: '' },
    pyxol:     { itchIo: 'https://elbuilder77.itch.io/pyxol-3d-bot',     gumroad: '', microsoftStore: '' },
    velkarion: { itchIo: 'https://elbuilder77.itch.io/velkarion-3d-bot', gumroad: '', microsoftStore: '' },
    nimpu:     { itchIo: 'https://elbuilder77.itch.io/nimpu-3d-bot',     gumroad: '', microsoftStore: '' },
    lumilisk:  { itchIo: 'https://elbuilder77.itch.io/lumilisk-3d-bot',  gumroad: '', microsoftStore: '' },
    yuravax:   { itchIo: 'https://elbuilder77.itch.io/yuravax-3d-bot',   gumroad: '', microsoftStore: '' },
  },
  bundles: {
    playfulDuo: { itchIo: '', gumroad: '', microsoftStore: '' },
    dragonDuo:  { itchIo: '', gumroad: '', microsoftStore: '' },
    dreamyDuo:  { itchIo: '', gumroad: '', microsoftStore: '' },
    fullSquad:  { itchIo: '', gumroad: 'https://elbuilder.gumroad.com/l/zero-ui-3d-bots', microsoftStore: '' },
  },
};

export const SPECIES_ORDER = ['buggy', 'pyxol', 'velkarion', 'nimpu', 'lumilisk', 'yuravax'];
function creature(id, name, color, rgb, secondary, secondaryRgb, physics, en, es, exeHash, exeBytes, appxHash, appxBytes) {
  return {
    id, name, glowColor: color, glowRgb: rgb, secondaryColor: secondary, secondaryRgb, physics, defaultStage: 2,
    copy: {
      en: { tagline: en, physicsLabel: en, desktopContext: { winTitle: 'Windows desktop', line1: 'Interactive 3D preview.', line2: 'Move, pet and rotate.' } },
      es: { tagline: es, physicsLabel: es, desktopContext: { winTitle: 'Escritorio de Windows', line1: 'Vista interactiva 3D.', line2: 'Mueve, acaricia y gira.' } },
    },
    exe: { filename: name + '-1.1.1-portable.exe', sizeBytes: exeBytes, sha256: exeHash, virustotalUrl: 'https://www.virustotal.com/gui/file/' + exeHash },
    appx: { filename: name + '-1.1.1-store-x64.appx', version: '1.1.1.0', sizeBytes: appxBytes, sha256: appxHash },
  };
}
export const SPECIES_CATALOG = {
  buggy: creature('buggy', 'Buggy', '#22c55e', '34, 197, 94', '#bef264', '190, 242, 100', 'jelly',
    'Rounded shapes, elastic movement.', 'Formas redondeadas y movimiento elástico.',
    '6a62b07b935399ffdac962e57186a30fff8c0915b3862eead35676e337f4dd01', 112044638,
    '27845771da6139b3d4396b4e02d32617a1f2a040253c1b9cedc041e00b12dca1', 168107344),
  pyxol: creature('pyxol', 'Pyxol', '#ec4899', '236, 72, 153', '#22d3ee', '34, 211, 238', 'glitch',
    'Pixel geometry, glitch effects.', 'Geometría píxel y efecto glitch.',
    '92ca43e7c9d65febed1cef3af4e03f7dcc6278060855522530ee8ebd4fd0132d', 111941238,
    '4a87e7bf2e6dac28c69f2902320912db3de165ec3b01080de391f6f0be736034', 168177362),
  velkarion: creature('velkarion', 'Velkarion', '#f97316', '249, 115, 22', '#fde047', '253, 224, 71', 'heavy',
    'An armored mecha-drake with a solar reactor.', 'Un mecha-draco acorazado con reactor solar.',
    'bbe62103775c755e2a886631fae285318b78e8eb68fd3e55d669873de04faaa2', 112140717,
    '2e8a7edd454a31d4c17dcdece0d4c352e269bab2003eecd5b5a5589246e2f7b9', 168160001),
  nimpu: creature('nimpu', 'Nimpu', '#38bdf8', '56, 189, 248', '#fda4af', '253, 164, 175', 'float',
    'Cloud shapes, floating movement.', 'Forma de nube y movimiento flotante.',
    '7942150e643f873287819543deef4ec9684136f91fb57a9082c9d6d6601aed6f', 111933884,
    '2f8c8a91070dbb644b9c0a6eb2d066100914a70a49ba1b588d1aff67152d21fe', 168098090),
  lumilisk: creature('lumilisk', 'Lumilisk', '#06b6d4', '6, 182, 212', '#a855f7', '168, 85, 247', 'float',
    'A bioluminescent sea dragon with flowing fins.', 'Un dragón marino bioluminiscente de aletas ondulantes.',
    '662092de3a2d8f1ebf96b19bf74364e33c7f997839f2026e7b49a8345a324fcb', 111943371,
    '6b6e38db38c390e898e8276a1df835b483f25286168f122669bb66c1b7b76c14', 168099300),
  yuravax: creature('yuravax', 'Yuravax', '#818cf8', '129, 140, 248', '#22d3ee', '34, 211, 238', 'float',
    'A celestial bird with luminous wings.', 'Un ave celestial de alas luminosas.',
    'd313c54fabba4b7fc352d435c1d18d8acca3ef7c0995970dca1a9b7d55478aad', 112128622,
    'd3428691269d559ca20405ebedc1ff508690e12a81f9b2937beb1f2346122dd1', 168191970),
};
export const BUNDLES = [
  { id: 'playfulDuo', members: ['buggy', 'pyxol'], title: { en: 'Product & code', es: 'Producto y código' } },
  { id: 'dragonDuo', members: ['velkarion', 'lumilisk'], title: { en: 'Plans & analytics', es: 'Planes y análisis' } },
  { id: 'dreamyDuo', members: ['yuravax', 'nimpu'], title: { en: 'Ideas & clarity', es: 'Ideas y claridad' } },
];
export const SHOWCASE = {
  alt: { en: '0-Uidgets 1.1.1: the six current 3D companions.', es: '0-Uidgets 1.1.1: las seis criaturas 3D vigentes.' },
};

export const I18N = {
  "en": {
    "metaTitle": "0-Uidgets 3D Bots",
    "metaDescription": "Six 3D bots for Windows with optional BYOK AI and local Ollama. Work with screen snips, files and clipboard text. Customize their roles, recipes and local memory.",
    "labels": {
      "skip": "Skip to content",
      "navLabel": "Main navigation",
      "navFeatures": "AI & features",
      "navCatalog": "The bots",
      "navPricing": "Pricing",
      "language": "Choose language",
      "heroEyebrow": "Your API. Or your local AI.",
      "heroTitle": "0-Uidgets",
      "heroAccent": "3D Bots",
      "heroPromise": "Put your AI on your desktop.",
      "heroLead": "Chat, make sense of screen snips and work with your files. Connect your own API key or run a local model with Ollama.",
      "heroCta": "Explore what they can do",
      "heroWindows": "Windows 10 / 11 · x64",
      "heroOffline": "AI is optional and off by default",
      "stageLabel": "Try the 3D bot",
      "stageLive": "Live 3D",
      "stageFrame": "0-Uidgets · Interactive 3D preview",
      "stageLoading": "Loading the 3D preview…",
      "stageRetry": "Try again",
      "pet": "Pet",
      "spin": "Spin",
      "power": "Effect",
      "center": "Recenter",
      "stageMore": "Size & stage",
      "size": "Size",
      "stage": "Stage",
      "hatchling": "Hatchling",
      "rookie": "Rookie",
      "stageHint": "Drag to move · Click to pet · R to spin",
      "stageChoose": "Choose a model",
      "stageDemo": "3D web demo · AI tools run in the Windows app",
      "aiKicker": "01 / YOUR AI",
      "aiTitle": "Your model. Your choice.",
      "aiLead": "Choose where your AI runs. The bot connects directly to the provider you configure.",
      "byokTitle": "Bring your own key.",
      "byokCopy": "Connect Google Gemini or an OpenAI-compatible API. Use your own account, model and usage budget.",
      "compatibleApi": "OpenAI-compatible APIs",
      "byokNote": "Your submitted content goes directly to your provider. API usage is billed separately.",
      "localBadge": "LOCAL AI",
      "localTitle": "Keep it on your PC.",
      "localCopy": "Connect Ollama and use a local model. Your prompts, files and screen snips are processed on your own computer.",
      "localFlow": "Your PC",
      "localNote": "Requires Ollama and a compatible local model. Performance depends on your hardware.",
      "privacyLine": "Keys encrypted on Windows with DPAPI. No app telemetry. Screen capture only when you request it.",
      "workflowTitle": "From your desktop to a useful answer.",
      "workflowLead": "Three ways to give your bot context.",
      "snipTitle": "Snip your screen",
      "snipCopy": "Select a region to review an interface, interpret a chart or ask about a visible error. With Windows OCR support.",
      "dropTitle": "Drop a file",
      "dropCopy": "Drag a PDF, image, CSV, JSON or code file onto the bot to summarize, explain or structure its contents.",
      "clipboardTitle": "Transform your clipboard",
      "clipboardCopy": "Rewrite a message, clean up a snippet or format data. Trigger it with the shortcut or Shift + click, then paste the result.",
      "aiRequirements": "AI workflows require a configured provider. Image understanding depends on the selected model.",
      "brainKicker": "MAKE IT YOURS",
      "brainTitle": "A bot that works your way.",
      "roleTitle": "Editable role",
      "roleCopy": "Change its system prompt and create up to 3 custom quick recipes.",
      "memoryTitle": "Memory you can read",
      "memoryCopy": "Open, edit or clear your local memoria.md file whenever you want.",
      "cartridgeTitle": "Share a personality",
      "cartridgeCopy": "Import or export roles and recipes as .json or .md, without keys or private memory.",
      "catalogKicker": "02 / THE BOTS",
      "catalogTitle": "Choose your starting point.",
      "catalogLead": "Six designs with different starting roles and recipes. Every bot has the same tools; you can customize its role.",
      "desktopStages": "Hatchling + Rookie",
      "desktopSizes": "4 sizes",
      "desktopReminders": "Local reminders",
      "desktopFullscreen": "Fullscreen auto-hide",
      "priceKicker": "03 / GET YOUR BOTS",
      "priceTitle": "One bot. A duo. All six.",
      "priceLead": "One-time purchase. Both stages and all bot tools included. AI provider usage is separate.",
      "checkoutStatus": "Direct checkout is being prepared. You can explore the available external stores below.",
      "singleCount": "01 BOT",
      "singleTitle": "Individual",
      "singleSub": "Choose the bot that fits your workflow.",
      "singleLabel": "Choose your bot",
      "duoTitle": "Duo",
      "duoSub": "Two starting roles that work well together.",
      "duoLabel": "Choose your duo",
      "squadBadge": "06 BOTS",
      "squadTitle": "Complete collection",
      "squadSub": "The complete set for your desktop.",
      "squadDetail": "All six designs and starting roles.",
      "allSix": "All six bots included",
      "priceFootnote": "Shown prices are for direct purchase in USD. External stores set their own prices and availability.",
      "faqKicker": "THE DETAILS",
      "trustTitle": "Before you choose.",
      "trustLead": "Requirements, AI costs and everyday use.",
      "checksumsTitle": "Release verification · SHA-256",
      "checksumsIntro": "Compare your file with its matching release hash. A hash identifies a file; it is not a safety guarantee.",
      "smartScreen": "The direct portable edition may trigger Windows SmartScreen. Check its source and hash before deciding to open it.",
      "exeTitle": "Portable · v1.1.1",
      "manifest": "Portable hash manifest",
      "appxTitle": "Store packages · v1.1.1.0",
      "packageNote": "These hashes identify the prepared, unsigned .appx packages. They do not certify Microsoft approval or availability.",
      "appxManifest": "Store package hash manifest",
      "footerTag": "3D bots. Your AI. Your desktop.",
      "privacy": "Privacy policy",
      "top": "Back to top",
      "checkout": "Buy direct",
      "buyOn": "View on",
      "offerPending": "This option is coming soon",
      "stageError": "The 3D preview could not load. Try again or explore the catalog below.",
      "try": "View in 3D",
      "creator": "Creator profile",
      "downloads": "My downloads",
      "copyHash": "Copy hash",
      "report": "VirusTotal report",
      "copied": "Copied",
      "copyFailed": "Could not copy. Select the hash to copy it manually.",
      "selected": "On stage"
    },
    "faqs": [
      {
        "q": "What do I need to use a bot?",
        "a": "Windows 10 or 11, 64-bit. The portable edition runs as an .exe without an installer. Microsoft Store availability is still pending. To use local AI, also install Ollama and download a compatible model for your hardware."
      },
      {
        "q": "Does the purchase include AI credits?",
        "a": "No. The purchase covers the bot. BYOK means Bring Your Own Key: cloud usage follows your provider’s prices and terms. Running a local model with Ollama uses your own hardware without cloud API usage fees."
      },
      {
        "q": "What works with AI switched off?",
        "a": "The animated 3D bot, petting, rotation, both stages, four sizes and local reminders. You can enable fullscreen auto-hide in settings. This mode needs no account, API key or internet connection."
      },
      {
        "q": "Can I use more than one bot?",
        "a": "Yes. Different species can run together. Each keeps its own settings and local memory. Their roles are customizable, and AI results depend on the model and context you provide."
      }
    ],
    "bots": {
      "buggy": {
        "role": "Product & UI",
        "summary": "Review interfaces, explain product files and polish technical release notes."
      },
      "pyxol": {
        "role": "Code & debugging",
        "summary": "Investigate terminal errors, inspect logs and repair JSON or code snippets."
      },
      "velkarion": {
        "role": "Plans & priorities",
        "summary": "Turn scattered tasks into action plans and clear executive briefs."
      },
      "nimpu": {
        "role": "Clarity & calm",
        "summary": "Simplify long texts and give difficult messages a more diplomatic tone."
      },
      "lumilisk": {
        "role": "Data & documents",
        "summary": "Interpret charts, extract metrics and organize reports into structured summaries."
      },
      "yuravax": {
        "role": "Ideas & writing",
        "summary": "Explore creative angles, review visual compositions and refine your writing."
      }
    }
  },
  "es": {
    "metaTitle": "0-Uidgets 3D Bots",
    "metaDescription": "Seis bots 3D para Windows con IA opcional BYOK y Ollama local. Trabaja con recortes, archivos y portapapeles. Personaliza roles, recetas y memoria local.",
    "labels": {
      "skip": "Ir al contenido",
      "navLabel": "Navegación principal",
      "navFeatures": "IA y funciones",
      "navCatalog": "Los bots",
      "navPricing": "Precios",
      "language": "Elegir idioma",
      "heroEyebrow": "Tu API. O tu IA local.",
      "heroTitle": "0-Uidgets",
      "heroAccent": "3D Bots",
      "heroPromise": "Tu IA, en tu escritorio.",
      "heroLead": "Conversa, analiza recortes de pantalla y trabaja con tus archivos. Conecta tu propia clave API o usa un modelo local con Ollama.",
      "heroCta": "Descubre lo que pueden hacer",
      "heroWindows": "Windows 10 / 11 · x64",
      "heroOffline": "IA opcional, apagada de fábrica",
      "stageLabel": "Prueba el bot en 3D",
      "stageLive": "3D en vivo",
      "stageFrame": "0-Uidgets · Vista interactiva 3D",
      "stageLoading": "Cargando la vista 3D…",
      "stageRetry": "Reintentar",
      "pet": "Acariciar",
      "spin": "Girar",
      "power": "Efecto",
      "center": "Centrar",
      "stageMore": "Tamaño y etapa",
      "size": "Tamaño",
      "stage": "Etapa",
      "hatchling": "Cría",
      "rookie": "Rookie",
      "stageHint": "Arrastra para mover · Clic para acariciar · R para girar",
      "stageChoose": "Elige un modelo",
      "stageDemo": "Demo 3D web · Las herramientas de IA se usan en la app de Windows",
      "aiKicker": "01 / TU IA",
      "aiTitle": "Tu modelo. Tú eliges.",
      "aiLead": "Elige dónde se ejecuta tu IA. El bot se conecta directamente al proveedor que configures.",
      "byokTitle": "Usa tu propia clave.",
      "byokCopy": "Conecta Google Gemini o una API compatible con OpenAI. Usa tu cuenta, tu modelo y tu presupuesto de consumo.",
      "compatibleApi": "APIs compatibles con OpenAI",
      "byokNote": "El contenido que envías llega directamente a tu proveedor. El consumo de API se paga por separado.",
      "localBadge": "IA LOCAL",
      "localTitle": "Todo en tu PC.",
      "localCopy": "Conecta Ollama y usa un modelo local. Tus mensajes, archivos y recortes se procesan en tu propio equipo.",
      "localFlow": "Tu PC",
      "localNote": "Requiere Ollama y un modelo local compatible. El rendimiento depende de tu equipo.",
      "privacyLine": "Claves cifradas en Windows con DPAPI. Sin telemetría de la app. Capturas de pantalla sólo cuando tú las solicitas.",
      "workflowTitle": "De tu escritorio a una respuesta útil.",
      "workflowLead": "Tres formas de darle contexto a tu bot.",
      "snipTitle": "Recorta tu pantalla",
      "snipCopy": "Selecciona una zona para revisar una interfaz, interpretar una gráfica o consultar un error visible. Con apoyo de OCR de Windows.",
      "dropTitle": "Arrastra un archivo",
      "dropCopy": "Suelta un PDF, imagen, CSV, JSON o archivo de código sobre el bot para resumir, explicar o estructurar su contenido.",
      "clipboardTitle": "Transforma tu portapapeles",
      "clipboardCopy": "Reescribe un mensaje, corrige un fragmento de código u ordena datos. Usa el atajo o Shift + clic y pega el resultado.",
      "aiRequirements": "Los flujos de IA requieren un proveedor configurado. La interpretación de imágenes depende del modelo elegido.",
      "brainKicker": "A TU MANERA",
      "brainTitle": "Dale tu forma de trabajar.",
      "roleTitle": "Rol editable",
      "roleCopy": "Ajusta su prompt de sistema y crea hasta 3 recetas rápidas propias.",
      "memoryTitle": "Memoria que puedes leer",
      "memoryCopy": "Abre, edita o vacía tu archivo local memoria.md cuando quieras.",
      "cartridgeTitle": "Comparte una personalidad",
      "cartridgeCopy": "Importa o exporta roles y recetas en .json o .md, sin claves ni memoria privada.",
      "catalogKicker": "02 / LOS BOTS",
      "catalogTitle": "Elige tu punto de partida.",
      "catalogLead": "Seis diseños con distintos roles y recetas iniciales. Todos tienen las mismas herramientas; tú puedes personalizar su rol.",
      "desktopStages": "Cría + Rookie",
      "desktopSizes": "4 tamaños",
      "desktopReminders": "Recordatorios locales",
      "desktopFullscreen": "Ocultación en pantalla completa",
      "priceKicker": "03 / ELIGE TUS BOTS",
      "priceTitle": "Uno. Un dúo. Los seis.",
      "priceLead": "Un solo pago. Ambas etapas y todas las herramientas del bot incluidas. El consumo de IA va por separado.",
      "checkoutStatus": "La compra directa está en preparación. Puedes consultar las tiendas externas disponibles aquí abajo.",
      "singleCount": "01 BOT",
      "singleTitle": "Individual",
      "singleSub": "El bot que encaja con tu forma de trabajar.",
      "singleLabel": "Elige tu bot",
      "duoTitle": "Dúo",
      "duoSub": "Dos roles iniciales que se complementan.",
      "duoLabel": "Elige tu dúo",
      "squadBadge": "06 BOTS",
      "squadTitle": "Colección completa",
      "squadSub": "El conjunto completo para tu escritorio.",
      "squadDetail": "Los seis diseños con sus roles iniciales.",
      "allSix": "Los seis bots incluidos",
      "priceFootnote": "Precios de compra directa en USD. Las tiendas externas fijan sus propios precios y disponibilidad.",
      "faqKicker": "LOS DETALLES",
      "trustTitle": "Antes de elegir.",
      "trustLead": "Requisitos, costes de IA y uso diario.",
      "checksumsTitle": "Verificación de versiones · SHA-256",
      "checksumsIntro": "Compara tu archivo con el hash de su versión. Un hash identifica un archivo; no garantiza su seguridad.",
      "smartScreen": "La edición portable directa puede activar Windows SmartScreen. Comprueba su origen y hash antes de decidir abrirla.",
      "exeTitle": "Portable · v1.1.1",
      "manifest": "Manifiesto de hashes portable",
      "appxTitle": "Paquetes Store · v1.1.1.0",
      "packageNote": "Estos hashes identifican los .appx preparados, sin firmar. No acreditan aprobación ni disponibilidad en Microsoft Store.",
      "appxManifest": "Manifiesto de hashes Store",
      "footerTag": "Bots 3D. Tu IA. Tu escritorio.",
      "privacy": "Política de privacidad",
      "top": "Volver al inicio",
      "checkout": "Comprar aquí",
      "buyOn": "Ver en",
      "offerPending": "Esta opción estará disponible próximamente",
      "stageError": "No se pudo cargar la vista 3D. Reintenta o explora el catálogo más abajo.",
      "try": "Ver en 3D",
      "creator": "Perfil del creador",
      "downloads": "Mis descargas",
      "copyHash": "Copiar hash",
      "report": "Informe VirusTotal",
      "copied": "Copiado",
      "copyFailed": "No se pudo copiar. Selecciona el hash para copiarlo manualmente.",
      "selected": "En el escenario"
    },
    "faqs": [
      {
        "q": "¿Qué necesito para usar un bot?",
        "a": "Windows 10 u 11 de 64 bits. La edición portable se ejecuta como un .exe sin instalador. La disponibilidad en Microsoft Store sigue pendiente. Para usar IA local, instala también Ollama y descarga un modelo compatible con tu equipo."
      },
      {
        "q": "¿La compra incluye créditos de IA?",
        "a": "No. La compra incluye el bot. BYOK significa Bring Your Own Key: usas tu propia clave y el consumo en la nube sigue las tarifas y condiciones de tu proveedor. Un modelo local con Ollama utiliza tu equipo sin consumo de API en la nube."
      },
      {
        "q": "¿Qué funciona con la IA apagada?",
        "a": "El bot 3D animado, las caricias, los giros, ambas etapas, cuatro tamaños y los recordatorios locales. Puedes activar la ocultación en pantalla completa desde ajustes. Este modo no requiere cuenta, clave API ni conexión a internet."
      },
      {
        "q": "¿Puedo usar más de un bot?",
        "a": "Sí. Puedes ejecutar distintas especies a la vez. Cada una conserva sus ajustes y memoria local. Sus roles son personalizables y los resultados de IA dependen del modelo y del contexto que proporciones."
      }
    ],
    "bots": {
      "buggy": {
        "role": "Producto e interfaces",
        "summary": "Revisa interfaces, explica archivos de producto y pule notas técnicas de lanzamiento."
      },
      "pyxol": {
        "role": "Código y depuración",
        "summary": "Analiza errores de terminal, revisa logs y corrige JSON o fragmentos de código."
      },
      "velkarion": {
        "role": "Planes y prioridades",
        "summary": "Convierte pendientes dispersos en planes de acción y comunicados ejecutivos claros."
      },
      "nimpu": {
        "role": "Claridad y calma",
        "summary": "Simplifica textos largos y da un tono más diplomático a los mensajes difíciles."
      },
      "lumilisk": {
        "role": "Datos y documentos",
        "summary": "Interpreta gráficas, extrae métricas y organiza reportes en resúmenes estructurados."
      },
      "yuravax": {
        "role": "Ideas y redacción",
        "summary": "Explora ángulos creativos, revisa composiciones visuales y mejora tus textos."
      }
    }
  }
};
