import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LabelService} from '@app/service/label-service/label.service';
import {HttpClient} from '@angular/common/http';
import {I18nPipe} from '@app/pipe/i18n.pipe';

export function loadResources(labelService: LabelService, http: HttpClient) {
  return async () => {
    await labelService.getLabels();
  };
}

@NgModule({
  declarations: [
    I18nPipe
  ],
  imports: [
  ],
  exports: [
    I18nPipe
  ],
  providers: [
    I18nPipe,
    {
      provide: APP_INITIALIZER,
      useFactory: loadResources,
      multi: true,
      deps: [LabelService, HttpClient]
    }
  ],
})
export class ApplicationPipesModuleModule { }
