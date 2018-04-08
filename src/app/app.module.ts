import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { CarsService } from "./cars.service";
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
