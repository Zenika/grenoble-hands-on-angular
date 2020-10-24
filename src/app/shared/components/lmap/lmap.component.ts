import {AfterViewInit, Component, Input} from '@angular/core';
import {Icon, LatLng, Map, Marker, TileLayer} from "leaflet";

@Component({
  selector: 'app-l-map',
  templateUrl: './lmap.component.html',
  styleUrls: ['./lmap.component.scss']
})
export class LMapComponent implements AfterViewInit {

  @Input()
  zoom = 13
  @Input()
  lat: number
  @Input()
  long: number

  private map: any;


  constructor() {
  }

  ngAfterViewInit(): void {
    this.map = new Map('mapId').setView([this.lat, this.long], this.zoom)
    const tileLayer = new TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    });
    const marker = new Marker(new LatLng(this.lat, this.long), {
      icon: new Icon({
        iconSize: [25, 41],
        iconAnchor: [13, 0],
        iconUrl: 'assets/leaflet/marker-icon.png',
        shadowUrl: 'assets/leaflet/marker-shadow.png'
      })
    });
    tileLayer.addTo(this.map);
    marker.addTo(this.map)
  }

}
