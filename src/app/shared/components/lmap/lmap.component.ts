import {AfterViewInit, Component, Input} from '@angular/core';
import L from 'leaflet'

@Component({
  selector: 'app-lmap',
  templateUrl: './lmap.component.html',
  styleUrls: ['./lmap.component.scss']
})
export class LMapComponent implements AfterViewInit {

  @Input()
  zoom: number = 13
  @Input()
  lat: number
  @Input()
  long: number

  private map: any;


  constructor() {
  }

  ngAfterViewInit(): void {
    this.map = L.map('mapId').setView([this.lat, this.long], this.zoom)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(this.map);
    L.marker([this.lat, this.long]).addTo(this.map)
  }

}
