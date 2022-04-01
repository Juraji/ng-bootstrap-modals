/* eslint-disable @typescript-eslint/no-var-requires */
import {Component} from '@angular/core';
import {Modals} from '@juraji/ng-bootstrap-modals';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './confirm-modal.page.html'
})
export class ConfirmModalPage {

  public readonly examples: ExampleCodeMap[] = [
    {
      file: 'example.component.ts',
      contents: require(`!raw-loader!src/app/code/confirm-modal/example.component.ts.txt`).default
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

  public onOpenConfirmModal() {
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
