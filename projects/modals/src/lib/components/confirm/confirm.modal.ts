import {Component, Inject} from '@angular/core';

import {MODAL_DATA} from '../../util/modal-data';
import {ConfirmModalData} from './confirm';

@Component({
  templateUrl: './confirm.modal.html'
})
export class ConfirmModal {
  public constructor(
    @Inject(MODAL_DATA) public readonly confirmData: ConfirmModalData
  ) {
  }
}
