import {Injectable} from '@angular/core';
import {Constants} from '@app/constant/constants';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UrlConstant} from '@app/constant/url.constant';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  images: any [] = [];

  constructor(private http: HttpClient) { }

  getImagePrincipalPage(): Promise<any> {

    this.images = [];
    let res: Promise<any>;
    let url = UrlConstant.IMAGES_PRINCIPAL_PAGE;
    const params: HttpParams = new HttpParams().set(Constants.PARAMS.APP_ID, Constants.ID_APP);

    res = this.http.get(url,{params: params})
      .toPromise()
      .then(response => {
        Object.keys(response).forEach(element => {
          this.images.push({
            path: response[element]['path'],
            title: response[element]['titleImage'],
            comment: response[element]['commentsImage']
          });
        });
      }).catch(err => {
        console.log('error create pipe');
        console.log(err);
      });

    return res;
  }
}
