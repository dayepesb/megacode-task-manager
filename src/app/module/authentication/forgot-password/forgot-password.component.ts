import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/util/constants';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  urls: any = Constants.URLS_ROUTER;

  constructor() { }

  ngOnInit(): void {
  }

}
