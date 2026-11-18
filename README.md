# 0-Uidgets

Bilingual EN/ES landing for six Windows 10/11 desktop widgets, with an interactive 3D preview, a real desktop recording and individual or bundle pricing.

- Website: https://julio-patron.github.io/0-Uidgets/
- Public privacy page: https://julio-patron.github.io/0-Uidgets/privacy.html
- Prices: $12 USD individual (launch; regular $19), $22 USD themed duo, $49 USD Full 6-Bot Squad.

## Store links

Edit only `STORE_LINKS` in `js/catalog-data.js`. Each species and bundle has independent `itchIo`, `gumroad` and `microsoftStore` fields. Set a field to its official HTTPS product URL to activate that channel everywhere. Empty fields create no anchors; Microsoft Store shows a coming-soon state. Bundle prices never link to the creator hub as if it were a checkout.

| Bundle key | Companions |
| --- | --- |
| `playfulDuo` | Buggy + Pyxol |
| `dragonDuo` | Velkarion + Lumilisk |
| `dreamyDuo` | Yuravax + Nimpu |
| `fullSquad` | All six |

The creator hub is configured separately under `STORE_LINKS.creatorHub`.

The verified Gumroad product URL is active for the $49 Full Squad. Individual companions link to itch.io. Duo and Microsoft Store links remain pending until their product URLs are available.

## Preview and hosting

No build step or production dependencies. Serve the repository root with `npm start` or `python -m http.server 8080`, then open http://localhost:8080.

GitHub Pages deploys `main` from `/ (root)`. All asset paths work under `/0-Uidgets/`. Language and species can be linked with `?lang=es&species=nimpu`.

Microsoft Partner Center must use the public privacy URL above. The previous `/Widgets-Public-Repo/privacy.html` address returns 404 after the repository rename.

## Public repository boundaries

- Never add `.exe`, `.appx`, `.msix`, TypeScript source, `electron/`, credentials or private app code.
- `privacy.html` remains bilingual and contains no itch.io or Gumroad links.
- `stage.html` mounts exactly one sanitized `widget/*-widget.js` bundle. Keep `ZUI_DESTROY`, `destroyWidgetAndReleaseWebGL()` and `WEBGL_lose_context` intact. The parent cancels stale navigation requests before changing species.
- The twelve `assets/<species>/normals/*_1.webp` / `*_2.webp` files are shader textures and must stay. The unused illustrations and preview sheets were removed. `buggy-avatar-3d.png` remains only because the unchanged privacy page uses it as its favicon.
- The embedded stage uses the landing's bilingual preview controls; the Windows app's configuration UI is outside the web demonstration.

## Media and verification

`PROOF_VIDEO` in `js/catalog-data.js` configures the single 43-second desktop recording and its real-frame JPEG poster. The H.264 video has no audio, uses faststart metadata and is under 3 MB. The player uses `preload="metadata"`, `playsinline` and a poster.

The page flows from the live preview to the catalog, a compact desktop proof section, pricing, installation options and closed technical details. The video is capped at 620 px wide beside its introduction on desktop and stacks below it on mobile. There is no video picker or screenshot gallery.

The original supplied recordings were edited to omit open conversations and account metrics. No creature illustrations substitute for real desktop footage.

Release hashes are displayed inside closed technical details and mirrored in `SHA256SUMS-ALL-SQUAD.txt` and `SHA256SUMS-STORE.txt`. Store package hashes identify the submitted `.appx` files, not Microsoft Store's subsequently managed installation.
