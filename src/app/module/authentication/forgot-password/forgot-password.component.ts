import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ForgotPasswordService} from '@app/service/authentication/forgot-password.service';
import {UrlConstant} from '@app/constant/url.constant';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  urls: any = UrlConstant.URLS_ROUTER;

  constructor(private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

  }

}
