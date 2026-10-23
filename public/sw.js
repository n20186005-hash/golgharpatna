/* गोलघर पटना – Service Worker (v2026-10-23) */
const CACHE = 'golghar-patna-v2026-10-23';
const PRECACHE = [
  '/',
  '/manifest.webmanifest',
  '/images/golghar-hero.svg',
  '/favicon/favicon.svg',
  '/favicon/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // बाहरी API (मौसम आदि) को नहीं रोकते

  // नेविगेशन: नेटवर्क-फर्स्ट, ऑफलाइन में '/'
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          if(res.ok) event.waitUntil(caches.open(CACHE).then((cache) => cache.put(req, copy)));
          return res;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || new Response('यह पृष्ठ ऑफलाइन उपलब्ध नहीं है। कनेक्शन आने पर पुनः लोड करें।',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}}))
        )
    );
    return;
  }

  // स्थैतिक संपत्तियाँ: कैश-फर्स्ट + नेटवर्क बैकफिल
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy));
        }
        return res;
      });
    })
  );
});
