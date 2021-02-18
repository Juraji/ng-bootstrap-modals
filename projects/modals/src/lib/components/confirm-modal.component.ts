import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ConfirmModalData} from '../util/confirm';
import {MODAL_DATA} from '../util/modal-data';
import {ModalRef} from '../util/modal-ref';
import {flattenObject} from '../util/flatten-object';

@Component({
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent {
  public readonly extraOptionsFormGroupLabels: Record<string, string>;
  public readonly extraOptionsFormGroup: FormGroup;

  constructor(
    private readonly modalRef: ModalRef,
    private readonly fb: FormBuilder,
    @Inject(MODAL_DATA) public readonly confirmData: ConfirmModalData
  ) {
    const {labels, formGroup} = this.buildExtraOptionsForm();
    this.extraOptionsFormGroupLabels = labels;
    this.extraOptionsFormGroup = formGroup;
  }

  public confirm(e: Event): void {
    e.preventDefault();
    this.modalRef.resolve(this.extraOptionsFormGroup.value);
  }

  public cancel(): void {
    this.modalRef.dismiss();
  }

  private buildExtraOptionsForm(): { labels: Record<string, string>; formGroup: FormGroup } {
    const opts = this.confirmData.extraOptions;

    const labels = flattenObject(opts, v => v.label);
    const controls = flattenObject(opts, v => v.checked);
    const formGroup = this.fb.group(controls);

    return {labels, formGroup};
  }
}
