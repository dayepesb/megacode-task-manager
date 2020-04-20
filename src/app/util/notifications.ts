import {ToastrService} from 'ngx-toastr';
import {Injectable} from '@angular/core';
import {I18nPipe} from '@app/pipe/i18n.pipe';

@Injectable({
  providedIn: 'root'
})
export class Notifications {

  constructor(private toastr: ToastrService, private i18nPipe: I18nPipe) {
  }

  succesNotification(title: string, description: string) {
    title = this.i18nPipe.transform(title);
    description = this.i18nPipe.transform(description);
    this.toastr.success(description, title, {});
  }

  errorNotification(title: string, description: string) {
    title = this.i18nPipe.transform(title);
    description = this.i18nPipe.transform(description);
    this.toastr.error(description, title, {});
  }

  infoNotification(title: string, description: string) {
    title = this.i18nPipe.transform(title);
    description = this.i18nPipe.transform(description);
    this.toastr.info(description, title, {});
  }
}
