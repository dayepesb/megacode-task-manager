import { Component, OnInit } from '@angular/core';
import {Constants} from '@app/util/constants';

@Component({
  selector: 'app-header-principal-page',
  templateUrl: './header-principal-page.component.html',
  styleUrls: ['./header-principal-page.component.scss']
})
export class HeaderPrincipalPageComponent implements OnInit {

  urls: any = Constants.URLS_ROUTER;

  constructor() { }

  ngOnInit() {
  }

}
