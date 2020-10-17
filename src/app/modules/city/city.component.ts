import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cityLatitude = 45.183916;
  cityLongitude = 5.703630;

  constructor() {
  }

  ngOnInit(): void {

  }

}
