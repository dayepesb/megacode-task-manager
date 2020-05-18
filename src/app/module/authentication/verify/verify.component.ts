import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RegisterService} from '@app/service/authentication/register-service.service';
import {UrlConstant} from '@app/constant/url.constant';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  token: string;
  verified: boolean = null;
  urls: any = UrlConstant.URLS_ROUTER;

  constructor(private activatedRoute: ActivatedRoute, private registerService: RegisterService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params.token;
      if (!this.token) {
        this.verified = false;
      } else {
        let dataUser = {
          token : this.token
        };
        let promise  = this.registerService.verifyUser(dataUser);

        promise.then(success => {
          this.verified = true;
        }).catch(error => {
          this.verified = false;
        })
      }
    });
  }

  ngOnInit(): void {
  }

}
