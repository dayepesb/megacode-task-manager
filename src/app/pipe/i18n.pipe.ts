import { Pipe, PipeTransform } from '@angular/core';
import {LabelService} from '@app/service/label-service/label.service';

@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  constructor(private labelService: LabelService) {
  }
  transform(key: string): any {
    return this.getLabel(key);
  }

  getLabel(key: string): any {
    return this.labelService.getMessage(key);
  }

}
