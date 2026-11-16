# Zero-UI 3D Desktop Bots (`v1.1.0`) — Official Public Catalog & Bundles Landing

Official static landing page and live in-browser 3D WebGL stage for the **Zero-UI 3D Desktop Bots (`v1.1.0`)** lineup for Windows 10/11 (`x64` portable `.exe` + 100% offline 3D companion mode + optional BYOK AI via local Ollama, Google Gemini, or OpenAI-compatible endpoints).

## Architecture & Security Guarantees

- **100% Sanitized Static Assets (Zero Proprietary Source Code):** Contains **no** `.ts` source files and **no** `electron/` runtime code. Uses only the compiled, species-isolated WebGL ESM bundles (`widget/<species>-widget.js`), WebP/normal-map 3D assets (`assets/<species>/**`), and 3D avatars (`<species>-avatar-3d.png`) extracted from the audited `v1.1.0` web-demo archives.
- **Strict Single-Context WebGL Lifecycle:** The Hero Windows 11 Desktop Simulator mounts a single isolated `<iframe src="./stage.html?species=...">` at a time. Switching creatures explicitly calls `destroy()` and `WEBGL_lose_context` before replacing the stage URL (`location.replace`), preventing browser WebGL context exhaustion and keeping 60 FPS on laptops and mobile devices.
- **Zero-Build Static ES Modules:** Pure HTML5 + CSS3 + native ES Modules (`js/catalog-data.js`, `js/app.js`, `js/stage-host.js`) with relative POSIX paths (`./`) so it deploys out of the box to root domains or subfolder paths without bundlers or `node_modules`.
- **Instant EN / ES Localization:** Defaults to English (`EN`) for global USD traffic and switches the entire page + live 3D stage HUD to Spanish (`ES`) in 1 click (also supports `?lang=es` and `?species=pyxol` deep links).

---

## Repository Structure

```text
zero-ui-bots-landing/
├── index.html                      # Main catalog, 5 native workflows, bundles, SHA-256 & SEO/JSON-LD
├── stage.html                      # Isolated single-WebGL-context Windows 11 desktop stage
├── SHA256SUMS-ALL-SQUAD.txt        # Official consolidated SHA-256 manifest (12 verified artifacts)
├── css/
│   ├── styles.css                  # Windows 11 dark Mica/Acrylic UI & dynamic --accent system
│   └── stage.css                   # Simulated Windows 11 desktop backdrop & taskbar HUD
├── js/
│   ├── catalog-data.js             # Official species specs, presets, pricing, URLs & EN/ES copy
│   ├── app.js                      # Landing controller, dynamic theme, EN/ES toggle & SHA-256 copy
│   └── stage-host.js               # Isolated WebGL loader, postMessage bridge & GPU cleanup
├── widget/                         # Sanitized compiled ESM 3D bundles (1 per species)
├── assets/
│   ├── <species>/                  # 3D WebP renders, normal maps, previews & manifest.json
│   └── showcase/                   # Real Windows 11 desktop proof screenshots, OG image & MP4 capture
└── <species>-avatar-3d.png         # Root 3D avatars & dynamic favicons
```

---

## Updating Bundle URLs (`$22` Duo Packs & `$49` Full Squad)

All 6 individual itch.io store URLs are pre-wired in `js/catalog-data.js`:

- `https://elbuilder77.itch.io/buggy-3d-bot`
- `https://elbuilder77.itch.io/pyxol-3d-bot`
- `https://elbuilder77.itch.io/velkarion-3d-bot`
- `https://elbuilder77.itch.io/nimpu-3d-bot`
- `https://elbuilder77.itch.io/lumilisk-3d-bot`
- `https://elbuilder77.itch.io/yuravax-3d-bot`

Once you publish your itch.io Bundle / Sale pages (`Dashboard → Promotions → Create bundle`), update `STORE_LINKS.bundles` at the top of `js/catalog-data.js`:

```js
bundles: {
  fullSquad: 'https://itch.io/s/XXXXXX/full-6-bot-zero-ui-squad',
  buildersDuo: 'https://itch.io/s/XXXXXX/builders-duo-pack',
  commandDuo: 'https://itch.io/s/XXXXXX/command-clarity-duo',
  calmDuo: 'https://itch.io/s/XXXXXX/calm-creative-duo',
}
```

> **Canonical OpenGraph Domain:** When attaching your custom production domain (e.g. `https://zerouibots.com`), you can optionally replace `./assets/showcase/og-squad-v110.jpg` in `index.html`'s `og:image` and `twitter:image` tags with the absolute HTTPS URL (`https://your-domain.com/assets/showcase/og-squad-v110.jpg`) for social crawlers that require absolute URLs.

---

## Local Preview

Because ES Modules (`type="module"`) require HTTP(S) rather than `file://`, serve the folder locally with any static server:

```powershell
# Option A: Python 3 (built-in)
python -m http.server 8080

# Option B: Node.js (npx serve)
npx serve . -l 8080
```

Then open `http://localhost:8080` in your browser.

---

## Static Hosting Deployment (Zero Build Step)

### 1. Cloudflare Pages
1. Push this repository to GitHub or GitLab (or deploy directly via Wrangler CLI).
2. In **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**, select `zero-ui-bots-landing`.
3. Configure build settings:
   - **Framework preset:** `None`
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (or `.`)
4. Or deploy directly from terminal:
   ```powershell
   npx wrangler pages deploy . --project-name=zero-ui-bots-landing
   ```

### 2. Vercel
1. Import `zero-ui-bots-landing` in **Vercel → Add New Project**.
2. Set:
   - **Framework Preset:** `Other`
   - **Build Command:** *(leave empty)*
   - **Output Directory:** `.`
3. Or deploy via Vercel CLI:
   ```powershell
   npx vercel --prod
   ```

### 3. GitHub Pages
1. Push this repository to GitHub (`main` branch).
2. Open **Settings → Pages**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` / `/ (root)` → **Save**.
3. Because all asset, iframe, CSS, and module URLs use relative POSIX paths (`./`), the landing and 3D WebGL stage work seamlessly both at `https://<username>.github.io/zero-ui-bots-landing/` and on a custom root domain.
