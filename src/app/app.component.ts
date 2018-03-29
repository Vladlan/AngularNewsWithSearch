import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h2>{{ name }}</h2>
          <h2>{{ name | lowercase }}</h2>
          <h2>{{ name | uppercase }}</h2>
          <h2>{{ name | slice:0:8 }}</h2>
          <h2>{{ name | slice:8 | uppercase}}</h2>

          <hr>

          <h2>{{pi}}</h2>
          <h2>{{pi | number}}</h2>
          <h2>{{pi | number: '1.3-6'}}</h2>

          <hr>

          <h2> {{money | currency: 'USD'}}</h2>

          <hr>

          <h2> {{date}} </h2>
          <h2> {{date | date}} </h2>
          <h2> {{date | date:'fullDate'}} </h2>
          <h2> {{date | date:'shortDate'}} </h2>
          <h2> {{date | date:'shortDate'}} </h2>

          <hr>

          <h2> {{ amount | percent }}</h2>

          <hr>

          <h2>{{object}}</h2>
          <h2><pre>{{object | json}}</pre></h2>

        </div>
      </div>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Pipes in Angular';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    i1: 'item1',
    i2: 'item2',
    items1: {
      item1_1: 'item1_1',
      item1_2: 'item1_2'
    }
  };
}
