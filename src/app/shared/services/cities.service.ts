import {Injectable} from '@angular/core';
import {Coordinates} from "../model/coordinates";

interface Cities {
  [city: string]: Coordinates
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities: Cities = {
    GRENOBLE: new Coordinates(45.183916, 5.703630),
    SINGAPOUR: new Coordinates(1.295600, 103.858995),
    BORDEAUX: new Coordinates(44.848089, -0.571017),
    BREST: new Coordinates(48.389397, -4.499237),
    MONTREAL: new Coordinates(45.523000, -73.581700),
    LYON: new Coordinates(45.767443, 4.858798),
    RENNES: new Coordinates(48.113409, -1.661249),
    NANTES: new Coordinates(47.207408, -1.556187),
    LILLE: new Coordinates(50.648670, 3.075520),
    PARIS: new Coordinates(48.878932, 2.328487)
  }

  getCities(): string[] {
    return Object.keys(this.cities);
  }

  getCitiesPosition(): Cities {
    return this.cities;
  }

  getCityPosition(cityName): Coordinates {
    return this.getCitiesPosition()[cityName]
  }

  addCity(city: {name: string, latitude: number, longitude: number}) {
    this.cities[city.name] = new Coordinates(city.latitude, city.longitude)
  }
}
