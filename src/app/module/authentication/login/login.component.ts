import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  urls: any = Constants.URLS_ROUTER;

  constructor() { }

  ngOnInit(): void {
  }

}
