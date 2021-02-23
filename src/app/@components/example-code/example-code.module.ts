import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleCodeComponent} from './example-code/example-code.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {HighlightOptions} from 'ngx-highlightjs/lib/highlight.model';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ExampleCodeComponent],
  imports: [
    CommonModule,
    HighlightModule,
    NgbNavModule
  ],
  exports: [ExampleCodeComponent]
})
export class ExampleCodeModule {
  static forRoot(): ModuleWithProviders<ExampleCodeModule> {
    return {
      ngModule: ExampleCodeModule,
      providers: [
        {
          provide: HIGHLIGHT_OPTIONS,
          useValue: {
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            languages: {
              typescript: () => import('highlight.js/lib/languages/typescript'),
              xml: () => import('highlight.js/lib/languages/xml')
            },
            config: {}
          } as HighlightOptions
        }
      ]
    };
  }
}
