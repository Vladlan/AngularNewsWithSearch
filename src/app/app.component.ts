import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


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
    }`
  ]
})
export class AppComponent implements OnInit {
  @ViewChild('form') form: NgForm;

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

  formData = {};
  isSubmited = false;

  addRandEmail () {
    const randEmail = 'randEmail@mail.com';
    // this.form.setValue({
    //   user: {
    //     password: '',
    //     email: 'randEmail'
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }

  submitForm(form: NgForm) {
    console.log('Submitted');
    console.log(this.form);
    this.isSubmited=true;
    this.formData = this.form.value;
    this.form.reset();
  }

  constructor() {
  }

  ngOnInit() {
  }
}
