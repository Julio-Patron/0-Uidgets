import { I18N, SPECIES_CATALOG, SPECIES_ORDER, STORE_LINKS, BUNDLES, SHOWCASE } from './catalog-data.js';
import { COMMERCE } from './commerce-config.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const savedLang = (() => { try { return localStorage.getItem('zui_landing_lang'); } catch { return null; } })();
const validLang = (value) => value === 'en' || value === 'es';
let language = validLang(params.get('lang')) ? params.get('lang') : validLang(savedLang) ? savedLang : navigator.language.startsWith('es') ? 'es' : 'en';
let activeSpecies = SPECIES_ORDER.includes(params.get('species')) ? params.get('species') : 'buggy';
let activeSize = 'xl';
let activeStage = 2;
let activeDuo = BUNDLES[0].id;
let mountedSpecies = null;
let navigationTimer;
let readyTimer;
const frame = $('hero-stage-frame');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const t = (key) => I18N[language].labels[key];
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const httpsUrl = (value) => {
  if (!value || typeof value !== 'string') return '';
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password ? url.href : ''; } catch { return ''; }
};
const channels = [
  { key: 'microsoftStore', label: 'Microsoft Store' },
  { key: 'itchIo', label: 'itch.io' },
  { key: 'gumroad', label: 'Gumroad' },
];

function externalLink(url, label, className = 'store-link', accessibleLabel = label) {
  const safeUrl = httpsUrl(url);
  return safeUrl ? `<a class="${className}" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(accessibleLabel)}">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>` : '';
}

function checkoutOrigin() {
  const value = httpsUrl(COMMERCE.checkoutOrigin);
  if (!value) return '';
  const url = new URL(value);
  return url.pathname === '/' && !url.search && !url.hash ? url.origin : '';
}

function directPurchase(sku, product) {
  const origin = checkoutOrigin();
  if (!origin) return '';
  // Top-level POST gives the backend first-party cookies, including on mobile Safari.
  // The server accepts only these SKU names and supplies the actual Stripe price.
  return `<form method="post" action="${escapeHtml(origin)}/checkout" class="checkout-form">
    <input type="hidden" name="sku" value="${escapeHtml(sku)}">
    <input type="hidden" name="lang" value="${language}">
    <button type="submit" class="store-link store-link-primary" aria-label="${t('checkout')} · ${escapeHtml(product)}">${t('checkout')} <span aria-hidden="true">↗</span></button>
  </form>`;
}

function storeButtons(links, product, sku) {
  const available = channels.filter(({ key }) => httpsUrl(links?.[key]));
  let html = sku ? directPurchase(sku, product) : '';
  html += available.map(({ key, label }) => externalLink(links[key], `${t('buyOn')} ${label}`,
    'store-link', `${t('buyOn')} ${label} · ${product}`)).join('');
  if (!html) html = `<span class="store-pending">${t('offerPending')}</span>`;
  return `<div class="store-links">${html}</div>`;
}

function updateAddress() {
  const url = new URL(location.href);
  url.searchParams.set('lang', language);
  url.searchParams.set('species', activeSpecies);
  history.replaceState(null, '', url);
}

function command(action, value) {
  frame.contentWindow?.postMessage({ type: 'ZUI_COMMAND', action, value }, location.origin);
}

function stageLoading(error = false) {
  const overlay = $('stage-loading-overlay');
  overlay.dataset.visible = 'true';
  overlay.dataset.error = String(error);
  $('stage-loading-text').textContent = t(error ? 'stageError' : 'stageLoading');
  $('stage-retry').hidden = !error;
}

function mountSpecies(species, force = false) {
  if (!force && mountedSpecies === species) return;
  // Keep one iframe. Cancel stale navigations before asking its current host to
  // destroy the widget and lose its WebGL context, then navigate that same iframe.
  clearTimeout(navigationTimer);
  clearTimeout(readyTimer);
  stageLoading();
  frame.contentWindow?.postMessage({ type: 'ZUI_DESTROY' }, location.origin);
  mountedSpecies = species;
  navigationTimer = setTimeout(() => {
    const query = new URLSearchParams({ species, size: activeSize, stage: String(activeStage), lang: language });
    const url = './stage.html?' + query;
    try { frame.contentWindow.location.replace(url); } catch { frame.src = url; }
    readyTimer = setTimeout(() => stageLoading(true), 20000);
  }, 40);
}

function updateSpecies() {
  const species = SPECIES_CATALOG[activeSpecies];
  document.documentElement.style.setProperty('--accent', species.glowColor);
  document.documentElement.style.setProperty('--accent-rgb', species.glowRgb);
  document.querySelectorAll('[data-select-species], [data-try-species]').forEach((button) => {
    const id = button.dataset.selectSpecies || button.dataset.trySpecies;
    button.setAttribute('aria-pressed', String(id === activeSpecies));
  });
  $('stage-identity').innerHTML = `<strong>${species.name}</strong><span>${escapeHtml(I18N[language].bots[activeSpecies].role)}</span>`;
  document.querySelectorAll('[data-preview-label]').forEach((label) => {
    label.textContent = t(label.dataset.previewLabel === activeSpecies ? 'selected' : 'try');
  });
  document.querySelectorAll('.creature-card[data-species]').forEach((card) => {
    card.dataset.active = String(card.dataset.species === activeSpecies);
  });
  $('single-select').value = activeSpecies;
  renderSingleLinks();
}

function selectSpecies(id, scroll = false) {
  if (!Object.hasOwn(SPECIES_CATALOG, id)) return;
  activeSpecies = id;
  updateSpecies();
  updateAddress();
  mountSpecies(id);
  if (scroll) {
    $('live-stage').scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center' });
    document.querySelector(`[data-select-species="${id}"]`)?.focus({ preventScroll: true });
  }
}

function renderStaticText() {
  const dictionary = I18N[language];
  document.documentElement.lang = language;
  document.title = dictionary.metaTitle;
  document.querySelector('meta[name="description"]').content = dictionary.metaDescription;
  for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector).content = dictionary.metaTitle;
  for (const selector of ['meta[property="og:description"]', 'meta[name="twitter:description"]']) document.querySelector(selector).content = dictionary.metaDescription;
  document.querySelector('meta[property="og:image:alt"]').content = SHOWCASE.alt[language];
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach((node) => node.setAttribute('aria-label', t(node.dataset.i18nAria)));
  document.querySelectorAll('[data-i18n-title]').forEach((node) => node.setAttribute('title', t(node.dataset.i18nTitle)));
  document.querySelectorAll('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelectorAll('[data-price]').forEach(node => { node.textContent = '$' + (COMMERCE.prices[node.dataset.price] / 100).toFixed(2); });
  $('commerce-status').hidden = Boolean(checkoutOrigin());
  if ($('stage-loading-overlay').dataset.error === 'true') $('stage-loading-text').textContent = t('stageError');
}

function renderSpecies() {
  $('species-tabs').innerHTML = SPECIES_ORDER.map((id) => {
    const sp = SPECIES_CATALOG[id];
    return `<button type="button" class="species-tab" data-select-species="${id}" aria-pressed="${id === activeSpecies}" style="--species-color:${sp.glowColor}"><i class="species-dot" aria-hidden="true"></i>${sp.name}</button>`;
  }).join('');
  $('catalog-grid').innerHTML = SPECIES_ORDER.map((id, index) => {
    const sp = SPECIES_CATALOG[id];
    const bot = I18N[language].bots[id];
    return `<article class="creature-card" data-species="${id}" style="--species-color:${sp.glowColor}">
      <div class="creature-art"><span class="creature-number">0${index + 1}</span><img src="./assets/creatures/${id}-1.1.1.png" alt="${escapeHtml(sp.name + ' · ' + sp.copy[language].tagline)}" width="320" height="280" loading="lazy" decoding="async"></div>
      <div class="creature-content"><span class="creature-role">${escapeHtml(bot.role)}</span><h3>${sp.name}</h3>
      <p class="creature-use">${escapeHtml(bot.summary)}</p>
      <button type="button" class="creature-preview" data-try-species="${id}" aria-pressed="${id === activeSpecies}" aria-label="${t('try')} · ${sp.name}"><span data-preview-label="${id}">${t('try')}</span><span aria-hidden="true">↗</span></button></div>
    </article>`;
  }).join('');
  updateSpecies();
}

function renderPricing() {
  $('single-select').innerHTML = SPECIES_ORDER.map((id) => `<option value="${id}"${id === activeSpecies ? ' selected' : ''}>${SPECIES_CATALOG[id].name}</option>`).join('');
  renderSingleLinks();
  $('duo-selector').innerHTML = BUNDLES.map((bundle) =>
    `<button type="button" class="duo-option" data-duo="${bundle.id}" aria-pressed="${bundle.id === activeDuo}"><span class="duo-orbs" aria-hidden="true">${bundle.members.map((id) => `<i class="species-dot" style="--species-color:${SPECIES_CATALOG[id].glowColor}"></i>`).join('')}</span><span><strong>${bundle.title[language]}</strong><small>${bundle.members.map((id) => SPECIES_CATALOG[id].name).join(' + ')}</small></span></button>`).join('');
  renderDuoLinks();
  $('squad-members').innerHTML = SPECIES_ORDER.map((id) => `<span><i class="species-dot" style="--species-color:${SPECIES_CATALOG[id].glowColor}" aria-hidden="true"></i>${SPECIES_CATALOG[id].name}</span>`).join('');
  const squadLinks = STORE_LINKS.bundles.fullSquad;
  $('squad-store-links').innerHTML = storeButtons(squadLinks, t('squadTitle'), 'fullSquad');
  $('creator-links').innerHTML = channels.map(({ key, label }) => externalLink(STORE_LINKS.creatorHub[key], t('creator') + ' · ' + label, 'footer-store')).join('');
  if (checkoutOrigin()) $('creator-links').insertAdjacentHTML('afterbegin', `<a class="footer-store" href="${escapeHtml(checkoutOrigin())}/order">${t('downloads')}</a>`);
}

function renderSingleLinks() {
  $('single-role').textContent = I18N[language].bots[activeSpecies].role;
  $('single-store-links').innerHTML = storeButtons(STORE_LINKS.species[activeSpecies], SPECIES_CATALOG[activeSpecies].name, activeSpecies);
}

function renderDuoLinks() {
  const duo = BUNDLES.find(({ id }) => id === activeDuo);
  $('duo-store-links').innerHTML = storeButtons(STORE_LINKS.bundles[activeDuo], duo.members.map((id) => SPECIES_CATALOG[id].name).join(' + '), activeDuo);
}

function renderTrust() {
  const openFaqs = new Set([...document.querySelectorAll('[data-faq][open]')].map((el) => el.dataset.faq));
  $('faq-list').innerHTML = I18N[language].faqs.map((faq, index) => `<details class="faq-item" data-faq="${index}"${openFaqs.has(String(index)) ? ' open' : ''}><summary>${escapeHtml(faq.q)}</summary><p>${escapeHtml(faq.a)}</p></details>`).join('');
  for (const type of ['exe', 'appx']) {
    $(type + '-hashes').innerHTML = '<div class="hash-list">' + SPECIES_ORDER.map((id) => {
      const file = SPECIES_CATALOG[id][type];
      const mb = (file.sizeBytes / 1048576).toFixed(2);
      return `<div class="hash-row"><div class="hash-name"><code>${file.filename}</code><span class="hash-size">${mb} MiB</span></div><code class="sha-hash">${file.sha256}</code><div class="hash-actions"><button type="button" class="copy-hash" data-copy-hash="${file.sha256}" aria-label="${t('copyHash')} · ${file.filename}">${t('copyHash')}</button>${type === 'exe' ? externalLink(file.virustotalUrl, t('report'), 'report-link', t('report') + ' · ' + file.filename) : ''}</div></div>`;
    }).join('') + '</div>';
  }
}

function renderStructuredData() {
  let script = $('storefront-schema');
  if (!script) {
    script = document.createElement('script');
    script.id = 'storefront-schema';
    script.type = 'application/ld+json';
    document.head.append(script);
  }
  // Publish only offers with real product URLs; pending bundles are not InStock.
  const products = SPECIES_ORDER.map((id) => ({
    '@type': 'SoftwareApplication', name: '0-Uidgets ' + SPECIES_CATALOG[id].name, softwareVersion: '1.1.1',
    description: I18N[language].bots[id].summary,
    operatingSystem: 'Windows 10, Windows 11 (x64)', applicationCategory: 'DesktopEnhancementApplication',
    // Other stores determine their own prices. Unactivated direct checkout has no offer.
    ...(checkoutOrigin() ? { offers: { '@type': 'Offer', price: (COMMERCE.prices.single / 100).toFixed(2), priceCurrency: COMMERCE.currency, url: 'https://julio-patron.github.io/0-Uidgets/?species=' + id + '#pricing' } } : {}),
  }));
  script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: products.map((item, index) => ({ '@type': 'ListItem', position: index + 1, item })) });
}

function renderAll() {
  renderStaticText();
  renderSpecies();
  renderPricing();
  renderTrust();
  renderStructuredData();
}

function setLanguage(next) {
  if (!validLang(next) || next === language) return;
  language = next;
  try { localStorage.setItem('zui_landing_lang', language); } catch { /* Storage is optional. */ }
  renderAll();
  command('lang', language);
  updateAddress();
}

async function copyHash(hash, button) {
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(hash);
    else {
      const field = document.createElement('textarea');
      field.value = hash;
      field.className = 'visually-hidden';
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      button.focus();
      if (!copied) throw new Error('Copy unavailable');
    }
    button.textContent = t('copied');
    $('site-announcement').textContent = t('copied');
    setTimeout(() => { if (button.isConnected) button.textContent = t('copyHash'); }, 1700);
  } catch { $('site-announcement').textContent = t('copyFailed'); }
}

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const lang = target.closest('[data-lang]');
  if (lang) { setLanguage(lang.dataset.lang); return; }
  const species = target.closest('[data-select-species], [data-try-species]');
  if (species) { selectSpecies(species.dataset.selectSpecies || species.dataset.trySpecies, Boolean(species.dataset.trySpecies)); return; }
  const action = target.closest('[data-command]');
  if (action) { command(action.dataset.command); return; }
  const size = target.closest('[data-stage-size]');
  if (size) {
    activeSize = size.dataset.stageSize;
    document.querySelectorAll('[data-stage-size]').forEach((el) => el.setAttribute('aria-pressed', String(el === size)));
    command('size', activeSize); return;
  }
  const stage = target.closest('[data-stage-evo]');
  if (stage) {
    activeStage = Number(stage.dataset.stageEvo);
    document.querySelectorAll('[data-stage-evo]').forEach((el) => el.setAttribute('aria-pressed', String(el === stage)));
    command('stage', activeStage); return;
  }
  const duo = target.closest('[data-duo]');
  if (duo) {
    activeDuo = duo.dataset.duo;
    document.querySelectorAll('[data-duo]').forEach((el) => el.setAttribute('aria-pressed', String(el === duo)));
    renderDuoLinks(); return;
  }
  const hash = target.closest('[data-copy-hash]');
  if (hash) copyHash(hash.dataset.copyHash, hash);
});

$('single-select').addEventListener('change', (event) => selectSpecies(event.target.value));

window.addEventListener('message', (event) => {
  if (event.origin !== location.origin || event.source !== frame.contentWindow) return;
  if (event.data?.type === 'ZUI_SETTINGS' && event.data.species === activeSpecies) {
    const options = document.querySelector('.stage-options');
    options.open = true;
    options.querySelector('summary').focus();
    return;
  }
  if (event.data?.type !== 'ZUI_READY' || event.data.species !== activeSpecies) return;
  clearTimeout(readyTimer);
  $('stage-loading-overlay').dataset.visible = 'false';
  command('lang', language);
  command('size', activeSize);
  command('stage', activeStage);
});
$('stage-retry').addEventListener('click', () => mountSpecies(activeSpecies, true));
window.addEventListener('keydown', (event) => {
  if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"], video')) return;
  const speciesButton = event.target instanceof Element ? event.target.closest('[data-select-species]') : null;
  if (speciesButton && ['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
    event.preventDefault();
    const index = SPECIES_ORDER.indexOf(activeSpecies);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 5 : (index + (event.key === 'ArrowLeft' ? -1 : 1) + 6) % 6;
    selectSpecies(SPECIES_ORDER[next]);
    document.querySelector(`[data-select-species="${activeSpecies}"]`).focus();
  }
  if (event.key.toLowerCase() === 'r' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.repeat) command('spin');
});
window.addEventListener('pagehide', () => {
  clearTimeout(navigationTimer); clearTimeout(readyTimer);
  frame.contentWindow?.postMessage({ type: 'ZUI_DESTROY' }, location.origin);
});
window.addEventListener('pageshow', (event) => { if (event.persisted) mountSpecies(activeSpecies, true); });

renderAll();
mountSpecies(activeSpecies);
