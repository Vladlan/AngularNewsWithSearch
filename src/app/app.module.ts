import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { CarsService } from "./cars.service";
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  //http://localhost:4200/cars
  { path: '', component: HomePageComponent },
  { path: 'cars', component: CarsPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
