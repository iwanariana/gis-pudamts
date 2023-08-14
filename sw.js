self.addEventListener('install', function(e) {
    console.log('install');
  
    e.waitUntil(
      caches.open('myonsenuipwa').then(cache => {
        return cache.addAll([
          '/gis-pudamts/',
          '/gis-pudamts/index.html',
          'https://unpkg.com/onsenui/css/onsenui.min.css',
          'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
          'https://unpkg.com/onsenui/js/onsenui.min.js',
          'https://unpkg.com/jquery/dist/jquery.min.js',
          'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
          'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
          '/gis-pudamts/geojson/dma.geojson',
          '/gis-pudamts/geojson/pipa_new.geojson',
          '/gis-pudamts/geojson/sb.geojson',
          '/gis-pudamts/geojson/map.geojson',
          '/gis-pudamts/geojson/mag.geojson',
          '/gis-pudamts/geojson/res.geojson',
          '/gis-pudamts/icon/Map.svg',
          '/gis-pudamts/icon/Mag.svg',
          '/gis-pudamts/icon/Res.svg',         
        ]);
      })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.match(e.request)
        .then(response => {
          if (response) {
            return response; // Return the cached response if available
          }
          return fetch(e.request); // Otherwise, fetch from network
        })
    );
});
