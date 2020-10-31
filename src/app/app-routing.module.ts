import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./modules/home/home.component";
import { CityComponent } from "./modules/city/city.component";
import { CreateComponent } from "./modules/create/create.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'create', component: CreateComponent},
  { path: ':cityName', component: CityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
