import {Directive, HostListener} from '@angular/core';

import {ModalRef} from '../util/modal-ref';

@Directive({
  selector: '[modalDismiss]'
})
export class DismissDirective {

  public constructor(private readonly modalRef: ModalRef) {
  }

  @HostListener('click')
  public onHostClick() {
    this.modalRef.dismiss();
  }

}
