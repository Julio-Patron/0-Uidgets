# Zero-UI 3D Desktop Bots (`v1.1.0`) — Official Public Catalog & Squad Landing

Official static landing page and live in-browser 3D WebGL stage for the **Zero-UI 3D Desktop Bots (`v1.1.0`)** lineup for Windows 10/11 (`x64` portable `.exe` + universal 100% offline 3D companion engine + optional BYOK AI via local Ollama, Google Gemini, or OpenAI-compatible endpoints + custom Personality Cartridges).

## Architecture & Product Highlights

- **Universal Engine Across All 6 Species:** Every creature (`Buggy`, `Pyxol`, `Velkarion`, `Nimpu`, `Lumilisk`, and `Yuravax`) runs the exact same full desktop engine and supports editable System Prompts and `.json`/`.md` Personality Cartridges.
- **Clean Conversion Funnel (`$12` Single vs. `$49` Full 6-Bot Squad):** Focused binary pricing with zero dead bundle tiers.
- **6 Official `*-1.1.0-portable.exe` SHA-256 & VirusTotal Links:** Direct 1:1 table matching the 6 Windows `x64` portables uploaded to itch.io & Gumroad, each wired directly to `https://www.virustotal.com/gui/file/<sha256>`.
- **100% Sanitized Static Assets (Zero Proprietary Source Code):** Contains **no** `.ts` source files and **no** `electron/` runtime code.
- **Strict Single-Context WebGL Lifecycle:** Mounts a single isolated `<iframe src="./stage.html?species=...">` at a time and explicitly releases GPU contexts (`destroy()` + `WEBGL_lose_context`) on species switch.

---

## Updating the Full Squad Bundle URL (`$49`)

All 6 individual itch.io store URLs are pre-wired in `js/catalog-data.js`. To point the `$49` Full Squad CTA directly to an itch.io or Gumroad bundle checkout URL, update `STORE_LINKS.fullSquad` at the top of `js/catalog-data.js`:

```js
export const STORE_LINKS = {
  creatorHub: 'https://elbuilder77.itch.io',
  fullSquad: 'https://itch.io/s/XXXXXX/full-6-bot-zero-ui-squad',
  // ...
};
```

---

## Local Preview

```powershell
# Option A: Python 3
python -m http.server 8080

# Option B: Node.js
npx serve . -l 8080
```

Open `http://localhost:8080`.

---

## Static Hosting Deployment (Zero Build Step)

### 1. Cloudflare Pages
- **Framework preset:** `None`
- **Build command:** *(empty)*
- **Build output directory:** `/`
- Or via CLI: `npx wrangler pages deploy . --project-name=zero-ui-bots-landing`

### 2. Vercel
- **Framework Preset:** `Other`
- **Build Command:** *(empty)*
- **Output Directory:** `.`
- Or via CLI: `npx vercel --prod`

### 3. GitHub Pages
- **Settings → Pages → Deploy from a branch:** `main` / `/ (root)`.
