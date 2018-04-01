import {Component, OnInit} from '@angular/core';
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {

  carName = '';

  constructor(private service: CarsService) { }

  ngOnInit() {
  }

  addCar() {
    // this.onCarAdd.emit(this.carName);
    this.service.addCar(this.carName);
    this.carName = '';
  }

}
