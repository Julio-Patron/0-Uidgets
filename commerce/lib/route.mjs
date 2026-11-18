import api from '../api/index.mjs';
// Rewrites may change the URL delivered to a Function. Each entry point supplies
// its own route, while retaining the untouched request body for webhook signatures.
export const route = pathname => ({fetch(request){const url=new URL(request.url);url.pathname=pathname;return api.fetch(new Request(url,request));}});
