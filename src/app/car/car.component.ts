import {Component, Input, OnInit} from '@angular/core';
import {ConsoleService} from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [ConsoleService]
})
export class CarComponent implements OnInit {

  constructor(private consoleService: ConsoleService) { }

  ngOnInit() {
  }

  @Input() car;

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    const service = new ConsoleService();
    // service.log(`${this.car.name} isSold = ${this.car.isSold}`);
    this.consoleService.log(`${this.car.name} isSold = ${this.car.isSold}`);
    console.log(`${this.car.name} isSold = ${this.car.isSold}`);
  }

}
