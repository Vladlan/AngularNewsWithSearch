import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }

}
