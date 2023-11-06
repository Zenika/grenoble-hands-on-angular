import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Weather} from "../model/weather";
import {WeatherDetailed} from "../model/weather-detailed";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(protected http: HttpClient) {
  }

  getCityNextWeekWeather(long, lat): Observable<Weather[]> {
    return this.http.get<any>(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`).pipe(
      map(response => response.dataseries)
    )
  }

  getCityTodayWeather(long, lat): Observable<Weather> {
    return this.getCityNextWeekWeather(long, lat).pipe(
      map(dataseries => dataseries[0])
    )
  }


  getCityDetailedWeather(long: number, lat: number): Observable<WeatherDetailed[]> {
    return this.http.get<any>(`http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`).pipe(
      map(response => response.dataseries)
    )
  }
}
