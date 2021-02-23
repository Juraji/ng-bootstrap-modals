import {Directive, HostListener} from '@angular/core';
import {ModalRefImpl} from '../util/modal-ref-impl';

@Directive({
  selector: '[ngbmodDismiss]'
})
export class DismissDirective {

  constructor(private readonly modalRef: ModalRefImpl) {
  }

  @HostListener('click')
  onHostClick() {
    this.modalRef.dismiss();
  }

}
