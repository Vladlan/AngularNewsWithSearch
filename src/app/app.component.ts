import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
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

  // @ViewChild('form') form: NgForm;

  submitForm(form: NgForm) {
  // submitForm() {
    console.log('Submitted');
    console.log(form);
    // console.log(this.form);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
