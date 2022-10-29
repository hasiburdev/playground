import leaflet from "leaflet";
import { Mappable } from "./interface";

export class CustomMap {
  private map;
  private marker;
  constructor(private mapId: string) {
    this.map = leaflet.map(mapId).setView([0, 0], 1);
    leaflet
      .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(this.map);
  }

  addMarker(mappable: Mappable): void {
    this.marker = leaflet
      .marker([mappable.location.lat, mappable.location.lng])
      .addTo(this.map)
      .bindPopup(mappable.markerContent());
  }
}
