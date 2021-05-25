import { TransferHttpCacheModule } from '@nguniversal/common';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CityComponent } from './modules/city/city.component';
import { HomeComponent } from './modules/home/home.component';
import { LMapComponent } from './shared/components/lmap/lmap.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DegreePipe } from './shared/pipes/degree.pipe';
import { CreateComponent } from './modules/create/create.component';
import { DateFormatPipe } from './shared/pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CityComponent,
    HomeComponent,
    LMapComponent,
    DegreePipe,
    DateFormatPipe,
    CreateComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
