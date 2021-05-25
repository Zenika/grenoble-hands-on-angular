import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Weather } from '../model/weather';
import { WeatherDetailed } from '../model/weather-detailed';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const WEATHER_STATE_KEY = makeStateKey('weather');
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(protected http: HttpClient, protected state: TransferState) {}

  getCityNextWeekWeather(long, lat): Observable<Weather[]> {
    const data = this.state.get<Weather[]>(WEATHER_STATE_KEY, []);
    if (data.length > 0) {
      return of(data);
    }
    return this.http
      .get<any>(
        `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`
      )
      .pipe(
        map((response) => response.dataseries),
        tap((dataseries) => this.state.set(WEATHER_STATE_KEY, dataseries))
      );
  }

  getCityTodayWeather(long, lat): Observable<Weather> {
    return this.getCityNextWeekWeather(long, lat).pipe(
      map((dataseries) => dataseries[0])
    );
  }

  getCityDetailedWeather(
    long: number,
    lat: number
  ): Observable<WeatherDetailed[]> {
    return this.http
      .get<any>(
        `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`
      )
      .pipe(map((response) => response.dataseries));
  }
}
