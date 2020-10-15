"use strict";
const map = L.map("mapid").setView([-20.5394322, -47.4082936], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZG91Z2xhcy1yZWdhdGllcmkiLCJhIjoiY2tnOWliNGI2MDE0ZjJycG54ZHBxMWJ5OCJ9.4hIHST4u8NtVfFypMKSxdg'
}).addTo(map);

const icon = L.icon({
  iconUrl: './public/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
  minWidth: 240,
  minHeigth: 240  
}).setContent('Lar das Meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"/></a>')

L.marker([-20.5394322, -47.4082936],{ icon })
  .addTo(map)
  .bindPopup(popup);