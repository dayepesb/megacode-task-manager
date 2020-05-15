import {VerifyTokenService} from '@app/service/authentication/verify-token.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {Constants} from '@app/util/constants';
import {LabelService} from '@app/service/label-service/label.service';

function deleteParamsUrl(url: string): string {
  let index = url.indexOf('?');
  if ( index === -1 )
    index = url.length;
  return url.substr(0, index);
}
export function validateJwtUserStorage(verifyTokenService: VerifyTokenService, http: HttpClient, router: Router, location: Location) {
  return async () => {
    console.log('Validando token guardado');

    let actualUrl = location.path();
    let token = localStorage.getItem('token');
    let needAuthenticate: boolean;
    let urlsRoute = Constants.URLS_ROUTER;

    for ( let key in urlsRoute ) {
      if (urlsRoute[key].url === deleteParamsUrl(actualUrl) ) {
        needAuthenticate = urlsRoute[key].authorized;
        break;
      }
    }

    if (token != null && token !== '') {
      await verifyTokenService.verifyToken(token)
        .then(success => {
          if (needAuthenticate) {
            console.log('Tiene token y esta autorizado em la misma url');
            router.navigateByUrl(actualUrl);
          } else {
            console.log('Tiene token y se redirije a la url principal de usuario');
            router.navigateByUrl(Constants.URLS_ROUTER.principalPageUser.url);
          }
        }).catch(error => {
          localStorage.clear();
          if (!needAuthenticate) {
            console.log('Tiene token no esta autorizado y pero se puede quedar en la url');
            router.navigateByUrl(actualUrl);
          } else {
            console.log('Tiene token no esta autorizado y se redirije a la url del home');
            router.navigateByUrl(Constants.URLS_ROUTER.empty.url);
          }
        });
    } else {
      if (!needAuthenticate) {
        console.log('No tiene token y se puede quedar en la url actual');
        router.navigateByUrl(actualUrl);
      } else {
        console.log('No tiene token y se redirije a la url del login');
        router.navigateByUrl(Constants.URLS_ROUTER.login.url);
      }
    }
  };
}

export function loadResources(labelService: LabelService, http: HttpClient) {
  return async () => {
    await labelService.getLabels();
  };
}
