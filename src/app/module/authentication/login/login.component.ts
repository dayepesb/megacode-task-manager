import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/util/constants';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {LoginService} from '@app/service/authentication/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean;
  faEye: IconDefinition;
  faEyeSlash: IconDefinition;

  urls: any = Constants.URLS_ROUTER;

  constructor(loginService: LoginService) {
    this.faEye = faEye;
    this.faEyeSlash = faEyeSlash;
    this.showPassword = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

  showPasswordInput(): void {
    this.showPassword = !this.showPassword;
  }
}
