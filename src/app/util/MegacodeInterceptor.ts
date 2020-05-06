import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpinnerOverlayService} from '@app/service/spinner/spinner.service';
import {tap} from 'rxjs/operators';
import {Constants} from '@app/util/constants';


@Injectable({
  providedIn: 'root'
})
export class MegacodeInterceptor implements HttpInterceptor {
  urlsSpinner: string[] = [];
  constructor(private spinner: SpinnerOverlayService) {
    // tslint:disable-next-line:forin
    for (const u in Constants.URLS_TO_BACK) {
      this.urlsSpinner.push(Constants.URLS_TO_BACK[u]);
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.urlsSpinner.includes(req.url)) {
      this.spinner.show();
    }

    //Add barrer token

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('response');
          this.spinner.hide();
        }
      }, error => {
        // http response status code
        console.log('Ha ocurrido un error : interceptor');
        console.log(error);
        this.spinner.hide();
      })
    );
  }

}