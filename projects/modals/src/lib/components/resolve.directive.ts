import {Directive, HostListener, Input} from '@angular/core';
import {ModalRefImpl} from '../util/modal-ref-impl';

@Directive({
  selector: '[ngbmodResolve]'
})
export class ResolveDirective {

  @Input()
  ngbmodResolve: any = null;

  constructor(private readonly modalRef: ModalRefImpl) {
  }

  @HostListener('click')
  onHostClick() {
    this.modalRef.resolve(this.ngbmodResolve);
  }

}
