import {Directive, HostListener} from '@angular/core';
import {ModalRef} from '../util/modal-ref';

@Directive({
  selector: '[modalDismiss]'
})
export class DismissDirective {

  constructor(private readonly modalRef: ModalRef) {
  }

  @HostListener('click')
  onHostClick() {
    this.modalRef.dismiss();
  }

}
