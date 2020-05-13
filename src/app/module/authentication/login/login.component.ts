import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/util/constants';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {LoginService} from '@app/service/authentication/login.service';
import {Notifications} from '@app/util/notifications';

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

  constructor(private loginService: LoginService, private notifications: Notifications) {
    this.faEye = faEye;
    this.faEyeSlash = faEyeSlash;
    this.showPassword = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    let values = {
      username: form.value.usernameOrEmail,
      password: form.value.password
    };

    if (values.username == null || values.username == '' || values.password == null || values.password == '') {
      this.notifications.errorNotification('megacode.error.empty.input.title','megacode.error.empty.input.description');
    } else {
      this.loginService.login(values);
    }
  }

  showPasswordInput(): void {
    this.showPassword = !this.showPassword;
  }
}
