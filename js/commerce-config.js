// Catalog entries contain verified public product pages copied from Microsoft Store.
export function microsoftProductUrl(value) {
  if (!value) return '';
  try {
    const url = new URL(value);
    const productPath = /^\/(?:store\/)?detail\/(?:[^/]+\/)?[a-z0-9]{12}\/?$/i;
    return url.origin === 'https://apps.microsoft.com' && !url.username && !url.password && productPath.test(url.pathname)
      ? url.href : '';
  } catch {
    return '';
  }
}
