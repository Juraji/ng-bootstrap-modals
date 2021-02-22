import {Component} from '@angular/core';
import {Modals} from '@juraji/ng-bootstrap-modals';
import {ExampleModal, ExampleModalData, ExampleModalResult} from './example-modal/example.modal';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './custom-modals.page.html'
})
export class CustomModalsPage {

  readonly exampleCode = [
    {file: 'home.page.ts', contents: require(`!raw-loader!src/app/code/custom-modals/home.page.ts.txt`).default},
    {file: 'example.modal.ts', contents: require(`!raw-loader!src/app/code/custom-modals/example.modal.ts.txt`).default},
    {file: 'example.modal.html', contents: require(`!raw-loader!src/app/code/custom-modals/example.modal.html.txt`).default},
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  modalResolve$: Observable<string>;
  modalDismiss$: Observable<string>;
  modalComplete$: Observable<string>;

  constructor(
    private readonly modals: Modals
  ) {
  }

  onOpenCustomModal() {
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
