import {APP_INITIALIZER, NgModule} from '@angular/core';
import {LabelService} from '@app/service/label-service/label.service';
import {HttpClient} from '@angular/common/http';
import {I18nPipe} from '@app/pipe/i18n.pipe';
import {loadResources} from '@app/config/initapp.functions';

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
