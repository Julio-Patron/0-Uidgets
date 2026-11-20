import { copyFileSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SPECIES_ORDER } from '../../js/catalog-data.js';
import { siteOrigin } from '../lib/site-origin.mjs';

const root = fileURLToPath(new URL('../../', import.meta.url));
const output = path.resolve(root, 'commerce/public');
const files = [
  'index.html', 'privacy.html', 'stage.html', 'buggy-avatar-3d.png',
  'SHA256SUMS-ALL-SQUAD.txt', 'SHA256SUMS-STORE.txt',
  'css/styles.css', 'css/stage.css', 'js/app.js', 'js/catalog-data.js',
  'js/commerce-config.js', 'js/stage-host.js', 'js/use-cases.js',
  'assets/favicon.svg', 'assets/creatures/collection-1.1.1.png',
];
for (const id of SPECIES_ORDER) {
  files.push(
    `widget/${id}-widget.js`, `assets/creatures/${id}-1.1.1.png`,
    `assets/${id}/manifest.json`, `assets/${id}/normals/${id}_1.webp`,
    `assets/${id}/normals/${id}_2.webp`,
  );
}

// Start fresh so a cached build cannot keep an obsolete or unlisted asset.
rmSync(output, { recursive: true, force: true });
for (const file of files) {
  const destination = path.join(output, file);
  mkdirSync(path.dirname(destination), { recursive: true });
  copyFileSync(path.join(root, file), destination);
}
copyFileSync(path.join(root, 'commerce/checkout-access.js'), path.join(output, 'checkout-access.js'));

const origin = siteOrigin(process.env);
if (origin) {
  if (!/^https:\/\/[a-z0-9.-]+$/.test(origin)) throw new Error('Invalid canonical origin');
  const index = path.join(output, 'index.html');
  const html = readFileSync(index, 'utf8').replaceAll('https://zero-uidgets.vercel.app/', origin + '/');
  writeFileSync(index, html);
}
console.log(`Prepared ${files.length + 1} public files in commerce/public.`);
