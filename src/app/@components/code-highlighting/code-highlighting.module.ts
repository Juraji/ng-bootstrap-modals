import {ModuleWithProviders, NgModule} from '@angular/core';
import {HIGHLIGHT_OPTIONS, HighlightModule} from 'ngx-highlightjs';
import {HighlightOptions} from 'ngx-highlightjs/lib/highlight.model';


@NgModule({
  imports: [HighlightModule],
  exports: [HighlightModule],
})
export class CodeHighlightingModule {
  static forRoot(): ModuleWithProviders<CodeHighlightingModule> {
    return {
      ngModule: CodeHighlightingModule,
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
