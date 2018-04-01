import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  styles: [
    `input.ng-invalid.ng-touched { border: solid red 1px }`,
    `.error { color: red }`,
    `.container {
      margin-top: 3%;
    }`
  ]
})
export class AppComponent implements OnInit {
  answers = [{
    type: 'yes',
    text: 'да'
  },
    {
      type: 'no',
      text: 'нет'
    }
  ];

  defaultAnswer = 'yes';
  defaultCountry = 'by';

  submitForm(form: NgForm) {
    console.log('Submitted');
    console.log(form);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
