import {Component, OnInit} from '@angular/core';
import {Constants} from '@app/util/constants';
import {NgForm} from '@angular/forms';
import {Notifications} from '@app/util/notifications';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {RegisterService} from '@app/service/authentication/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean;
  faEye: IconDefinition;
  faEyeSlash: IconDefinition;

  urls: any = Constants.URLS_ROUTER;

  constructor(private notification: Notifications, private registerService: RegisterService) {
    this.faEye = faEye;
    this.faEyeSlash = faEyeSlash;
    this.showPassword = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (!this.validateEmail(form.value.email)) {
        this.notification.errorNotification('megacode.form.error', 'megacode.form.email.invalid');
      } else if (!this.validateFormatPassword(form.value.password)) {
        this.notification.errorNotification('megacode.form.error', 'megacode.form.password.invalid');
      } else {
          // Servicio de registro
          this.registerService.registerUser(form.value);
      }
    } else {
      if (form.value.name === '') {
        this.notification.errorNotification('megacode.form.error', 'megacode.form.name.empty');
      } else if (form.value.lastname === '') {
        this.notification.errorNotification('megacode.form.error', 'megacode.form.lastname.empty');
      } else if (form.value.username === '') {
        this.notification.errorNotification('megacode.form.error', 'megacode.form.username.empty');
      } else if (form.value.email === '') {
        this.notification.errorNotification('megacode.form.error', 'megacode.form.email.empty');
      } else if (form.value.password === '') {
        this.notification.errorNotification('megacode.form.error', 'megacode.form.password.empty');
      }
    }
  }

  validateEmail(email: string) {
    // tslint:disable-next-line:max-line-length
    const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (email!=null && email=='')
      return false;

    return regexp.test(email);
  }

  validateFormatPassword(password: string) {

    const rgxCapital = new RegExp(/[A-Z]/);
    const rgxLower = new RegExp(/[a-z]/);
    const rgxNumber = new RegExp(/[0-9]/);

    if (password.length < 8) {
      return false;
    } else if (!rgxCapital.test(password)) {
      return false;
    } else if (!rgxLower.test(password)) {
      return false;
    } else if (!rgxNumber.test(password)) {
      return false;
    }
    return true;
  }

  showPasswordInput(): void {
    this.showPassword = !this.showPassword;
  }
}
