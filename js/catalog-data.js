/**
 * Zero-UI 3D Desktop Bots (v1.1.0) — Official Catalog, Pricing, Checksums & EN/ES Copy
 * Source of truth: species/*.json, RELEASE-KIT-*.md & SHA256SUMS-ALL-SQUAD.txt
 *
 * Bundle URL Configuration:
 * Replace the Duo / Squad URLs below with your direct itch.io bundle sale URLs
 * (e.g. "https://itch.io/s/XXXXXX/full-6-bot-zero-ui-squad") once live on itch.io.
 */

export const STORE_LINKS = {
  creatorHub: 'https://elbuilder77.itch.io',
  species: {
    buggy: 'https://elbuilder77.itch.io/buggy-3d-bot',
    pyxol: 'https://elbuilder77.itch.io/pyxol-3d-bot',
    velkarion: 'https://elbuilder77.itch.io/velkarion-3d-bot',
    nimpu: 'https://elbuilder77.itch.io/nimpu-3d-bot',
    lumilisk: 'https://elbuilder77.itch.io/lumilisk-3d-bot',
    yuravax: 'https://elbuilder77.itch.io/yuravax-3d-bot',
  },
  bundles: {
    fullSquad: 'https://elbuilder77.itch.io',
    buildersDuo: 'https://elbuilder77.itch.io',
    commandDuo: 'https://elbuilder77.itch.io',
    calmDuo: 'https://elbuilder77.itch.io',
  },
};

export const SPECIES_ORDER = [
  'buggy',
  'pyxol',
  'velkarion',
  'nimpu',
  'lumilisk',
  'yuravax',
];

export const SPECIES_CATALOG = {
  buggy: {
    id: 'buggy',
    name: 'BUGGY',
    glowColor: '#22c55e',
    glowRgb: '34, 197, 94',
    secondaryColor: '#bef264',
    secondaryRgb: '190, 242, 100',
    physics: 'jelly',
    defaultStage: 2,
    storeUrl: STORE_LINKS.species.buggy,
    avatar: './buggy-avatar-3d.png',
    renderHatchling: './assets/buggy/buggy_1.webp',
    renderRookie: './assets/buggy/buggy_2.webp',
    exe: {
      filename: 'Buggy-1.1.0-portable.exe',
      sizeMb: '106.85 MB',
      sizeBytes: '112,039,425',
      sha256: 'f1e4c3b6da053dad06118693741fbc45b54492171a14d9acd95ea70c3ecd69e9',
    },
    zip: {
      filename: 'Buggy-1.1.0-web-demo.zip',
      sizeMb: '0.56 MB',
      sizeBytes: '589,160',
      sha256: '7c0ff755cc96dbf4bac2b6de7faaff2a599effa917af09ee5384c7757ade8069',
    },
    copy: {
      en: {
        badge: 'Product & UI Shipping',
        tagline: 'From idea to launch · Digital products',
        role: 'Software building, UI/UX hierarchy audits, changelogs & product launches',
        physicsLabel: 'Volume-Conserving Jelly',
        powerLabel: '🟢 Slime Orb Boing!',
        voiceQuote:
          '“Boing! Tell me what you are building—let’s turn it into a crisp release you can ship to real users.”',
        summary:
          'Emerald translucent 3D slime with floating internal bubbles and reactive slime orb. Built for indie hackers, product engineers, UI/UX designers, and solo founders.',
        desktopContext: {
          winTitle: 'release-v1.1.0 — UI Hierarchy & Launch Checklist',
          line1: 'git log --oneline -5  →  Shift+Click Buggy  →  Clean user changelog ready',
          line2: 'Alt+Shift+S on Hero CTA  →  3 concrete visual hierarchy fixes',
        },
        workflows: {
          drop: {
            label: '🧩 Explain File or Product Mockup',
            desc: 'Drop UI screenshots, PDFs or source files onto Buggy to unpack architecture, spot UX/tech risks, and get the next actionable step.',
          },
          snip: {
            label: '🎨 Audit Visible UI & Flow',
            desc: 'Press Alt+Shift+S over any interface to evaluate visual hierarchy, readability, and main CTA friction in 3 concrete fixes.',
          },
          clipboard: {
            label: '🚀 Raw Commits → Clean Changelog',
            desc: 'Copy messy git logs or rough notes, Shift+Click Buggy, and paste a user-ready release changelog with zero chat clutter.',
          },
        },
        quickPills: ['🎨 Audit Screen UI', '🧩 Explain File', '🚀 Clean Changelog'],
      },
      es: {
        badge: 'Producto y Lanzamientos',
        tagline: 'De la idea al lanzamiento · Productos digitales',
        role: 'Desarrollo de software, auditorías UI/UX, changelogs y salida al mercado',
        physicsLabel: 'Física Jelly con Volumen',
        powerLabel: '🟢 ¡Orbe Slime Boing!',
        voiceQuote:
          '«¡Boing! Cuéntame qué estás construyendo. Vamos a convertirlo en una entrega que puedas probar con usuarios.»',
        summary:
          'Criatura gelatinosa esmeralda 3D con burbujas internas reales y orbe de slime reactivo. Creada para indie hackers, ingenieros de producto y diseñadores UI/UX.',
        desktopContext: {
          winTitle: 'release-v1.1.0 — Auditoría UI y Checklist de Lanzamiento',
          line1: 'git log --oneline -5  →  Shift+Clic en Buggy  →  Changelog limpio listo',
          line2: 'Alt+Shift+S sobre tu Hero  →  3 mejoras concretas de jerarquía visual',
        },
        workflows: {
          drop: {
            label: '🧩 Explicar archivo o diseño de producto',
            desc: 'Suelta mockups, PDFs o código sobre Buggy para entender su arquitectura, riesgos técnicos/UX y el siguiente paso accionable.',
          },
          snip: {
            label: '🎨 Auditar UI y flujo en pantalla',
            desc: 'Pulsa Alt+Shift+S sobre cualquier interfaz para evaluar jerarquía visual, legibilidad y fricción del CTA en 3 ajustes concretos.',
          },
          clipboard: {
            label: '🚀 Pulir nota técnica / Changelog',
            desc: 'Copia commits o apuntes sueltos, haz Shift+Clic en Buggy y pega un changelog limpio para usuarios sin abrir el chat.',
          },
        },
        quickPills: ['🎨 Auditar UI en pantalla', '🧩 Explicar archivo', '🚀 Limpiar changelog'],
      },
    },
  },

  pyxol: {
    id: 'pyxol',
    name: 'PYXOL',
    glowColor: '#ec4899',
    glowRgb: '236, 72, 153',
    secondaryColor: '#22d3ee',
    secondaryRgb: '34, 211, 238',
    physics: 'glitch',
    defaultStage: 2,
    storeUrl: STORE_LINKS.species.pyxol,
    avatar: './pyxol-avatar-3d.png',
    renderHatchling: './assets/pyxol/pyxol_1.webp',
    renderRookie: './assets/pyxol/pyxol_2.webp',
    exe: {
      filename: 'Pyxol-1.1.0-portable.exe',
      sizeMb: '106.75 MB',
      sizeBytes: '111,933,185',
      sha256: 'f776ae66a6fc88aa8eb606fd0e642682dea49087d34065b2b248d43fd318f085',
    },
    zip: {
      filename: 'Pyxol-1.1.0-web-demo.zip',
      sizeMb: '0.60 MB',
      sizeBytes: '629,047',
      sha256: '6288867aae86325525293f054984ab7ee82c841772348e506a5fd45404184641',
    },
    copy: {
      en: {
        badge: 'Staff DevTools & APIs',
        tagline: 'Voxel spirit · Digital root-cause curiosity',
        role: 'Staff/DevTools engineering, terminal/log debugging, JSON & API repair',
        physicsLabel: 'Reactive Voxel Glitch',
        powerLabel: '👾 Quantum Voxel Cascade!',
        voiceQuote:
          '“Zero-latency ping received! Drop that bug, stack trace, or endpoint—let’s get it compiling clean.”',
        summary:
          'Neon-pink & cyan 3D voxel quadruped with circuit textures, pixelated horns, diamond runes, and dorsal data pins. Pragmatic root-cause debugger with zero fluff.',
        desktopContext: {
          winTitle: 'Windows Terminal — TypeError: Unexpected token } in JSON at pos 418',
          line1: 'Alt+Shift+S over stack trace  →  Exact root cause + 3-line patch',
          line2: 'Broken JSON / curl in clipboard  →  Shift+Click Pyxol  →  Valid output',
        },
        workflows: {
          drop: {
            label: '🐛 Diagnose Code, Log or Payload',
            desc: 'Drop .log dumps, code files, JSON payloads, or specs onto Pyxol to jump straight to root cause, edge cases, and exact patch.',
          },
          snip: {
            label: '🔌 Debug Visible Terminal or Console',
            desc: 'Snip any stack trace or DevTools network error (uses Vision or offline Windows OCR with qwen2.5-coder) for an instant fix.',
          },
          clipboard: {
            label: '👾 Repair JSON, SQL or Shell Snippet',
            desc: 'Copy malformed JSON, SQL, or curl commands, Shift+Click Pyxol, and paste clean, valid syntax with zero markdown fences.',
          },
        },
        quickPills: ['🐛 Debug Screen', '🔌 Explain API', '🛠️ Diagnose Bug'],
      },
      es: {
        badge: 'Ingeniería Staff / DevTools',
        tagline: 'Espíritu vóxel · Curiosidad digital',
        role: 'Ingeniería Staff/DevTools, depuración de terminales/logs, reparación de JSON y APIs',
        physicsLabel: 'Física Glitch Vóxel',
        powerLabel: '👾 ¡Cascada Vóxel Cuántica!',
        voiceQuote:
          '«¡Ping recibido sin latencia! Pásame ese bug, log o endpoint y lo dejamos compilando limpio.»',
        summary:
          'Espíritu cuadrúpedo vóxel 3D rosa-cian con textura de circuitos, cuernos pixelados, runas de diamante y pines dorsales. Directo a la causa raíz sin paja teórica.',
        desktopContext: {
          winTitle: 'Windows Terminal — TypeError: Unexpected token } in JSON at pos 418',
          line1: 'Alt+Shift+S sobre stack trace  →  Causa raíz exacta + parche verificable',
          line2: 'JSON roto / curl en portapapeles  →  Shift+Clic en Pyxol  →  Sintaxis válida',
        },
        workflows: {
          drop: {
            label: '🐛 Diagnosticar código, log o payload',
            desc: 'Suelta logs, código o JSON encima de Pyxol para detectar causa raíz, casos borde reales y el parche exacto.',
          },
          snip: {
            label: '🔌 Depurar terminal o consola visible',
            desc: 'Recorta cualquier error de compilador o consola (Visión nativa + OCR local de Windows automático para qwen2.5-coder).',
          },
          clipboard: {
            label: '👾 Reparar JSON, comando o snippet',
            desc: 'Copia JSON roto, SQL o comandos de terminal, haz Shift+Clic en Pyxol y pega código limpio sin bloques Markdown.',
          },
        },
        quickPills: ['🐛 Depurar pantalla', '🔌 Explicar API', '🛠️ Diagnosticar bug'],
      },
    },
  },

  velkarion: {
    id: 'velkarion',
    name: 'VELKARION',
    glowColor: '#f97316',
    glowRgb: '249, 115, 22',
    secondaryColor: '#fde047',
    secondaryRgb: '253, 224, 71',
    physics: 'heavy',
    defaultStage: 2,
    storeUrl: STORE_LINKS.species.velkarion,
    avatar: './velkarion-avatar-3d.png',
    renderHatchling: './assets/velkarion/velkarion_1.webp',
    renderRookie: './assets/velkarion/velkarion_2.webp',
    exe: {
      filename: 'Velkarion-1.1.0-portable.exe',
      sizeMb: '106.93 MB',
      sizeBytes: '112,127,125',
      sha256: '44732fa09c3b021c2167fa66426ef71dfb821d217bf6d25ee250fff34a910b90',
    },
    zip: {
      filename: 'Velkarion-1.1.0-web-demo.zip',
      sizeMb: '0.58 MB',
      sizeBytes: '607,760',
      sha256: '1d50ede6d88901b35d0433dedcaa967064e2a4d452d01ef68518ad66565bcd94',
    },
    copy: {
      en: {
        badge: 'Tactical Commander',
        tagline: 'Solar mecha-draco · Energy & resolve',
        role: 'Executive tactical commander, impact-ranked priorities, unblocking & action plans',
        physicsLabel: 'Armored Heavy Titanium',
        powerLabel: '⚡ Solar Reactor Overdrive!',
        voiceQuote:
          '“Solar reactor at one hundred percent. Point me to the active front and we will chart the execution plan.”',
        summary:
          'Brushed-titanium 3D mecha-draco with segmented armor tail and spinning solar plasma chest reactor. Built to eliminate decision fatigue and drive disciplined execution.',
        desktopContext: {
          winTitle: 'Q4 Operations Board — 14 Open Tickets · 2 Critical Blockers',
          line1: 'Alt+Shift+S over chaotic backlog  →  #1 impact move + 3-step sequence',
          line2: 'Rambling draft in clipboard  →  Shift+Click Velkarion  →  Crisp executive brief',
        },
        workflows: {
          drop: {
            label: '🛡️ Extract Tactical Action Plan',
            desc: 'Drop PDFs, meeting notes, or backlogs onto Velkarion to distill current status, critical blockers, and immediate execution order.',
          },
          snip: {
            label: '🎯 Operational Screen Triage',
            desc: 'Crop any overloaded Kanban board or inbox thread to flag top priority, visible risks, and the single next recommended move.',
          },
          clipboard: {
            label: '⚡ Crisp Executive Dispatch',
            desc: 'Copy a rough, rambling Slack or email draft, Shift+Click Velkarion, and paste a firm, respectful, zero-filler executive update.',
          },
        },
        quickPills: ['⚡ Assess Screen Front', '🛡️ Rank Priorities', '📝 Executive Brief'],
      },
      es: {
        badge: 'Comandante Táctico',
        tagline: 'Mecha-draco solar · Energía y determinación',
        role: 'Comandante táctico ejecutivo, prioridades por impacto, desbloqueo y planes de acción',
        physicsLabel: 'Física Heavy Acorazada',
        powerLabel: '⚡ ¡Reactor Solar Overdrive!',
        voiceQuote:
          '«Reactor solar al cien por ciento. Indícame el frente actual, suelta tu informe o recorta pantalla para trazar el plan.»',
        summary:
          'Mecha-draco acorazado 3D de titanio cepillado con cola articulada y reactor pectoral de plasma solar giratorio. Elimina la parálisis por análisis con foco ejecutivo.',
        desktopContext: {
          winTitle: 'Tablero Operativo Q4 — 14 Frentes Abiertos · 2 Bloqueos Críticos',
          line1: 'Alt+Shift+S sobre tu tablero  →  Prioridad #1 + secuencia táctica de 3 pasos',
          line2: 'Borrador largo en portapapeles  →  Shift+Clic en Velkarion  →  Parte ejecutivo firme',
        },
        workflows: {
          drop: {
            label: '🛡️ Extraer plan de acción táctico',
            desc: 'Suelta informes PDF, minutas o pendientes sobre Velkarion para resumir situación, bloqueos críticos y orden inmediato de ejecución.',
          },
          snip: {
            label: '🎯 Diagnóstico operativo de pantalla',
            desc: 'Recorta cualquier tablero saturado o hilo largo para señalar lo prioritario, riesgos visibles y la acción inmediata recomendada.',
          },
          clipboard: {
            label: '⚡ Comunicado ejecutivo sin rodeos',
            desc: 'Copia un borrador indeciso, haz Shift+Clic en Velkarion y pega un mensaje firme, respetuoso y directo listo para enviar.',
          },
        },
        quickPills: ['⚡ Evaluar frente en pantalla', '🛡️ Ordenar prioridades', '📝 Parte ejecutivo'],
      },
    },
  },

  nimpu: {
    id: 'nimpu',
    name: 'NIMPU',
    glowColor: '#38bdf8',
    glowRgb: '56, 189, 248',
    secondaryColor: '#fda4af',
    secondaryRgb: '253, 164, 175',
    physics: 'float',
    defaultStage: 2,
    storeUrl: STORE_LINKS.species.nimpu,
    avatar: './nimpu-avatar-3d.png',
    renderHatchling: './assets/nimpu/nimpu_1.webp',
    renderRookie: './assets/nimpu/nimpu_2.webp',
    exe: {
      filename: 'Nimpu-1.1.0-portable.exe',
      sizeMb: '106.74 MB',
      sizeBytes: '111,929,954',
      sha256: '76b08a7f7c07742a05af93248fbf2f238cf081dec7fafbbfd386f603ce0c9e22',
    },
    zip: {
      filename: 'Nimpu-1.1.0-web-demo.zip',
      sizeMb: '0.53 MB',
      sizeBytes: '553,504',
      sha256: 'f503ad94c09c7ff48bb314703dc3ea82caaf838ea3a056e62dde1eede2e1e2ad',
    },
    copy: {
      en: {
        badge: 'Cozy Calm & ADHD-Friendly',
        tagline: 'Cloud creature · Gentle zero-guilt company',
        role: 'Daily wellness, cognitive de-stress (ADHD-friendly, zero-decay bond) & diplomatic tone',
        physicsLabel: 'Buoyant Cloud Float',
        powerLabel: '☁️ Soft Cloud Hug!',
        voiceQuote:
          '“Take one gentle breath with me... I am right here on your screen to keep you company at your own pace.”',
        summary:
          'Fluffy ivory-sky 3D cloud creature with volumetric cloud collar, springy rose-pink ears, and soft little wings. Bond never decays when you take days off.',
        desktopContext: {
          winTitle: 'Calm Focus Session — Bond Lv. 3 (Zero Penalty on Rest Days)',
          line1: 'Alt+Shift+S over dense wall of text  →  Plain words + 1 light first step',
          line2: 'Tense reply in clipboard  →  Shift+Click Nimpu  →  Warm diplomatic tone',
        },
        workflows: {
          drop: {
            label: '☁️ Summarize with Calm & Gentle Clarity',
            desc: 'Drop heavy PDFs or long notes onto Nimpu to get soft, digestible takeaways with zero cognitive overload.',
          },
          snip: {
            label: '🌱 Simplify What I See Without Stress',
            desc: 'Crop intimidating forms or bureaucratic emails to understand what they ask in reassuring words plus one tiny first step.',
          },
          clipboard: {
            label: '💌 Diplomatic Message Softener',
            desc: 'Wrote a tired or blunt reply? Copy it, Shift+Click Nimpu, and paste a warm, serene, boutique-concierge message.',
          },
        },
        quickPills: ['☁️ Breathe With Me', '🌱 Quiet Break', '💌 Kind Note'],
      },
      es: {
        badge: 'Calma y Bienestar ADHD-Friendly',
        tagline: 'Criatura nube · Compañía suave sin culpa',
        role: 'Bienestar diario, calma sin sobrecarga (ADHD-friendly, vínculo sin penalización) y tono diplomático',
        physicsLabel: 'Flotación Suave de Nube',
        powerLabel: '☁️ ¡Abrazo de Nube Suave!',
        voiceQuote:
          '«Respira suavecito conmigo un segundo... Aquí estoy en tu pantalla para acompañarte sin prisa.»',
        summary:
          'Tierna criatura nube 3D marfil-celeste con collar volumétrico, orejas rosadas con resorte y alitas suaves. El vínculo jamás baja si descansas unos días.',
        desktopContext: {
          winTitle: 'Sesión de Calma — Vínculo Nv. 3 (Cero penalización por ausencias)',
          line1: 'Alt+Shift+S sobre correo denso  →  Explicación sencilla + 1 paso ligero',
          line2: 'Respuesta tensa en portapapeles  →  Shift+Clic en Nimpu  →  Tono diplomático',
        },
        workflows: {
          drop: {
            label: '☁️ Resumir con calma y claridad suave',
            desc: 'Suelta PDFs largos o apuntes densos sobre Nimpu para recibir puntos suaves, claros y fáciles de asimilar sin agobio.',
          },
          snip: {
            label: '🌱 Simplificar pantalla sin estrés',
            desc: 'Recorta formularios confusos o textos pesados para entender qué piden en palabras sencillas y cuál es el paso más ligero.',
          },
          clipboard: {
            label: '💌 Suavizar mensaje con tono diplomático',
            desc: 'Copia un borrador tenso o seco, haz Shift+Clic en Nimpu y pega una versión cálida, serena y diplomática lista para enviar.',
          },
        },
        quickPills: ['☁️ Respirar conmigo', '🌱 Pausa tranquila', '💌 Nota amable'],
      },
    },
  },

  lumilisk: {
    id: 'lumilisk',
    name: 'LUMILISK',
    glowColor: '#06b6d4',
    glowRgb: '6, 182, 212',
    secondaryColor: '#a855f7',
    secondaryRgb: '168, 85, 247',
    physics: 'float',
    defaultStage: 2,
    storeUrl: STORE_LINKS.species.lumilisk,
    avatar: './lumilisk-avatar-3d.png',
    renderHatchling: './assets/lumilisk/lumilisk_1.webp',
    renderRookie: './assets/lumilisk/lumilisk_2.webp',
    exe: {
      filename: 'Lumilisk-1.1.0-portable.exe',
      sizeMb: '106.75 MB',
      sizeBytes: '111,934,438',
      sha256: 'a92afe3e4d7117d05b4babcf587dee52dc761ab97f25baf9a77dbe3b05ab5a00',
    },
    zip: {
      filename: 'Lumilisk-1.1.0-web-demo.zip',
      sizeMb: '0.53 MB',
      sizeBytes: '560,153',
      sha256: '75123f4636c59487fdeeb24e9d637508cf70ad5431bc9b0c13beb0428a868f44',
    },
    copy: {
      en: {
        badge: 'Data, PDF & Chart Oracle',
        tagline: 'Sea dragon · Bioluminescent analytical clarity',
        role: 'Analytical oracle for PDF documents, CSVs, tables, anomalies & data charts',
        physicsLabel: 'Serpentine Vertex Swim',
        powerLabel: '🌊 Bioluminescent Pulse!',
        voiceQuote:
          '“Calm currents, crystal-clear data. Drop any report, table, or chart and I will extract what truly matters.”',
        summary:
          'Cyan-amethyst bioluminescent 3D sea dragon with pearlescent scales, chevron ventral plates, crystal forehead gem, and translucent fan fins. Analyze sensitive files locally.',
        desktopContext: {
          winTitle: 'metrics_q4.csv & Annual_Report.pdf — 100% Local Desktop Analysis',
          line1: 'Drop PDF (up to 8 MB) or CSV onto Lumilisk  →  Key figures + anomalies',
          line2: 'Alt+Shift+S over KPI chart  →  Trend breakdown + data inconsistency check',
        },
        workflows: {
          drop: {
            label: '📊 Extract Metrics & Structured Synthesis',
            desc: 'Drop PDFs (up to 8 MB), CSVs, JSON, or tables onto Lumilisk to extract verifiable numbers, visible anomalies, and sharp conclusions.',
          },
          snip: {
            label: '🔎 Interpret Chart, Table or Dashboard',
            desc: 'Snip any Excel pivot, BI dashboard, or report figure on screen to identify core metrics, trends, and inconsistencies.',
          },
          clipboard: {
            label: '🌊 Clean & Structure Raw Copied Data',
            desc: 'Copy messy spreadsheet cells or scattered research notes, Shift+Click Lumilisk, and paste a clean, structured list.',
          },
        },
        quickPills: ['📸 Analyze Screen', '⚖️ Compare Options', '📑 Extract Key Metrics'],
      },
      es: {
        badge: 'Oráculo de Datos y PDFs',
        tagline: 'Dragón marino · Calma bioluminiscente',
        role: 'Oráculo analítico de documentos PDF, CSV, tablas, anomalías y gráficas de datos',
        physicsLabel: 'Nado Serpentino 3D',
        powerLabel: '🌊 ¡Pulso Bioluminiscente!',
        voiceQuote:
          '«Corrientes en calma, datos claros. Suéltame cualquier documento o consulta y extraeré lo esencial.»',
        summary:
          'Dragón marino bioluminiscente 3D con escamas nacaradas cian-amatista, gema frontal y aletas abanico translúcidas. Analiza reportes sensibles sin subirlos a nubes ajenas.',
        desktopContext: {
          winTitle: 'metricas_q4.csv e Informe_Anual.pdf — Análisis 100% Local en Escritorio',
          line1: 'Suelta PDF (hasta 8 MB) o CSV sobre Lumilisk  →  Cifras clave + anomalías',
          line2: 'Alt+Shift+S sobre gráfica KPI  →  Tendencias e inconsistencias detectadas',
        },
        workflows: {
          drop: {
            label: '📊 Extraer métricas y síntesis estructurada',
            desc: 'Suelta reportes PDF (hasta 8 MB), CSV o tablas sobre Lumilisk para obtener cifras clave, anomalías visibles y conclusiones verificables.',
          },
          snip: {
            label: '🔎 Interpretar gráfica, tabla o reporte',
            desc: 'Recorta cualquier dashboard, tabla financiera o figura en tu monitor para identificar métricas, tendencias e inconsistencias.',
          },
          clipboard: {
            label: '🌊 Ordenar datos limpios para pegar',
            desc: 'Copia celdas desordenadas o apuntes crudos, haz Shift+Clic en Lumilisk y pega una lista ordenada y concisa al instante.',
          },
        },
        quickPills: ['📸 Analizar pantalla', '⚖️ Comparar alternativas', '📑 Extraer métricas clave'],
      },
    },
  },

  yuravax: {
    id: 'yuravax',
    name: 'YURAVAX',
    glowColor: '#818cf8',
    glowRgb: '129, 140, 248',
    secondaryColor: '#22d3ee',
    secondaryRgb: '34, 211, 238',
    physics: 'float',
    defaultStage: 2,
    storeUrl: STORE_LINKS.species.yuravax,
    avatar: './yuravax-avatar-3d.png',
    renderHatchling: './assets/yuravax/yuravax_1.webp',
    renderRookie: './assets/yuravax/yuravax_2.webp',
    exe: {
      filename: 'Yuravax-1.1.0-portable.exe',
      sizeMb: '106.94 MB',
      sizeBytes: '112,137,926',
      sha256: '667bcc058132ad92885f61a7400ca14dec2e1cea96402377af780e0be2aed1d9',
    },
    zip: {
      filename: 'Yuravax-1.1.0-web-demo.zip',
      sizeMb: '0.57 MB',
      sizeBytes: '600,291',
      sha256: '1a2728dc60983a0c744408661a27e3756d1c89f06dffdd30524a5ae06e216022',
    },
    copy: {
      en: {
        badge: 'Senior Creative Director',
        tagline: 'Celestial bird · Luminous creative presence',
        role: 'Senior creative director, magnetic hooks, editorial copywriting & visual critique',
        physicsLabel: 'Celestial Ribbon Glide',
        powerLabel: '💠 Celestial Halo Surge!',
        voiceQuote:
          '“Every great work starts from an unexpected spark. Tell me what you want to say and we will give it wings.”',
        summary:
          'Mystic indigo-cyan 3D celestial bird with silky ivory plumage, bioluminescent V-wings, diamond halo, and flowing iridescent ribbons. Allergic to clichés.',
        desktopContext: {
          winTitle: 'Draft_Manifesto.md & Thumbnail_v3 — Editorial Rhythm & Visual Critique',
          line1: 'Flat paragraph in clipboard  →  Shift+Click Yuravax  →  Magnetic copy ready',
          line2: 'Alt+Shift+S over thumbnail or hero  →  Visual impact critique + 3 fresh angles',
        },
        workflows: {
          drop: {
            label: '✨ Distill Creative & Editorial Angle',
            desc: 'Drop manuscripts, scripts, pitch PDFs, or mockups onto Yuravax’s wings to surface your strongest hook and 2 counter-intuitive angles.',
          },
          snip: {
            label: '🎭 Critique Visual Composition & Copy',
            desc: 'Snip any thumbnail, poster, slide, or hero section on screen to evaluate visual impact, message clarity, and 3 fresh creative elevations.',
          },
          clipboard: {
            label: '✍️ Memorable Editorial Clipboard Rewrite',
            desc: 'Copy a clunky headline or paragraph, Shift+Click Yuravax, and paste rhythmic, persuasive, cliché-free prose with zero preambles.',
          },
        },
        quickPills: ['✨ 3 Screen Ideas', '✍️ Polish Copy', '📓 Develop Idea'],
      },
      es: {
        badge: 'Director Creativo Senior',
        tagline: 'Ave celestial · Presencia luminosa',
        role: 'Director creativo senior, hooks magnéticos, redacción editorial y crítica visual',
        physicsLabel: 'Vuelo Celestial Iridiscente',
        powerLabel: '💠 ¡Halo Celestial Activo!',
        voiceQuote:
          '«Cada gran idea nace de un destello distinto. Dime qué quieres contar y le daremos vuelo.»',
        summary:
          'Ave celestial mística 3D con plumaje marfil sedoso, alas en V con venas cian luminosas, halo romboidal y cintas iridiscentes. Alérgica a los lugares comunes.',
        desktopContext: {
          winTitle: 'Guion_Editorial.md y Portada_v3 — Ritmo Narrativo y Crítica Visual',
          line1: 'Titular plano en portapapeles  →  Shift+Clic en Yuravax  →  Hook magnético',
          line2: 'Alt+Shift+S sobre miniatura o portada  →  Crítica visual + 3 ángulos originales',
        },
        workflows: {
          drop: {
            label: '✨ Destilar ángulo creativo y editorial',
            desc: 'Suelta borradores, guiones, PDFs o bocetos sobre las alas de Yuravax para destacar su mejor gancho y 2 enfoques originales.',
          },
          snip: {
            label: '🎭 Criticar composición y copy visual',
            desc: 'Recorta miniaturas, anuncios o portadas en pantalla para analizar impacto visual, claridad del mensaje y 3 ideas para elevarlo.',
          },
          clipboard: {
            label: '✍️ Reescribir con estilo memorable',
            desc: 'Copia un párrafo sin fuerza, haz Shift+Clic en Yuravax y pega una versión fluida, persuasiva y libre de clichés sin preámbulos.',
          },
        },
        quickPills: ['✨ 3 Ideas en pantalla', '✍️ Pulir texto', '📓 Desarrollar idea'],
      },
    },
  },
};

export const DUO_BUNDLES = [
  {
    id: 'builders-duo',
    icon: '⚡',
    members: ['buggy', 'pyxol'],
    price: '$22',
    regularPrice: '$38',
    saveAmount: '$16',
    url: STORE_LINKS.bundles.buildersDuo,
    copy: {
      en: {
        title: "Builder's Duo Pack",
        subtitle: 'BUGGY + PYXOL · Ship & Debug Stack',
        desc: 'Pair Buggy (UI hierarchy audits, MVP specs & user changelogs) with Pyxol (terminal stack traces, broken JSON repair & API root-cause fixes). Two isolated .exe companions built for shipping code fast.',
        cta: "Get Builder's Duo · $22",
      },
      es: {
        title: "Builder's Duo Pack",
        subtitle: 'BUGGY + PYXOL · Crear, Depurar y Lanzar',
        desc: 'Combina a Buggy (auditoría UI/UX, MVP y changelogs) con Pyxol (stack traces en terminal, reparación de JSON y APIs). Dos ejecutables .exe independientes para lanzar software sin fricción.',
        cta: "Llevar Builder's Duo · $22",
      },
    },
  },
  {
    id: 'command-duo',
    icon: '🛡️',
    members: ['velkarion', 'lumilisk'],
    price: '$22',
    regularPrice: '$38',
    saveAmount: '$16',
    url: STORE_LINKS.bundles.commandDuo,
    copy: {
      en: {
        title: 'Command & Clarity Duo',
        subtitle: 'VELKARION + LUMILISK · Strategy & Data Stack',
        desc: 'Pair Lumilisk (local PDF/CSV/chart synthesis & anomaly detection) with Velkarion (impact-ranked priorities, blocker triage & crisp executive dispatches). High-output clarity with zero cloud uploads.',
        cta: 'Get Command & Clarity · $22',
      },
      es: {
        title: 'Command & Clarity Duo',
        subtitle: 'VELKARION + LUMILISK · Mando y Datos Locales',
        desc: 'Une a Lumilisk (síntesis local de PDFs, CSVs, métricas y gráficas) con Velkarion (prioridades por impacto, desbloqueo y comunicados ejecutivos). Decisiones nítidas sin subir datos sensibles.',
        cta: 'Llevar Command & Clarity · $22',
      },
    },
  },
  {
    id: 'calm-duo',
    icon: '☁️',
    members: ['nimpu', 'yuravax'],
    price: '$22',
    regularPrice: '$38',
    saveAmount: '$16',
    url: STORE_LINKS.bundles.calmDuo,
    copy: {
      en: {
        title: 'Calm & Creative Duo',
        subtitle: 'NIMPU + YURAVAX · Studio & Wellness Stack',
        desc: 'Pair Nimpu (ADHD-friendly screen simplification, gentle pacing & diplomatic replies) with Yuravax (magnetic hooks, visual critique & cliché-free editorial polish). Keep your creative flow serene.',
        cta: 'Get Calm & Creative · $22',
      },
      es: {
        title: 'Calm & Creative Duo',
        subtitle: 'NIMPU + YURAVAX · Calma y Estudio Creativo',
        desc: 'Combina a Nimpu (lectura sin sobrecarga ADHD-friendly y tono diplomático) con Yuravax (hooks magnéticos, crítica visual y redacción memorable). Flujo creativo y serenidad diaria.',
        cta: 'Llevar Calm & Creative · $22',
      },
    },
  },
];

export const I18N = {
  en: {
    metaTitle:
      'Zero-UI 3D Desktop Bots v1.1.0 — Standalone Windows 10/11 3D Companions + Optional BYOK AI (Ollama / Gemini / OpenAI)',
    metaDescription:
      'Ditch square chat windows. 6 real-time 3D Zero-UI desktop creatures for Windows 10/11 (x64 portable .exe). 100% offline 3D pets out of the box + optional BYOK AI with local Ollama ($0 API cost), Gemini, or OpenAI.',
    nav: {
      stage: 'Live 3D Stage',
      superpowers: '5 Native Workflows',
      proof: 'Desktop Proof',
      catalog: '6 Creatures',
      pricing: 'Squad & Bundles',
      checksums: 'SHA-256 Trust',
      ctaSquad: 'Full 6-Bot Squad · $49',
      langLabel: 'ES',
      langTitle: 'Cambiar idioma a Español',
    },
    hero: {
      eyebrow: 'v1.1.0 OFFICIAL RELEASE · WINDOWS 10/11 PORTABLE (.EXE) · ZERO TELEMETRY',
      titleLine1: 'Ditch the Square Chat Window.',
      titleLine2: 'Put Living 3D Specialists on Your Windows Taskbar.',
      lead:
        'Six standalone, frameless 3D desktop creatures with real-time WebGL physics and click-through transparency. Each runs 100% offline out of the box as a tactile 3D pet—or flips into a specialized BYOK co-pilot powered by local Ollama ($0 API cost), Google Gemini, or any OpenAI-compatible server.',
      pills: [
        '🪟 Windows 10/11 x64 Portable (.exe)',
        '🔌 100% Offline Out of the Box',
        '🦙 Local Ollama ($0 API) / Gemini / OpenAI',
        '🔒 DPAPI Key Encryption · $0/mo Subscriptions',
      ],
      primaryCta: '👑 Get Full 6-Bot Squad — $49',
      primarySub: 'Save $65 (-57% vs $114 reg.) · $8.16/bot · Pay once forever',
      secondaryCta: 'Browse Individual Bots ($12)',
      stageHeaderTitle: 'Try All 6 Live in Browser',
      stageHeaderBadge: '1 Active WebGL Context · 60 FPS',
      stageLoading: 'Mounting isolated 3D WebGL stage…',
      selectPrompt: 'Select Creature (switches live 3D rig, physics & theme accent):',
      controls: {
        pet: '💚 Pet (Click)',
        spin: '🔄 360° Spin (R)',
        power: '⚡ 3D Power (Alt+Click)',
        center: '🎯 Re-Center',
        sizeLabel: 'Size',
        stageHatchling: '🥚 Hatchling',
        stageRookie: '✨ Rookie',
        dragHint:
          'Tip: Drag the 3D body anywhere inside the simulated desktop, right-click it to inspect live Settings, or press R to spin.',
      },
      inspector: {
        physicsTag: '3D Physics',
        powerTag: 'Signature Power',
        presetsTitle: 'Factory BYOK Workflows Unlocked in Windows .exe:',
        buySinglePrefix: 'Get',
        buySingleSuffix: 'Portable .exe · $12',
        regPriceTag: '$19',
        promoBadge: '-37% Early Bird',
      },
    },
    contrast: {
      kicker: 'WHY ZERO-UI WINS ON DESKTOP',
      title: 'The 3D Creature Sitting Above Your Taskbar Is the Entire Interface.',
      subtitle:
        'Traditional AI wrappers trap you inside another square window eating 40% of your monitor, forcing constant Alt-Tabbing and $20/month cloud lock-in. Zero-UI v1.1.0 flips the paradigm.',
      oldTitle: '❌ Square Chat Window Bloat',
      oldItems: [
        'Blocks your IDE, spreadsheet, or canvas—constant Alt-Tab context switching.',
        'Mandatory cloud accounts, $20/mo recurring subscriptions, and opaque telemetry.',
        'Manual copy-pasting with markdown fences you have to strip every single time.',
        'Black-box cloud memory you cannot audit, edit locally, or air-gap.',
      ],
      newTitle: '✅ Zero-UI 3D Desktop Native (v1.1.0)',
      newItems: [
        'Frameless alpha = 0 rendering with click-through margins—clicks pass straight to your active apps.',
        '100% offline 3D companion by default; connect local Ollama ($0 API) only if and when you choose.',
        'Direct 3D Drag & Drop, Alt+Shift+S Screen Snip + offline Windows OCR, and 1-click Clipboard Magic.',
        'Plain-text %APPDATA% memoria.md + Windows DPAPI origin-locked encryption. Pay once, own forever.',
      ],
    },
    superpowers: {
      kicker: 'NATIVE WINDOWS 10/11 CAPABILITIES · v1.1.0',
      title: '5 Zero-Friction Desktop Superpowers',
      subtitle:
        'Works 100% offline as a tactile 3D companion out of the box. Flip on BYOK AI in ⚙️ Settings to unlock five native workflows tailored to each creature’s specialty:',
      activePreviewLabel: 'Live Factory Preset for Selected Bot:',
      cards: [
        {
          num: '01',
          icon: '🧩',
          shortcut: 'Drag & Drop → 3D Body',
          title: 'Direct 3D Body Drag & Drop',
          desc: 'Drop PNG/JPG/WebP/GIF mockups, PDF documents (up to 8 MB), or code/CSV/JSON/Markdown files (up to 1 MB; up to 3 files / 16 MB per turn) straight onto the creature’s 3D body for instant specialist analysis.',
          presetKey: 'drop',
        },
        {
          num: '02',
          icon: '✂️',
          shortcut: 'Alt + Shift + S',
          title: 'Snip-to-Bot + Offline Windows OCR Fallback',
          desc: 'Draw a rectangle over any UI, terminal error, KPI chart, or dense email on your monitor. Sends pixels + OCR to multimodal Vision models—and automatically falls back to built-in offline Windows OCR for fast text-only Ollama models (qwen2.5-coder, llama3.2).',
          presetKey: 'snip',
        },
        {
          num: '03',
          icon: '⚡',
          shortcut: 'Shift + Click · Alt + Shift + C',
          title: 'Zero-Chat Clipboard Magic',
          desc: 'Copy messy git commits, broken JSON, raw cells, or a blunt draft (Ctrl+C), Shift+Click the 3D creature, and paste (Ctrl+V) clean, ready-to-use output—without markdown fences and without polluting your main chat thread.',
          presetKey: 'clipboard',
        },
        {
          num: '04',
          icon: '📂',
          shortcut: '%APPDATA%\\...\\memoria.md',
          title: 'Open, Auditable Local Memory (memoria.md)',
          desc: 'No hidden cloud vector DBs. Context persists strictly on your own PC in a plain, human-readable Markdown file inside %APPDATA%. Inspect, edit, or wipe it in 1 click—guarded by an automatic regex anti-secret filter that blocks API keys and tokens.',
          presetKey: null,
          staticBadge: 'Regex Anti-Secret Guard · 1-Click Open / Edit / Wipe',
        },
        {
          num: '05',
          icon: '🔐',
          shortcut: '.json / .md + Windows DPAPI',
          title: 'Personality Cartridges & Origin-Locked DPAPI',
          desc: 'Customize System Prompts and 3 right-click quick recipes, share clean Personality Cartridges (.json / .md—never exports keys, private URLs, or memory), or hit ↺ Restore Factory anytime. Saved API keys are encrypted on disk via Windows DPAPI and strictly locked to their exact server origin.',
          presetKey: null,
          staticBadge: 'Windows Cryptographic DPAPI · Origin-Locked Keys',
        },
      ],
    },
    proof: {
      kicker: 'REAL WINDOWS 11 DESKTOP CAPTURE · UNEDITED',
      title: 'See the Portable .exe Squad Running Live on Windows 11',
      subtitle:
        'Every creature is an independent, frameless Windows x64 executable (~106.8 MB). Run a single companion above your taskbar—or summon all 6 simultaneously, each with its own isolated process, physics, and local memory.',
      videoBadge: '🎥 Real 25s Windows 11 Desktop Capture (v1.1.0)',
      videoCaption:
        'Real frameless alpha = 0 rendering, tactile reactions, live Hatchling ↔ Rookie evolution, and native dark Settings panel on Windows 11.',
      cards: [
        {
          title: 'All 6 Standalone .exe Bots Simultaneously',
          desc: 'Pyxol, Nimpu, Buggy, Yuravax, Lumilisk & Velkarion running side-by-side on one screen with independent physics & isolated memory.',
        },
        {
          title: 'Native Windows 11 Settings & Zero-Guilt Bond',
          desc: 'Right-click any creature or its System Tray icon for live S–XL sizing, Hatchling/Rookie stage, fullscreen auto-hide, and optional BYOK setup.',
        },
        {
          title: 'Live Evolution: 🥚 Hatchling ↔ ✨ Rookie',
          desc: 'Every bot includes two distinct procedural 3D geometries and normal-mapped surfaces you can switch anytime in 1 click.',
        },
        {
          title: 'True Click-Through Frameless Overlay',
          desc: 'Sits cleanly over browsers, IDEs, spreadsheets, and creative tools without blocking clicks on transparent margins.',
        },
      ],
    },
    catalog: {
      kicker: 'THE OFFICIAL 6-SPECIES LINEUP · v1.1.0',
      title: 'Choose Your Specialist—or Command the Full Squad',
      subtitle:
        'Every standalone edition ($12 Early Bird · reg. $19) includes the portable Windows 10/11 x64 .exe, both 3D evolution stages, offline companion mode, and pre-tuned BYOK workflows.',
      tryInStageBtn: '🎮 Try in 3D Stage',
      buyIndividualBtn: 'Get on itch.io · $12',
      regPrice: '$19',
      earlyBirdTag: '-37% OFF',
      workflowsHeading: 'Built-in BYOK Presets:',
    },
    pricing: {
      kicker: 'LAUNCH PRICING & VALUE ANCHORING · ONE-TIME PURCHASE',
      title: 'Zero Subscriptions. Pay Once, Own the Binaries Forever.',
      subtitle:
        'Start with a single specialist for $12, pair two complementary bots in a $22 Duo Pack, or unlock all 6 standalone Windows executables in the Full Squad Bundle for $8.16/bot.',
      squad: {
        ribbon: '👑 BEST VALUE · SAVE $65 USD (-57% OFF)',
        title: 'Full 6-Bot Zero-UI Squad (v1.1.0)',
        subtitle:
          'All 6 independent Windows 10/11 x64 portable .exe applications: Buggy, Pyxol, Velkarion, Nimpu, Lumilisk & Yuravax.',
        price: '$49',
        currency: 'USD',
        regularAnchor: '$114 USD',
        perBotBadge: 'Only $8.16 / bot · One-time payment',
        cta: '👑 Get Full 6-Bot Squad on itch.io — $49',
        ctaSub: 'Instant access · 6 isolated .exe portables (640.97 MB total) · Commercial & personal license on your PCs',
        bullets: [
          'Run 1, 2, or all 6 creatures simultaneously on your desktop—each is a separate portable .exe with isolated %APPDATA% settings & memoria.md.',
          'Covers every daily front: Product/UI (Buggy), DevTools/Logs (Pyxol), Tactical Execution (Velkarion), Calm/ADHD Focus (Nimpu), PDF/CSV Data (Lumilisk) & Creative Copy (Yuravax).',
          '100% offline 3D pets out of the box + $0 API cost when connected to local Ollama (http://localhost:11434/v1), or bring Gemini / OpenAI.',
          'Includes all 12 official SHA-256 verified v1.1.0 artifacts, Personality Cartridge import/export, and offline Windows OCR fallback.',
        ],
        previewHint: 'Click any squad member to preview in 3D Hero Stage:',
      },
      duosHeading: '3 Thematic Duo Packs — $22 USD Each (Save $16 vs. $38 reg.)',
      duosSub: '$11.00 / bot · Curated pairs of complementary desktop workflows',
      individualSummary: {
        badge: 'SINGLE EDITION · EARLY BIRD -37%',
        title: 'Any Individual 3D Bot — $12 USD',
        regular: '$19 USD',
        desc: 'Pick any single creature above to go straight to its dedicated itch.io page (includes browser-playable 3D demo + standalone Windows x64 portable .exe).',
        cta: 'Pick a Single Bot Above ↑',
      },
    },
    trust: {
      kicker: 'TECHNICAL TRUST, PRIVACY & BINARY INTEGRITY',
      title: '100% Verifiable SHA-256 Manifest & Portable Architecture',
      subtitle:
        'Built for security-conscious engineers, analysts, and indie creators. Every release binary is deterministic, ASAR-isolated (Electron 45.3.1, dirty: false), and verifiable via SHA-256.',
      smartscreenTitle: '🛡️ Transparent Note on Portable .exe & Windows SmartScreen',
      smartscreenBody:
        'Each bot ships as a clean, zero-telemetry standalone portable executable—no background services when closed, no registry bloat, and no cloud installer wrapper. Because indie portable binaries are distributed directly without invasive installers, Windows SmartScreen may display a standard informational prompt on first launch (“More info” → “Run anyway”). Always verify your file against the official SHA-256 checksums below.',
      powershellLabel: 'Verify any .exe in Windows PowerShell (2 seconds):',
      copyCmdBtn: 'Copy Command',
      copiedText: '✓ Copied!',
      manifestLink: '📄 Raw SHA256SUMS-ALL-SQUAD.txt',
      accordionSummary: '🔍 Inspect All 12 Official v1.1.0 Artifacts & SHA-256 Hashes (644.34 MB Total)',
      filterAll: 'All Artifacts (12)',
      filterExe: 'Windows .exe Portables (6)',
      filterZip: 'Audited Web Demos .zip (6)',
      colSpecies: 'Species',
      colArtifact: 'Official Artifact',
      colSize: 'Exact Size',
      colHash: 'SHA-256 Checksum',
      colAction: 'Verify',
      copyHashBtn: 'Copy SHA-256',
      totalsExe: '6 Windows x64 Portables: 640.97 MB (672,102,053 bytes)',
      totalsZip: '6 HTML5 Web Demos: 3.38 MB (3,539,915 bytes)',
      totalsGrand: 'Grand Total: 644.34 MB (675,641,968 bytes) · 100% Verified',
      faqTitle: 'Technical FAQ',
      faqs: [
        {
          q: 'Do I need an API key, internet connection, or Ollama to use the bots?',
          a: 'No. Every bot launches 100% offline out of the box with AI turned OFF. You get full 3D physics, cursor gaze tracking, pets/tickles, 360° spin (R), signature 3D powers (Alt+Click), live S–XL sizing, Hatchling/Rookie stages, local streaks, and .ics reminders with zero internet.',
        },
        {
          q: 'How does $0 local AI with Ollama work—even on text-only coder models?',
          a: 'Open Right-Click → ⚙️ Settings → 🔑 Artificial Intelligence, select OpenAI-compatible, and point to http://localhost:11434/v1. If you use a Vision model (qwen2.5-vl, gemma3, llava), Snip-to-Bot (Alt+Shift+S) sends pixels + OCR. If you use a fast text-only model (qwen2.5-coder, llama3.2), the app automatically runs local offline Windows OCR and feeds clean extracted text.',
        },
        {
          q: 'Where are my API keys and memory stored?',
          a: 'Strictly inside your local Windows %APPDATA% profile. Saved API keys are encrypted on disk via native Windows DPAPI tied to your Windows login and locked to the exact server origin URL. Conversation memory lives in a plain-text memoria.md file with an automatic regex guard that blocks keys and secrets.',
        },
        {
          q: 'Can I really run multiple creatures on screen at the same time?',
          a: 'Yes! Each species is compiled as an isolated standalone .exe with its own System Tray icon, desktop slot, personality cartridge, and %APPDATA% folder. Run one minimalist helper or all 6 Squad members simultaneously.',
        },
      ],
    },
    footer: {
      tagline:
        'Standalone 3D Zero-UI Desktop Companions for Windows 10/11 (x64 Portable) · Offline-First + Optional BYOK AI.',
      meta: 'Release v1.1.0 · Zero Telemetry · One-Time Purchase · Built with Three.js & Electron',
      linksTitle: 'Official Storefront Links (itch.io)',
      hubLinkLabel: 'Visit Creator Storefront (elbuilder77.itch.io) →',
    },
  },

  es: {
    metaTitle:
      'Zero-UI 3D Desktop Bots v1.1.0 — 6 Compañeros 3D Sin Fondo para Windows 10/11 (.exe Portable) + IA BYOK Opcional',
    metaDescription:
      'Olvida las ventanas cuadradas de chat. 6 criaturas 3D Zero-UI en tiempo real para Windows 10/11 (.exe x64 portable). 100% offline de fábrica + copiloto BYOK opcional con Ollama local ($0 en APIs), Gemini u OpenAI.',
    nav: {
      stage: 'Escenario 3D',
      superpowers: '5 Flujos Nativos',
      proof: 'Captura Real Win11',
      catalog: '6 Criaturas',
      pricing: 'Squad y Bundles',
      checksums: 'Checksums SHA-256',
      ctaSquad: 'Full 6-Bot Squad · $49',
      langLabel: 'EN',
      langTitle: 'Switch language to English',
    },
    hero: {
      eyebrow: 'LANZAMIENTO OFICIAL v1.1.0 · WINDOWS 10/11 PORTABLE (.EXE) · CERO TELEMETRÍA',
      titleLine1: 'Olvida las Ventanas Cuadradas de Chat.',
      titleLine2: 'Pon Especialistas 3D Vivos sobre tu Barra de Tareas.',
      lead:
        'Seis criaturas 3D independientes sin marco para escritorio Windows con física WebGL en tiempo real y márgenes click-through. Funcionan 100% offline de fábrica como mascotas táctiles 3D, o se transforman en copilotos BYOK conectando Ollama local ($0 en APIs), Google Gemini o cualquier servidor compatible con OpenAI.',
      pills: [
        '🪟 Windows 10/11 x64 Portable (.exe)',
        '🔌 100% Offline de Fábrica',
        '🦙 Ollama Local ($0 API) / Gemini / OpenAI',
        '🔒 Cifrado Windows DPAPI · $0/mes Suscripción',
      ],
      primaryCta: '👑 Llevar Full 6-Bot Squad — $49',
      primarySub: 'Ahorras $65 (-57% sobre $114 reg.) · $8.16/bot · Pago único de por vida',
      secondaryCta: 'Ver Bots Individuales ($12)',
      stageHeaderTitle: 'Prueba los 6 en Vivo en tu Navegador',
      stageHeaderBadge: '1 Contexto WebGL Activo · 60 FPS',
      stageLoading: 'Montando escenario 3D WebGL aislado…',
      selectPrompt: 'Elige Criatura (cambia modelo 3D, física y acento en vivo):',
      controls: {
        pet: '💚 Acariciar (Clic)',
        spin: '🔄 Giro 360° (R)',
        power: '⚡ Poder 3D (Alt+Clic)',
        center: '🎯 Centrar',
        sizeLabel: 'Tamaño',
        stageHatchling: '🥚 Cría',
        stageRookie: '✨ Rookie',
        dragHint:
          'Tip: Arrastra el cuerpo 3D libremente por el escritorio simulado, haz clic derecho sobre la criatura para abrir ⚙️ Ajustes en vivo, o pulsa R para girar.',
      },
      inspector: {
        physicsTag: 'Física 3D',
        powerTag: 'Poder Especial',
        presetsTitle: 'Flujos BYOK de Fábrica Incluidos en el .exe Windows:',
        buySinglePrefix: 'Comprar',
        buySingleSuffix: 'Portable .exe · $12',
        regPriceTag: '$19',
        promoBadge: '-37% Early Bird',
      },
    },
    contrast: {
      kicker: 'POR QUÉ ZERO-UI SUPERA AL CHAT TRADICIONAL',
      title: 'El Personaje 3D Flotando sobre tu Barra de Tareas Es Toda la Interfaz.',
      subtitle:
        'Los asistentes tradicionales te encierran en otra ventana cuadrada que devora medio monitor, te obliga a hacer Alt-Tab constante y cobra $20/mes en la nube. Zero-UI v1.1.0 cambia las reglas.',
      oldTitle: '❌ Ventanas Cuadradas de Chat SaaS',
      oldItems: [
        'Tapan tu editor, hojas de cálculo o lienzo—interrupción constante con Alt-Tab.',
        'Cuentas obligatorias en la nube, suscripciones de $20/mes y telemetría opaca.',
        'Copiar y pegar manual limpiando cercas Markdown una y otra vez.',
        'Memoria encerrada en servidores ajenos que no puedes auditar ni usar sin internet.',
      ],
      newTitle: '✅ Escritorio Zero-UI 3D Nativo (v1.1.0)',
      newItems: [
        'Renderizado sin marco (alpha = 0) con márgenes click-through que dejan pasar tus clics a tus apps activas.',
        'Mascota 3D 100% offline por defecto; conecta Ollama local ($0 en APIs) solo si tú decides encender la IA.',
        'Drag & Drop directo al cuerpo 3D, recorte Alt+Shift+S + OCR offline de Windows y Magia de Portapapeles.',
        'Memoria abierta memoria.md en %APPDATA% + cifrado local Windows DPAPI atado al origen. Pago único para siempre.',
      ],
    },
    superpowers: {
      kicker: 'CAPACIDADES NATIVAS EN WINDOWS 10/11 · v1.1.0',
      title: 'Las 5 Capacidades Zero-Friction de Escritorio',
      subtitle:
        'De fábrica disfruta tu compañero 3D 100% offline. Y al activar tu proveedor BYOK en ⚙️ Ajustes, desbloqueas 5 flujos nativos calibrados para la especialidad de cada criatura:',
      activePreviewLabel: 'Preset de Fábrica en Vivo de la Criatura Seleccionada:',
      cards: [
        {
          num: '01',
          icon: '🧩',
          shortcut: 'Drag & Drop → Cuerpo 3D',
          title: 'Drag & Drop Directo al Cuerpo 3D',
          desc: 'Suelta capturas PNG/JPG/WebP/GIF, documentos PDF (hasta 8 MB) o archivos de código/CSV/JSON/Markdown (hasta 1 MB; hasta 3 archivos / 16 MB por consulta) directamente encima de la criatura 3D para analizarlos al instante.',
          presetKey: 'drop',
        },
        {
          num: '02',
          icon: '✂️',
          shortcut: 'Alt + Shift + S',
          title: 'Snip-to-Bot + Fallback a OCR Local Offline de Windows',
          desc: 'Recorta cualquier interfaz, terminal, tabla o correo en tu monitor. Usa Visión multimodal nativa y cambia automáticamente al OCR local offline de Windows cuando usas modelos rápidos solo-texto de Ollama (qwen2.5-coder, llama3.2).',
          presetKey: 'snip',
        },
        {
          num: '03',
          icon: '⚡',
          shortcut: 'Shift + Clic · Alt + Shift + C',
          title: 'Magia Instantánea de Portapapeles',
          desc: 'Copia commits desordenados, JSON roto, celdas crudas o un borrador tenso (Ctrl+C), haz Shift+Clic sobre la criatura 3D y pega (Ctrl+V) el resultado limpio y transformado, sin bloques Markdown ni ensuciar tu conversación.',
          presetKey: 'clipboard',
        },
        {
          num: '04',
          icon: '📂',
          shortcut: '%APPDATA%\\...\\memoria.md',
          title: 'Memoria Local Abierta y Auditable (memoria.md)',
          desc: 'Cero bases de datos ocultas en la nube. Tu contexto vive en un archivo Markdown legible dentro de tu carpeta %APPDATA% en Windows. Ábrelo, edítalo o vacíalo en 1 clic, protegido por filtro automático anti-secretos.',
          presetKey: null,
          staticBadge: 'Filtro Anti-Secretos Automático · 1 Clic Abrir / Editar / Vaciar',
        },
        {
          num: '05',
          icon: '🔐',
          shortcut: '.json / .md + Windows DPAPI',
          title: 'Cartuchos de Personalidad y Cifrado Windows DPAPI',
          desc: 'Edita el System Prompt y 3 recetas rápidas en el menú de clic derecho, comparte Cartuchos de Personalidad (.json / .md sin exportar claves, URLs ni memoria) o restaura fábrica en 1 clic. Las claves API se cifran en disco con Windows DPAPI atadas al origen exacto del servidor.',
          presetKey: null,
          staticBadge: 'Protección Criptográfica Windows DPAPI · Claves Atadas al Origen',
        },
      ],
    },
    proof: {
      kicker: 'CAPTURA REAL EN ESCRITORIO WINDOWS 11 · SIN EDICIÓN',
      title: 'Mira el Squad Portable .exe Corriendo en Vivo en Windows 11',
      subtitle:
        'Cada criatura es un ejecutable Windows x64 independiente sin marco (~106.8 MB). Usa un solo compañero sobre tu barra de tareas o invoca a los 6 al mismo tiempo, cada uno con su física, proceso y memoria aislada.',
      videoBadge: '🎥 Captura Real de 25s en Escritorio Windows 11 (v1.1.0)',
      videoCaption:
        'Transparencia real alpha = 0, reacciones físicas táctiles, evolución en vivo Cría ↔ Rookie y panel nativo oscuro de Ajustes sobre Windows 11.',
      cards: [
        {
          title: 'Los 6 Bots .exe Corriendo Simultáneamente',
          desc: 'Pyxol, Nimpu, Buggy, Yuravax, Lumilisk y Velkarion activos a la vez en pantalla con física independiente y memoria aislada.',
        },
        {
          title: 'Panel Nativo en Windows 11 y Vínculo Sin Culpa',
          desc: 'Clic derecho sobre la criatura o su icono en Bandeja del Sistema para tamaño S–XL en vivo, etapa Cría/Rookie, auto-ocultar en pantalla completa e IA opcional.',
        },
        {
          title: 'Evolución en Vivo: 🥚 Cría ↔ ✨ Rookie',
          desc: 'Cada bot integra dos geometrías 3D procedurales y texturas con relieve propias que puedes alternar al instante con un clic.',
        },
        {
          title: 'Superposición Click-Through Sin Marco',
          desc: 'Flota limpiamente sobre navegadores, editores de código, hojas de cálculo y herramientas de diseño sin bloquear tus clics.',
        },
      ],
    },
    catalog: {
      kicker: 'CATÁLOGO OFICIAL DE LAS 6 ESPECIES · v1.1.0',
      title: 'Elige a tu Especialista — o Comanda el Squad Completo',
      subtitle:
        'Cada edición individual ($12 Early Bird · reg. $19) incluye el ejecutable portable Windows 10/11 x64 (.exe), ambas etapas 3D, modo mascota offline y flujos BYOK pre-calibrados.',
      tryInStageBtn: '🎮 Probar en Escenario 3D',
      buyIndividualBtn: 'Comprar en itch.io · $12',
      regPrice: '$19',
      earlyBirdTag: '-37% OFF',
      workflowsHeading: 'Presets BYOK de Fábrica:',
    },
    pricing: {
      kicker: 'PRECIOS DE LANZAMIENTO Y BUNDLES · PAGO ÚNICO',
      title: 'Cero Suscripciones. Paga Una Vez, Tuyos Para Siempre.',
      subtitle:
        'Empieza con un especialista por $12 USD, combina dos flujos complementarios en un Duo Pack por $22 USD, o desbloquea los 6 ejecutables independientes en el Full Squad por solo $8.16/bot.',
      squad: {
        ribbon: '👑 MEJOR VALOR · AHORRAS $65 USD (-57% OFF)',
        title: 'Full 6-Bot Zero-UI Squad (v1.1.0)',
        subtitle:
          'Los 6 ejecutables portables independientes (.exe x64) para Windows 10/11: Buggy, Pyxol, Velkarion, Nimpu, Lumilisk y Yuravax.',
        price: '$49',
        currency: 'USD',
        regularAnchor: '$114 USD',
        perBotBadge: 'Solo $8.16 / bot · Pago único sin mensualidades',
        cta: '👑 Llevar Full 6-Bot Squad en itch.io — $49',
        ctaSub: 'Acceso inmediato · 6 portables .exe aislados (640.97 MB total) · Licencia personal y comercial en tus equipos',
        bullets: [
          'Ejecuta 1, 2 o los 6 bots simultáneamente en pantalla: cada uno es un .exe independiente con ajustes y memoria %APPDATA% aislados.',
          'Cubre todos tus frentes: Producto/UI (Buggy), DevTools/Logs (Pyxol), Ejecución Táctica (Velkarion), Calma ADHD-Friendly (Nimpu), Datos PDF/CSV (Lumilisk) y Dirección Creativa (Yuravax).',
          'Mascotas 3D 100% offline desde el primer segundo + $0 en APIs al conectar Ollama local (http://localhost:11434/v1), Gemini u OpenAI.',
          'Incluye los 12 artefactos v1.1.0 verificados con SHA-256, Cartuchos de Personalidad compartibles y OCR offline de Windows.',
        ],
        previewHint: 'Haz clic en cualquier miembro para probarlo en el Escenario 3D:',
      },
      duosHeading: '3 Duo Packs Temáticos — $22 USD c/u (Ahorras $16 sobre $38 reg.)',
      duosSub: '$11.00 / bot · Parejas diseñadas para flujos de escritorio complementarios',
      individualSummary: {
        badge: 'EDICIÓN INDIVIDUAL · EARLY BIRD -37%',
        title: 'Cualquier Bot 3D Individual — $12 USD',
        regular: '$19 USD',
        desc: 'Elige cualquiera de las 6 criaturas arriba para ir directo a su ficha oficial en itch.io (incluye demo 3D jugable en navegador + ejecutable portable Windows x64 .exe).',
        cta: 'Elegir un Bot Individual Arriba ↑',
      },
    },
    trust: {
      kicker: 'CONFIANZA TÉCNICA, PRIVACIDAD E INTEGRIDAD BINARIA',
      title: 'Manifiesto SHA-256 100% Verificable y Arquitectura Portable',
      subtitle:
        'Diseñado para desarrolladores, analistas y creadores exigentes con su privacidad. Cada binario es determinista, aislado en ASAR (Electron 45.3.1, dirty: false) y auditable vía SHA-256.',
      smartscreenTitle: '🛡️ Nota Transparente sobre Ejecutables Portables (.exe) y Windows SmartScreen',
      smartscreenBody:
        'Cada criatura se entrega como un ejecutable portable limpio con cero telemetría: sin servicios en segundo plano al cerrarlo, sin ensuciar el registro de Windows y sin instaladores invasivos. Al distribuirse de forma directa como software indie portable, Windows SmartScreen puede mostrar en la primera apertura su aviso informativo estándar («Más información» → «Ejecutar de todas formas»). Verifica siempre la autenticidad criptográfica de tu descarga con los hashes SHA-256 oficiales de abajo.',
      powershellLabel: 'Verifica cualquier .exe en Windows PowerShell (en 2 segundos):',
      copyCmdBtn: 'Copiar Comando',
      copiedText: '✓ ¡Copiado!',
      manifestLink: '📄 Ver SHA256SUMS-ALL-SQUAD.txt',
      accordionSummary: '🔍 Inspeccionar los 12 Artefactos Oficiales v1.1.0 y Hashes SHA-256 (644.34 MB Total)',
      filterAll: 'Todos los Artefactos (12)',
      filterExe: 'Portables Windows .exe (6)',
      filterZip: 'Demos Web Auditadas .zip (6)',
      colSpecies: 'Especie',
      colArtifact: 'Artefacto Oficial',
      colSize: 'Tamaño Exacto',
      colHash: 'Hash SHA-256 Oficial',
      colAction: 'Verificar',
      copyHashBtn: 'Copiar SHA-256',
      totalsExe: '6 Portables Windows x64 (.exe): 640.97 MB (672,102,053 bytes)',
      totalsZip: '6 Demos Web HTML5 (.zip): 3.38 MB (3,539,915 bytes)',
      totalsGrand: 'Total Consolidado: 644.34 MB (675,641,968 bytes) · 100% Verificado',
      faqTitle: 'Preguntas Frecuentes Técnicas (FAQ)',
      faqs: [
        {
          q: '¿Necesito clave API, internet u Ollama para usar las criaturas?',
          a: 'No. Cada bot arranca 100% offline de fábrica con la IA apagada. Tienes física 3D completa, seguimiento de mirada, caricias/cosquillas, giro 360° (R), poderes 3D (Alt+Clic), tamaños S–XL en vivo, etapas Cría/Rookie, rachas locales y recordatorios .ics sin conexión.',
        },
        {
          q: '¿Cómo funciona la IA local a $0 con Ollama incluso en modelos solo-texto?',
          a: 'En Clic derecho → ⚙️ Ajustes → 🔑 Inteligencia Artificial, elige proveedor compatible con OpenAI e ingresa http://localhost:11434/v1. Con modelos de Visión (qwen2.5-vl, gemma3, llava), Snip-to-Bot (Alt+Shift+S) envía imagen + OCR. Con modelos rápidos solo-texto (qwen2.5-coder, llama3.2), activa automáticamente el OCR local offline de Windows.',
        },
        {
          q: '¿Dónde se guardan mis claves API y mi memoria?',
          a: 'Exclusivamente en tu carpeta local %APPDATA% de Windows. Las claves API se cifran en disco con Windows DPAPI ligadas a tu sesión de usuario y bloqueadas al origen exacto del servidor configurado. Tu memoria vive en texto plano legible (memoria.md) con filtro regex anti-secretos.',
        },
        {
          q: '¿Puedo ejecutar las 6 criaturas al mismo tiempo en mi escritorio?',
          a: '¡Sí! Cada especie es un .exe portable aislado con su propio icono en la Bandeja del Sistema, slot de escritorio, cartucho de personalidad y carpeta %APPDATA% independiente. Puedes correr 1 o los 6 miembros del Squad a la vez.',
        },
      ],
    },
    footer: {
      tagline:
        'Compañeros 3D Zero-UI Independientes para Windows 10/11 (x64 Portable) · 100% Offline de Fábrica + Copiloto BYOK Opcional.',
      meta: 'Release v1.1.0 · Cero Telemetría · Pago Único · Creado con Three.js y Electron',
      linksTitle: 'Enlaces Oficiales de Tienda (itch.io)',
      hubLinkLabel: 'Visitar Tienda Oficial del Creador (elbuilder77.itch.io) →',
    },
  },
};
