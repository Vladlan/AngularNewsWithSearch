import {ConsoleService} from "./console.service";
import {Injectable} from "@angular/core";

@Injectable()
export class CarsService {

  constructor(private consoleService: ConsoleService) {}

  cars = [
    {name: 'Ford', year: '1999', isSold: false},
    {name: 'Bentley', year: '2000', isSold: true},
    {name: 'Audi', year: '2001', isSold: false},
    {name: 'Mersedes', year: '2002', isSold: false}
  ];

  addCar(carName: string) {
    this.cars.push({
      name: carName,
      year: '2018',
      isSold: false
    });
    this.consoleService.log(`Car ${carName} was added`);
  }
}
