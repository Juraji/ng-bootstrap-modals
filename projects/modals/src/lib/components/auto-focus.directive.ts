import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

const AUTO_FOCUS_ELEMENTS_SELECTOR = [
  'a[href][ngbmodAutoFocus]',
  'button[ngbmodAutoFocus]:not([disabled])',
  'input[ngbmodAutoFocus]:not([disabled]):not([type=\'hidden\'])',
  'select[ngbmodAutoFocus]:not([disabled])',
  'textarea[ngbmodAutoFocus]:not([disabled])',
  '[contenteditable][ngbmodAutoFocus]',
  '[tabindex][ngbmodAutoFocus]:not([tabindex=\'-1\'])',
].join(',');

/**
 * When added to a control within your modal component, the modal host will make sure this control is active when the modal is rendered.
 */
@Directive({selector: AUTO_FOCUS_ELEMENTS_SELECTOR})
export class AutoFocusDirective implements OnInit {

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'tabindex', '1'
    );
  }
}
