import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '@app/service/authentication/login.service';
import {UrlConstant} from '@app/constant/url.constant';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  urls: any = UrlConstant.URLS_ROUTER;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.loginService.resendVerifyEmail(form.value.email);
  }
}
