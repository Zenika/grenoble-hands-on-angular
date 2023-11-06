import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { LMapComponent } from '../../shared/components/lmap/lmap.component';
import {mergeMap, Observable} from "rxjs";
import {Weather} from "../../shared/model/weather";
import {WeatherService} from "../../shared/services/weather.service";
import {CommonModule} from "@angular/common";
import {CitiesService} from "../../shared/services/cities.service";
import {map} from "rxjs/operators";
import {Coordinates} from "../../shared/model/coordinates";
import {DegreePipe} from "../../shared/pipe/degree.pipe";
import {FormsModule} from "@angular/forms";
import {WeatherDetailed} from "../../shared/model/weather-detailed";

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    standalone: true,
  imports: [LMapComponent, RouterLink, CommonModule, DegreePipe, FormsModule]
})
export class CityComponent implements OnInit {

  cityName$: Observable<string>;
  cityWeather$: Observable<Weather[]>;
  cityWeatherDetailed$: Observable<WeatherDetailed[]>;
  cityCoords$: Observable<Coordinates>;

  degree: 'C' | 'F' = 'C';
  mode: 'simple' | 'detailed' = "simple";

  constructor(protected weatherService: WeatherService, protected citiesService: CitiesService, protected route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cityName$ = this.route.params.pipe(
      map(params => params.cityName)
    )
    this.cityCoords$ = this.cityName$.pipe(
      map(cityName => this.citiesService.getCityPosition(cityName))
    )
    this.cityWeather$ = this.cityCoords$.pipe(
      mergeMap(coords => this.weatherService.getCityNextWeekWeather(coords.longitude, coords.latitude)),
    )
    this.cityWeatherDetailed$ = this.cityCoords$.pipe(
      mergeMap(coords => this.weatherService.getCityDetailedWeather(coords.longitude, coords.latitude)),
    )
  }

}
