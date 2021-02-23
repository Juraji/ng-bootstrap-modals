import {Component, Inject} from '@angular/core';

import {ConfirmModalData} from './confirm';
import {MODAL_DATA} from '../../util/modal-data';

@Component({
  templateUrl: './confirm.modal.html'
})
export class ConfirmModal {
  constructor(
    @Inject(MODAL_DATA) public readonly confirmData: ConfirmModalData
  ) {
  }
}
