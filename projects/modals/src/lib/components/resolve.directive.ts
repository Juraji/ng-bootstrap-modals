import {Directive, HostListener, Input} from '@angular/core';

import {ModalRef} from '../util/modal-ref';

@Directive({
  selector: '[modalResolve]'
})
export class ResolveDirective {

  @Input()
  public modalResolve: unknown = null;

  public constructor(private readonly modalRef: ModalRef) {
  }

  @HostListener('click')
  public onHostClick() {
    this.modalRef.resolve(this.modalResolve);
  }

}
