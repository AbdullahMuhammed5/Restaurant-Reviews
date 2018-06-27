let staticCacheName = "restaurants-static-v1";
let urlsToCache = [
  "/",
  "index.html",  
  "css/styles.css",
  "data/restaurants.json",
  "js/dbhelper.js",
  "js/main.js",
  "js/restaurant_info.js",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
    "img/star.png",
    "img/2stars.png",
    "img/3stars.png",
    "img/4stars.png",
    "img/5stars.png",
    "img/user.png",
    "restaurant.html",
    
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(staticCacheName)
      .then(cache => { console.log(cache); cache.addAll(urlsToCache)})
      .then(console.log("cache installed"))
      .catch(error => console.log(error))
      .then(self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
      if (cache !== staticCacheName) {
        console.log("[ServiceWorker] removing cached files from ", cache);
        return caches.delete(cache);
      }
    })))
  )
})

self.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
});