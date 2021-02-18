import {Component, Inject} from '@angular/core';

import {ConfirmModalData} from '../util/confirm';
import {MODAL_DATA} from '../util/modal-data';
import {ModalRef} from '../util/modal-ref';

@Component({
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent {
  constructor(
    private readonly modalRef: ModalRef,
    @Inject(MODAL_DATA) public readonly confirmData: ConfirmModalData
  ) {
  }

  public confirm(e: Event): void {
    e.preventDefault();
    this.modalRef.resolve('OK');
  }

  public cancel(): void {
    this.modalRef.dismiss();
  }
}
