// A catalog-only deployment can use its Vercel hostname. Checkout always uses
// the seller's explicit origin for redirects, cookies and form submissions.
export function siteOrigin(env) {
  if (env.APP_ORIGIN) return env.APP_ORIGIN;
  if (env.COMMERCE_ENABLED === 'true') throw new Error('Set APP_ORIGIN before enabling checkout');
  const host = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL;
  return host ? `https://${host}` : undefined;
}
