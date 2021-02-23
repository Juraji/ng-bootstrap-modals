import {Directive, HostListener, Input} from '@angular/core';
import {ModalRef} from '../util/modal-ref';

@Directive({
  selector: '[ngbmodResolve]'
})
export class ResolveDirective {

  @Input()
  ngbmodResolve: any = null;

  constructor(private readonly modalRef: ModalRef) {
  }

  @HostListener('click')
  onHostClick() {
    this.modalRef.resolve(this.ngbmodResolve);
  }

}
