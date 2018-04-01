import { BrowserModule } from '@angular/platform-browser';
import {  NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { CarFilterPipe } from './car-filter.pipe';
import { FormsModule } from "@angular/forms";
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import {ConsoleService} from "./console.service";


@NgModule({
  declarations: [
    AppComponent,
    CarFilterPipe,
    CarComponent,
    CarAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
