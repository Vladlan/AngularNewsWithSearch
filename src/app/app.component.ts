import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {

  cars = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {}

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((response) => {
        console.log(response);
      });
  }
}
