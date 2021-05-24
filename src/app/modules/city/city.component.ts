import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../shared/services/weather.service';
import { Observable } from 'rxjs';
import { Weather } from '../../shared/model/weather';
import { Coordinates } from '../../shared/model/coordinates';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { CitiesService } from '../../shared/services/cities.service';
import { WeatherDetailed } from '../../shared/model/weather-detailed';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  cityName$: Observable<string>;
  cityWeather$: Observable<Weather[]>;
  cityWeatherDetailed$: Observable<WeatherDetailed[]>;
  cityCoords$: Observable<Coordinates>;
  degree: 'C' | 'F' = 'C';
  mode: 'simple' | 'detailed' = 'simple';

  constructor(
    protected weatherService: WeatherService,
    protected citiesService: CitiesService,
    protected route: ActivatedRoute,
    protected titleService: Title,
    protected metaService: Meta
  ) {
    const { cityName } = this.route.snapshot.params;
    this.titleService.setTitle(`${cityName} | Zenika Cities weather`);
    this.metaService.addTag({
      name: 'description',
      content: `Weather forecast for the city of ${cityName}`,
    });
  }

  ngOnInit(): void {
    this.cityName$ = this.route.params.pipe(map((params) => params.cityName));
    this.cityCoords$ = this.cityName$.pipe(
      map((cityName) => this.citiesService.getCityPosition(cityName))
    );
    this.cityWeather$ = this.cityCoords$.pipe(
      mergeMap((coords) =>
        this.weatherService.getCityNextWeekWeather(
          coords.longitude,
          coords.latitude
        )
      )
    );
    this.cityWeatherDetailed$ = this.cityCoords$.pipe(
      mergeMap((coords) =>
        this.weatherService.getCityDetailedWeather(
          coords.longitude,
          coords.latitude
        )
      )
    );
  }
}
