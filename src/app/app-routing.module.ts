import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {CityComponent} from "./modules/city/city.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: ':cityName', component: CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
