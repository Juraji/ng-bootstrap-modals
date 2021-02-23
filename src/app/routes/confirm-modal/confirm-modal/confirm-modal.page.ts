import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Modals} from '@juraji/ng-bootstrap-modals';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './confirm-modal.page.html'
})
export class ConfirmModalPage {

  readonly examples: ExampleCodeMap[] = [
    {file: 'example.component.ts', contents: require(`!raw-loader!src/app/code/confirm-modal/example.component.ts.txt`).default},
    {file: 'app.module.ts', contents: require(`!raw-loader!src/app/code/app.module.ts.txt`).default},
  ];

  modalResolve$: Observable<string>;
  modalDismiss$: Observable<string>;
  modalComplete$: Observable<string>;

  constructor(
    private readonly modals: Modals
  ) {
  }

  onOpenConfirmModal() {
    const modalRef = this.modals.confirm(
      'Are you sure you want to use a ' +
      '<span class="text-primary">confirm modal</span>?',
      'Sure!',
      'No...'
    );

    this.modalResolve$ = modalRef.onResolved;
    this.modalDismiss$ = modalRef.onDismissed.pipe(map(() => 'Modal was dismissed!'));
    this.modalComplete$ = modalRef.onComplete.pipe(map(() => 'Modal was completed!'));

  }
}
