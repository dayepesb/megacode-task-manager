import {Component, OnInit} from '@angular/core';
import {UrlConstant} from '@app/constant/url.constant';

@Component({
  selector: 'app-header-principal-page',
  templateUrl: './header-principal-page.component.html',
  styleUrls: ['./header-principal-page.component.scss']
})
export class HeaderPrincipalPageComponent implements OnInit {

  urls: any = UrlConstant.URLS_ROUTER;

  constructor() { }

  ngOnInit() {
  }

}
