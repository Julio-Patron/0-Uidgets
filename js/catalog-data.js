/**
 * Zero-UI 3D Desktop Bots (v1.1.0) — Official 6-Species Catalog, Pricing, SHA-256 & EN/ES Copy
 * Universal Engine Architecture: All 6 creatures share the exact same full engine,
 * 5 native Windows superpowers, and editable .json/.md Personality Cartridges.
 *
 * Full Squad Bundle URL Configuration:
 * Replace fullSquad below with your direct itch.io / Gumroad bundle URL if desired.
 */

export const STORE_LINKS = {
  creatorHub: 'https://elbuilder77.itch.io',
  fullSquad: 'https://elbuilder77.itch.io',
  species: {
    buggy: 'https://elbuilder77.itch.io/buggy-3d-bot',
    pyxol: 'https://elbuilder77.itch.io/pyxol-3d-bot',
    velkarion: 'https://elbuilder77.itch.io/velkarion-3d-bot',
    nimpu: 'https://elbuilder77.itch.io/nimpu-3d-bot',
    lumilisk: 'https://elbuilder77.itch.io/lumilisk-3d-bot',
    yuravax: 'https://elbuilder77.itch.io/yuravax-3d-bot',
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
      virustotalUrl:
        'https://www.virustotal.com/gui/file/f1e4c3b6da053dad06118693741fbc45b54492171a14d9acd95ea70c3ecd69e9',
    },
    copy: {
      en: {
        badge: 'Emerald Slime · Jelly Physics',
        tagline: 'Translucent 3D emerald slime · Floating bubbles & orb',
        speciesDesc:
          'Volume-conserving 3D emerald slime with internal floating bubbles & reactive slime orb',
        summary:
          'Includes the full universal Zero-UI engine (offline 3D pet + all 5 BYOK workflows). Ships with an energetic builder starter persona you can freely edit or swap via Personality Cartridges.',
        physicsLabel: 'Volume-Conserving Jelly',
        powerLabel: '🟢 Slime Orb Boing!',
        voiceQuote:
          '“Boing! I live right above your taskbar—keep me as an offline 3D slime pet, or load any prompt & cartridge you like!”',
        desktopContext: {
          winTitle: 'VS Code — Universal Zero-UI Engine (alpha = 0 · Click-Through)',
          line1: 'Drop any PDF, image, CSV or code file onto the 3D body  →  Instant analysis',
          line2: 'Alt+Shift+S screen snip or Shift+Click clipboard transform  →  100% customizable',
        },
        workflows: {
          drop: {
            label: '🧩 Starter Drop Preset (Editable)',
            desc: 'Drop images, PDFs (up to 8 MB), code, CSV or JSON onto Buggy—customize the instruction anytime or load any cartridge.',
          },
          snip: {
            label: '🎨 Starter Screen-Snip Preset (Editable)',
            desc: 'Press Alt+Shift+S over any window on screen (Vision + automatic offline Windows OCR fallback for local Ollama models).',
          },
          clipboard: {
            label: '🚀 Starter Clipboard Preset (Editable)',
            desc: 'Copy any raw notes, code, or draft, Shift+Click Buggy, and paste clean output ready for Ctrl+V with zero chat clutter.',
          },
        },
        traitPills: ['🟢 Internal 3D Bubbles', '⚙️ Full Universal Engine', '🎛️ Editable Cartridges'],
      },
      es: {
        badge: 'Slime Esmeralda · Física Jelly',
        tagline: 'Gelatina esmeralda 3D translúcida · Burbujas y orbe flotante',
        speciesDesc:
          'Criatura gelatinosa esmeralda 3D con conservación de volumen, burbujas internas y orbe reactivo',
        summary:
          'Incluye el motor universal Zero-UI completo (mascota 3D offline + los 5 flujos BYOK). Trae una vibra inicial entusiasta 100% editable o intercambiable mediante Cartuchos de Personalidad.',
        physicsLabel: 'Física Jelly con Volumen',
        powerLabel: '🟢 ¡Orbe Slime Boing!',
        voiceQuote:
          '«¡Boing! Vivo sobre tu barra de tareas: úsame 100% offline como mascota 3D o cámbiale el rol y cartucho cuando quieras.»',
        desktopContext: {
          winTitle: 'VS Code — Motor Universal Zero-UI (alpha = 0 · Click-Through)',
          line1: 'Suelta cualquier PDF, imagen, CSV o código al cuerpo 3D  →  Análisis al vuelo',
          line2: 'Recorte Alt+Shift+S o Shift+Clic en portapapeles  →  100% personalizable',
        },
        workflows: {
          drop: {
            label: '🧩 Preset Inicial Drag & Drop (Editable)',
            desc: 'Suelta imágenes, PDFs (hasta 8 MB), código, CSV o JSON sobre Buggy; edita la instrucción o carga cualquier cartucho.',
          },
          snip: {
            label: '🎨 Preset Inicial Snip-to-Bot (Editable)',
            desc: 'Pulsa Alt+Shift+S sobre cualquier ventana (Visión nativa + fallback automático a OCR offline de Windows con Ollama).',
          },
          clipboard: {
            label: '🚀 Preset Inicial de Portapapeles (Editable)',
            desc: 'Copia notas, código o borradores, haz Shift+Clic en Buggy y pega el texto limpio con Ctrl+V sin abrir el chat.',
          },
        },
        traitPills: ['🟢 Burbujas 3D Reales', '⚙️ Motor Universal Completo', '🎛️ Cartuchos Editables'],
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
      virustotalUrl:
        'https://www.virustotal.com/gui/file/f776ae66a6fc88aa8eb606fd0e642682dea49087d34065b2b248d43fd318f085',
    },
    copy: {
      en: {
        badge: 'Voxel Spirit · Glitch Physics',
        tagline: 'Neon-pink & cyan 3D voxel quadruped · Circuit runes',
        speciesDesc:
          'Procedural 3D voxel spirit with pink-cyan circuit textures, pixelated horns & floating diamond runes',
        summary:
          'Runs the exact same full universal Zero-UI engine as every bot in the lineup. Ships with a crisp geek-pragmatic starter persona you can customize for any workflow via Cartridges.',
        physicsLabel: 'Reactive Voxel Glitch',
        powerLabel: '👾 Quantum Voxel Cascade!',
        voiceQuote:
          '“Zero-latency ping! Enjoy my voxel glitch physics offline, or customize my prompt & cartridges for any task on your PC.”',
        desktopContext: {
          winTitle: 'Windows Terminal — Universal Zero-UI Engine (Local Ollama Ready)',
          line1: 'Alt+Shift+S over any terminal, chart or doc  →  Vision + offline Windows OCR',
          line2: 'Shift+Click 3D body  →  Transforms clipboard text or JSON according to your preset',
        },
        workflows: {
          drop: {
            label: '🐛 Starter Drop Preset (Editable)',
            desc: 'Drop logs, code, PDFs (up to 8 MB), CSVs or screenshots onto Pyxol—tweak the prompt for coding, research, or writing anytime.',
          },
          snip: {
            label: '🔌 Starter Screen-Snip Preset (Editable)',
            desc: 'Crop any region of your monitor with Alt+Shift+S; works with multimodal Vision or text-only Ollama via Windows OCR.',
          },
          clipboard: {
            label: '👾 Starter Clipboard Preset (Editable)',
            desc: 'Copy messy JSON, commands, or text, Shift+Click Pyxol, and paste clean output directly with Ctrl+V.',
          },
        },
        traitPills: ['👾 Voxel Particle Bursts', '⚙️ Full Universal Engine', '🎛️ Editable Cartridges'],
      },
      es: {
        badge: 'Espíritu Vóxel · Física Glitch',
        tagline: 'Cuadrúpedo vóxel 3D rosa-cian · Runas y circuitos',
        speciesDesc:
          'Espíritu cuadrúpedo vóxel 3D con circuitos rosa-cian, cuernos pixelados y runas de diamante flotantes',
        summary:
          'Ejecuta exactamente el mismo motor universal Zero-UI que toda la línea. Incluye una vibra inicial geek-pragmática que puedes personalizar para cualquier tarea con Cartuchos.',
        physicsLabel: 'Física Glitch Vóxel',
        powerLabel: '👾 ¡Cascada Vóxel Cuántica!',
        voiceQuote:
          '«¡Ping sin latencia! Disfruta mi física vóxel 100% offline o personaliza mi prompt y cartuchos para lo que necesites.»',
        desktopContext: {
          winTitle: 'Windows Terminal — Motor Universal Zero-UI (Ollama Local Listo)',
          line1: 'Alt+Shift+S sobre cualquier terminal, gráfica o doc  →  Visión + OCR Windows',
          line2: 'Shift+Clic al cuerpo 3D  →  Transforma tu portapapeles según tu propio preset',
        },
        workflows: {
          drop: {
            label: '🐛 Preset Inicial Drag & Drop (Editable)',
            desc: 'Suelta logs, código, PDFs (hasta 8 MB), CSVs o capturas sobre Pyxol; adapta su rol a código, estudio o redacción cuando gustes.',
          },
          snip: {
            label: '🔌 Preset Inicial Snip-to-Bot (Editable)',
            desc: 'Recorta cualquier zona del monitor con Alt+Shift+S; soporta Visión nativa y OCR offline de Windows en modelos solo-texto.',
          },
          clipboard: {
            label: '👾 Preset Inicial de Portapapeles (Editable)',
            desc: 'Copia JSON, comandos o apuntes, haz Shift+Clic en Pyxol y pega el resultado limpio al instante.',
          },
        },
        traitPills: ['👾 Partículas Vóxel 3D', '⚙️ Motor Universal Completo', '🎛️ Cartuchos Editables'],
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
      virustotalUrl:
        'https://www.virustotal.com/gui/file/44732fa09c3b021c2167fa66426ef71dfb821d217bf6d25ee250fff34a910b90',
    },
    copy: {
      en: {
        badge: 'Solar Mecha-Draco · Heavy Physics',
        tagline: 'Brushed-titanium 3D mecha-dragon · Solar plasma core',
        speciesDesc:
          'Armored 3D titanium mecha-draco with segmented tail & spinning solar plasma chest reactor',
        summary:
          'Powered by the same complete Zero-UI engine (offline companion + full BYOK suite). Comes with a focused commander starter vibe, fully customizable to coding, data, or creative roles.',
        physicsLabel: 'Armored Heavy Titanium',
        powerLabel: '⚡ Solar Reactor Overdrive!',
        voiceQuote:
          '“Solar reactor online. Keep me grounded above your taskbar offline, or load any custom persona cartridge for your mission.”',
        desktopContext: {
          winTitle: 'Desktop Workspace — Universal Zero-UI Engine (DPAPI Protected)',
          line1: 'Drop PDFs, code, CSVs or notes onto the 3D armor  →  Custom workflow',
          line2: 'Right-click 3D body  →  Edit System Prompt, 3 quick recipes & memoria.md',
        },
        workflows: {
          drop: {
            label: '🛡️ Starter Drop Preset (Editable)',
            desc: 'Drop PDFs (up to 8 MB), docs, CSVs, or code onto Velkarion—use the starter action-plan preset or rewrite it for any job.',
          },
          snip: {
            label: '🎯 Starter Screen-Snip Preset (Editable)',
            desc: 'Snip any board, IDE, or chart via Alt+Shift+S with native Vision + offline Windows OCR fallback.',
          },
          clipboard: {
            label: '⚡ Starter Clipboard Preset (Editable)',
            desc: 'Copy rough drafts, notes, or snippets, Shift+Click Velkarion, and paste crisp output in one step.',
          },
        },
        traitPills: ['⚡ Spinning Solar Core', '⚙️ Full Universal Engine', '🎛️ Editable Cartridges'],
      },
      es: {
        badge: 'Mecha-Draco Solar · Física Heavy',
        tagline: 'Mecha-dragón 3D de titanio cepillado · Reactor solar',
        speciesDesc:
          'Mecha-draco acorazado 3D de titanio con cola segmentada y reactor pectoral de plasma solar giratorio',
        summary:
          'Impulsado por el mismo motor universal Zero-UI completo (mascota offline + suite BYOK total). Trae una vibra inicial firme y enfocada, 100% personalizable a código, datos o escritura.',
        physicsLabel: 'Física Heavy Acorazada',
        powerLabel: '⚡ ¡Reactor Solar Overdrive!',
        voiceQuote:
          '«Reactor solar en línea. Acompáñate en modo 100% offline o cárgale cualquier cartucho de personalidad para tu flujo.»',
        desktopContext: {
          winTitle: 'Escritorio Windows 11 — Motor Universal Zero-UI (Cifrado DPAPI)',
          line1: 'Suelta PDFs, código, CSVs o notas sobre su armadura 3D  →  Flujo a medida',
          line2: 'Clic derecho en la criatura  →  Edita System Prompt, 3 recetas y memoria.md',
        },
        workflows: {
          drop: {
            label: '🛡️ Preset Inicial Drag & Drop (Editable)',
            desc: 'Suelta PDFs (hasta 8 MB), documentos, CSVs o código sobre Velkarion; usa su preset táctico o cámbialo a cualquier rol.',
          },
          snip: {
            label: '🎯 Preset Inicial Snip-to-Bot (Editable)',
            desc: 'Recorta cualquier ventana, editor o gráfica con Alt+Shift+S usando Visión nativa u OCR local offline de Windows.',
          },
          clipboard: {
            label: '⚡ Preset Inicial de Portapapeles (Editable)',
            desc: 'Copia borradores, notas o fragmentos, haz Shift+Clic en Velkarion y pega el resultado pulido al instante.',
          },
        },
        traitPills: ['⚡ Reactor Solar 3D', '⚙️ Motor Universal Completo', '🎛️ Cartuchos Editables'],
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
      virustotalUrl:
        'https://www.virustotal.com/gui/file/76b08a7f7c07742a05af93248fbf2f238cf081dec7fafbbfd386f603ce0c9e22',
    },
    copy: {
      en: {
        badge: 'Cozy Cloud · Float Physics',
        tagline: 'Fluffy sky-blue 3D cloud pet · Springy rose ears',
        speciesDesc:
          'Buoyant ivory-sky 3D cloud creature with volumetric cloud collar, spring-physics pink ears & soft wings',
        summary:
          'Shares the exact same full universal Zero-UI engine (zero-decay bond offline + all 5 BYOK superpowers). Ships with a calm, gentle starter persona you can customize to any task.',
        physicsLabel: 'Buoyant Cloud Float',
        powerLabel: '☁️ Soft Cloud Hug!',
        voiceQuote:
          '“Take a gentle breath... Float with me 100% offline (zero streak guilt!), or configure any BYOK role & cartridge you want.”',
        desktopContext: {
          winTitle: 'Calm Desktop — Universal Zero-UI Engine (Zero-Decay Bond)',
          line1: '100% same capabilities in every bot  →  PDFs, code, OCR snip & clipboard',
          line2: 'Bond grows with active days & pets  →  Never penalizes rest days',
        },
        workflows: {
          drop: {
            label: '☁️ Starter Drop Preset (Editable)',
            desc: 'Drop long PDFs (up to 8 MB), code, CSVs, or notes onto Nimpu—keep the calm summary preset or load any custom cartridge.',
          },
          snip: {
            label: '🌱 Starter Screen-Snip Preset (Editable)',
            desc: 'Press Alt+Shift+S over dense screens, code, or charts (Vision + automatic offline Windows OCR fallback).',
          },
          clipboard: {
            label: '💌 Starter Clipboard Preset (Editable)',
            desc: 'Copy any draft or snippet, Shift+Click Nimpu, and paste transformed text straight from your clipboard.',
          },
        },
        traitPills: ['☁️ Spring-Ear Cloud Rig', '⚙️ Full Universal Engine', '🎛️ Editable Cartridges'],
      },
      es: {
        badge: 'Criatura Nube · Física Float',
        tagline: 'Nube esponjosa 3D celeste-rosada · Orejas con resorte',
        speciesDesc:
          'Tierna criatura nube 3D marfil-celeste con collar volumétrico, orejas rosadas con resorte y alitas suaves',
        summary:
          'Comparte exactamente el mismo motor universal Zero-UI (vínculo sin penalización offline + los 5 superpoderes BYOK). Incluye una vibra inicial serena adaptable a cualquier tarea.',
        physicsLabel: 'Flotación Suave de Nube',
        powerLabel: '☁️ ¡Abrazo de Nube Suave!',
        voiceQuote:
          '«Respira suavecito... Flota conmigo 100% offline sin culpa por ausencias, o ponme el rol y cartucho BYOK que prefieras.»',
        desktopContext: {
          winTitle: 'Escritorio Tranquilo — Motor Universal Zero-UI (Vínculo Sin Penalización)',
          line1: 'Exactamente las mismas funciones en los 6 bots  →  PDFs, código, OCR y portapapeles',
          line2: 'El vínculo sube con días activos y caricias  →  Jamás baja por descansar',
        },
        workflows: {
          drop: {
            label: '☁️ Preset Inicial Drag & Drop (Editable)',
            desc: 'Suelta PDFs largos (hasta 8 MB), código, CSVs o apuntes sobre Nimpu; conserva su tono suave o cárgale cualquier cartucho.',
          },
          snip: {
            label: '🌱 Preset Inicial Snip-to-Bot (Editable)',
            desc: 'Pulsa Alt+Shift+S sobre pantallas densas, código o tablas (Visión nativa + OCR offline de Windows automático).',
          },
          clipboard: {
            label: '💌 Preset Inicial de Portapapeles (Editable)',
            desc: 'Copia cualquier mensaje o fragmento, haz Shift+Clic en Nimpu y pega el texto transformado al vuelo.',
          },
        },
        traitPills: ['☁️ Orejas 3D con Resorte', '⚙️ Motor Universal Completo', '🎛️ Cartuchos Editables'],
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
      virustotalUrl:
        'https://www.virustotal.com/gui/file/a92afe3e4d7117d05b4babcf587dee52dc761ab97f25baf9a77dbe3b05ab5a00',
    },
    copy: {
      en: {
        badge: 'Sea Dragon · Serpentine Swim',
        tagline: 'Bioluminescent cyan-amethyst 3D sea dragon · Fan fins',
        speciesDesc:
          'Vertex-swimming 3D sea dragon with pearlescent cyan-amethyst scales, crystal forehead gem & translucent fins',
        summary:
          'Built on the exact same universal Zero-UI engine (offline 3D dragon + full local/BYOK workflow suite). Ships with a clear analytical starter vibe you can freely customize.',
        physicsLabel: 'Serpentine Vertex Swim',
        powerLabel: '🌊 Bioluminescent Pulse!',
        voiceQuote:
          '“Calm currents above your taskbar. Watch me swim 100% offline, or tailor my prompt & cartridges to any workflow.”',
        desktopContext: {
          winTitle: 'Local Workspace — Universal Zero-UI Engine (100% Private %APPDATA%)',
          line1: 'Drop PDFs (up to 8 MB), CSVs, images or code  →  Zero vendor cloud middlemen',
          line2: 'Plain-text memoria.md with automatic regex anti-secret guard',
        },
        workflows: {
          drop: {
            label: '📊 Starter Drop Preset (Editable)',
            desc: 'Drop PDFs (up to 8 MB), CSVs, code, or images onto Lumilisk—customize the prompt for data, engineering, or writing anytime.',
          },
          snip: {
            label: '🔎 Starter Screen-Snip Preset (Editable)',
            desc: 'Snip charts, code, or UIs on screen via Alt+Shift+S (Vision + built-in offline Windows OCR fallback).',
          },
          clipboard: {
            label: '🌊 Starter Clipboard Preset (Editable)',
            desc: 'Copy scattered rows, notes, or snippets, Shift+Click Lumilisk, and paste clean structured output.',
          },
        },
        traitPills: ['🌊 Serpentine 3D Wave', '⚙️ Full Universal Engine', '🎛️ Editable Cartridges'],
      },
      es: {
        badge: 'Dragón Marino · Nado Serpentino',
        tagline: 'Dragón marino bioluminiscente 3D · Aletas translúcidas',
        speciesDesc:
          'Dragón marino 3D con ondulación serpentina por vértices, escamas cian-amatista, gema frontal y aletas abanico',
        summary:
          'Construido sobre exactamente el mismo motor universal Zero-UI (dragón 3D offline + suite BYOK completa). Trae una vibra inicial cristalina que puedes adaptar a cualquier rol.',
        physicsLabel: 'Nado Serpentino 3D',
        powerLabel: '🌊 ¡Pulso Bioluminiscente!',
        voiceQuote:
          '«Corrientes en calma sobre tu escritorio. Mírame nadar 100% offline o configura mi prompt y cartuchos a tu medida.»',
        desktopContext: {
          winTitle: 'Espacio Local — Motor Universal Zero-UI (100% Privado en %APPDATA%)',
          line1: 'Suelta PDFs (hasta 8 MB), CSVs, imágenes o código  →  Sin nubes intermediarias',
          line2: 'Archivo memoria.md en texto plano con filtro automático anti-secretos',
        },
        workflows: {
          drop: {
            label: '📊 Preset Inicial Drag & Drop (Editable)',
            desc: 'Suelta PDFs (hasta 8 MB), CSVs, código o imágenes sobre Lumilisk; personaliza su instrucción para datos, código o textos.',
          },
          snip: {
            label: '🔎 Preset Inicial Snip-to-Bot (Editable)',
            desc: 'Recorta gráficas, código o pantallas con Alt+Shift+S (Visión nativa + OCR local offline de Windows automático).',
          },
          clipboard: {
            label: '🌊 Preset Inicial de Portapapeles (Editable)',
            desc: 'Copia celdas, apuntes o código, haz Shift+Clic en Lumilisk y pega una versión limpia y estructurada.',
          },
        },
        traitPills: ['🌊 Ondulación 3D Viva', '⚙️ Motor Universal Completo', '🎛️ Cartuchos Editables'],
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
      virustotalUrl:
        'https://www.virustotal.com/gui/file/667bcc058132ad92885f61a7400ca14dec2e1cea96402377af780e0be2aed1d9',
    },
    copy: {
      en: {
        badge: 'Celestial Bird · Ribbon Glide',
        tagline: 'Mystic indigo-cyan 3D celestial bird · Diamond halo',
        speciesDesc:
          'Bioluminescent 3D celestial bird with silky ivory plumage, glowing cyan V-wings, halo & iridescent ribbons',
        summary:
          'Shares the exact same full universal Zero-UI engine (offline 3D companion + all 5 BYOK workflows). Ships with an expressive creative starter vibe you can customize for anything.',
        physicsLabel: 'Celestial Ribbon Glide',
        powerLabel: '💠 Celestial Halo Surge!',
        voiceQuote:
          '“Luminous wings, zero window frames. Let me glide offline on your desktop, or load any custom persona cartridge.”',
        desktopContext: {
          winTitle: 'Creative & Dev Studio — Universal Zero-UI Engine (v1.1.0)',
          line1: 'Export / import clean .json & .md Personality Cartridges across any bot',
          line2: '1-click ↺ Restore Factory anytime  →  Zero API keys or private URLs exported',
        },
        workflows: {
          drop: {
            label: '✨ Starter Drop Preset (Editable)',
            desc: 'Drop manuscripts, code, PDFs (up to 8 MB), or mockups onto Yuravax’s wings—customize the prompt to fit any workflow.',
          },
          snip: {
            label: '🎭 Starter Screen-Snip Preset (Editable)',
            desc: 'Crop layouts, UIs, terminals, or slides with Alt+Shift+S (Vision + automatic offline Windows OCR fallback).',
          },
          clipboard: {
            label: '✍️ Starter Clipboard Preset (Editable)',
            desc: 'Copy any paragraph, commit log, or snippet, Shift+Click Yuravax, and paste polished output immediately.',
          },
        },
        traitPills: ['💠 Glowing V-Wings & Halo', '⚙️ Full Universal Engine', '🎛️ Editable Cartridges'],
      },
      es: {
        badge: 'Ave Celestial · Vuelo Luminoso',
        tagline: 'Ave celestial mística 3D índigo-cian · Halo romboidal',
        speciesDesc:
          'Ave celestial 3D con plumaje marfil sedoso, alas en V con venas cian luminosas, halo y cintas iridiscentes',
        summary:
          'Comparte exactamente el mismo motor universal Zero-UI (compañero 3D offline + los 5 flujos BYOK). Incluye una vibra inicial creativa que puedes personalizar para cualquier uso.',
        physicsLabel: 'Vuelo Celestial Iridiscente',
        powerLabel: '💠 ¡Halo Celestial Activo!',
        voiceQuote:
          '«Alas luminosas, cero bordes cuadrados. Déjame volar 100% offline en tu escritorio o cárgale cualquier cartucho.»',
        desktopContext: {
          winTitle: 'Estudio y Código — Motor Universal Zero-UI (v1.1.0)',
          line1: 'Exporta e importa Cartuchos de Personalidad (.json y .md) en cualquier criatura',
          line2: 'Botón ↺ Restaurar fábrica en 1 clic  →  Jamás exporta claves API ni URLs privadas',
        },
        workflows: {
          drop: {
            label: '✨ Preset Inicial Drag & Drop (Editable)',
            desc: 'Suelta manuscritos, código, PDFs (hasta 8 MB) o diseños sobre las alas de Yuravax; edita su prompt para cualquier tarea.',
          },
          snip: {
            label: '🎭 Preset Inicial Snip-to-Bot (Editable)',
            desc: 'Recorta interfaces, terminales o diapositivas con Alt+Shift+S (Visión nativa + OCR offline de Windows automático).',
          },
          clipboard: {
            label: '✍️ Preset Inicial de Portapapeles (Editable)',
            desc: 'Copia párrafos, commits o fragmentos, haz Shift+Clic en Yuravax y pega el resultado pulido al instante.',
          },
        },
        traitPills: ['💠 Alas en V + Halo 3D', '⚙️ Motor Universal Completo', '🎛️ Cartuchos Editables'],
      },
    },
  },
};

export const I18N = {
  en: {
    metaTitle:
      'Zero-UI 3D Desktop Bots v1.1.0 — 6 Standalone Windows 10/11 3D Companions + Universal BYOK AI Engine',
    metaDescription:
      'Ditch square chat windows. 6 real-time 3D Zero-UI desktop companions for Windows 10/11 (x64 portable .exe) sharing the same universal engine: 100% offline 3D pets + optional BYOK AI (Local Ollama $0, Gemini, OpenAI) & custom Personality Cartridges.',
    nav: {
      stage: 'Live 3D Stage',
      superpowers: 'Universal Engine',
      proof: 'Desktop Proof',
      catalog: '6 Species',
      pricing: '$12 vs $49 Squad',
      checksums: 'SHA-256 & VirusTotal',
      ctaSquad: 'Full 6-Bot Squad · $49',
      langLabel: 'ES',
      langTitle: 'Cambiar idioma a Español',
    },
    hero: {
      eyebrow: 'v1.1.0 OFFICIAL RELEASE · WINDOWS 10/11 PORTABLE (.EXE) · SAME FULL ENGINE IN EVERY BOT',
      titleLine1: 'Ditch the Square Chat Window.',
      titleLine2: 'Put 6 Living 3D Companions on Your Windows Taskbar.',
      lead:
        'Six standalone, frameless 3D desktop creatures built on the exact same universal Zero-UI engine. Every species runs 100% offline out of the box as a tactile 3D pet—or connects to local Ollama ($0 API cost), Google Gemini, or any OpenAI-compatible server with fully customizable prompts & interchangeable Personality Cartridges.',
      pills: [
        '🪟 Windows 10/11 x64 Portable (.exe)',
        '⚙️ Same Universal Engine in All 6 Bots',
        '🔌 100% Offline Pet + Optional Local Ollama ($0)',
        '🔒 Windows DPAPI Encryption · $0/mo Subscriptions',
      ],
      primaryCta: '👑 Get Full 6-Bot Squad — $49',
      primarySub: 'Save $65 (-57% vs $114 reg.) · $8.16/bot · Pay once forever',
      secondaryCta: 'Pick 1 Species ($12)',
      stageHeaderTitle: 'Try All 6 Species Live in Browser',
      stageHeaderBadge: '1 Active WebGL Context · 60 FPS',
      stageLoading: 'Mounting isolated 3D WebGL stage…',
      selectPrompt: 'Select 3D Species (switches live WebGL rig, physics & theme accent):',
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
        presetsTitle: 'Editable Starter Presets (Universal Engine in Every .exe):',
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
        'Traditional AI wrappers trap you inside another square window eating 40% of your monitor, forcing constant Alt-Tabbing and $20/month cloud lock-in. Zero-UI v1.1.0 gives every species the full native desktop engine.',
      oldTitle: '❌ Square Chat Window Bloat',
      oldItems: [
        'Blocks your IDE, spreadsheet, or canvas—constant Alt-Tab context switching.',
        'Mandatory cloud accounts, $20/mo recurring subscriptions, and opaque telemetry.',
        'Locked-in SaaS personas or manual copy-pasting with markdown fences every time.',
        'Black-box cloud memory you cannot audit, edit locally, or air-gap.',
      ],
      newTitle: '✅ Zero-UI 3D Universal Engine (v1.1.0)',
      newItems: [
        'Frameless alpha = 0 rendering with click-through margins—clicks pass straight to VS Code, Terminal, or Excel.',
        '100% offline 3D companion by default; connect local Ollama ($0 API) only if and when you choose.',
        'Same 5 native superpowers in all 6 species + customizable prompts & interchangeable .json/.md Cartridges.',
        'Plain-text %APPDATA% memoria.md + Windows DPAPI origin-locked encryption. Pay once, own forever.',
      ],
    },
    superpowers: {
      kicker: 'UNIVERSAL ENGINE IN ALL 6 SPECIES · WINDOWS 10/11',
      title: '5 Native Windows Superpowers Built Into Every Bot',
      subtitle:
        'No creature is locked into a fixed role. Whichever 3D species you choose, you get the exact same offline + BYOK engine and can customize or swap its role anytime:',
      activePreviewLabel: 'Editable Starter Preset on',
      cards: [
        {
          num: '01',
          icon: '🧩',
          shortcut: 'Drag & Drop → 3D Body',
          title: 'Direct 3D Body Drag & Drop',
          desc: 'Drop PNG/JPG/WebP/GIF images, PDF documents (up to 8 MB), or code/CSV/JSON/Markdown files (up to 1 MB; up to 3 files / 16 MB per turn) straight onto any creature’s 3D body.',
          presetKey: 'drop',
        },
        {
          num: '02',
          icon: '✂️',
          shortcut: 'Alt + Shift + S',
          title: 'Snip-to-Bot + Offline Windows OCR Fallback',
          desc: 'Draw a rectangle over any UI, terminal error, KPI chart, or dense email on your monitor. Uses native Vision on multimodal models—and automatically falls back to built-in offline Windows OCR for fast text-only Ollama models (qwen2.5-coder, llama3.2).',
          presetKey: 'snip',
        },
        {
          num: '03',
          icon: '⚡',
          shortcut: 'Shift + Click · Alt + Shift + C',
          title: 'Zero-Chat Clipboard Magic',
          desc: 'Copy commits, broken JSON, raw cells, or rough drafts (Ctrl+C), Shift+Click the 3D creature, and paste (Ctrl+V) clean output—without markdown fences and without polluting your chat thread.',
          presetKey: 'clipboard',
        },
        {
          num: '04',
          icon: '📂',
          shortcut: '%APPDATA%\\...\\memoria.md',
          title: 'Open, Auditable Local Memory (memoria.md)',
          desc: 'No hidden cloud vector DBs. Context persists strictly on your own PC in a plain, human-readable Markdown file inside %APPDATA%. Inspect, edit, or wipe it in 1 click—guarded by an automatic regex anti-secret filter.',
          presetKey: null,
          staticBadge: 'Regex Anti-Secret Guard · 1-Click Open / Edit / Wipe',
        },
        {
          num: '05',
          icon: '🔐',
          shortcut: '.json / .md + Windows DPAPI',
          title: 'Swappable Personality Cartridges & Windows DPAPI',
          desc: 'Turn any creature into a coder, analyst, writer, or calm companion: edit its System Prompt & 3 right-click recipes, import/export clean .json/.md Cartridges (zero keys exported), or hit ↺ Restore Factory anytime. API keys are encrypted via Windows DPAPI and origin-locked.',
          presetKey: null,
          staticBadge: 'Any Role on Any Bot · Windows DPAPI Origin-Locked Keys',
        },
      ],
    },
    proof: {
      kicker: 'WINDOWS 11 DESKTOP SHOWCASE · ZERO WINDOW BORDERS',
      title: 'See the Portable .exe Squad Running Live on Windows 11',
      subtitle:
        'Every creature is an independent, frameless Windows x64 executable (~106.8 MB). Keep one floating cleanly over VS Code & Windows Terminal—or summon all 6 simultaneously with isolated memory.',
      videoBadge: '🎥 25s Windows 11 Desktop Capture (v1.1.0)',
      videoCaption:
        'Frameless alpha = 0 rendering, tactile 3D reactions, live Hatchling ↔ Rookie evolution, and native dark Settings on Windows 11.',
      cards: [
        {
          title: 'All 6 Standalone .exe Bots on Clean Windows 11 Desktop',
          desc: 'Pyxol, Nimpu, Buggy, Yuravax, Lumilisk & Velkarion running simultaneously above the Windows 11 taskbar with independent physics & isolated %APPDATA%.',
        },
        {
          title: 'Native Windows 11 Settings & Zero-Guilt Bond',
          desc: 'Right-click any creature or its System Tray icon for live S–XL sizing, Hatchling/Rookie stage, fullscreen auto-hide, and optional BYOK AI.',
        },
        {
          title: 'Live Evolution: 🥚 Hatchling ↔ ✨ Rookie',
          desc: 'Every bot includes two procedural 3D geometries and normal-mapped surfaces you can toggle anytime in 1 click.',
        },
        {
          title: 'Frameless Overlay Over VS Code & Windows Terminal',
          desc: 'Sits cleanly at alpha = 0 over your editor and local Ollama PowerShell terminal—zero square chat windows blocking your code.',
        },
      ],
    },
    catalog: {
      kicker: '6 DISTINCT 3D SPECIES · 1 UNIVERSAL ENGINE (v1.1.0)',
      title: 'Choose Your 3D Species — Same Full Engine in Every Bot',
      subtitle:
        'All 6 standalone editions ($12 Early Bird · reg. $19) run the exact same universal Windows 10/11 engine, 5 BYOK superpowers, and custom Personality Cartridges. Pick by 3D creature & physics—or get all 6 in the Squad Bundle.',
      tryInStageBtn: '🎮 Try in 3D Stage',
      buyIndividualBtn: 'Get on itch.io · $12',
      regPrice: '$19',
      earlyBirdTag: '-37% OFF',
    },
    pricing: {
      kicker: 'SIMPLE ONE-TIME PRICING · ZERO SUBSCRIPTIONS',
      title: 'Pick One 3D Companion ($12) — or Unlock All Six ($49)',
      subtitle:
        'Clean binary choice: grab your favorite standalone 3D species for $12 Early Bird, or get all 6 independent Windows .exe companions in the Full Squad Bundle for just $8.16/bot.',
      single: {
        badge: '1 BOT · EARLY BIRD -37%',
        title: 'Single 3D Companion',
        subtitle: 'Choose any 1 of the 6 species above — includes the complete universal engine.',
        regularAnchor: '$19 USD',
        price: '$12',
        perBotBadge: 'One-time payment · Yours forever',
        bullets: [
          '1 standalone Windows 10/11 x64 portable .exe (~106.8 MB) of your chosen 3D species.',
          '100% full universal Zero-UI engine: offline 3D pet mode + both 🥚 Hatchling & ✨ Rookie stages.',
          'All 5 BYOK superpowers (3D Drag & Drop, Alt+Shift+S + Windows OCR, Clipboard Magic, memoria.md & DPAPI).',
          'Fully customizable System Prompt, 3 right-click recipes & import/export of any .json/.md Personality Cartridge.',
        ],
        cta: 'Pick Your Species Above ($12) ↑',
        ctaSub: 'Direct instant download on each creature’s itch.io page',
      },
      squad: {
        ribbon: '👑 BEST VALUE · SAVE $65 USD (-57% OFF)',
        title: 'Full 6-Bot Zero-UI Squad (v1.1.0)',
        subtitle:
          'All 6 independent Windows 10/11 x64 portable .exe companions: Buggy, Pyxol, Velkarion, Nimpu, Lumilisk & Yuravax.',
        price: '$49',
        currency: 'USD',
        regularAnchor: '$114 USD',
        perBotBadge: 'Only $8.16 / bot · Save $23 vs buying 6 at $12',
        cta: '👑 Get Full 6-Bot Squad on itch.io — $49',
        ctaSub: 'Instant access · All 6 isolated .exe portables (640.97 MB total) · Commercial & personal license on your PCs',
        bullets: [
          'All 6 distinct 3D physics rigs (jelly, glitch, heavy titanium, cloud float, serpentine swim & celestial wings).',
          'Run 1, 2, or all 6 creatures simultaneously on your desktop—each has its own isolated process, System Tray icon & %APPDATA% memory.',
          'Assign different custom Cartridges & local Ollama / Gemini / OpenAI models to different creatures on your taskbar.',
          'All 6 official SHA-256 & VirusTotal verified v1.1.0 Windows x64 portables—pay once, zero subscriptions ever.',
        ],
        previewHint: 'Click any squad member to preview in 3D Hero Stage:',
      },
    },
    trust: {
      kicker: 'TECHNICAL TRUST, SHA-256 & VIRUSTOTAL VERIFICATION',
      title: '6 Official Portable .exe Binaries — 100% Verifiable',
      subtitle:
        'Every release binary uploaded to itch.io & Gumroad is deterministic, ASAR-isolated (Electron 45.3.1, dirty: false), zero-telemetry, and directly inspectable on VirusTotal.',
      smartscreenTitle: '🛡️ Transparent Note on Portable .exe & Windows SmartScreen',
      smartscreenBody:
        'Each bot ships as a clean, zero-telemetry standalone portable executable—no background services when closed, no registry bloat, and no cloud installer wrapper. Because indie portable binaries are distributed directly without invasive installers, Windows SmartScreen may display a standard informational prompt on first launch (“More info” → “Run anyway”). Verify any binary in 2 seconds via PowerShell or inspect its clean VirusTotal report below.',
      powershellLabel: 'Verify your downloaded .exe in Windows PowerShell:',
      copyCmdBtn: 'Copy Command',
      copiedText: '✓ Copied!',
      manifestLink: '📄 Raw SHA256SUMS-ALL-SQUAD.txt',
      accordionSummary:
        '🔍 Official v1.1.0 Windows Portable Executables — 6/6 SHA-256 & VirusTotal Reports (640.97 MB Total)',
      colSpecies: 'Species',
      colArtifact: 'Official Portable .exe',
      colSize: 'Exact Size',
      colHash: 'SHA-256 Checksum',
      colAction: 'VirusTotal & Copy',
      vtBtn: '🛡️ VirusTotal ↗',
      copyHashBtn: 'Copy SHA-256',
      totalsExe: '6 Official Windows x64 Portables (*-1.1.0-portable.exe)',
      totalsGrand: 'Total Squad Size: 640.97 MB (672,102,053 bytes) · 6/6 Verified',
      faqTitle: 'Technical FAQ',
      faqs: [
        {
          q: 'Do all 6 creatures really have the exact same features and AI capabilities?',
          a: 'Yes—100%. Every bot runs the exact same universal Zero-UI engine (offline 3D pet mode, all 5 BYOK workflows, Windows OCR fallback, memoria.md, and DPAPI encryption). They differ in their procedural 3D body, physics, and starter persona—which you can edit or swap anytime via .json/.md Personality Cartridges.',
        },
        {
          q: 'Do I need an API key, internet connection, or Ollama to use a bot?',
          a: 'No. Every bot launches 100% offline out of the box with AI turned OFF. You get full 3D physics, cursor gaze tracking, pets/tickles, 360° spin (R), signature 3D powers (Alt+Click), live S–XL sizing, Hatchling/Rookie stages, local streaks, and .ics reminders with zero internet.',
        },
        {
          q: 'How does $0 local AI with Ollama work—even on text-only coder models?',
          a: 'Open Right-Click → ⚙️ Settings → 🔑 Artificial Intelligence, select OpenAI-compatible, and point to http://localhost:11434/v1. Multimodal Vision models receive pixels + OCR on Alt+Shift+S; fast text-only models (qwen2.5-coder, llama3.2) automatically trigger built-in offline Windows OCR.',
        },
        {
          q: 'Can I run multiple creatures simultaneously with different custom roles?',
          a: 'Yes! Each species is compiled as an isolated standalone .exe with its own System Tray icon and separate %APPDATA% folder—so you can run 1 minimalist companion or all 6 simultaneously, each loaded with a different Personality Cartridge or model.',
        },
      ],
    },
    footer: {
      tagline:
        'Standalone 3D Zero-UI Desktop Companions for Windows 10/11 (x64 Portable) · Universal Offline + Optional BYOK Engine.',
      meta: 'Release v1.1.0 · Zero Telemetry · One-Time Purchase · Built with Three.js & Electron',
      linksTitle: 'Official Storefront Links (itch.io)',
      hubLinkLabel: 'Visit Creator Storefront (elbuilder77.itch.io) →',
    },
  },

  es: {
    metaTitle:
      'Zero-UI 3D Desktop Bots v1.1.0 — 6 Compañeros 3D Sin Fondo para Windows 10/11 (.exe Portable) + Motor Universal BYOK',
    metaDescription:
      'Olvida las ventanas cuadradas de chat. 6 compañeros 3D Zero-UI para Windows 10/11 (.exe x64 portable) con el mismo motor universal completo: mascotas 3D 100% offline + IA BYOK opcional (Ollama local $0, Gemini, OpenAI) y Cartuchos de Personalidad.',
    nav: {
      stage: 'Escenario 3D',
      superpowers: 'Motor Universal',
      proof: 'Captura Win11',
      catalog: '6 Especies',
      pricing: '$12 vs $49 Squad',
      checksums: 'SHA-256 y VirusTotal',
      ctaSquad: 'Full 6-Bot Squad · $49',
      langLabel: 'EN',
      langTitle: 'Switch language to English',
    },
    hero: {
      eyebrow: 'LANZAMIENTO OFICIAL v1.1.0 · WINDOWS 10/11 PORTABLE (.EXE) · MISMO MOTOR EN CADA BOT',
      titleLine1: 'Olvida las Ventanas Cuadradas de Chat.',
      titleLine2: 'Pon 6 Compañeros 3D Vivos sobre tu Barra de Tareas.',
      lead:
        'Seis criaturas 3D independientes sin marco construidas sobre exactamente el mismo motor universal Zero-UI. Cada especie funciona 100% offline de fábrica como mascota táctil 3D, o se conecta a Ollama local ($0 en APIs), Google Gemini o cualquier servidor compatible con OpenAI con prompts y Cartuchos de Personalidad 100% personalizables.',
      pills: [
        '🪟 Windows 10/11 x64 Portable (.exe)',
        '⚙️ Mismo Motor Universal en los 6 Bots',
        '🔌 Mascota 100% Offline + Ollama Local ($0)',
        '🔒 Cifrado Windows DPAPI · $0/mes Suscripción',
      ],
      primaryCta: '👑 Llevar Full 6-Bot Squad — $49',
      primarySub: 'Ahorras $65 (-57% sobre $114 reg.) · $8.16/bot · Pago único de por vida',
      secondaryCta: 'Elegir 1 Especie ($12)',
      stageHeaderTitle: 'Prueba las 6 Especies en Vivo en tu Navegador',
      stageHeaderBadge: '1 Contexto WebGL Activo · 60 FPS',
      stageLoading: 'Montando escenario 3D WebGL aislado…',
      selectPrompt: 'Elige Especie 3D (cambia modelo WebGL, física y color de acento en vivo):',
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
        presetsTitle: 'Presets Iniciales Editables (Mismo Motor Universal en Cada .exe):',
        buySinglePrefix: 'Comprar',
        buySingleSuffix: 'Portable .exe · $12',
        regPriceTag: '$19',
        promoBadge: '-37% Early Bird',
      },
    },
    contrast: {
      kicker: 'POR QUÉ ZERO-UI SUPERA AL CHAT TRADICIONAL',
      title: 'El Compañero 3D Flotando sobre tu Barra de Tareas Es Toda la Interfaz.',
      subtitle:
        'Los asistentes tradicionales te encierran en otra ventana cuadrada que devora medio monitor, exige Alt-Tab constante y cobra $20/mes en la nube. Zero-UI v1.1.0 integra el motor nativo completo en cada criatura.',
      oldTitle: '❌ Ventanas Cuadradas de Chat SaaS',
      oldItems: [
        'Tapan tu editor, terminal u hojas de cálculo—interrupción constante con Alt-Tab.',
        'Cuentas obligatorias en la nube, suscripciones de $20/mes y telemetría opaca.',
        'Roles rígidos o copiar y pegar manual limpiando bloques Markdown cada vez.',
        'Memoria encerrada en servidores ajenos que no puedes auditar ni usar sin internet.',
      ],
      newTitle: '✅ Motor Universal Zero-UI 3D (v1.1.0)',
      newItems: [
        'Renderizado sin bordes (alpha = 0) con márgenes click-through sobre VS Code, Terminal o Excel.',
        'Mascota 3D 100% offline por defecto; conecta Ollama local ($0 en APIs) solo cuando tú decidas.',
        'Las mismas 5 capacidades nativas en las 6 especies + rol editable y Cartuchos .json/.md intercambiables.',
        'Memoria abierta memoria.md en %APPDATA% + cifrado local Windows DPAPI atado al origen. Pago único.',
      ],
    },
    superpowers: {
      kicker: 'MOTOR UNIVERSAL EN LAS 6 ESPECIES · WINDOWS 10/11',
      title: 'Las 5 Capacidades Nativas Incluidas en Cada Bot',
      subtitle:
        'Ninguna criatura está atada a un rol fijo. Elijas la especie 3D que elijas, obtienes exactamente el mismo motor offline + BYOK y puedes personalizar o intercambiar su rol cuando quieras:',
      activePreviewLabel: 'Preset Inicial Editable en',
      cards: [
        {
          num: '01',
          icon: '🧩',
          shortcut: 'Drag & Drop → Cuerpo 3D',
          title: 'Drag & Drop Directo al Cuerpo 3D',
          desc: 'Suelta imágenes PNG/JPG/WebP/GIF, documentos PDF (hasta 8 MB) o archivos de código/CSV/JSON/Markdown (hasta 1 MB; hasta 3 archivos / 16 MB por turno) encima de cualquiera de las 6 criaturas.',
          presetKey: 'drop',
        },
        {
          num: '02',
          icon: '✂️',
          shortcut: 'Alt + Shift + S',
          title: 'Snip-to-Bot + Fallback a OCR Local Offline de Windows',
          desc: 'Recorta cualquier interfaz, error en terminal, gráfica o correo en tu monitor. Usa Visión nativa en modelos multimodales y cae automáticamente al OCR local offline de Windows con modelos solo-texto de Ollama (qwen2.5-coder, llama3.2).',
          presetKey: 'snip',
        },
        {
          num: '03',
          icon: '⚡',
          shortcut: 'Shift + Clic · Alt + Shift + C',
          title: 'Magia Instantánea de Portapapeles',
          desc: 'Copia commits, JSON roto, celdas crudas o un borrador (Ctrl+C), haz Shift+Clic sobre la criatura 3D y pega (Ctrl+V) el resultado limpio sin cercas Markdown ni ensuciar tu chat.',
          presetKey: 'clipboard',
        },
        {
          num: '04',
          icon: '📂',
          shortcut: '%APPDATA%\\...\\memoria.md',
          title: 'Memoria Local Abierta y Auditable (memoria.md)',
          desc: 'Cero bases de datos ocultas en la nube. Tu contexto vive en un archivo Markdown legible dentro de %APPDATA%. Ábrelo, edítalo o vacíalo en 1 clic, protegido por filtro automático anti-secretos.',
          presetKey: null,
          staticBadge: 'Filtro Anti-Secretos Automático · 1 Clic Abrir / Editar / Vaciar',
        },
        {
          num: '05',
          icon: '🔐',
          shortcut: '.json / .md + Windows DPAPI',
          title: 'Cartuchos de Personalidad Intercambiables y DPAPI',
          desc: 'Convierte cualquier criatura en programador, analista, redactor o compañero de calma: edita su System Prompt y 3 recetas de clic derecho, importa/exporta Cartuchos .json/.md limpios o pulsa ↺ Restaurar fábrica. Claves cifradas con Windows DPAPI atadas al origen.',
          presetKey: null,
          staticBadge: 'Cualquier Rol en Cualquier Bot · Cifrado Windows DPAPI',
        },
      ],
    },
    proof: {
      kicker: 'DEMOSTRACIÓN EN WINDOWS 11 · CERO BORDES DE VENTANA',
      title: 'Mira el Squad Portable .exe Corriendo en Vivo en Windows 11',
      subtitle:
        'Cada criatura es un ejecutable Windows x64 independiente sin bordes (~106.8 MB). Ten un compañero flotando limpio sobre VS Code y tu Terminal, o invoca los 6 al mismo tiempo con memoria aislada.',
      videoBadge: '🎥 Captura en Escritorio Windows 11 de 25s (v1.1.0)',
      videoCaption:
        'Transparencia real alpha = 0, reacciones físicas 3D, evolución en vivo Cría ↔ Rookie y panel oscuro nativo de Ajustes en Windows 11.',
      cards: [
        {
          title: 'Los 6 Bots .exe Sobre Escritorio Limpio Windows 11',
          desc: 'Pyxol, Nimpu, Buggy, Yuravax, Lumilisk y Velkarion corriendo simultáneamente sobre la barra de tareas con física independiente y %APPDATA% aislado.',
        },
        {
          title: 'Ajustes Nativos en Windows 11 y Vínculo Sin Culpa',
          desc: 'Clic derecho en cualquier criatura o su icono de Bandeja para tamaño S–XL en vivo, etapa Cría/Rookie, auto-ocultar en pantalla completa e IA opcional.',
        },
        {
          title: 'Evolución en Vivo: 🥚 Cría ↔ ✨ Rookie',
          desc: 'Cada bot integra dos geometrías 3D procedurales y texturas con relieve propias que alternas al instante en 1 clic.',
        },
        {
          title: 'Zero-UI Sin Bordes Sobre VS Code y Windows Terminal',
          desc: 'Flota con alpha = 0 directo sobre tu editor de código y terminal PowerShell con Ollama local—cero ventanas cuadradas tapando tu trabajo.',
        },
      ],
    },
    catalog: {
      kicker: '6 ESPECIES 3D ÚNICAS · 1 MISMO MOTOR UNIVERSAL (v1.1.0)',
      title: 'Elige tu Especie 3D — El Mismo Motor Completo en Cada Bot',
      subtitle:
        'Las 6 ediciones independientes ($12 Early Bird · reg. $19) incluyen exactamente el mismo motor universal para Windows 10/11, los 5 flujos BYOK y Cartuchos de Personalidad editables. Elige por criatura y física 3D, o llévate las 6 en el Squad.',
      tryInStageBtn: '🎮 Probar en Escenario 3D',
      buyIndividualBtn: 'Comprar en itch.io · $12',
      regPrice: '$19',
      earlyBirdTag: '-37% OFF',
    },
    pricing: {
      kicker: 'PRECIO SIMPLE DE PAGO ÚNICO · CERO SUSCRIPCIONES',
      title: 'Elige 1 Compañero 3D ($12) — o Desbloquea los 6 ($49)',
      subtitle:
        'Decisión limpia y directa: llévate tu especie 3D favorita por $12 USD Early Bird, o desbloquea los 6 ejecutables portables independientes de Windows en el Full Squad por solo $8.16/bot.',
      single: {
        badge: '1 BOT · EARLY BIRD -37%',
        title: '1 Compañero 3D Individual',
        subtitle: 'Elige cualquiera de las 6 especies arriba — incluye el motor universal completo.',
        regularAnchor: '$19 USD',
        price: '$12',
        perBotBadge: 'Pago único · Tuyo para siempre',
        bullets: [
          '1 ejecutable portable Windows 10/11 x64 (~106.8 MB) de la especie 3D que más te guste.',
          'Motor universal Zero-UI al 100%: modo mascota 3D offline + etapas 🥚 Cría y ✨ Rookie en vivo.',
          'Las 5 capacidades BYOK completas (Drag & Drop 3D, Alt+Shift+S + OCR Windows, Portapapeles, memoria.md y DPAPI).',
          'System Prompt 100% editable, 3 recetas rápidas y soporte total para importar/exportar Cartuchos .json/.md.',
        ],
        cta: 'Elegir mi Especie Arriba ($12) ↑',
        ctaSub: 'Descarga inmediata en la página oficial de itch.io de cada criatura',
      },
      squad: {
        ribbon: '👑 MEJOR VALOR · AHORRAS $65 USD (-57% OFF)',
        title: 'Full 6-Bot Zero-UI Squad (v1.1.0)',
        subtitle:
          'Los 6 compañeros portables independientes (.exe x64) para Windows 10/11: Buggy, Pyxol, Velkarion, Nimpu, Lumilisk y Yuravax.',
        price: '$49',
        currency: 'USD',
        regularAnchor: '$114 USD',
        perBotBadge: 'Solo $8.16 / bot · Ahorras $23 vs comprar los 6 a $12',
        cta: '👑 Llevar Full 6-Bot Squad en itch.io — $49',
        ctaSub: 'Acceso inmediato · Los 6 portables .exe aislados (640.97 MB total) · Licencia personal y comercial en tus PCs',
        bullets: [
          'Las 6 físicas y geometrías 3D completas (jelly, glitch, titanio heavy, nube float, nado serpentino y alas celestiales).',
          'Ejecuta 1, 2 o los 6 compañeros simultáneamente en pantalla: cada .exe tiene proceso, icono de Bandeja y %APPDATA% aislado.',
          'Asigna distintos Cartuchos de Personalidad y modelos locales de Ollama / Gemini / OpenAI a cada criatura en tu barra.',
          'Los 6 ejecutables oficiales v1.1.0 verificados con SHA-256 y VirusTotal—un solo pago, cero mensualidades.',
        ],
        previewHint: 'Haz clic en cualquier miembro para probarlo en el Escenario 3D:',
      },
    },
    trust: {
      kicker: 'CONFIANZA TÉCNICA, SHA-256 Y VERIFICACIÓN EN VIRUSTOTAL',
      title: 'Los 6 Ejecutables Oficiales *-1.1.0-portable.exe — 100% Verificables',
      subtitle:
        'Cada binario subido a itch.io y Gumroad es determinista, aislado en ASAR (Electron 45.3.1, dirty: false), libre de telemetría y verificable directamente en VirusTotal.',
      smartscreenTitle: '🛡️ Nota Transparente sobre Ejecutables Portables (.exe) y Windows SmartScreen',
      smartscreenBody:
        'Cada criatura se entrega como un ejecutable portable limpio con cero telemetría: sin servicios en segundo plano al cerrarlo, sin ensuciar el registro de Windows y sin instaladores invasivos. Al distribuirse directamente como software indie portable, Windows SmartScreen puede mostrar en la primera apertura su aviso estándar («Más información» → «Ejecutar de todas formas»). Comprueba tu archivo en 2 segundos con PowerShell o abre su reporte limpio en VirusTotal abajo.',
      powershellLabel: 'Verifica tu .exe descargado en Windows PowerShell:',
      copyCmdBtn: 'Copiar Comando',
      copiedText: '✓ ¡Copiado!',
      manifestLink: '📄 Ver SHA256SUMS-ALL-SQUAD.txt',
      accordionSummary:
        '🔍 Los 6 Ejecutables Portables Oficiales v1.1.0 — Hashes SHA-256 y Reportes VirusTotal (640.97 MB Total)',
      colSpecies: 'Especie',
      colArtifact: 'Ejecutable Oficial (.exe)',
      colSize: 'Tamaño Exacto',
      colHash: 'Hash SHA-256 Oficial',
      colAction: 'VirusTotal y Copia',
      vtBtn: '🛡️ VirusTotal ↗',
      copyHashBtn: 'Copiar SHA-256',
      totalsExe: '6 Ejecutables Portables Windows x64 (*-1.1.0-portable.exe)',
      totalsGrand: 'Tamaño Total Squad: 640.97 MB (672,102,053 bytes) · 6/6 Verificados',
      faqTitle: 'Preguntas Frecuentes Técnicas (FAQ)',
      faqs: [
        {
          q: '¿Las 6 criaturas tienen exactamente las mismas funciones y capacidades de IA?',
          a: 'Sí, al 100%. Todas comparten exactamente el mismo motor universal Zero-UI (mascota 3D offline, los 5 flujos BYOK, OCR offline de Windows, memoria.md y cifrado DPAPI). Cambia su cuerpo 3D, física y personalidad inicial, la cual puedes editar o cambiar por completo con Cartuchos .json/.md.',
        },
        {
          q: '¿Necesito clave API, internet u Ollama para usar las criaturas?',
          a: 'No. Cada bot arranca 100% offline de fábrica con la IA apagada. Disfrutas física 3D completa, seguimiento de mirada, caricias/cosquillas, giro 360° (R), poderes 3D (Alt+Clic), tamaños S–XL, etapas Cría/Rookie y recordatorios .ics sin conexión.',
        },
        {
          q: '¿Cómo funciona la IA local a $0 con Ollama incluso en modelos solo-texto?',
          a: 'En Clic derecho → ⚙️ Ajustes → 🔑 Inteligencia Artificial, elige proveedor compatible con OpenAI e ingresa http://localhost:11434/v1. Con modelos de Visión envía imagen + OCR en Alt+Shift+S; con modelos rápidos solo-texto (qwen2.5-coder, llama3.2) ejecuta automáticamente el OCR local offline de Windows.',
        },
        {
          q: '¿Puedo correr varias criaturas a la vez con distintos roles personalizados?',
          a: '¡Sí! Cada especie es un .exe portable aislado con su propio icono en Bandeja del Sistema y carpeta %APPDATA% separada, así que puedes tener 1 compañero o los 6 simultáneamente, cada uno con un Cartucho de Personalidad o modelo distinto.',
        },
      ],
    },
    footer: {
      tagline:
        'Compañeros 3D Zero-UI Independientes para Windows 10/11 (x64 Portable) · Motor Universal Offline + Copiloto BYOK Opcional.',
      meta: 'Release v1.1.0 · Cero Telemetría · Pago Único · Creado con Three.js y Electron',
      linksTitle: 'Enlaces Oficiales de Tienda (itch.io)',
      hubLinkLabel: 'Visitar Tienda Oficial del Creador (elbuilder77.itch.io) →',
    },
  },
};
