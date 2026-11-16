/**
 * Isolated Single-WebGL-Context Host for stage.html
 * Dynamically loads ONLY ONE sanitized ./widget/<species>-widget.js bundle at a time
 * and explicitly releases GPU/WebGL resources upon teardown.
 */

import { SPECIES_CATALOG } from './catalog-data.js';

const params = new URLSearchParams(window.location.search);
const rawSpecies = (params.get('species') || 'buggy').toLowerCase().trim();
const activeSpeciesId = Object.prototype.hasOwnProperty.call(SPECIES_CATALOG, rawSpecies)
  ? rawSpecies
  : 'buggy';

const VALID_SIZES = new Set(['sm', 'md', 'lg', 'xl']);
const rawSize = (params.get('size') || 'xl').toLowerCase().trim();
let currentSize = VALID_SIZES.has(rawSize) ? rawSize : 'xl';

const rawStage = params.get('stage');
let currentStage = rawStage === '1' ? 1 : 2;

const rawLang = (params.get('lang') || 'en').toLowerCase().trim();
let currentLang = rawLang === 'es' ? 'es' : 'en';

const spec = SPECIES_CATALOG[activeSpeciesId];
let widgetInstance = null;
let destroyed = false;

function applyThemeAndHud() {
  const root = document.documentElement;
  root.lang = currentLang;
  root.style.setProperty('--accent', spec.glowColor);
  root.style.setProperty('--accent-rgb', spec.glowRgb);
  root.style.setProperty('--accent-secondary', spec.secondaryColor);
  root.style.setProperty('--accent-sec-rgb', spec.secondaryRgb);

  const copy = spec.copy[currentLang] || spec.copy.en;
  const hudName = document.getElementById('hud-species-name');
  const hudPhys = document.getElementById('hud-physics-label');
  const winTitle = document.getElementById('sim-win-title');
  const line1 = document.getElementById('sim-line-1');
  const line2 = document.getElementById('sim-line-2');
  const modePill = document.getElementById('tb-mode-pill');
  const centerAvatar = document.getElementById('tb-center-avatar');
  const trayAvatar = document.getElementById('tb-tray-avatar');
  const trayBtn = document.getElementById('tray-bot-btn');

  if (hudName) hudName.textContent = `${spec.name} v1.1.0`;
  if (hudPhys) hudPhys.textContent = copy.physicsLabel;
  if (winTitle) winTitle.textContent = copy.desktopContext.winTitle;
  if (line1) line1.textContent = copy.desktopContext.line1;
  if (line2) line2.textContent = copy.desktopContext.line2;
  if (modePill) {
    modePill.textContent =
      currentLang === 'es' ? '100% Offline · WebGL Activo' : '100% Offline · Live WebGL';
  }
  if (centerAvatar) centerAvatar.src = spec.avatar;
  if (trayAvatar) {
    trayAvatar.src = spec.avatar;
    trayAvatar.alt = spec.name;
  }
  if (trayBtn) {
    trayBtn.title =
      currentLang === 'es'
        ? `${spec.name} — Clic izq.: Acariciar · Clic der.: Ajustes en vivo`
        : `${spec.name} — Left-click: Pet · Right-click: Live Settings`;
  }
}

function updateClock() {
  const now = new Date();
  const timeEl = document.getElementById('tb-time');
  const dateEl = document.getElementById('tb-date');
  const locale = currentLang === 'es' ? 'es-MX' : 'en-US';
  if (timeEl) {
    timeEl.textContent = now.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  if (dateEl) {
    dateEl.textContent = now.toLocaleDateString(locale, {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
  }
}

function injectStageCenterOverride(hostEl) {
  if (!hostEl || !hostEl.shadowRoot) return;
  if (hostEl.shadowRoot.getElementById('stage-center-override')) return;
  const style = document.createElement('style');
  style.id = 'stage-center-override';
  style.textContent = `
    .zui-root[data-standalone="false"] {
      right: calc(50% - var(--zui-root-w, 256px) * 0.5) !important;
      bottom: 52px !important;
    }
  `;
  hostEl.shadowRoot.appendChild(style);
}

function triggerCanvasPet() {
  const hostEl = document.getElementById('ai-avatar-widget');
  const stageEl = hostEl?.shadowRoot?.querySelector('.zui-canvas-stage');
  if (!stageEl) {
    widgetInstance?.open?.();
    return;
  }
  const rect = stageEl.getBoundingClientRect();
  const cx = rect.left + rect.width * 0.5;
  const cy = rect.top + rect.height * 0.52;
  const evtInit = {
    bubbles: true,
    cancelable: true,
    composed: true,
    button: 0,
    buttons: 1,
    clientX: cx,
    clientY: cy,
    screenX: cx,
    screenY: cy,
    pointerId: 1,
    pointerType: 'mouse',
    isPrimary: true,
  };
  stageEl.dispatchEvent(new PointerEvent('pointerdown', evtInit));
  stageEl.dispatchEvent(
    new PointerEvent('pointerup', {
      ...evtInit,
      buttons: 0,
    })
  );
}

function openNativeSettingsMenu() {
  const hostEl = document.getElementById('ai-avatar-widget');
  const stageEl = hostEl?.shadowRoot?.querySelector('.zui-canvas-stage');
  if (!stageEl) return;
  const rect = stageEl.getBoundingClientRect();
  stageEl.dispatchEvent(
    new MouseEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      composed: true,
      clientX: rect.left + rect.width * 0.5,
      clientY: rect.top + rect.height * 0.45,
    })
  );
}

function destroyWidgetAndReleaseWebGL() {
  if (destroyed) return;
  destroyed = true;
  const hostEl = document.getElementById('ai-avatar-widget');
  const canvases = [];
  if (hostEl?.shadowRoot) {
    hostEl.shadowRoot.querySelectorAll('canvas').forEach((c) => canvases.push(c));
  }
  document.querySelectorAll('canvas').forEach((c) => canvases.push(c));

  try {
    widgetInstance?.destroy?.();
  } catch {
    // Ignore teardown errors
  }
  widgetInstance = null;

  for (const canvas of canvases) {
    try {
      const gl =
        canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      const loseExt = gl?.getExtension?.('WEBGL_lose_context');
      loseExt?.loseContext?.();
      canvas.width = 1;
      canvas.height = 1;
    } catch {
      // Context already released
    }
  }
}

async function mountIsolatedCreature() {
  applyThemeAndHud();
  updateClock();
  window.setInterval(updateClock, 30000);

  const hostEl = document.getElementById('ai-avatar-widget');
  if (hostEl) {
    hostEl.setAttribute('data-species', spec.id);
    hostEl.setAttribute('data-name', spec.name);
    hostEl.setAttribute('data-color', spec.glowColor);
  }

  const bundleUrl = `../widget/${spec.id}-widget.js`;
  const mod = await import(bundleUrl);
  if (destroyed) return;

  widgetInstance = mod.initAvatarWidget({
    elementId: 'ai-avatar-widget',
    species: spec.id,
    name: spec.name,
    glowColor: spec.glowColor,
    stage: currentStage,
    size: currentSize,
    position: 'bottom-right',
    standalone: false,
    allowSettingsOrb: true,
  });

  injectStageCenterOverride(hostEl);

  const trayBtn = document.getElementById('tray-bot-btn');
  trayBtn?.addEventListener('click', () => {
    widgetInstance?.open?.();
    triggerCanvasPet();
  });
  trayBtn?.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    openNativeSettingsMenu();
  });

  if (window.parent && window.parent !== window) {
    window.parent.postMessage(
      {
        type: 'ZUI_READY',
        species: spec.id,
        size: currentSize,
        stage: currentStage,
      },
      '*'
    );
  }
}

window.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || typeof data !== 'object') return;

  if (data.type === 'ZUI_DESTROY') {
    destroyWidgetAndReleaseWebGL();
    return;
  }

  if (data.type === 'ZUI_COMMAND') {
    const { action, value } = data;
    if (action === 'lang' && (value === 'en' || value === 'es')) {
      currentLang = value;
      applyThemeAndHud();
      updateClock();
      return;
    }
    if (!widgetInstance || destroyed) return;

    switch (action) {
      case 'pet':
        widgetInstance.open?.();
        triggerCanvasPet();
        break;
      case 'spin':
        widgetInstance.open?.();
        window.dispatchEvent(
          new KeyboardEvent('keydown', {
            key: 'r',
            code: 'KeyR',
            bubbles: true,
          })
        );
        break;
      case 'power':
        widgetInstance.open?.();
        widgetInstance.triggerAccessoryPower?.();
        break;
      case 'center':
        widgetInstance.open?.();
        widgetInstance.setOptions?.({ position: 'bottom-right' });
        break;
      case 'size':
        if (VALID_SIZES.has(value)) {
          currentSize = value;
          widgetInstance.setOptions?.({ size: value });
        }
        break;
      case 'stage':
        if (value === 1 || value === 2 || value === '1' || value === '2') {
          currentStage = Number(value) === 1 ? 1 : 2;
          widgetInstance.setOptions?.({ stage: currentStage });
        }
        break;
      default:
        break;
    }
  }
});

window.addEventListener('pagehide', destroyWidgetAndReleaseWebGL);
window.addEventListener('beforeunload', destroyWidgetAndReleaseWebGL);

mountIsolatedCreature().catch((err) => {
  console.error('[Zero-UI Stage] Failed to mount WebGL bundle:', err);
});
