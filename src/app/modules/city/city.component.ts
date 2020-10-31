import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../../shared/services/weather.service";
import {Observable} from "rxjs";
import {Weather} from "../../shared/model/weather";
import {Coordinates} from "../../shared/model/coordinates";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap} from "rxjs/operators";
import {CitiesService} from "../../shared/services/cities.service";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  cityName$: Observable<string>;
  cityWeather$: Observable<Weather>;
  cityCoords$: Observable<Coordinates>;

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
      mergeMap(coords => this.weatherService.getCityTodayWeather(coords.longitude, coords.latitude)),
    )
  }

}
