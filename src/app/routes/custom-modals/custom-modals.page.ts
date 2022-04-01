/* eslint-disable @typescript-eslint/no-var-requires */
import {Component} from '@angular/core';
import {Modals} from '@juraji/ng-bootstrap-modals';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ExampleModal, ExampleModalData, ExampleModalResult} from './example-modal/example.modal';

@Component({
  templateUrl: './custom-modals.page.html'
})
export class CustomModalsPage {

  public readonly examples: ExampleCodeMap[] = [
    {
      file: 'example.component.ts',
      contents: require(`!raw-loader!src/app/code/custom-modals/example.component.ts.txt`).default
    },
    {
      file: 'example.modal.ts',
      contents: require(`!raw-loader!src/app/code/custom-modals/example.modal.ts.txt`).default
    },
    {
      file: 'example.modal.html',
      contents: require(`!raw-loader!src/app/code/custom-modals/example.modal.html.txt`).default
    },
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  public modalResolve$: Observable<string>;
  public modalDismiss$: Observable<string>;
  public modalComplete$: Observable<string>;

  public constructor(
    private readonly modals: Modals
  ) {
  }

  public onOpenCustomModal() {
    const modalRef = this.modals.open<ExampleModalResult>(ExampleModal, {
      data: {
        title: 'My custom modal',
        content: 'This content is rendered from the modal data!'
      } as ExampleModalData
    });

    this.modalResolve$ = modalRef.onResolved.pipe(map(v => v.result));
    this.modalDismiss$ = modalRef.onDismissed.pipe(map(() => 'Modal was dismissed!'));
    this.modalComplete$ = modalRef.onComplete.pipe(map(() => 'Modal was completed!'));

  }
}
