import {Component} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="container">
      <div class="row">
          <div class="col-sm">
            <h1>{{ asyncTitle | async }}</h1>

          <input class="form-control" type="text" [(ngModel)]="searchCar">
            <button class="btn btn-primary" (click)="addCar()">Add car</button>

          <hr>

          <ul class="list-group">
            <li class="list-group-item"
            *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index ">
              <b>{{i+1}}</b> {{car.name}} -  <i>{{car.year}}</i>
            </li>
          </ul>

        </div>
      </div>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchCar = '';

  asyncTitle = Observable.of('Async title 3 secs')
    .delay(3000);

  cars = [
    {name: 'Ford', year: '1999'},
    {name: 'Bentley', year: '2000'},
    {name: 'Audi', year: '2001'},
    {name: 'Mersedes', year: '2002'}
  ];

  addCar() {
    this.cars.push({
      name: 'New Car',
      year: '2018'
    });
  }
}
