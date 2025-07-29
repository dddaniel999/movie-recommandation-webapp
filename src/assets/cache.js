const CACHE_KEY = "movie_cache";
const CACHE_DURATION_MS = 12 * 60 * 60 * 1000; // 12 ore

function getAllCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveAllCache(data) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(data));
}

export function getFromCache(title) {
  const cache = getAllCache();
  const entry = cache[title.toLowerCase()];

  if (entry && Date.now() - entry.timestamp < CACHE_DURATION_MS) {
    return entry.data;
  }

  return null;
}

export function saveToCache(title, data) {
  const cache = getAllCache();
  cache[title.toLowerCase()] = {
    data,
    timestamp: Date.now(),
  };
  saveAllCache(cache);
}
