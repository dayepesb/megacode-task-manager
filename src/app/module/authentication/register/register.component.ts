import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/util/constants';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  urls: any = Constants.URLS;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
  }
}
