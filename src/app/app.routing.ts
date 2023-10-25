import { Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { CityComponent } from "./modules/city/city.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: ':cityName', component: CityComponent},
];

