import { Routes } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { CityComponent } from "./modules/city/city.component";
import {CreateComponent} from "./modules/create/create.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create', component: CreateComponent},
  { path: ':cityName', component: CityComponent},
];

