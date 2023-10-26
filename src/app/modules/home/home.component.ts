import { Component, OnInit } from '@angular/core';
import { CitiesService } from "../../shared/services/cities.service";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class HomeComponent implements OnInit {

  cities = [];

  constructor(protected citiesService: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
  }

}
