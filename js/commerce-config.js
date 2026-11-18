// Set the verified HTTPS backend origin only after checkout and private delivery pass.
// No keys, storage URLs, executable files or server code belong in this repository.
export const COMMERCE = Object.freeze({
  checkoutOrigin: '',
  currency: 'USD',
  prices: Object.freeze({ single: 1499, duo: 2699, collection: 5999 }),
});
