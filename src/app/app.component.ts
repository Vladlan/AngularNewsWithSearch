import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <h2>{{ amount | appPowPipe}}</h2>
          <h2>{{ amount | appPowPipe: 2 }}</h2>
          <h2>{{ amount | appPowPipe: 3:'=' }}</h2>


        </div>
      </div>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  amount = 3;

}
