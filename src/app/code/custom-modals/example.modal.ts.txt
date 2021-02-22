import {Component, Inject} from '@angular/core';
import {MODAL_DATA, ModalRef} from '@juraji/ng-bootstrap-modals';

export interface ExampleModalData {
  title: string;
  content: string;
}

export interface ExampleModalResult {
  result: string;
}

@Component({
  templateUrl: './example.modal.html',
})
export class ExampleModal {
  readonly directiveResolveValue: ExampleModalResult = {result: 'Resolved via directive!'};

  constructor(
    private readonly modalRef: ModalRef<ExampleModalResult>,
    @Inject(MODAL_DATA) readonly data: ExampleModalData
  ) {
  }

  onCustomResolve() {
    this.modalRef.resolve({result: 'Resolved via modalRef!'});
  }

}
