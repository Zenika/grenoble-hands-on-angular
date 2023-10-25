import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LMapComponent } from '../../shared/components/lmap/lmap.component';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    standalone: true,
    imports: [LMapComponent, RouterLink]
})
export class CityComponent implements OnInit {

  cityLatitude = 45.183916;
  cityLongitude = 5.703630;

  constructor() {
  }

  ngOnInit(): void {

  }

}
