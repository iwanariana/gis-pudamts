// 1. Save the files to the user's device
// The "install" event is called when the ServiceWorker starts up.
// All ServiceWorker code must be inside events.
self.addEventListener('install', function(e) {
    console.log('install');
  
    // waitUntil tells the browser that the install event is not finished until we have
    // cached all of our files
    e.waitUntil(
      // Here we call our cache "myonsenuipwa", but you can name it anything unique
      caches.open('myonsenuipwa').then(cache => {
        // If the request for any of these resources fails, _none_ of the resources will be
        // added to the cache.
        return cache.addAll([
          '/gis-pudamts/',
          '/gis-pudamts/index.html',
          'https://unpkg.com/onsenui/css/onsenui.min.css',
          'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
          'https://unpkg.com/onsenui/js/onsenui.min.js',
          'https://unpkg.com/jquery/dist/jquery.min.js',
          'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
          'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
          '/geojson/dma.geojson',
          '/geojson/pipa_new.geojson',
          '/geojson/sb.geojson',
          '/geojson/map.geojson',
          '/geojson/mag.geojson',
          '/geojson/res.geojson',       
         
        ]);
      })
    );
  });
  
  // 2. Intercept requests and return the cached version 6 instead
  self.addEventListener('fetch', function(e) {
    e.respondWith(
      // check if this file exists in the cache
      caches.match(e.request)
        // Return the cached file, or else try to get it from the server
        .then(response => response || fetch(e.request))
    );
  });
