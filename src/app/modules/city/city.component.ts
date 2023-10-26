import {Component, OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LMapComponent } from '../../shared/components/lmap/lmap.component';
import {Observable} from "rxjs";
import {Weather} from "../../shared/model/weather";
import {WeatherService} from "../../shared/services/weather.service";

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

  cityWeather$: Observable<Weather>;

  constructor(protected weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.cityWeather$ = this.weatherService.getCityTodayWeather(this.cityLongitude, this.cityLatitude)
  }

}
