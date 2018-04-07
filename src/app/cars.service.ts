import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1
    },
    {
      name: 'Audi',
      id: 2
    },
    {
      name: 'Bentley',
      id: 3
    }
  ];
}
