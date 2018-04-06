import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})

export class AppComponent implements OnInit {

  cars: Cars[] = [];
  carName: '';
  colors = [
    'red',
    'green',
    'pink',
    'yellow',
    'grey',
    'silver'
  ];


  constructor(private carsService: CarsService) {}

  ngOnInit() {}

  loadCars() {
    this.carsService
      .getCars()
      .subscribe( (cars: Cars[]) => {
        this.cars = cars;
      });
  }

  addCar () {
    this.carsService
      .addCar(this.carName)
      .subscribe( (car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1) );
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor() )
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car )
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      });
  }

}
