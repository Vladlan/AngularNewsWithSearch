import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PowPipe} from "./pow.pipe";
import { MyPipePipe } from './my-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    MyPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
