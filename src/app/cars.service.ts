import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2011,
      color: 'black'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2013,
      color: 'red'
    },
    {
      name: 'Bentley',
      id: 3,
      year: 2012,
      color: 'green'
    }
  ];
}
