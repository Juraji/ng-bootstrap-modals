import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: 'form[modalForm]'
})
export class ModalFormDirective implements OnInit {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
  }

  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'display',
      'contents'
    );
  }
}
