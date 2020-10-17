import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities = {
    GRENOBLE: [45.183916, 5.703630],
    SINGAPOUR: [1.295600, 103.858995],
    BORDEAUX: [44.848089, -0.571017],
    BREST: [48.389397, -4.499237],
    MONTREAL: [45.523000, -73.581700],
    LYON: [45.767443, 4.858798],
    RENNES: [48.113409, -1.661249],
    NANTES: [47.207408, -1.556187],
    LILLE: [50.648670, 3.075520],
    PARIS: [48.878932, 2.328487]
  }

  constructor() {
  }

  getCities() {
    return Object.keys(this.cities);
  }

  getMapPosition() {
    return this.cities;
  }

  getCityPosition(cityName) {
    return this.getMapPosition[cityName]
  }
}
