import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  styles: [
    `input.ng-invalid.ng-touched { border: solid red 1px }`,
    `.error { color: red }`,
    `.container {margin-top: 3%;}`,
    `.code {
      background-color: #f2f2f2;
      border: 1px solid silver;
      margin-top: 10px;
      border-radius: 5px;
    }`,
      `label {
      font-weight: 800;
    }`
  ]
})

export class AppComponent implements OnInit {

  cars = [
    {
      name: 'Ford',
      color: 'white',
      id: 1
    }
  ];

  constructor() {}

  ngOnInit() {}

}
