import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../shared/services/weather.service";
import {Observable} from "rxjs";
import {Weather} from "../../shared/model/weather";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
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
