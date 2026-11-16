/**
 * Zero-UI 3D Desktop Bots (v1.1.0) — Main Landing Controller
 * Handles live --accent theming, single-context WebGL iframe orchestration,
 * instant EN/ES switching, CRO catalog rendering & SHA-256 clipboard verification.
 */

import {
  DUO_BUNDLES,
  I18N,
  SPECIES_CATALOG,
  SPECIES_ORDER,
  STORE_LINKS,
} from './catalog-data.js';

const PROOF_IMAGES = [
  './assets/showcase/squad-all-6-live.jpg',
  './assets/showcase/win11-settings-bond.jpg',
  './assets/showcase/lumilisk-hatchling-vs-rookie.png',
  './assets/showcase/buggy-frameless-overlay.png',
];

const urlParams = new URLSearchParams(window.location.search);
const paramLang = (urlParams.get('lang') || '').toLowerCase();
const savedLang = (() => {
  try {
    return localStorage.getItem('zui_landing_lang') || '';
  } catch {
    return '';
  }
})();

let currentLang =
  paramLang === 'es' || paramLang === 'en'
    ? paramLang
    : savedLang === 'es'
      ? 'es'
      : 'en';

const paramSpecies = (urlParams.get('species') || '').toLowerCase();
let activeSpecies = SPECIES_ORDER.includes(paramSpecies) ? paramSpecies : 'buggy';
let activeSize = 'xl';
let activeStage = 2;
let shaFilter = 'all'; // 'all' | 'exe' | 'zip'
let mountedIframeSpecies = null;

function t() {
  return I18N[currentLang] || I18N.en;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function applyAccentCssVars(speciesId) {
  const spec = SPECIES_CATALOG[speciesId] || SPECIES_CATALOG.buggy;
  const root = document.documentElement;
  root.style.setProperty('--accent', spec.glowColor);
  root.style.setProperty('--accent-rgb', spec.glowRgb);
  root.style.setProperty('--accent-secondary', spec.secondaryColor);
  root.style.setProperty('--accent-sec-rgb', spec.secondaryRgb);

  const favicon = document.getElementById('dynamic-favicon');
  if (favicon) favicon.href = spec.avatar;
}

function buildStageUrl(speciesId) {
  const q = new URLSearchParams({
    species: speciesId,
    size: activeSize,
    stage: String(activeStage),
    lang: currentLang,
  });
  return `./stage.html?${q.toString()}`;
}

function postToStage(payload) {
  const frame = document.getElementById('hero-stage-frame');
  if (!frame || !frame.contentWindow) return;
  try {
    frame.contentWindow.postMessage(payload, '*');
  } catch {
    // Ignore cross-frame timing issues during navigation
  }
}

function mountSpeciesInStage(speciesId, forceReload = false) {
  const frame = document.getElementById('hero-stage-frame');
  const overlay = document.getElementById('stage-loading-overlay');
  if (!frame) return;

  if (!forceReload && mountedIframeSpecies === speciesId) {
    postToStage({ type: 'ZUI_COMMAND', action: 'lang', value: currentLang });
    return;
  }

  if (overlay) overlay.dataset.visible = 'true';

  // Explicitly dispose previous WebGL context before navigating single iframe
  postToStage({ type: 'ZUI_DESTROY' });
  mountedIframeSpecies = speciesId;

  const nextUrl = buildStageUrl(speciesId);
  window.setTimeout(() => {
    try {
      if (frame.contentWindow && frame.contentWindow.location) {
        frame.contentWindow.location.replace(nextUrl);
      } else {
        frame.src = nextUrl;
      }
    } catch {
      frame.src = nextUrl;
    }
  }, 25);
}

function selectSpecies(speciesId, options = {}) {
  if (!SPECIES_CATALOG[speciesId]) return;
  activeSpecies = speciesId;
  applyAccentCssVars(speciesId);
  renderSpeciesTabs();
  renderSpeciesInspector();
  renderSuperpowersSection();
  updatePowershellVerifySnippet();
  mountSpeciesInStage(speciesId);

  if (options.scrollToStage) {
    const el = document.getElementById('live-stage');
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

async function copyTextWithFeedback(text, buttonEl, defaultLabel) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
  if (!buttonEl) return;
  buttonEl.dataset.copied = 'true';
  buttonEl.textContent = t().trust.copiedText;
  window.setTimeout(() => {
    buttonEl.dataset.copied = 'false';
    buttonEl.textContent = defaultLabel;
  }, 1600);
}

/* ==========================================================================
   Section Renderers
   ========================================================================== */

function renderStaticI18n() {
  const dict = t();
  document.documentElement.lang = currentLang;
  document.title = dict.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.metaDescription);

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.textContent = val;
  };

  // Navbar
  setTxt('nav-stage', dict.nav.stage);
  setTxt('nav-superpowers', dict.nav.superpowers);
  setTxt('nav-proof', dict.nav.proof);
  setTxt('nav-catalog', dict.nav.catalog);
  setTxt('nav-pricing', dict.nav.pricing);
  setTxt('nav-checksums', dict.nav.checksums);
  setTxt('nav-cta-squad', dict.nav.ctaSquad);

  const langBtn = document.getElementById('lang-switch-btn');
  if (langBtn) {
    langBtn.innerHTML = `🌐 <span>${escapeHtml(dict.nav.langLabel)}</span>`;
    langBtn.title = dict.nav.langTitle;
  }

  // Hero
  setTxt('hero-eyebrow', dict.hero.eyebrow);
  setTxt('hero-title-1', dict.hero.titleLine1);
  setTxt('hero-title-2', dict.hero.titleLine2);
  setTxt('hero-lead', dict.hero.lead);
  setTxt('hero-primary-cta', dict.hero.primaryCta);
  setTxt('hero-primary-sub', dict.hero.primarySub);
  setTxt('hero-secondary-cta', dict.hero.secondaryCta);

  const pillsWrap = document.getElementById('hero-trust-pills');
  if (pillsWrap) {
    pillsWrap.innerHTML = dict.hero.pills
      .map((p) => `<span class="trust-pill">${escapeHtml(p)}</span>`)
      .join('');
  }

  // Stage Chrome & Controls
  setTxt('species-selector-label', dict.hero.selectPrompt);
  setTxt('stage-header-title', dict.hero.stageHeaderTitle);
  setTxt('stage-header-badge', dict.hero.stageHeaderBadge);
  setTxt('stage-loading-text', dict.hero.stageLoading);
  setTxt('ctrl-pet', dict.hero.controls.pet);
  setTxt('ctrl-spin', dict.hero.controls.spin);
  setTxt('ctrl-power', dict.hero.controls.power);
  setTxt('ctrl-center', dict.hero.controls.center);
  setTxt('ctrl-size-label', dict.hero.controls.sizeLabel);
  setTxt('ctrl-stage-1', dict.hero.controls.stageHatchling);
  setTxt('ctrl-stage-2', dict.hero.controls.stageRookie);
  setTxt('stage-drag-hint', dict.hero.controls.dragHint);

  // Contrast
  setTxt('contrast-kicker', dict.contrast.kicker);
  setTxt('contrast-title', dict.contrast.title);
  setTxt('contrast-subtitle', dict.contrast.subtitle);
  setTxt('contrast-old-title', dict.contrast.oldTitle);
  setTxt('contrast-new-title', dict.contrast.newTitle);

  const oldList = document.getElementById('contrast-old-list');
  if (oldList) {
    oldList.innerHTML = dict.contrast.oldItems
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join('');
  }
  const newList = document.getElementById('contrast-new-list');
  if (newList) {
    newList.innerHTML = dict.contrast.newItems
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join('');
  }

  // Superpowers header
  setTxt('sp-kicker', dict.superpowers.kicker);
  setTxt('sp-title', dict.superpowers.title);
  setTxt('sp-subtitle', dict.superpowers.subtitle);

  // Proof header
  setTxt('proof-kicker', dict.proof.kicker);
  setTxt('proof-title', dict.proof.title);
  setTxt('proof-subtitle', dict.proof.subtitle);
  setTxt('proof-video-badge', dict.proof.videoBadge);
  setTxt('proof-video-caption', dict.proof.videoCaption);

  // Catalog header
  setTxt('cat-kicker', dict.catalog.kicker);
  setTxt('cat-title', dict.catalog.title);
  setTxt('cat-subtitle', dict.catalog.subtitle);

  // Pricing header & Squad
  setTxt('price-kicker', dict.pricing.kicker);
  setTxt('price-title', dict.pricing.title);
  setTxt('price-subtitle', dict.pricing.subtitle);
  setTxt('squad-ribbon', dict.pricing.squad.ribbon);
  setTxt('squad-title', dict.pricing.squad.title);
  setTxt('squad-subtitle', dict.pricing.squad.subtitle);
  setTxt('squad-preview-hint', dict.pricing.squad.previewHint);
  setTxt('squad-regular-anchor', dict.pricing.squad.regularAnchor);
  setTxt('squad-per-bot', dict.pricing.squad.perBotBadge);
  setTxt('squad-cta-btn', dict.pricing.squad.cta);
  setTxt('squad-cta-sub', dict.pricing.squad.ctaSub);
  setTxt('duos-heading', dict.pricing.duosHeading);
  setTxt('duos-sub', dict.pricing.duosSub);
  setTxt('ind-summary-badge', dict.pricing.individualSummary.badge);
  setTxt('ind-summary-title', dict.pricing.individualSummary.title);
  setTxt('ind-summary-desc', dict.pricing.individualSummary.desc);
  setTxt('ind-summary-cta', dict.pricing.individualSummary.cta);

  const squadBullets = document.getElementById('squad-bullets');
  if (squadBullets) {
    squadBullets.innerHTML = dict.pricing.squad.bullets
      .map((b) => `<li>${escapeHtml(b)}</li>`)
      .join('');
  }

  // Trust & SHA-256
  setTxt('trust-kicker', dict.trust.kicker);
  setTxt('trust-title', dict.trust.title);
  setTxt('trust-subtitle', dict.trust.subtitle);
  setTxt('smartscreen-title', dict.trust.smartscreenTitle);
  setTxt('smartscreen-body', dict.trust.smartscreenBody);
  setTxt('ps-verify-label', dict.trust.powershellLabel);
  setTxt('copy-ps-btn', dict.trust.copyCmdBtn);
  setTxt('manifest-raw-link', dict.trust.manifestLink);
  setTxt('manifest-accordion-summary', dict.trust.accordionSummary);
  setTxt('sha-filter-all', dict.trust.filterAll);
  setTxt('sha-filter-exe', dict.trust.filterExe);
  setTxt('sha-filter-zip', dict.trust.filterZip);
  setTxt('sha-col-species', dict.trust.colSpecies);
  setTxt('sha-col-artifact', dict.trust.colArtifact);
  setTxt('sha-col-size', dict.trust.colSize);
  setTxt('sha-col-hash', dict.trust.colHash);
  setTxt('sha-col-action', dict.trust.colAction);
  setTxt('tot-exe', dict.trust.totalsExe);
  setTxt('tot-zip', dict.trust.totalsZip);
  setTxt('tot-grand', dict.trust.totalsGrand);
  setTxt('faq-title', dict.trust.faqTitle);

  // Footer
  setTxt('footer-tagline', dict.footer.tagline);
  setTxt('footer-meta', dict.footer.meta);
  setTxt('footer-links-title', dict.footer.linksTitle);
  setTxt('footer-hub-link', dict.footer.hubLinkLabel);
}

function renderSpeciesTabs() {
  const container = document.getElementById('species-tabs');
  if (!container) return;
  container.innerHTML = SPECIES_ORDER.map((id) => {
    const sp = SPECIES_CATALOG[id];
    const copy = sp.copy[currentLang] || sp.copy.en;
    const isSelected = id === activeSpecies;
    return `
      <button
        type="button"
        class="species-tab"
        role="tab"
        aria-selected="${isSelected}"
        data-select-species="${sp.id}"
      >
        <img src="${sp.avatar}" alt="${escapeHtml(sp.name)}" width="34" height="34" />
        <span class="species-tab-meta">
          <span class="species-tab-name">
            <span class="species-tab-dot" style="background:${sp.glowColor}"></span>
            ${escapeHtml(sp.name)}
          </span>
          <span class="species-tab-sub">${escapeHtml(copy.badge)}</span>
        </span>
      </button>
    `;
  }).join('');
}

function renderSpeciesInspector() {
  const container = document.getElementById('species-inspector');
  if (!container) return;
  const sp = SPECIES_CATALOG[activeSpecies];
  const copy = sp.copy[currentLang] || sp.copy.en;
  const insp = t().hero.inspector;

  container.innerHTML = `
    <div>
      <div class="inspector-head">
        <div class="inspector-identity">
          <img src="${sp.avatar}" alt="${escapeHtml(sp.name)}" width="52" height="52" />
          <div>
            <div class="inspector-name-row">
              <h2 class="inspector-name">${escapeHtml(sp.name)}</h2>
              <span class="inspector-hex-chip">${escapeHtml(sp.glowColor)}</span>
            </div>
            <p class="inspector-tagline">${escapeHtml(copy.tagline)}</p>
          </div>
        </div>
      </div>

      <blockquote class="inspector-quote" style="margin-top:12px">
        ${escapeHtml(copy.voiceQuote)}
      </blockquote>

      <div class="inspector-badges" style="margin-top:12px">
        <div class="mini-stat-box">
          <span>${escapeHtml(insp.physicsTag)}</span>
          <strong>${escapeHtml(copy.physicsLabel)} (${escapeHtml(sp.physics)})</strong>
        </div>
        <div class="mini-stat-box">
          <span>${escapeHtml(insp.powerTag)}</span>
          <strong>${escapeHtml(copy.powerLabel)}</strong>
        </div>
      </div>

      <div style="margin-top:14px">
        <h3 class="inspector-presets-title">${escapeHtml(insp.presetsTitle)}</h3>
        <ul class="inspector-workflow-list">
          <li class="inspector-workflow-item">
            <strong>${escapeHtml(copy.workflows.drop.label)}</strong>
            <span>${escapeHtml(copy.workflows.drop.desc)}</span>
          </li>
          <li class="inspector-workflow-item">
            <strong>${escapeHtml(copy.workflows.snip.label)}</strong>
            <span>${escapeHtml(copy.workflows.snip.desc)}</span>
          </li>
          <li class="inspector-workflow-item">
            <strong>${escapeHtml(copy.workflows.clipboard.label)}</strong>
            <span>${escapeHtml(copy.workflows.clipboard.desc)}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="inspector-buy-box">
      <div class="inspector-price-meta">
        <span>
          <span class="strike-price">${escapeHtml(insp.regPriceTag)}</span>
          <strong>$12 USD</strong>
        </span>
        <span class="promo-pill">${escapeHtml(insp.promoBadge)}</span>
      </div>
      <a
        href="${sp.storeUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-accent"
      >
        ${escapeHtml(insp.buySinglePrefix)} ${escapeHtml(sp.name)} ${escapeHtml(insp.buySingleSuffix)} ↗
      </a>
    </div>
  `;
}

function renderSuperpowersSection() {
  const grid = document.getElementById('superpowers-grid');
  if (!grid) return;
  const dict = t().superpowers;
  const sp = SPECIES_CATALOG[activeSpecies];
  const spCopy = sp.copy[currentLang] || sp.copy.en;

  grid.innerHTML = dict.cards
    .map((card) => {
      let bottomHtml = '';
      if (card.presetKey && spCopy.workflows[card.presetKey]) {
        const wf = spCopy.workflows[card.presetKey];
        bottomHtml = `
          <div class="power-live-preset">
            <small>${escapeHtml(dict.activePreviewLabel)} ${escapeHtml(sp.name)}</small>
            <strong>${escapeHtml(wf.label)}</strong>
          </div>
        `;
      } else if (card.staticBadge) {
        bottomHtml = `
          <div class="power-live-preset">
            <small>Windows 10 / 11 Native</small>
            <strong>${escapeHtml(card.staticBadge)}</strong>
          </div>
        `;
      }

      return `
        <article class="power-card">
          <div>
            <div class="power-card-top">
              <span class="power-icon-badge">
                <span>${card.icon}</span>
                <span class="power-num">${escapeHtml(card.num)}</span>
              </span>
              <span class="kbd-shortcut">${escapeHtml(card.shortcut)}</span>
            </div>
            <h3>${escapeHtml(card.title)}</h3>
            <p>${escapeHtml(card.desc)}</p>
          </div>
          ${bottomHtml}
        </article>
      `;
    })
    .join('');
}

function renderProofGallery() {
  const grid = document.getElementById('proof-gallery-grid');
  if (!grid) return;
  const cards = t().proof.cards;

  grid.innerHTML = cards
    .map((c, idx) => {
      const imgSrc = PROOF_IMAGES[idx] || PROOF_IMAGES[0];
      return `
        <button
          type="button"
          class="proof-shot-card"
          data-lightbox-src="${imgSrc}"
          data-lightbox-caption="${escapeHtml(c.title)} — ${escapeHtml(c.desc)}"
        >
          <img src="${imgSrc}" alt="${escapeHtml(c.title)}" loading="lazy" />
          <div class="proof-shot-meta">
            <strong>${escapeHtml(c.title)}</strong>
            <span>${escapeHtml(c.desc)}</span>
          </div>
        </button>
      `;
    })
    .join('');
}

function renderCatalogGrid() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;
  const cat = t().catalog;
  const hatchLabel = currentLang === 'es' ? '🥚 Cría incluida' : '🥚 Hatchling included';

  grid.innerHTML = SPECIES_ORDER.map((id) => {
    const sp = SPECIES_CATALOG[id];
    const copy = sp.copy[currentLang] || sp.copy.en;
    return `
      <article
        class="bot-card"
        style="--bot-color:${sp.glowColor};--bot-rgb:${sp.glowRgb};--bot-sec:${sp.secondaryColor}"
      >
        <div>
          <div class="bot-card-visual">
            <img
              class="rookie-render"
              src="${sp.renderRookie}"
              alt="${escapeHtml(sp.name)} 3D Rookie"
              loading="lazy"
            />
            <span class="bot-hatchling-pip">
              <img src="${sp.renderHatchling}" alt="" loading="lazy" />
              <span>${escapeHtml(hatchLabel)}</span>
            </span>
            <span class="bot-physics-chip">physics: ${escapeHtml(sp.physics)}</span>
          </div>

          <div class="bot-card-head" style="margin-top:14px">
            <h3>${escapeHtml(sp.name)}</h3>
            <span class="bot-swatches">
              <i class="swatch-dot" style="background:${sp.glowColor}"></i>
              <i class="swatch-dot" style="background:${sp.secondaryColor}"></i>
              ${escapeHtml(sp.glowColor)}
            </span>
          </div>

          <p class="bot-role">${escapeHtml(copy.role)}</p>
          <p class="bot-summary">${escapeHtml(copy.summary)}</p>

          <div class="bot-preset-pills">
            ${copy.quickPills
              .map((pill) => `<span class="bot-preset-pill">${escapeHtml(pill)}</span>`)
              .join('')}
          </div>
        </div>

        <div class="bot-card-footer">
          <div class="bot-price-row">
            <span class="bot-price-now">
              $12 <small>USD · <span class="strike-price">${escapeHtml(cat.regPrice)}</span></small>
            </span>
            <span class="promo-pill" style="color:${sp.glowColor};border-color:rgba(${sp.glowRgb},0.4);background:rgba(${sp.glowRgb},0.14)">
              ${escapeHtml(cat.earlyBirdTag)}
            </span>
          </div>
          <div class="bot-card-actions">
            <button
              type="button"
              class="btn btn-sm btn-ghost"
              data-try-species="${sp.id}"
            >
              ${escapeHtml(cat.tryInStageBtn)}
            </button>
            <a
              href="${sp.storeUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-sm btn-bot-buy"
            >
              ${escapeHtml(cat.buyIndividualBtn)} ↗
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderPricingAndBundles() {
  // Squad interactive preview chips
  const squadChips = document.getElementById('squad-member-chips');
  if (squadChips) {
    squadChips.innerHTML = SPECIES_ORDER.map((id) => {
      const sp = SPECIES_CATALOG[id];
      return `
        <button type="button" class="squad-chip" data-try-species="${sp.id}">
          <img src="${sp.avatar}" alt="" />
          <span>${escapeHtml(sp.name)}</span>
        </button>
      `;
    }).join('');
  }

  const squadCtaBtn = document.getElementById('squad-cta-btn');
  if (squadCtaBtn) squadCtaBtn.href = STORE_LINKS.bundles.fullSquad;

  // 3 Duo Packs
  const duosGrid = document.getElementById('duos-grid');
  if (!duosGrid) return;
  const saveWord = currentLang === 'es' ? 'Ahorras' : 'Save';

  duosGrid.innerHTML = DUO_BUNDLES.map((duo) => {
    const copy = duo.copy[currentLang] || duo.copy.en;
    const [m1, m2] = duo.members.map((m) => SPECIES_CATALOG[m]);
    return `
      <article class="duo-card">
        <div>
          <div class="duo-avatars">
            <div class="duo-avatar-pair">
              <button
                type="button"
                class="duo-avatar-btn"
                data-try-species="${m1.id}"
                title="${escapeHtml(m1.name)}"
                style="border-color:${m1.glowColor}"
              >
                <img src="${m1.avatar}" alt="${escapeHtml(m1.name)}" />
              </button>
              <button
                type="button"
                class="duo-avatar-btn"
                data-try-species="${m2.id}"
                title="${escapeHtml(m2.name)}"
                style="border-color:${m2.glowColor}"
              >
                <img src="${m2.avatar}" alt="${escapeHtml(m2.name)}" />
              </button>
            </div>
            <div class="duo-price-tag">
              <strong>${escapeHtml(duo.price)} <span style="font-size:12px;color:var(--text-muted)">USD</span></strong>
              <small><span class="strike-price">${escapeHtml(duo.regularPrice)}</span> ${saveWord} ${escapeHtml(duo.saveAmount)}</small>
            </div>
          </div>

          <h4 style="margin-top:14px">${duo.icon} ${escapeHtml(copy.title)}</h4>
          <p class="duo-sub">${escapeHtml(copy.subtitle)}</p>
          <p class="duo-desc">${escapeHtml(copy.desc)}</p>
        </div>

        <a
          href="${duo.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-ghost"
        >
          ${escapeHtml(copy.cta)} ↗
        </a>
      </article>
    `;
  }).join('');
}

function updatePowershellVerifySnippet() {
  const sp = SPECIES_CATALOG[activeSpecies] || SPECIES_CATALOG.buggy;
  const codeEl = document.getElementById('ps-verify-code');
  if (codeEl) {
    codeEl.textContent = `Get-FileHash .\\${sp.exe.filename} -Algorithm SHA256`;
  }
}

function renderShaTable() {
  const tbody = document.getElementById('sha-table-body');
  if (!tbody) return;
  const copyLabel = t().trust.copyHashBtn;

  const rows = [];
  for (const id of SPECIES_ORDER) {
    const sp = SPECIES_CATALOG[id];
    if (shaFilter === 'all' || shaFilter === 'exe') {
      rows.push({
        species: sp.name,
        color: sp.glowColor,
        filename: sp.exe.filename,
        sizeMb: sp.exe.sizeMb,
        sizeBytes: sp.exe.sizeBytes,
        sha256: sp.exe.sha256,
        kind: 'EXE',
      });
    }
    if (shaFilter === 'all' || shaFilter === 'zip') {
      rows.push({
        species: sp.name,
        color: sp.glowColor,
        filename: sp.zip.filename,
        sizeMb: sp.zip.sizeMb,
        sizeBytes: sp.zip.sizeBytes,
        sha256: sp.zip.sha256,
        kind: 'ZIP',
      });
    }
  }

  tbody.innerHTML = rows
    .map(
      (r) => `
      <tr>
        <td>
          <span style="display:inline-flex;align-items:center;gap:7px;font-weight:700">
            <i class="swatch-dot" style="background:${r.color}"></i>
            ${escapeHtml(r.species)}
          </span>
        </td>
        <td><code>${escapeHtml(r.filename)}</code></td>
        <td>
          <strong>${escapeHtml(r.sizeMb)}</strong>
          <span style="color:var(--text-muted);font-size:11px">(${escapeHtml(r.sizeBytes)} B)</span>
        </td>
        <td class="sha-hash-cell">${escapeHtml(r.sha256)}</td>
        <td>
          <button
            type="button"
            class="copy-hash-btn"
            data-copy-hash="${escapeHtml(r.sha256)}"
          >
            ${escapeHtml(copyLabel)}
          </button>
        </td>
      </tr>
    `
    )
    .join('');
}

function renderFaq() {
  const grid = document.getElementById('faq-grid');
  if (!grid) return;
  grid.innerHTML = t()
    .trust.faqs.map(
      (item, idx) => `
      <details class="faq-item" ${idx < 2 ? 'open' : ''}>
        <summary>${escapeHtml(item.q)}</summary>
        <p>${escapeHtml(item.a)}</p>
      </details>
    `
    )
    .join('');
}

function renderFooterLinks() {
  const list = document.getElementById('footer-store-list');
  if (!list) return;
  list.innerHTML = SPECIES_ORDER.map((id) => {
    const sp = SPECIES_CATALOG[id];
    return `<a href="${sp.storeUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(sp.name)} ($12) ↗</a>`;
  }).join('');
}

function renderAll() {
  renderStaticI18n();
  renderSpeciesTabs();
  renderSpeciesInspector();
  renderSuperpowersSection();
  renderProofGallery();
  renderCatalogGrid();
  renderPricingAndBundles();
  updatePowershellVerifySnippet();
  renderShaTable();
  renderFaq();
  renderFooterLinks();
}

/* ==========================================================================
   Event Wiring & Initialization
   ========================================================================== */

function setupInteractions() {
  // Language switch
  document.getElementById('lang-switch-btn')?.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    try {
      localStorage.setItem('zui_landing_lang', currentLang);
    } catch {
      // Ignore storage blocks
    }
    renderAll();
    postToStage({ type: 'ZUI_COMMAND', action: 'lang', value: currentLang });
  });

  // Delegated clicks across tabs, catalog Try buttons, copy buttons & lightbox
  document.addEventListener('click', (e) => {
    const target = e.target instanceof Element ? e.target : null;
    if (!target) return;

    const tabBtn = target.closest('[data-select-species]');
    if (tabBtn) {
      const spId = tabBtn.getAttribute('data-select-species');
      if (spId) selectSpecies(spId, { scrollToStage: false });
      return;
    }

    const tryBtn = target.closest('[data-try-species]');
    if (tryBtn) {
      const spId = tryBtn.getAttribute('data-try-species');
      if (spId) selectSpecies(spId, { scrollToStage: true });
      return;
    }

    const hashBtn = target.closest('[data-copy-hash]');
    if (hashBtn instanceof HTMLElement) {
      const hash = hashBtn.getAttribute('data-copy-hash');
      if (hash) copyTextWithFeedback(hash, hashBtn, t().trust.copyHashBtn);
      return;
    }

    const shotBtn = target.closest('[data-lightbox-src]');
    if (shotBtn) {
      const src = shotBtn.getAttribute('data-lightbox-src');
      const cap = shotBtn.getAttribute('data-lightbox-caption') || '';
      const modal = document.getElementById('lightbox-backdrop');
      const img = document.getElementById('lightbox-img');
      const capEl = document.getElementById('lightbox-caption');
      if (modal && img && src) {
        img.src = src;
        if (capEl) capEl.textContent = cap;
        modal.hidden = false;
      }
      return;
    }
  });

  // Stage quick-action buttons
  document.getElementById('ctrl-pet')?.addEventListener('click', () => {
    postToStage({ type: 'ZUI_COMMAND', action: 'pet' });
  });
  document.getElementById('ctrl-spin')?.addEventListener('click', () => {
    postToStage({ type: 'ZUI_COMMAND', action: 'spin' });
  });
  document.getElementById('ctrl-power')?.addEventListener('click', () => {
    postToStage({ type: 'ZUI_COMMAND', action: 'power' });
  });
  document.getElementById('ctrl-center')?.addEventListener('click', () => {
    postToStage({ type: 'ZUI_COMMAND', action: 'center' });
  });

  // Size S-XL buttons
  document.querySelectorAll('[data-stage-size]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const size = btn.getAttribute('data-stage-size');
      if (!size) return;
      activeSize = size;
      document.querySelectorAll('[data-stage-size]').forEach((b) => {
        b.setAttribute('data-active', String(b === btn));
      });
      postToStage({ type: 'ZUI_COMMAND', action: 'size', value: size });
    });
  });

  // Evolution Stage 1 (Hatchling) <-> 2 (Rookie)
  document.querySelectorAll('[data-stage-evo]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const st = Number(btn.getAttribute('data-stage-evo')) === 1 ? 1 : 2;
      activeStage = st;
      document.querySelectorAll('[data-stage-evo]').forEach((b) => {
        b.setAttribute('data-active', String(b === btn));
      });
      postToStage({ type: 'ZUI_COMMAND', action: 'stage', value: st });
    });
  });

  // SHA-256 filter tabs
  document.querySelectorAll('[data-sha-filter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = btn.getAttribute('data-sha-filter');
      if (!f) return;
      shaFilter = f;
      document.querySelectorAll('[data-sha-filter]').forEach((b) => {
        b.setAttribute('data-active', String(b === btn));
      });
      renderShaTable();
    });
  });

  // Copy PowerShell verify command
  const psBtn = document.getElementById('copy-ps-btn');
  psBtn?.addEventListener('click', () => {
    const code = document.getElementById('ps-verify-code')?.textContent || '';
    if (code) copyTextWithFeedback(code, psBtn, t().trust.copyCmdBtn);
  });

  // Lightbox close
  const closeLightbox = () => {
    const modal = document.getElementById('lightbox-backdrop');
    if (modal) modal.hidden = true;
  };
  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-backdrop')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // Global keyboard forwarding ('R' spin & 'Escape' lightbox/spin)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      return;
    }
    const activeTag = document.activeElement?.tagName;
    if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;
    if ((e.key === 'r' || e.key === 'R') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      postToStage({ type: 'ZUI_COMMAND', action: 'spin' });
    }
  });

  // Listen for ZUI_READY from isolated stage.html
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'ZUI_READY') {
      const overlay = document.getElementById('stage-loading-overlay');
      if (overlay) overlay.dataset.visible = 'false';
    }
  });

  const frame = document.getElementById('hero-stage-frame');
  frame?.addEventListener('load', () => {
    window.setTimeout(() => {
      const overlay = document.getElementById('stage-loading-overlay');
      if (overlay) overlay.dataset.visible = 'false';
    }, 350);
  });
}

applyAccentCssVars(activeSpecies);
renderAll();
setupInteractions();
mountSpeciesInStage(activeSpecies, true);
