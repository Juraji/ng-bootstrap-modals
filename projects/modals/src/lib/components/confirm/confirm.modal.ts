import {Component, Inject} from '@angular/core';

import {ConfirmModalData} from './confirm';
import {MODAL_DATA} from '../../util/modal-data';
import {ModalRefImpl} from '../../util/modal-ref-impl';

@Component({
  templateUrl: './confirm.modal.html'
})
export class ConfirmModal {
  constructor(
    private readonly modalRef: ModalRefImpl,
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
