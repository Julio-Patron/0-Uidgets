# 0-Uidgets 1.1.1

Bilingual EN/ES landing for six Windows 10/11 desktop bots: five remodeled creatures and the original Buggy. The page introduces optional BYOK AI and local Ollama, explains screen snips, file drops and clipboard workflows, and presents each bot's starting role. Every product includes both stages. The interactive preview uses the six current bundles.

- Website: https://julio-patron.github.io/0-Uidgets/
- Public privacy page: https://julio-patron.github.io/0-Uidgets/privacy.html
- Approved final prices for direct purchase: $14.99 USD individual, $26.99 USD themed duo, $59.99 USD full collection. Tax collection is not configured; direct sales remain disabled.

## Store links

`STORE_LINKS` in `js/catalog-data.js` keeps independent `itchIo`, `gumroad` and `microsoftStore` URLs. Empty URLs create no links. These external stores set their own prices and availability.

`js/commerce-config.js` contains the approved direct prices and an empty `checkoutOrigin`. Set an exact verified HTTPS backend origin only after payment and private delivery pass end-to-end checks. The top-level form submits only a SKU and language; the server chooses the Stripe Price. The purchase server belongs to this repository under `commerce/`; sold files and credentials remain outside Git. Server modules are excluded from the static output served to browsers.

| Bundle key | Companions |
| --- | --- |
| `playfulDuo` | Buggy + Pyxol |
| `dragonDuo` | Velkarion + Lumilisk |
| `dreamyDuo` | Yuravax + Nimpu |
| `fullSquad` | All six |

The creator hub is configured separately under `STORE_LINKS.creatorHub`.

Existing Gumroad and itch.io links remain. Microsoft Store is still coming soon: the owner reports all six names reserved, only Buggy uploaded, and no Submit yet.

## Preview and hosting

The static landing itself has no production dependencies. For the local review, run `npm --prefix commerce run prepare:site`, then `npm --prefix commerce start` and open http://127.0.0.1:8091. This serves only the prepared public files. Avoid serving the repository root after adding the purchase server.

Vercel Pro is the proposed host for the landing and private purchase backend. This revision has not been pushed or deployed. All asset paths still work under `/0-Uidgets/`. Language and species can be linked with `?lang=es&species=nimpu`.

Microsoft Partner Center must use the public privacy URL above. The previous `/Widgets-Public-Repo/privacy.html` address returns 404 after the repository rename.

## Public repository boundaries

- Never add `.exe`, `.appx`, `.msix`, installers, TypeScript source, `electron/`, credentials or private desktop app code. The Stripe server source belongs under `commerce/`, with secrets supplied by the deployment environment.
- `privacy.html` remains bilingual and contains no itch.io or Gumroad links.
- `stage.html` mounts exactly one sanitized `widget/*-widget.js` bundle. Keep `ZUI_DESTROY`, `destroyWidgetAndReleaseWebGL()` and `WEBGL_lose_context` intact. The parent cancels stale navigation requests before changing species.
- The twelve `assets/<species>/normals/*_1.webp` / `*_2.webp` files are shader textures and must stay. The unused illustrations and preview sheets were removed. `buggy-avatar-3d.png` remains only because the unchanged privacy page uses it as its favicon.
- The embedded stage uses the landing's bilingual preview controls; the Windows app's configuration UI is outside the web demonstration.

## Media and verification

`assets/creatures/*-1.1.1.png` contains captures of the current web preview, not captures of an installed Windows application. The older recording remains archived in `assets/showcase/` but is no longer loaded by the landing or social cards. The private deployment preparation excludes it.

The page flows from the live preview to AI options and workflows, a catalog organized by starting role, one pricing section, and FAQs with closed verification details. Individual purchases use a bot selector synchronized with the preview. Prices and checkout availability are stated in the pricing section; installation requirements live in the FAQs. Only one live renderer is used; catalog images add no WebGL contexts.

Feature copy follows the 1.1.1 Partner Center bundle guide and the six per-bot store listings. All bots share the same tools; their starting prompts and recipes are customizable. The website demonstrates 3D interaction only. AI workflows run in the Windows app, require a configured provider, and depend on the selected model. The guide's Microsoft Store price suggestions do not replace the approved direct-purchase prices in `js/commerce-config.js`.

The Buggy bundle, stage host, shader textures and existing privacy page stay unchanged. No creature has been redesigned for this landing update.

Release hashes are displayed inside closed technical details and mirrored in `SHA256SUMS-ALL-SQUAD.txt` and `SHA256SUMS-STORE.txt`. Store hashes identify the prepared unsigned 1.1.1 packages; they do not prove installation, Microsoft approval or Store availability.
