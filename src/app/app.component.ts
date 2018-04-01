import {Component, OnInit} from '@angular/core';

import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarsService]
})
export class AppComponent implements OnInit {

  cars = [];

  constructor(private  service: CarsService ) {}

  ngOnInit() {
    this.cars = this.service.cars;
  }
}
