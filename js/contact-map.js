var map = L.map(document.getElementById("localization"), {
  center: [-23.2134, -46.8886],
  zoom: 15,
  
});
var basemap = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {});
const marker = L.marker([-23.2134, -46.8886])
basemap.addTo(map);
marker.addTo(map)
