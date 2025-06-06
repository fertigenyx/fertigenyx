import pThrottle from 'p-throttle';

// Create a throttle instance for 5 requests per second
const throttle = pThrottle({
  limit: 5, // Maximum 5 calls
  interval: 1000, // Per 1 second (1000ms)
});

// Wrap API fetch calls
export const throttledFetch = throttle(async (fetchFunction, ...args) => {
  return fetchFunction(...args);
});
