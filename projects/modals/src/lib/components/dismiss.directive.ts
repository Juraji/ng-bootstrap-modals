import {Directive, HostListener} from '@angular/core';
import {ModalRef} from '../util/modal-ref';

@Directive({
  selector: '[ngbmodDismiss]'
})
export class DismissDirective {

  constructor(private readonly modalRef: ModalRef) {
  }

  @HostListener('click')
  onHostClick() {
    this.modalRef.dismiss();
  }

}
