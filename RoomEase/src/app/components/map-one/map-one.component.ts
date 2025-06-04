declare var L: any;  // Declare L globally

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-one',
  imports: [],
  templateUrl: './map-one.component.html',
  styleUrl: './map-one.component.css'
})
export class MapOneComponent {
  ngOnInit(): void {
    // Initialize the map and set its view
    const map = L.map('map').setView([48.864716, 2.349014], 13); // Centered on Paris

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add custom markers with popups
    const locations = [
      [48.8566, 2.3522], // Paris
      [48.864716, 2.349014],
      [48.8584, 2.2945], // Eiffel Tower
      [48.852968, 2.349902],
      [48.8606, 2.3376],
    ];

    locations.forEach(([lat, lng]) => {
      const marker = L.marker([lat, lng]).addTo(map);
      marker.bindPopup(`<b>Location</b><br>Latitude: ${lat}, Longitude: ${lng}`);
    });

    // Optional: Add Marker Clustering
    // L.markerClusterGroup().addTo(map);
  }
}
