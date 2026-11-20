import test from 'node:test';
import assert from 'node:assert/strict';
import { SPECIES_ORDER, STORE_LINKS } from '../../js/catalog-data.js';
import { microsoftProductUrl } from '../../js/commerce-config.js';

test('each published creature or bundle has a distinct Microsoft Store product page', () => {
  assert.deepEqual(Object.keys(STORE_LINKS.species).sort(), [...SPECIES_ORDER].sort());
  assert.ok(microsoftProductUrl(STORE_LINKS.species.buggy.microsoftStore));
  const products = new Set();
  for (const item of [...Object.values(STORE_LINKS.species), ...Object.values(STORE_LINKS.bundles)]) {
    if (!item.microsoftStore) continue;
    const page = microsoftProductUrl(item.microsoftStore);
    assert.ok(page, item.microsoftStore);
    const id = new URL(page).pathname.split('/').filter(Boolean).at(-1).toUpperCase();
    assert.ok(!products.has(id), 'Duplicate Microsoft Store product ID ' + id);
    products.add(id);
  }
});

test('pending entries, store searches and unrelated hosts never become product buttons', () => {
  for (const value of [undefined, '', '#', 'https://apps.microsoft.com/', 'https://apps.microsoft.com/search?query=Buggy',
    'https://example.org/detail/ABCDEFGHIJKL', 'http://apps.microsoft.com/detail/ABCDEFGHIJKL']) {
    assert.equal(microsoftProductUrl(value), '');
  }
});
