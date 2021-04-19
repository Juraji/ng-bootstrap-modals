import {Directive, HostListener, Input} from '@angular/core';
import {ModalRef} from '../util/modal-ref';

@Directive({
  selector: '[modalResolve]'
})
export class ResolveDirective {

  @Input()
  modalResolve: any = null;

  constructor(private readonly modalRef: ModalRef) {
  }

  @HostListener('click')
  onHostClick() {
    this.modalRef.resolve(this.modalResolve);
  }

}
