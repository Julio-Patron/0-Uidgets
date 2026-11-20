// Previous purchases use the configured origin for recovery links and cookies.
export function siteOrigin(env) {
  if (env.APP_ORIGIN) return env.APP_ORIGIN;
  const host = env.VERCEL_PROJECT_PRODUCTION_URL || env.VERCEL_URL;
  return host ? `https://${host}` : undefined;
}
